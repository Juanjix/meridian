'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, fadeInBlur, staggerContainer, lineReveal, EASE_CINEMA, EASE_APPLE } from '@/lib/animations'

export function FinalCTASection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.0])

  return (
    <section
      ref={ref}
      className="relative bg-obsidian py-28 md:py-72 overflow-hidden noise-overlay vignette"
    >
      {/* Background depth */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 gpu">
        <div
          className="absolute inset-0"
          style={{
            background: [
              'radial-gradient(ellipse 100% 70% at 50% 50%, #0d0d0d 0%, #050505 68%)',
              'radial-gradient(ellipse 40% 40% at 80% 20%, rgba(22,22,22,0.7) 0%, transparent 60%)',
              'radial-gradient(ellipse 30% 30% at 20% 80%, rgba(18,18,18,0.5) 0%, transparent 55%)',
            ].join(', '),
          }}
        />
      </motion.div>

      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/12 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Large display headline */}
          <motion.h2
            variants={fadeUp}
            className="font-light text-warm-white leading-[0.88] mb-12 md:mb-14"
            style={{ fontSize: 'clamp(2.8rem, 8.5vw, 7.5rem)', letterSpacing: '-0.045em' }}
          >
            <span className="block">{t.finalCta.headline1}</span>
            <span className="block">{t.finalCta.headline2}</span>
            {/* Ghost / outlined text */}
            <span
              className="block"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(196, 186, 176, 0.22)',
              }}
            >
              {t.finalCta.headline3}
            </span>
          </motion.h2>

          <motion.div
            variants={lineReveal}
            className="h-px bg-champagne/30 mx-auto mb-8 md:mb-10 origin-left"
            style={{ width: '3rem', marginLeft: 'auto', marginRight: 'auto' }}
          />

          <motion.p
            variants={fadeInBlur}
            className="text-silver-light font-light text-sm tracking-[0.06em] mb-12 md:mb-16 text-balance"
          >
            {t.finalCta.sub}
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/membership"
              className="btn-ea-primary px-10 md:px-14 py-4 md:py-5 text-[11px] w-full sm:w-auto active:opacity-70"
            >
              {t.finalCta.cta}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver/8 to-transparent" />
    </section>
  )
}
