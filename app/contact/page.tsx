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
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Build Something Together</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Share your idea and we&apos;ll respond with a plan within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Email Us</h3>
                <p className="text-sm text-muted-foreground">hello@mvpway.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Response Time</h3>
                <p className="text-sm text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Free Consultation</h3>
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
