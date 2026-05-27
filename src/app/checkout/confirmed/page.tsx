'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

export default function CheckoutConfirmedPage() {
  const searchParams = useSearchParams()
  const memberCode = searchParams.get('code') ?? 'MRD-F-023'
  const { t } = useLanguage()
  const c = t.confirmedCheckout

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian pt-24 flex items-center">
        <div className="max-w-xl mx-auto px-6 py-16 text-center">

          <CheckCircle size={40} className="text-champagne/70 mx-auto mb-6" strokeWidth={1} />

          <h1
            className="font-light text-warm-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em' }}
          >
            {c.headline1}<br />
            <span className="text-champagne/80 italic">{c.headline2}</span>
          </h1>
          <p className="text-sm text-silver-mid font-light leading-relaxed mb-10 max-w-sm mx-auto">
            {c.sub}
          </p>

          <div className="bg-carbon border border-silver/10 p-8 text-left mb-8">
            <div className="ea-label mb-5">{c.summaryLabel}</div>
            {[
              [c.keys.code, memberCode],
              [c.keys.type, c.typeValue],
              [c.keys.experiences, c.experiencesValue],
              [c.keys.expiration, c.expirationValue],
              [c.keys.transferable, c.transferableValue],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-3 border-b border-silver/10 last:border-b-0 text-xs">
                <span className="text-silver font-light">{k}</span>
                <span className="text-warm-white font-light">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <Link href="/booking" className="btn-ea-primary active:opacity-70">
              {c.ctaBook}
            </Link>
            <Link href="/" className="btn-ea-ghost active:opacity-70">
              {c.ctaHome}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
