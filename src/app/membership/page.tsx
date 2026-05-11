import Link from 'next/link'
import { Check } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import {
  FOUNDERS_AVAILABLE,
  FOUNDERS_TOTAL,
  MEMBERSHIP_PRICE_USD,
  EXPERIENCES_PER_MEMBERSHIP,
} from '@/lib/utils'

const features = [
  {
    title: `${EXPERIENCES_PER_MEMBERSHIP} executive airport experiences`,
    sub: 'EZE · AEP · Arrivals & departures · No expiration',
  },
  {
    title: 'Personalized OLED reception sign',
    sub: "Passenger's name displayed at every experience",
  },
  {
    title: 'Premium on-board hospitality',
    sub: 'Champagne, mineral water, curated snacks. Customizable per experience.',
  },
  {
    title: '100% transferable, no restrictions',
    sub: 'Executives, partners, clients, family, artists, guests',
  },
  {
    title: 'Absolute reservation priority',
    sub: 'Guaranteed confirmation with 2-hour advance notice',
  },
  {
    title: 'Direct concierge attention',
    sub: 'Executive WhatsApp · No bots · No wait',
  },
  {
    title: 'Hotel partner network access',
    sub: 'Direct coordination with hotel reception',
  },
]

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">

          {/* Header */}
          <div className="max-w-xl mb-16">
            <div className="ea-label text-silver/60 mb-5">Founders Edition · Limited</div>
            <h1
              className="font-light text-warm-white leading-[0.93] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
            >
              Executive Airport<br />
              <span className="text-silver-light">Experience</span>
            </h1>
            <div className="w-10 h-px bg-champagne/40" />
            <p className="mt-6 text-sm text-silver-mid font-light leading-relaxed">
              A membership designed for those whose time is worth more than money.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Membership card */}
            <div className="lg:col-span-3 bg-carbon border border-silver/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 border-t border-r border-champagne/10" />

              {/* Card header */}
              <div className="p-8 border-b border-silver/10">
                <div className="text-2xs tracking-[0.22em] uppercase text-champagne/50 mb-4">
                  Executive Arrival
                </div>
                <div className="text-lg tracking-[0.1em] uppercase text-warm-white font-light mb-1">
                  Founder Member
                </div>
                <div className="text-2xs tracking-widest uppercase text-silver/40 mb-6">
                  Executive Airport Experience · Founders Edition
                </div>
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-light text-warm-white"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.03em' }}
                  >
                    USD {MEMBERSHIP_PRICE_USD.toLocaleString()}
                  </span>
                  <span className="text-xs text-silver font-light">
                    one-time · {EXPERIENCES_PER_MEMBERSHIP} experiences included
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <div className="flex flex-col gap-5">
                  {features.map((f) => (
                    <div key={f.title} className="flex gap-4">
                      <Check
                        size={13}
                        className="text-champagne/70 mt-0.5 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <div className="text-sm text-warm-white font-light">{f.title}</div>
                        <div className="text-2xs text-silver/50 mt-0.5 font-light">{f.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability bar */}
              <div className="px-8 pb-8">
                <div className="border-t border-silver/10 pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xs text-silver/50 tracking-wider uppercase">Availability</span>
                    <span className="text-2xs text-silver-light">
                      {FOUNDERS_AVAILABLE} of {FOUNDERS_TOTAL} remaining
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
                  Acquire your founders membership
                </div>
                <div className="text-xs text-silver-mid font-light leading-relaxed mb-7">
                  Complete the purchase form. We accept Mercado Pago,
                  international card (Stripe), and bank transfer.
                </div>
                <Link href="/checkout" className="btn-ea-primary w-full justify-center mb-3">
                  Acquire Membership
                </Link>
                <a
                  href="https://wa.me/5491100000000"
                  className="btn-ea-ghost w-full justify-center text-[11px]"
                >
                  Inquire via WhatsApp
                </a>
              </div>

              <div className="bg-carbon border border-silver/10 p-7">
                <div className="flex flex-col gap-4">
                  {[
                    'No contracts or automatic renewals',
                    'Experiences have no expiration date',
                    'Transferable to anyone, no restrictions',
                    'Direct concierge support via WhatsApp',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-champagne/50 text-xs mt-0.5 flex-shrink-0">—</span>
                      <span className="text-2xs text-silver font-light leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-champagne/15 p-7 text-center">
                <div
                  className="font-light text-champagne/80 leading-relaxed"
                  style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', letterSpacing: '-0.01em' }}
                >
                  "The journey begins before entering the vehicle."
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
