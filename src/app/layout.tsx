import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'BA Vita Luxury Transfer — Hospitalidad Ejecutiva en Buenos Aires',
  description: 'Hospitalidad ejecutiva terrestre para ejecutivos, corporaciones y experiencias VIP en Buenos Aires. Recepción personalizada, hospitalidad premium y protocolo concierge.',
  keywords: [
    'hospitalidad ejecutiva Buenos Aires',
    'remis ejecutivo aeropuerto',
    'VIP transfer Buenos Aires',
    'concierge aeropuerto EZE',
    'membresía ejecutiva Argentina',
    'corporate hospitality Buenos Aires',
  ],
  authors: [{ name: 'BA Vita Luxury Transfer' }],
  creator: 'BA Vita Luxury Transfer',
  publisher: 'BA Vita Luxury Transfer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'BA Vita Luxury Transfer — Tu llegada, comienza aquí.',
    description: 'Hospitalidad ejecutiva terrestre para ejecutivos, corporaciones y experiencias VIP en Buenos Aires. Recepción OLED personalizada, hospitalidad premium, protocolo concierge.',
    siteName: 'BA Vita Luxury Transfer',
    locale: 'es_AR',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BA Vita Luxury Transfer — Tu llegada, comienza aquí.',
    description: 'Hospitalidad ejecutiva terrestre para ejecutivos y corporaciones en Buenos Aires. Membresía Founders disponible.',
    creator: '@bavitaluxury',
    site: '@bavitaluxury',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
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
        <LenisProvider>
          <LanguageProvider>
            <ScrollProgress />
            {children}
          </LanguageProvider>
        </LenisProvider>
      </body>
    </html>
  )
}
