'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import {
  fadeUp,
  fadeIn,
  fadeInBlur,
  staggerContainer,
  staggerFast,
  staggerEditorial,
  lineReveal,
  maskRevealV,
  EASE_APPLE,
  EASE_CINEMA,
} from '@/lib/animations'

export function VehicleExperienceSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })

  // Parallax on the hero image
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="bg-carbon overflow-hidden">

      {/* ── Full-bleed image with mask reveal ───────────────────────────── */}
      <div
        ref={imgRef}
        className="relative w-full overflow-hidden noise-overlay"
        style={{ height: 'clamp(480px, 72vh, 720px)' }}
      >
        {/* Parallax container */}
        <motion.div
          style={{ y: imgY }}
          className="absolute inset-[-10%] w-[120%] gpu"
        >
          {/* Mask reveal wrapper */}
          <motion.div
            variants={maskRevealV}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="absolute inset-0"
          >
            <Image
              src="/vehicles/van-front.jpg"
              fill
              quality={92}
              sizes="100vw"
              className="object-cover object-center"
              alt="Executive Cabin — Executive Arrival"
              style={{ filter: 'brightness(0.82) contrast(1.1) saturate(0.82)' }}
            />
          </motion.div>

          {/* Cinematic multi-layer overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'linear-gradient(90deg, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.45) 45%, rgba(8,8,8,0.18) 100%)',
                'linear-gradient(0deg, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.20) 40%, transparent 65%)',
              ].join(', '),
            }}
          />
        </motion.div>

        {/* Copy overlay — bottom left */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-16"
        >
          <motion.div variants={fadeIn} className="ea-label mb-4 md:mb-5">
            {t.vehicle.label}
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="font-light text-warm-white"
            style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.8rem)', letterSpacing: '-0.045em', lineHeight: 0.91 }}
          >
            <span className="block">{t.vehicle.headline1}</span>
            <span className="block" style={{ color: 'rgba(240,236,230,0.65)' }}>
              {t.vehicle.headline2}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Manifesto strip: Silence. Privacy. Presence. ─────────────────── */}
      <div className="border-y border-silver/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            variants={staggerEditorial}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-silver/8"
          >
            {t.vehicle.manifesto.split('\n').map((word, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex-1 py-8 md:py-10 px-0 sm:px-8 md:px-12 first:pl-0 last:pr-0"
              >
                <span
                  className="font-light text-warm-white block"
                  style={{
                    fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)',
                    letterSpacing: '-0.03em',
                    opacity: i === 0 ? 0.35 : i === 1 ? 0.62 : 1,
                  }}
                >
                  {word}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Interior gallery + editorial copy ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: cinematic photo grid with mask reveals */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-3"
          >
            {/* Main interior — full width */}
            <motion.div
              variants={maskRevealV}
              className="col-span-2 overflow-hidden"
              style={{ height: 'clamp(200px, 45vw, 300px)' }}
            >
              <div className="relative w-full h-full img-cinematic">
                <Image
                  src="/vehicles/van-interior-2.jpg"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  alt="Executive cabin — interior"
                />
              </div>
            </motion.div>

            {/* Interior detail */}
            <motion.div
              variants={maskRevealV}
              className="overflow-hidden"
              style={{ height: 'clamp(130px, 28vw, 195px)' }}
            >
              <div className="relative w-full h-full img-cinematic">
                <Image
                  src="/vehicles/van-interior-1.jpg"
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center"
                  alt="Executive leather seating"
                />
              </div>
            </motion.div>

            {/* Steering */}
            <motion.div
              variants={maskRevealV}
              className="overflow-hidden"
              style={{ height: 'clamp(130px, 28vw, 195px)' }}
            >
              <div className="relative w-full h-full img-cinematic">
                <Image
                  src="/vehicles/van-steering.jpg"
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-right"
                  alt="Executive controls"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: editorial copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:pt-6"
          >
            <motion.div variants={fadeIn} className="ea-label mb-5" style={{ color: '#C4BAB0' }}>
              {t.vehicle.eyebrow}
            </motion.div>

            <motion.div
              variants={lineReveal}
              className="h-px bg-champagne/35 mb-8 origin-left"
              style={{ width: '2.5rem' }}
            />

            <motion.p
              variants={fadeUp}
              className="text-silver-mid font-light leading-relaxed mb-12"
              style={{ fontSize: '0.925rem', lineHeight: 1.8 }}
            >
              {t.vehicle.sub}
            </motion.p>

            <motion.ul
              variants={staggerFast}
              className="flex flex-col divide-y divide-silver/10"
            >
              {t.vehicle.points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 py-4"
                >
                  <span className="w-[3px] h-[3px] rounded-full bg-champagne/55 flex-shrink-0" />
                  <span className="text-sm font-light text-silver-light">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeIn}
              className="mt-10 text-2xs tracking-[0.18em] uppercase font-light"
              style={{ color: '#9A9A9A' }}
            >
              {t.vehicle.note}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
