import Link from 'next/link'
import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl mb-3">
              <Zap className="h-5 w-5 text-amber-400" />
              MVPWay
            </Link>
            <p className="text-sm text-muted-foreground">
              We help startups and businesses ship production-ready MVPs in record time.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@mvpway.agency" className="hover:text-amber-400 transition-colors">
                  hello@mvpway.agency
                </a>
              </li>
              <li>Built with speed. Shipped with confidence.</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MVPWay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
