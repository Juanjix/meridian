import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

export const metadata: Metadata = {
  metadataBase: new URL('https://millenniumtravel.com.ar'),
  title: 'Millennium Travel — Hospitalidad Ejecutiva en Buenos Aires',
  description: 'Hospitalidad ejecutiva terrestre para ejecutivos, corporaciones y experiencias VIP en Buenos Aires. Recepción personalizada, hospitalidad premium y protocolo concierge.',
  keywords: [
    'hospitalidad ejecutiva Buenos Aires',
    'remis ejecutivo aeropuerto',
    'VIP transfer Buenos Aires',
    'concierge aeropuerto EZE',
    'membresía ejecutiva Argentina',
    'corporate hospitality Buenos Aires',
  ],
  authors: [{ name: 'Millennium Travel' }],
  creator: 'Millennium Travel',
  publisher: 'Millennium Travel',
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
    title: 'Millennium Travel — Tu llegada, comienza aquí.',
    description: 'Hospitalidad ejecutiva terrestre para ejecutivos, corporaciones y experiencias VIP en Buenos Aires. Recepción OLED personalizada, hospitalidad premium, protocolo concierge.',
    siteName: 'Millennium Travel',
    locale: 'es_AR',
    type: 'website',
    url: 'https://millenniumtravel.com.ar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Millennium Travel — Tu llegada, comienza aquí.',
    description: 'Hospitalidad ejecutiva terrestre para ejecutivos y corporaciones en Buenos Aires. Membresía Founders disponible.',
    creator: '@millenniumtravel',
    site: '@millenniumtravel',
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
