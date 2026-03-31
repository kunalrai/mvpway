import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/lib/button-variants'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Rocket, Globe, Smartphone, Brain, Database, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services',
  description: 'MVPWay services - Web apps, mobile apps, AI integrations, and full-stack MVP development.',
}

const services = [
  {
    icon: Globe,
    title: 'Web Application MVP',
    description: 'Full-stack web apps built with Next.js, React, and modern APIs. SEO-ready, fast, and scalable.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App MVP',
    description: 'Cross-platform mobile apps with React Native. One codebase, iOS and Android.',
    tags: ['React Native', 'Expo', 'Firebase'],
  },
  {
    icon: Brain,
    title: 'AI-Powered Products',
    description: 'Integrate LLMs, RAG pipelines, and AI features into your product from day one.',
    tags: ['OpenAI', 'Claude API', 'LangChain'],
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Robust REST and GraphQL APIs, database design, and infrastructure setup.',
    tags: ['Node.js', 'Prisma', 'Supabase'],
  },
  {
    icon: Rocket,
    title: 'Launch & Growth Setup',
    description: 'Analytics, SEO, error tracking, and deployment pipelines so you can grow from day one.',
    tags: ['Vercel', 'Analytics', 'SEO'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">What We Build</Badge>
          <h1 className="text-4xl font-bold mb-6">Services Built for Speed</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From idea validation to production launch — we cover the full stack of MVP development.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let&apos;s talk about your project. We respond within 24 hours.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }))}>
            Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
