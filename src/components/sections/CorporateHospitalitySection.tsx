'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerContainer, staggerFast, lineReveal } from '@/lib/animations'

export function CorporateHospitalitySection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })

  return (
    <section ref={ref} className="bg-graphite py-40 md:py-52 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="ea-label text-silver/60 mb-20"
        >
          {t.corporate.label}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">

          {/* Left: headline + CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={fadeUp}
              className="font-light text-warm-white leading-[0.93] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.04em' }}
            >
              {t.corporate.headline}
            </motion.h2>

            <motion.div variants={lineReveal} className="w-10 h-px bg-champagne/40 mb-8" />

            <motion.p
              variants={fadeUp}
              className="text-silver-mid font-light leading-relaxed text-base max-w-sm mb-12"
            >
              {t.corporate.sub}
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                href="mailto:hola@executivearrival.com"
                className="btn-ea-ghost"
              >
                {t.corporate.cta}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: client types */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div
              variants={fadeIn}
              className="ea-label text-silver/50 mb-8"
            >
              {t.corporate.clientsLabel}
            </motion.div>

            <motion.ul
              variants={staggerFast}
              className="flex flex-col gap-0 divide-y divide-silver/10"
            >
              {t.corporate.clients.map((client, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="py-5 flex items-center justify-between group"
                >
                  <span
                    className="font-light text-warm-white/80 group-hover:text-warm-white transition-colors duration-300"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', letterSpacing: '-0.01em' }}
                  >
                    {client}
                  </span>
                  <span className="text-silver/20 group-hover:text-champagne/40 transition-colors duration-300 text-xs">
                    ↗
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Partner hotels note */}
            <motion.div
              variants={fadeIn}
              className="mt-12 pt-8 border-t border-silver/10"
            >
              <div className="ea-label text-silver/50 mb-4">Partner Hotels</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['Four Seasons', 'Faena', 'Alvear', 'Palacio Duhau'].map((h) => (
                  <span key={h} className="text-xs font-light text-silver">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
