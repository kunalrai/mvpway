'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LeadForm } from '@/components/sections/LeadForm'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Zap, Rocket, Shield, Clock, Code2, Users, ArrowUpRight, Star, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/button-variants'

const features = [
  { icon: Rocket, title: 'Ship in Weeks, Not Months', description: 'Modern tech stacks and proven processes get your MVP live faster than any traditional agency.' },
  { icon: Code2, title: 'Production-Ready Code', description: 'No shortcuts. Clean, scalable, maintainable code from day one.' },
  { icon: Shield, title: 'AI-First Development', description: 'Every product is optimized for AI integrations, search visibility, and modern user expectations.' },
  { icon: Clock, title: 'Transparent Timeline', description: 'Weekly updates, clear milestones, no surprises. You always know where your project stands.' },
  { icon: Users, title: 'Dedicated Founders', description: 'Work directly with founders who care about your product as much as you do.' },
  { icon: Zap, title: 'Fast Iterations', description: 'Rapid feedback cycles mean you can pivot quickly based on real user data.' },
]

const works = [
  { name: 'AuraAI', slug: 'auraai', url: 'https://auraai.mvpway.agency', description: 'AI-powered personal assistant for modern productivity workflows.', tags: ['AI', 'SaaS'] },
  { name: 'Carpool', slug: 'carpool', url: 'https://carpool.mvpway.agency', description: 'Smart carpooling app connecting commuters for cost-effective rides.', tags: ['Mobile', 'Marketplace'] },
  { name: 'Drveenoo', slug: 'drveenoo', url: 'https://drveenoo.mvpway.agency', description: 'Digital health platform for seamless virtual doctor consultations.', tags: ['HealthTech', 'Web App'] },
  { name: 'JobSenseAI', slug: 'jobsenseai', url: 'https://jobsenseai.mvpway.agency', description: 'AI-driven job matching that surfaces the right opportunities.', tags: ['AI', 'HRTech'] },
  { name: 'Kira', slug: 'kira', url: 'https://kira.mvpway.agency', description: 'Conversational AI for team support and knowledge automation.', tags: ['AI', 'B2B'] },
  { name: 'Rishtey', slug: 'rishtey', url: 'https://rishtey.mvpway.agency', description: 'Modern matchmaking platform blending tradition with technology.', tags: ['Social', 'Web App'] },
  { name: 'Spa', slug: 'spa', url: 'https://spa.mvpway.agency', description: 'Booking and management platform for spas and wellness centres.', tags: ['Wellness', 'SaaS'] },
]

const testimonials = [
  { name: 'Ramesh Yadav', role: 'Founder, KisanTech', review: 'MVPWay ne hamare agri-platform ko 4 hafte mein live kar diya. Code quality ekdum production-ready thi — koi rewrite nahi hua.', rating: 5 },
  { name: 'Priya Murmu', role: 'CEO, VanDhan', review: 'Being a first-generation entrepreneur from a tribal background, I needed a team that believed in my vision. MVPWay delivered beyond expectations.', rating: 5 },
  { name: 'Rajkumar Paswan', role: 'Co-Founder, SkilEdge', review: 'I had a limited budget and a big dream. MVPWay helped me launch a skilling platform now used by thousands of youth in Bihar and UP.', rating: 5 },
  { name: 'Sunita Kurmi', role: 'Founder, GrameenCart', review: 'Our rural e-commerce idea seemed too niche. MVPWay understood our users, built fast, and the platform is thriving.', rating: 5 },
  { name: 'Dinesh Meghwal', role: 'Product Lead, CraftLink', review: 'MVPWay connected our artisan community to digital commerce in just 5 weeks. They treated our mission with real respect.', rating: 5 },
  { name: 'Jyoti Hembram', role: 'Co-Founder, TribeHeal', review: 'Building a health platform for tribal communities is no small task. MVPWay got it right — culturally aware design and rock-solid backend.', rating: 5 },
]

const stats = [
  { value: '7+', label: 'Products Shipped' },
  { value: '4 wks', label: 'Avg. Delivery' },
  { value: '100%', label: 'On-Time Rate' },
  { value: '5★', label: 'Client Rating' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* Amber glow blob */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs tracking-widest uppercase border border-amber-500/30 bg-amber-500/10 text-amber-400">
                MVP Development Agency
              </Badge>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              From Idea to{' '}
              <span className="text-gradient">Live Product</span>
              <br />in Record Time
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MVPWay builds production-ready MVPs in weeks. Modern tech, AI-first thinking, a team that ships.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/contact" className={cn(buttonVariants({ size: 'lg' }), 'bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8')}>
                Start Your MVP <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/services" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'border-white/20 hover:border-amber-500/50 hover:bg-amber-500/5 px-8')}>
                See What We Build
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 bg-border rounded-xl overflow-hidden border border-white/5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-5 text-center">
                <div className="font-display text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Why Choose MVPWay?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Technical expertise meets startup speed.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group p-6 rounded-xl border border-border bg-card hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Products We&apos;ve Shipped</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real MVPs. Real founders. Shipped fast.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {works.map((work) => (
              <StaggerItem key={work.slug}>
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="group h-full p-6 rounded-xl border border-border bg-card hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display font-semibold">{work.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{work.url.replace('https://', '')}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-amber-400 transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-amber-500/20 text-amber-400/80 bg-amber-500/5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Founders who trusted us to build their vision.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="h-full p-6 rounded-xl border border-border bg-card flex flex-col gap-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-amber-400">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA with Lead Form */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Ready to Build Your MVP?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Share your idea. We&apos;ll review it and get back to you with a plan within 24 hours.
              </p>
              <ul className="space-y-4">
                {['Free initial consultation', 'Detailed project roadmap', 'Fixed-price engagements', 'No lock-in contracts'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-3 w-3 text-amber-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <LeadForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
