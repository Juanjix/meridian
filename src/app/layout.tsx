import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  title: 'Executive Arrival — Executive Ground Hospitality',
  description: 'Executive ground hospitality designed for premium corporate and VIP experiences. Buenos Aires.',
  openGraph: {
    title: 'Executive Arrival — Executive Ground Hospitality',
    description: 'Your Arrival, Handled.',
    siteName: 'Executive Arrival',
    locale: 'en_US',
    type: 'website',
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
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="antialiased bg-obsidian">
        <LanguageProvider>
          <ScrollProgress />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
