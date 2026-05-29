'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import {
  FOUNDERS_AVAILABLE,
  FOUNDERS_TOTAL,
  MEMBERSHIP_PRICE_USD,
  EXPERIENCES_PER_MEMBERSHIP,
} from '@/lib/utils'

export default function MembershipPage() {
  const { t } = useLanguage()
  const m = t.membershipPage

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">

          {/* Header */}
          <div className="max-w-xl mb-16">
            <div className="ea-label mb-5">{m.eyebrow}</div>
            <h1
              className="font-light text-warm-white leading-[0.93] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
            >
              {m.headline1}<br />
              <span className="text-silver-light">{m.headline2}</span>
            </h1>
            <div className="w-10 h-px bg-champagne/40" />
            <p className="mt-6 text-sm text-silver-light font-light leading-relaxed">
              {t.founders.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Membership card */}
            <div className="lg:col-span-3 bg-carbon border border-silver/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-champagne/10" />

              {/* Card header */}
              <div className="p-6 md:p-8 border-b border-silver/10">
                <div className="text-2xs tracking-[0.22em] uppercase text-champagne/50 mb-4">
                  {m.cardBadge}
                </div>
                <div className="text-lg tracking-[0.1em] uppercase text-warm-white font-light mb-1">
                  {m.cardTitle}
                </div>
                <div className="text-2xs tracking-widest uppercase text-silver-light mb-6">
                  {m.cardSub}
                </div>
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-light text-warm-white"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
                  >
                    USD {MEMBERSHIP_PRICE_USD.toLocaleString()}
                  </span>
                  <span className="text-xs text-silver-light font-light">
                    {m.priceNote(EXPERIENCES_PER_MEMBERSHIP)}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-5">
                  {m.features.map((f, i) => (
                    <div key={i} className="flex gap-4">
                      <Check
                        size={13}
                        className="text-champagne/70 mt-0.5 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <div className="text-sm text-warm-white font-light">{f.title(EXPERIENCES_PER_MEMBERSHIP)}</div>
                        <div className="text-2xs text-silver-light mt-0.5 font-light">{f.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability bar */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="border-t border-silver/10 pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xs text-silver-light tracking-wider uppercase">{m.availability}</span>
                    <span className="text-2xs text-silver-light">
                      {m.availabilityCount(FOUNDERS_AVAILABLE, FOUNDERS_TOTAL)}
                    </span>
                  </div>
                  <div className="h-px bg-silver/10 relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-champagne/60"
                      style={{
                        width: `${((FOUNDERS_TOTAL - FOUNDERS_AVAILABLE) / FOUNDERS_TOTAL) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="bg-carbon border border-silver/10 p-7">
                <div className="text-sm font-light text-warm-white mb-1">
                  {m.sidebarTitle}
                </div>
                <div className="text-xs text-silver-light font-light leading-relaxed mb-7">
                  {m.sidebarDesc}
                </div>
                <Link href="/checkout" className="btn-ea-primary w-full justify-center mb-3 active:opacity-70">
                  {m.ctaAcquire}
                </Link>
                <a
                  href="https://wa.me/5491156098220"
                  className="btn-ea-ghost w-full justify-center text-[11px] active:opacity-70"
                >
                  {m.ctaWhatsapp}
                </a>
              </div>

              <div className="bg-carbon border border-silver/10 p-7">
                <div className="flex flex-col gap-4">
                  {m.guarantees.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-champagne/50 text-xs mt-0.5 flex-shrink-0">—</span>
                      <span className="text-2xs text-silver-light font-light leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-champagne/15 p-7 text-center">
                <div
                  className="font-light text-champagne/80 leading-relaxed"
                  style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', letterSpacing: '-0.01em' }}
                >
                  {m.quote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
