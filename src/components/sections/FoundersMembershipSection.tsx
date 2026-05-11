'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, fadeInBlur, staggerContainer, staggerFast, lineReveal } from '@/lib/animations'
import { FOUNDERS_AVAILABLE } from '@/lib/utils'

export function FoundersMembershipSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-obsidian py-40 md:py-56 overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="ea-label text-silver/55 mb-20"
        >
          {t.founders.label}
        </motion.div>

        {/* Monumental centered headline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-24"
        >
          <motion.h2
            variants={fadeUp}
            className="font-light text-warm-white leading-[0.91]"
            style={{ fontSize: 'clamp(3.5rem, 8.5vw, 7.5rem)', letterSpacing: '-0.045em' }}
          >
            <span className="block">{t.founders.headline1}</span>
            <span className="block" style={{ color: 'rgba(240,236,230,0.60)' }}>
              {t.founders.headline2}
            </span>
          </motion.h2>

          <motion.div
            variants={lineReveal}
            className="h-px bg-champagne/35 mx-auto mt-10 mb-8 origin-left"
            style={{ width: '3rem', marginLeft: 'auto', marginRight: 'auto' }}
          />

          <motion.p variants={fadeInBlur} className="text-silver-mid font-light text-lg">
            {t.founders.sub}
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-silver/8 mb-24"
        >
          {t.founders.features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-obsidian p-8 hover:bg-graphite transition-colors duration-600 group"
            >
              <div className="text-2xs tracking-[0.18em] uppercase text-champagne/45 mb-4 group-hover:text-champagne/65 transition-colors duration-400">
                0{i + 1}
              </div>
              <p className="text-warm-white font-light text-sm leading-relaxed">
                {feature}
              </p>
            </motion.div>
          ))}

          {/* Price card */}
          <motion.div
            variants={fadeInBlur}
            className="bg-carbon p-8 flex flex-col justify-between"
          >
            <div className="text-2xs tracking-[0.18em] uppercase text-champagne/45 mb-4">
              Investment
            </div>
            <div>
              <div
                className="font-light text-warm-white leading-none mb-2"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em' }}
              >
                {t.founders.price}
              </div>
              <div className="text-xs text-silver font-light">
                {t.founders.priceNote}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Availability + CTA */}
        <motion.div
          variants={fadeInBlur}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-silver/10 pt-12"
        >
          <div className="flex flex-col gap-2">
            <div className="text-2xs tracking-[0.18em] uppercase text-silver/50">
              {t.founders.limited}
            </div>
            <div className="text-sm text-silver-light font-light">
              {t.founders.availabilityNote(FOUNDERS_AVAILABLE)}
            </div>
          </div>

          <Link href="/membership" className="btn-ea-primary px-12 py-4">
            {t.founders.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
