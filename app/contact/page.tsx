import type { Metadata } from 'next'
import { LeadForm } from '@/components/sections/LeadForm'
import { Badge } from '@/components/ui/badge'
import { Mail, MessageSquare, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with MVPWay. Start your MVP project today.',
}

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 border border-amber-500/30 bg-amber-500/10 text-amber-400">Get In Touch</Badge>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Build Something Together</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Share your idea and we&apos;ll respond with a plan within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-medium">Email Us</h3>
                <p className="text-sm text-muted-foreground">hello@mvpway.agency</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-medium">Response Time</h3>
                <p className="text-sm text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageSquare className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-medium">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">First call is always free</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
