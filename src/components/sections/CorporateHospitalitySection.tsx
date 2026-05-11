'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, fadeInBlur, staggerContainer, staggerFast, lineReveal } from '@/lib/animations'

export function CorporateHospitalitySection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-graphite py-24 md:py-52 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="ea-label text-silver/55 mb-12 md:mb-20"
        >
          {t.corporate.label}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-32 items-start">

          {/* Left: headline + CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={fadeUp}
              className="font-light text-warm-white leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', letterSpacing: '-0.045em' }}
            >
              {t.corporate.headline}
            </motion.h2>

            <motion.div
              variants={lineReveal}
              className="h-px bg-champagne/35 mb-8 origin-left"
              style={{ width: '2.5rem' }}
            />

            <motion.p
              variants={fadeUp}
              className="text-silver-mid font-light leading-relaxed text-sm max-w-xs mb-10 md:mb-12"
            >
              {t.corporate.sub}
            </motion.p>

            <motion.div variants={fadeInBlur}>
              <Link href="mailto:hola@executivearrival.com" className="btn-ea-ghost w-full sm:w-auto justify-center active:opacity-70">
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
            <motion.div variants={fadeIn} className="ea-label text-silver/45 mb-8">
              {t.corporate.clientsLabel}
            </motion.div>

            <motion.ul
              variants={staggerFast}
              className="flex flex-col divide-y divide-silver/10"
            >
              {t.corporate.clients.map((client, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="py-5 flex items-center justify-between group cursor-default"
                >
                  <span
                    className="font-light text-warm-white/75 group-hover:text-warm-white transition-colors duration-400"
                    style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.15rem)', letterSpacing: '-0.01em' }}
                  >
                    {client}
                  </span>
                  <span className="text-silver/18 group-hover:text-champagne/35 transition-colors duration-400 text-xs select-none">
                    ↗
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Partners */}
            <motion.div
              variants={fadeInBlur}
              className="mt-12 pt-8 border-t border-silver/10"
            >
              <div className="ea-label text-silver/45 mb-5">Partner Hotels</div>
              <div className="flex flex-wrap gap-x-7 gap-y-2">
                {['Four Seasons', 'Faena', 'Alvear', 'Palacio Duhau'].map((h) => (
                  <span key={h} className="text-xs font-light text-silver/60">
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
