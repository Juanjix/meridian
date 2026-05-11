'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerContainer, lineReveal, EASE_CINEMA } from '@/lib/animations'

export function FinalCTASection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      ref={ref}
      className="relative bg-obsidian py-56 md:py-72 overflow-hidden noise-overlay"
    >
      {/* Background depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 70% at 50% 50%, #141414 0%, #080808 70%)',
        }}
      />

      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-light text-warm-white leading-[0.9] mb-14"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.04em' }}
          >
            <span className="block">{t.finalCta.headline1}</span>
            <span className="block">{t.finalCta.headline2}</span>
            <span
              className="block"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(192, 186, 176, 0.35)',
              }}
            >
              {t.finalCta.headline3}
            </span>
          </motion.h2>

          <motion.div
            variants={lineReveal}
            className="w-12 h-px bg-champagne/35 mx-auto mb-10"
          />

          <motion.p
            variants={fadeIn}
            className="text-silver-mid font-light text-base tracking-wide mb-16"
          >
            {t.finalCta.sub}
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link href="/membership" className="btn-ea-primary px-14 py-5 text-xs">
              {t.finalCta.cta}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver/10 to-transparent" />
    </section>
  )
}
