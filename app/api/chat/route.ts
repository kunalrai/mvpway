import { getOpenRouterClient, SYSTEM_PROMPT } from '@/lib/openrouter'
import { prisma } from '@/lib/db'
import { NextRequest } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const { messages, sessionId } = await request.json()

    if (!process.env.OPENROUTER_API_KEY) {
      return new Response(JSON.stringify({ error: 'Chat not configured' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Get or create session
    let session = sessionId
      ? await prisma.chatSession.findUnique({ where: { id: sessionId } })
      : null

    if (!session) {
      session = await prisma.chatSession.create({ data: {} })
    }

    // Save the latest user message
    const lastUserMessage = messages[messages.length - 1]
    if (lastUserMessage?.role === 'user') {
      await prisma.chatMessage.create({
        data: {
          sessionId: session.id,
          role: 'user',
          content: lastUserMessage.content,
        },
      })
    }

    const stream = await getOpenRouterClient().chat.completions.create({
      model: process.env.OPENROUTER_MODEL || 'google/gemini-flash-1.5',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      stream: true,
      max_tokens: 500,
    })

    const encoder = new TextEncoder()
    let fullResponse = ''

    const readable = new ReadableStream({
      async start(controller) {
        // Send sessionId as first chunk so client can store it
        controller.enqueue(encoder.encode(`__SESSION__${session!.id}__SESSION__`))

        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || ''
          if (text) {
            fullResponse += text
            controller.enqueue(encoder.encode(text))
          }
        }
        controller.close()

        // Save assistant response after streaming completes
        if (fullResponse) {
          await prisma.chatMessage.create({
            data: {
              sessionId: session!.id,
              role: 'assistant',
              content: fullResponse,
            },
          }).catch(console.error)
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    })
  } catch (error) {
    console.error('Chat error:', error)
    return new Response(JSON.stringify({ error: 'Failed to get response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
