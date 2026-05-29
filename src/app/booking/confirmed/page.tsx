'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

function BookingConfirmedContent() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code') ?? 'MRD-2025-001'
  const { t } = useLanguage()
  const c = t.confirmedBooking

  return (
    <div className="max-w-xl mx-auto px-6 py-16 text-center">
      <CheckCircle size={40} className="text-champagne/70 mx-auto mb-6" strokeWidth={1} />

      <h1
        className="font-light text-warm-white mb-4"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em' }}
      >
        {c.headline}
      </h1>
      <p className="text-sm text-silver-light font-light leading-relaxed mb-10 max-w-sm mx-auto">
        {c.sub}
      </p>

      <div className="bg-carbon border border-silver/10 p-8 text-left mb-8">
        <div className="ea-label mb-5">{c.summaryLabel}</div>
        {[
          [c.keys.code, code],
          [c.keys.airport, 'EZE — Ezeiza Internacional'],
          [c.keys.status, c.statusValue],
          [c.keys.remaining, c.remainingValue],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between py-3 border-b border-silver/10 last:border-b-0 text-xs">
            <span className="text-silver-light font-light">{k}</span>
            <span className={k === c.keys.status ? 'text-green-400 font-light' : 'text-warm-white font-light'}>
              {v}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 justify-center">
        <Link href="/booking" className="btn-ea-primary active:opacity-70">
          {c.ctaNew}
        </Link>
        <Link href="/" className="btn-ea-ghost active:opacity-70">
          {c.ctaHome}
        </Link>
      </div>
    </div>
  )
}

export default function BookingConfirmedPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian pt-24 flex items-center">
        <Suspense fallback={
          <div className="max-w-xl mx-auto px-6 py-16 text-center">
            <div className="w-10 h-px bg-champagne/40 mx-auto" />
          </div>
        }>
          <BookingConfirmedContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
