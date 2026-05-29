'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, fadeInBlur, staggerContainer, staggerFast, staggerEditorial, lineReveal, EASE_CINEMA } from '@/lib/animations'
import { FOUNDERS_AVAILABLE } from '@/lib/utils'

export function FoundersMembershipSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section ref={ref} className="bg-obsidian overflow-hidden noise-overlay">

      {/* ── Private club header ──────────────────────────────────────────── */}
      <div className="border-b border-silver/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">

          {/* Label */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="ea-label mb-6 md:mb-8"
          >
            {t.founders.label}
          </motion.div>

          {/* Private club eyebrow */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="ea-label mb-12 md:mb-16" style={{ color: 'rgba(196,186,176,0.70)' }}
          >
            {t.founders.eyebrow}
          </motion.div>

          {/* Monumental headline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {[t.founders.headline1, t.founders.headline2].map((line, i) => (
              <div key={i} style={{ overflow: 'hidden', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
                <motion.p
                  variants={{
                    hidden: { y: '115%', opacity: 0 },
                    visible: {
                      y: '0%',
                      opacity: i === 1 ? 0.48 : 1,
                      transition: { duration: 1.1, ease: EASE_CINEMA, delay: i * 0.1 },
                    },
                  }}
                  className="font-light text-warm-white"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.045em', lineHeight: 0.95 }}
                >
                  {line}
                </motion.p>
              </div>
            ))}

            <motion.div
              variants={lineReveal}
              className="h-px bg-champagne/30 mt-10 md:mt-12 origin-left"
              style={{ width: '3.5rem' }}
            />

            <motion.p
              variants={fadeInBlur}
              className="text-silver-light font-light text-base md:text-lg leading-relaxed mt-8 max-w-lg"
            >
              {t.founders.sub}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ── Benefits grid ────────────────────────────────────────────────── */}
      <motion.div
        variants={staggerEditorial}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-silver/8 border-b border-silver/8"
      >
        {t.founders.features.map((feature, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`
              p-8 md:p-10 bg-obsidian group
              hover:bg-graphite transition-colors duration-600
              ${i < 3 ? 'lg:border-r border-silver/8' : ''}
            `}
          >
            <div className="text-[9px] tracking-[0.22em] uppercase text-champagne/40 mb-5 font-light group-hover:text-champagne/65 transition-colors duration-400">
              0{i + 1}
            </div>
            <p className="text-warm-white font-light text-sm leading-relaxed">
              {feature}
            </p>
          </motion.div>
        ))}

        {/* Price card — spans remaining space */}
        <motion.div
          variants={fadeInBlur}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="p-8 md:p-10 bg-carbon flex flex-col justify-between min-h-[140px] sm:col-span-2 lg:col-span-1"
        >
          <div className="text-[9px] tracking-[0.22em] uppercase text-champagne/45 mb-4 font-light">
            Investment
          </div>
          <div>
            <div
              className="font-light text-warm-white leading-none mb-2"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em' }}
            >
              {t.founders.price}
            </div>
            <div className="text-xs text-silver-light font-light leading-relaxed">
              {t.founders.priceNote}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Availability + CTA ───────────────────────────────────────────── */}
      <motion.div
        variants={fadeInBlur}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8"
      >
        <div className="flex flex-col gap-1.5">
          <div className="text-2xs tracking-[0.18em] uppercase font-light" style={{ color: '#9A9A9A' }}>
            {t.founders.limited}
          </div>
          <div className="text-sm text-silver-light font-light">
            {t.founders.availabilityNote(FOUNDERS_AVAILABLE)}
          </div>
        </div>

        <Link href="/membership" className="btn-ea-primary px-12 py-4 w-full md:w-auto text-center active:opacity-70">
          {t.founders.cta}
        </Link>
      </motion.div>
    </section>
  )
}
