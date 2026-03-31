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
  keywords: ['MVP development', 'startup', 'rapid development', 'web development', 'product launch'],
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
              description: 'Rapid MVP development company',
              founders: [
                { '@type': 'Person', name: 'Kunal Rai', jobTitle: 'Founder' },
                { '@type': 'Person', name: 'Maneesh Kumar', jobTitle: 'Co-Founder' },
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
