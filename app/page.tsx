import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LeadForm } from '@/components/sections/LeadForm'
import { Zap, Rocket, Shield, Clock, Code2, Users, ArrowUpRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/button-variants'

const testimonials = [
  {
    name: 'Arjun Malhotra',
    role: 'Founder, EduSpark',
    review: 'MVPWay delivered our e-learning platform in under 5 weeks. Clean code, great communication, and they actually cared about our product succeeding.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'CEO, NovaBridge',
    review: 'I was skeptical about getting a quality MVP so fast. MVPWay proved me wrong — our B2B SaaS went live in a month and investors were impressed.',
    rating: 5,
  },
  {
    name: 'Rohan Desai',
    role: 'Co-Founder, FinFlip',
    review: 'Kunal and Maneesh are the kind of technical partners every non-technical founder needs. They translated our idea into a real product effortlessly.',
    rating: 5,
  },
  {
    name: 'Tanvi Nair',
    role: 'Product Lead, Stackly',
    review: 'We had a tight deadline before our pitch. MVPWay hit every milestone and we walked in with a fully working demo. We closed the round.',
    rating: 5,
  },
  {
    name: 'James Okafor',
    role: 'Founder, TrackMate',
    review: 'Three agencies quoted 4 months. MVPWay delivered in 6 weeks at half the price. The quality was better than what the others even promised.',
    rating: 5,
  },
  {
    name: 'Meera Pillai',
    role: 'CTO, Launchpad Labs',
    review: 'As a technical person, I was impressed by the architecture decisions. No shortcuts, no tech debt — just solid, scalable code from day one.',
    rating: 5,
  },
]

const works = [
  {
    name: 'AuraAI',
    slug: 'auraai',
    url: 'https://auraai.mvpway.agency',
    description: 'An AI-powered personal assistant platform built for modern productivity workflows.',
    tags: ['AI', 'SaaS'],
  },
  {
    name: 'Carpool',
    slug: 'carpool',
    url: 'https://carpool.mvpway.agency',
    description: 'Smart carpooling app connecting commuters for shared, cost-effective daily rides.',
    tags: ['Mobile', 'Marketplace'],
  },
  {
    name: 'Drveenoo',
    slug: 'drveenoo',
    url: 'https://drveenoo.mvpway.agency',
    description: 'Digital health platform connecting patients with doctors for seamless virtual consultations.',
    tags: ['HealthTech', 'Web App'],
  },
  {
    name: 'JobSenseAI',
    slug: 'jobsenseai',
    url: 'https://jobsenseai.mvpway.agency',
    description: 'AI-driven job matching platform that surfaces the right opportunities based on skills and intent.',
    tags: ['AI', 'HRTech'],
  },
  {
    name: 'Kira',
    slug: 'kira',
    url: 'https://kira.mvpway.agency',
    description: 'Conversational AI assistant that helps teams automate support and internal knowledge retrieval.',
    tags: ['AI', 'B2B'],
  },
  {
    name: 'Rishtey',
    slug: 'rishtey',
    url: 'https://rishtey.mvpway.agency',
    description: 'Modern matchmaking platform blending tradition with technology for meaningful connections.',
    tags: ['Social', 'Web App'],
  },
  {
    name: 'Spa',
    slug: 'spa',
    url: 'https://spa.mvpway.agency',
    description: 'Booking and management platform for spas and wellness centres to streamline appointments.',
    tags: ['Wellness', 'SaaS'],
  },
]

const features = [
  {
    icon: Rocket,
    title: 'Ship in Weeks, Not Months',
    description: 'We use modern tech stacks and proven processes to get your MVP live faster than traditional agencies.',
  },
  {
    icon: Code2,
    title: 'Production-Ready Code',
    description: 'No shortcuts. We build clean, scalable, maintainable code from day one.',
  },
  {
    icon: Shield,
    title: 'AI-First Development',
    description: 'Every product we build is optimized for AI integrations, search visibility, and modern user expectations.',
  },
  {
    icon: Clock,
    title: 'Transparent Timeline',
    description: 'Weekly updates, clear milestones, and no surprises. You always know where your project stands.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Work directly with founders who care about your product as much as you do.',
  },
  {
    icon: Zap,
    title: 'Fast Iterations',
    description: 'Rapid feedback cycles mean you can pivot quickly based on real user data.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">MVP Development Agency</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            From Idea to{' '}
            <span className="text-primary">Live Product</span>
            <br />in Record Time
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            MVPWay helps startups and businesses build production-ready MVPs fast.
            Modern tech, AI-first thinking, and a team that ships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }))}>
              Start Your MVP
            </Link>
            <Link href="/services" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
              See What We Build
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose MVPWay?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We combine technical expertise with startup speed to deliver products that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Products We&apos;ve Shipped</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real MVPs. Real founders. Shipped fast.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {works.map((work) => (
              <a key={work.slug} href={work.url} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="group hover:shadow-md transition-shadow h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{work.name}</CardTitle>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-xs text-muted-foreground">{work.url.replace('https://', '')}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Founders who trusted us to build their vision — in their own words.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-0 shadow-sm flex flex-col">
                <CardContent className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Lead Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Build Your MVP?</h2>
              <p className="text-muted-foreground mb-6">
                Share your idea with us. We&apos;ll review it and get back to you with a plan within 24 hours.
              </p>
              <ul className="space-y-3 text-sm">
                {['Free initial consultation', 'Detailed project roadmap', 'Fixed-price engagements', 'No lock-in contracts'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
