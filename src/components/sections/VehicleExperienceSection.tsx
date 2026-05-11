'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerContainer, staggerFast, lineReveal } from '@/lib/animations'

export function VehicleExperienceSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  // Subtle parallax on the main exterior image
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="bg-obsidian py-0 overflow-hidden">

      {/* Full-bleed exterior shot with copy overlay */}
      <div
        ref={imgRef}
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(420px, 70vh, 700px)' }}
      >
        <motion.div style={{ y: imgY }} className="absolute inset-[-12%] w-[124%]">
          <Image
            src="/vehicles/van-front.jpg"
            fill
            quality={90}
            className="object-cover object-center"
            alt="Toyota HiAce Executive — Executive Arrival"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.3) 55%, rgba(8,8,8,0.15) 100%)',
            }}
          />
        </motion.div>

        {/* Overlay copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-12 pb-14"
        >
          <motion.div variants={fadeIn} className="ea-label text-silver/60 mb-4">
            {t.vehicle.label}
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-light text-warm-white leading-[0.93]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', letterSpacing: '-0.04em' }}
          >
            <span className="block">{t.vehicle.headline1}</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Below: interior gallery + copy */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: interior photo grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-3"
          >
            {/* Interior main — tall */}
            <motion.div variants={fadeIn} className="col-span-2 relative overflow-hidden" style={{ height: '320px' }}>
              <Image
                src="/vehicles/van-interior-2.jpg"
                fill
                quality={85}
                className="object-cover object-center"
                alt="Executive cabin — door open"
              />
              <div className="absolute inset-0 bg-obsidian/20" />
            </motion.div>

            {/* Interior detail */}
            <motion.div variants={fadeIn} className="relative overflow-hidden" style={{ height: '200px' }}>
              <Image
                src="/vehicles/van-interior-1.jpg"
                fill
                quality={85}
                className="object-cover object-center"
                alt="Executive leather seats"
              />
              <div className="absolute inset-0 bg-obsidian/15" />
            </motion.div>

            {/* Steering wheel detail */}
            <motion.div variants={fadeIn} className="relative overflow-hidden" style={{ height: '200px' }}>
              <Image
                src="/vehicles/van-steering.jpg"
                fill
                quality={85}
                className="object-cover object-center"
                alt="Executive controls — Toyota HiAce"
              />
              <div className="absolute inset-0 bg-obsidian/20" />
            </motion.div>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:pt-8"
          >
            <motion.h2
              variants={fadeUp}
              className="font-light text-warm-white leading-[0.93] mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.04em' }}
            >
              {t.vehicle.headline2}
            </motion.h2>

            <motion.div variants={lineReveal} className="w-10 h-px bg-champagne/40 mb-8" />

            <motion.p
              variants={fadeUp}
              className="text-silver-mid font-light leading-relaxed mb-12 text-base"
            >
              {t.vehicle.sub}
            </motion.p>

            <motion.ul
              variants={staggerFast}
              className="flex flex-col gap-0 divide-y divide-silver/10"
            >
              {t.vehicle.points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 py-4"
                >
                  <span className="w-1 h-1 rounded-full bg-champagne/60 flex-shrink-0" />
                  <span className="text-sm font-light text-silver-light">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeIn}
              className="mt-10 text-2xs tracking-[0.18em] uppercase text-silver/50"
            >
              {t.vehicle.note}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
