import type { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the MVPWay team - Kunal Rai (Founder) and Maneesh Kumar (Co-Founder). We build MVPs fast.',
}

const team = [
  {
    name: 'Kunal Rai',
    role: 'Founder',
    bio: 'Kunal is a serial builder with a passion for shipping products fast. He founded MVPWay to help other entrepreneurs move from idea to launch without the usual delays.',
    skills: ['Product Strategy', 'Full-Stack Dev', 'Startup Scaling'],
  },
  {
    name: 'Maneesh Kumar',
    role: 'Co-Founder',
    bio: 'Maneesh brings deep technical expertise and a product-first mindset. He ensures every MVP we ship is built on a solid, scalable foundation.',
    skills: ['System Architecture', 'Backend Development', 'AI Integration'],
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 border border-amber-500/30 bg-amber-500/10 text-amber-400">Our Story</Badge>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-6">We Build MVPs That Ship</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MVPWay was born from the frustration of watching great ideas die in development.
            We believe the fastest path from idea to insight is a well-built MVP — and we make that happen.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden border-border bg-card hover:border-amber-500/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-amber-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{member.name}</h3>
                  <p className="text-amber-400 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="border border-amber-500/20 bg-amber-500/5 text-amber-400/80">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-muted-foreground text-lg">
            To eliminate the gap between great ideas and great products. Every startup deserves a
            technical partner that ships fast, builds right, and cares about the outcome.
          </p>
        </div>
      </section>
    </>
  )
}
