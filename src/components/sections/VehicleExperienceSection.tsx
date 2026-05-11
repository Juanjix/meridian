'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeInBlur, staggerContainer, staggerFast, lineReveal } from '@/lib/animations'

export function VehicleExperienceSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  // Parallax on the hero image
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <section ref={ref} className="bg-obsidian overflow-hidden">

      {/* ── Full-bleed exterior with parallax + copy overlay ──────────────── */}
      <div
        ref={imgRef}
        className="relative w-full overflow-hidden noise-overlay"
        style={{ height: 'clamp(440px, 68vh, 680px)' }}
      >
        {/* Parallax image */}
        <motion.div
          style={{ y: imgY }}
          className="absolute inset-[-10%] w-[120%] gpu"
        >
          <div className="img-cinematic absolute inset-0">
            <Image
              src="/vehicles/van-front.jpg"
              fill
              quality={92}
              sizes="100vw"
              className="object-cover object-center"
              alt="Toyota HiAce Executive — Executive Arrival"
            />
          </div>

          {/* Cinematic multi-layer overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: [
                'linear-gradient(90deg, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.35) 50%, rgba(8,8,8,0.12) 100%)',
                'linear-gradient(0deg, rgba(8,8,8,0.6) 0%, transparent 45%)',
              ].join(', '),
            }}
          />
        </motion.div>

        {/* Copy overlay — bottom left */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-12 pb-14"
        >
          <motion.div variants={fadeInBlur} className="ea-label text-silver/55 mb-5">
            {t.vehicle.label}
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-light text-warm-white"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5rem)', letterSpacing: '-0.045em', lineHeight: 0.92 }}
          >
            {t.vehicle.headline1}
          </motion.h2>
        </motion.div>
      </div>

      {/* ── Interior gallery + copy ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: cinematic photo grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-3"
          >
            {/* Main interior — full width */}
            <motion.div
              variants={fadeInBlur}
              className="col-span-2 img-cinematic"
              style={{ height: 'clamp(200px, 45vw, 300px)' }}
            >
              <Image
                src="/vehicles/van-interior-2.jpg"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                alt="Executive cabin — door open"
              />
            </motion.div>

            {/* Interior detail */}
            <motion.div
              variants={fadeInBlur}
              className="img-cinematic"
              style={{ height: 'clamp(130px, 28vw, 195px)' }}
            >
              <Image
                src="/vehicles/van-interior-1.jpg"
                fill
                quality={88}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center"
                alt="Executive leather seats"
              />
            </motion.div>

            {/* Steering detail */}
            <motion.div
              variants={fadeInBlur}
              className="img-cinematic"
              style={{ height: 'clamp(130px, 28vw, 195px)' }}
            >
              <Image
                src="/vehicles/van-steering.jpg"
                fill
                quality={88}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-right"
                alt="Executive controls"
              />
            </motion.div>
          </motion.div>

          {/* Right: editorial copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:pt-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-light text-warm-white leading-[0.92] mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.04em' }}
            >
              {t.vehicle.headline2}
            </motion.h2>

            <motion.div
              variants={lineReveal}
              className="h-px bg-champagne/35 mb-8 origin-left"
              style={{ width: '2.5rem' }}
            />

            <motion.p
              variants={fadeUp}
              className="text-silver-mid font-light leading-relaxed mb-12"
              style={{ fontSize: '0.925rem' }}
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
              variants={fadeInBlur}
              className="mt-10 text-2xs tracking-[0.18em] uppercase text-silver/45"
            >
              {t.vehicle.note}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
