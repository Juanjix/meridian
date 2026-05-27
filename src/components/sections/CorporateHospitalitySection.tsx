'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, fadeInBlur, staggerContainer, staggerFast, staggerEditorial, lineReveal, EASE_CINEMA } from '@/lib/animations'

export function CorporateHospitalitySection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-graphite overflow-hidden">

      {/* ── Manifesto header ─────────────────────────────────────────────── */}
      <div className="py-24 md:py-36 border-b border-silver/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Label */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="ea-label mb-12 md:mb-16"
          >
            {t.corporate.label}
          </motion.div>

          {/* Large manifesto — editorial centerpiece */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-14 md:mb-20"
          >
            {t.corporate.manifesto.split('\n').map((line, i) => (
              <div key={i} style={{ overflow: 'hidden', paddingBottom: '0.12em', marginBottom: '-0.12em' }}>
                <motion.p
                  variants={{
                    hidden: { y: '115%', opacity: 0 },
                    visible: {
                      y: '0%',
                      opacity: i === 0 ? 1 : 0.52,
                      transition: { duration: 1.1, ease: EASE_CINEMA, delay: i * 0.1 },
                    },
                  }}
                  className="font-light text-warm-white"
                  style={{ fontSize: 'clamp(2rem, 5.8vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 1.0 }}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.div>

          {/* Headline + sub — editorial split */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-end"
          >
            <div>
              {t.corporate.headline.split('\n').map((line, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="font-light text-warm-white leading-[0.93]"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                    letterSpacing: '-0.035em',
                    opacity: i === 1 ? 0.5 : 1,
                  }}
                >
                  {line}
                </motion.p>
              ))}
              <motion.div variants={lineReveal} className="h-px bg-champagne/30 mt-8 origin-left" style={{ width: '2.5rem' }} />
            </div>

            <div>
              <motion.p variants={fadeInBlur} className="text-silver-mid font-light text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                {t.corporate.sub}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  href="mailto:hola@millenniumtravel.com.ar"
                  className="btn-ea-ghost w-full sm:w-auto justify-center active:opacity-70"
                >
                  {t.corporate.cta}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Client types grid ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">

          {/* Client list */}
          <div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="ea-label mb-8"
            >
              {t.corporate.clientsLabel}
            </motion.div>

            <motion.ul
              variants={staggerFast}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-col divide-y divide-silver/10"
            >
              {t.corporate.clients.map((client, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="py-5 flex items-center justify-between group cursor-default"
                >
                  <span
                    className="font-light text-warm-white/70 group-hover:text-warm-white transition-colors duration-400"
                    style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)', letterSpacing: '-0.01em' }}
                  >
                    {client}
                  </span>
                  <span className="text-silver/18 group-hover:text-champagne/35 transition-colors duration-400 text-xs select-none">
                    ↗
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Partner hotels */}
          <motion.div
            variants={fadeInBlur}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="ea-label mb-8">Partner Hotels</div>

            <div className="grid grid-cols-2 gap-px bg-silver/8">
              {['Four Seasons', 'Faena', 'Alvear Palace', 'Palacio Duhau'].map((h) => (
                <div
                  key={h}
                  className="bg-graphite px-6 py-6 group hover:bg-carbon/50 transition-colors duration-400"
                >
                  <span
                    className="text-silver-light/60 font-light group-hover:text-silver-light transition-colors duration-400"
                    style={{ fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)', letterSpacing: '0.04em' }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-silver/10">
              <p className="text-2xs font-light leading-relaxed tracking-wide" style={{ color: '#8A8A8A' }}>
                {/* A contextual note about the partner network */}
                Direct coordination with hotel reception and concierge from point of arrival.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
