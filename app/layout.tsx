import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChatWidget } from '@/components/sections/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'MVPWay - Build Your MVP Fast',
    template: '%s | MVPWay',
  },
  description: 'MVPWay helps startups and businesses build production-ready MVPs in record time. From idea to launch, we ship fast.',
  keywords: ['MVP development', 'startup', 'rapid development', 'web development', 'product launch', 'AI development', 'React', 'Next.js'],
  authors: [{ name: 'MVPWay' }],
  creator: 'MVPWay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'MVPWay - Build Your MVP Fast',
    description: 'MVPWay helps startups and businesses build production-ready MVPs in record time.',
    siteName: 'MVPWay',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVPWay - Build Your MVP Fast',
    description: 'MVPWay helps startups and businesses build production-ready MVPs in record time.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MVPWay',
              url: 'https://mvpway.com',
              email: 'hello@mvpway.com',
              description: 'MVPWay is a rapid MVP development agency that helps startups build production-ready products in weeks, not months.',
              founders: [
                { '@type': 'Person', name: 'Kunal Rai', jobTitle: 'Founder' },
                { '@type': 'Person', name: 'Maneesh Kumar', jobTitle: 'Co-Founder' },
              ],
              sameAs: [
                'https://github.com/kunalrai/mvpway',
              ],
              knowsAbout: [
                'MVP Development', 'Next.js', 'React', 'TypeScript',
                'AI Integration', 'Mobile App Development', 'SaaS', 'Startup Products',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How fast can MVPWay build an MVP?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Most MVPs are delivered in 2 to 6 weeks depending on the complexity of the product.' },
                },
                {
                  '@type': 'Question',
                  name: 'What tech stack does MVPWay use?',
                  acceptedAnswer: { '@type': 'Answer', text: 'We primarily use Next.js, React, TypeScript, Node.js, Prisma, PostgreSQL, and Vercel. For AI products we use OpenAI, Claude API, and LangChain.' },
                },
                {
                  '@type': 'Question',
                  name: 'Does MVPWay build mobile apps?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build cross-platform mobile apps using React Native and Expo for both iOS and Android.' },
                },
                {
                  '@type': 'Question',
                  name: 'How much does an MVP cost?',
                  acceptedAnswer: { '@type': 'Answer', text: 'We offer fixed-price engagements with no lock-in contracts. Pricing depends on scope. Contact us at hello@mvpway.com for a free consultation.' },
                },
                {
                  '@type': 'Question',
                  name: 'Is the first consultation free?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes. The first call is always free with no obligation.' },
                },
                {
                  '@type': 'Question',
                  name: 'Who founded MVPWay?',
                  acceptedAnswer: { '@type': 'Answer', text: 'MVPWay was founded by Kunal Rai (Founder) and Maneesh Kumar (Co-Founder).' },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
