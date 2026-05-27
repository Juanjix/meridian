'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import {
  fadeUp,
  fadeIn,
  fadeInBlur,
  staggerContainer,
  staggerEditorial,
  lineReveal,
  EASE_APPLE,
  EASE_CINEMA,
} from '@/lib/animations'

export function TheExperienceSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="experience" ref={ref} className="bg-graphite overflow-hidden">

      {/* ── Part 1: Manifesto block ──────────────────────────────────────── */}
      <div className="py-24 md:py-36 border-b border-silver/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Label */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="ea-label text-silver/55 mb-16 md:mb-24"
          >
            {t.experience.label}
          </motion.div>

          {/* Large editorial manifesto — centered, cinematic scale */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-16 md:mb-24"
          >
            {t.experience.manifesto.split('\n').map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  custom={i}
                  variants={{
                    hidden: { y: '110%', opacity: 0 },
                    visible: {
                      y: '0%',
                      opacity: i === 0 ? 0.45 : 1,
                      transition: { duration: 1.1, ease: EASE_CINEMA, delay: i * 0.12 },
                    },
                  }}
                  className="font-light text-warm-white leading-[0.92]"
                  style={{
                    fontSize: 'clamp(2.4rem, 7.5vw, 6.5rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.div>

          {/* Editorial split: headline left, sub right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-end"
          >
            <div>
              <motion.h2
                variants={fadeUp}
                className="font-light text-warm-white leading-[0.93] mb-6 md:mb-8"
                style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3.2rem)', letterSpacing: '-0.04em' }}
              >
                <span className="block">{t.experience.headline1}</span>
                <span className="block" style={{ color: 'rgba(240,236,230,0.55)' }}>
                  {t.experience.headline2}
                </span>
              </motion.h2>
              <motion.div variants={lineReveal} className="h-px bg-champagne/35 origin-left" style={{ width: '3rem' }} />
            </div>

            <motion.p
              variants={fadeInBlur}
              className="text-silver-mid font-light text-base md:text-lg leading-relaxed"
            >
              {t.experience.sub}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ── Part 2: Feature pillars ──────────────────────────────────────── */}
      <motion.div
        variants={staggerEditorial}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 divide-silver/8 border-t-0 border-b border-silver/8"
      >
        {t.experience.features.map((feature, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`
              p-8 md:p-10 group
              ${i < t.experience.features.length - 1 ? 'lg:border-r border-silver/8' : ''}
              hover:bg-carbon/40 transition-colors duration-500
            `}
          >
            {/* Number */}
            <div className="text-[9px] tracking-[0.22em] uppercase text-champagne/40 mb-5 font-light group-hover:text-champagne/60 transition-colors duration-400">
              0{i + 1}
            </div>

            {/* Thin rule */}
            <motion.div
              variants={lineReveal}
              className="h-px bg-silver/15 mb-6 origin-left group-hover:bg-champagne/25 transition-colors duration-500"
            />

            {/* Title */}
            <h3
              className="font-light text-warm-white mb-3 leading-tight group-hover:text-warm-white/90 transition-colors duration-400"
              style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)', letterSpacing: '-0.01em' }}
            >
              {feature.title}
            </h3>

            {/* Desc */}
            <p className="text-silver font-light text-xs md:text-sm leading-relaxed" style={{ lineHeight: 1.7 }}>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
