'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, lineReveal, EASE_CINEMA } from '@/lib/animations'

export function WhyUsSection() {
  const { t } = useLanguage()
  const w = t.whyUs

  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-10%' })

  return (
    <section ref={sectionRef} className="bg-obsidian py-24 md:py-36 overflow-hidden">

      {/* Top separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-champagne/14 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-24 md:pt-36">

        {/* Label */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="ea-label mb-16 md:mb-20 text-center"
        >
          {w.label}
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-silver/10">
          {w.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: EASE_CINEMA, delay: 0.12 + i * 0.16 }}
              className={`
                relative px-0 md:px-12 first:pl-0 last:pr-0
                py-10 md:py-0
                border-b md:border-b-0 border-silver/10 last:border-b-0
              `}
            >
              {/* Ghost number — watermark */}
              <div
                className="absolute top-4 md:top-0 right-0 font-light leading-none select-none pointer-events-none"
                style={{
                  fontSize: 'clamp(5rem, 12vw, 9rem)',
                  letterSpacing: '-0.06em',
                  color: 'rgba(212,175,95,0.035)',
                }}
              >
                {pillar.number}
              </div>

              {/* Number label */}
              <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeIn}
                transition={{ delay: 0.2 + i * 0.16 }}
                className="text-[9px] tracking-[0.28em] uppercase font-light mb-6"
                style={{ color: 'rgba(212,175,95,0.55)' }}
              >
                {pillar.number}
              </motion.div>

              {/* Thin champagne rule */}
              <motion.div
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={lineReveal}
                transition={{ delay: 0.26 + i * 0.16 }}
                className="w-8 h-px mb-8 origin-left"
                style={{ background: 'rgba(212,175,95,0.35)' }}
              />

              {/* Title */}
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.32 + i * 0.16 }}
                className="font-light text-warm-white mb-5 leading-tight"
                style={{
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
                  letterSpacing: '-0.025em',
                }}
              >
                {pillar.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.38 + i * 0.16 }}
                className="text-sm font-light leading-[1.85]"
                style={{ color: '#B0B0B0' }}
              >
                {pillar.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-silver/8 to-transparent mt-24 md:mt-36" />
    </section>
  )
}
