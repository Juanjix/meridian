'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, fadeInBlur, staggerContainer, staggerFast, lineReveal } from '@/lib/animations'

export function TheExperienceSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-14% 0px' })

  return (
    <section id="experience" ref={ref} className="bg-graphite py-40 md:py-52 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="ea-label text-silver/55 mb-20"
        >
          {t.experience.label}
        </motion.div>

        {/* Editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">

          {/* Left: large headline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={fadeUp}
              className="font-light leading-[0.91] text-warm-white mb-10"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-0.045em' }}
            >
              <span className="block">{t.experience.headline1}</span>
              <span className="block" style={{ color: 'rgba(240,236,230,0.62)' }}>
                {t.experience.headline2}
              </span>
            </motion.h2>

            <motion.div
              variants={lineReveal}
              className="h-px bg-champagne/35 mb-10 origin-left"
              style={{ width: '3rem' }}
            />

            <motion.p
              variants={fadeUp}
              className="text-silver-mid font-light text-lg leading-relaxed whitespace-pre-line"
            >
              {t.experience.sub}
            </motion.p>
          </motion.div>

          {/* Right: feature list */}
          <motion.div
            variants={staggerFast}
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
                    <div className="text-2xs tracking-[0.18em] uppercase font-light text-champagne/55 mb-2.5">
                      0{i + 1}
                    </div>
                    <h3
                      className="text-warm-white font-light mb-2 tracking-tight group-hover:text-warm-white/90 transition-colors duration-400"
                      style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-silver font-light text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="w-px h-14 bg-silver/12 flex-shrink-0 mt-6 group-hover:bg-champagne/20 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
