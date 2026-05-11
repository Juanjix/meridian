'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerContainer, lineReveal } from '@/lib/animations'

export function TheExperienceSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section id="experience" ref={ref} className="bg-graphite py-40 md:py-52 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="ea-label text-silver/60 mb-20"
        >
          {t.experience.label}
        </motion.div>

        {/* Editorial split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">

          {/* Left: Large headline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={fadeUp}
              className="font-light leading-[0.92] text-warm-white mb-10"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-0.04em' }}
            >
              <span className="block">{t.experience.headline1}</span>
              <span className="block text-silver-light">{t.experience.headline2}</span>
            </motion.h2>

            <motion.div variants={lineReveal} className="w-12 h-px bg-champagne/40 mb-10" />

            <motion.p
              variants={fadeUp}
              className="text-silver-mid font-light text-lg leading-relaxed whitespace-pre-line"
            >
              {t.experience.sub}
            </motion.p>
          </motion.div>

          {/* Right: Feature list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col divide-y divide-silver/10"
          >
            {t.experience.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="py-8 group"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-xs tracking-[0.16em] uppercase font-light text-champagne/70 mb-2">
                      0{i + 1}
                    </div>
                    <h3 className="text-warm-white font-light text-lg mb-2 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-silver font-light text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="w-px h-12 bg-silver/15 flex-shrink-0 mt-1" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
