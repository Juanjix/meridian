'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerEditorial, EASE_CINEMA, EASE_APPLE } from '@/lib/animations'

function ItineraryRow({ text }: { text: string }) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3">
      <span
        className="flex-shrink-0 text-[10px] mt-0.5 font-light"
        style={{ color: 'rgba(212,175,95,0.50)' }}
      >
        ——
      </span>
      <span className="text-xs font-light leading-relaxed" style={{ color: '#C0C0C0' }}>
        {text}
      </span>
    </motion.div>
  )
}

export function SignatureExperiencesSection() {
  const { t } = useLanguage()
  const s = t.signatureExperiences

  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-8%' })

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="bg-graphite py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="ea-label mb-6"
          >
            {s.label}
          </motion.div>

          <div style={{ overflow: 'hidden', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
            <motion.h2
              initial={{ y: '110%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.1 }}
              className="font-light text-warm-white leading-[0.93]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em', whiteSpace: 'pre-line' }}
            >
              {s.headline}
            </motion.h2>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.0, ease: EASE_CINEMA, delay: 0.28 }}
            className="w-10 h-px origin-left my-6"
            style={{ background: 'rgba(212,175,95,0.40)' }}
          />

          <motion.p
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ delay: 0.35 }}
            className="text-sm font-light leading-relaxed max-w-lg"
            style={{ color: '#B8B8B8' }}
          >
            {s.sub}
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-5 items-stretch">

          {/* ── HERO CARD: Helicopter Signature Experience ── */}
          <motion.div
            className="lg:col-span-3 flex"
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: EASE_CINEMA, delay: 0.18 }}
          >
            <motion.div
              className="group relative flex flex-col w-full"
              style={{ border: '1px solid rgba(212,175,95,0.28)', background: '#0A0A0A' }}
              whileHover={{ y: -8, transition: { duration: 0.60, ease: EASE_APPLE } }}
            >
              {/* Champagne radial glow — stronger for hero */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                  background: [
                    'radial-gradient(ellipse 90% 50% at 50% -8%, rgba(212,175,95,0.09) 0%, transparent 70%)',
                    'radial-gradient(ellipse 60% 30% at 90% 110%, rgba(212,175,95,0.04) 0%, transparent 60%)',
                  ].join(', '),
                }}
              />

              {/* Image — slow zoom on hover */}
              <div
                className="relative overflow-hidden"
                style={{ height: 'clamp(280px, 32vw, 360px)' }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-[1800ms] group-hover:scale-[1.06]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                >
                  <Image
                    src="/vehicles/van-front.jpg"
                    alt="Helicopter Signature Experience — Buenos Aires"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    style={{ filter: 'brightness(0.78) contrast(1.08) saturate(0.85)' }}
                  />
                </div>
                {/* Cinematic gradient */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: [
                      'linear-gradient(to bottom, rgba(6,6,6,0.15) 0%, rgba(6,6,6,0.02) 38%, rgba(6,6,6,0.85) 100%)',
                      'linear-gradient(to right, rgba(6,6,6,0.25) 0%, transparent 50%)',
                    ].join(', '),
                  }}
                />

                {/* SIGNATURE EXPERIENCE badge */}
                <div className="absolute top-5 right-5 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE_APPLE, delay: 0.55 }}
                    className="text-[9px] tracking-[0.28em] uppercase font-light px-4 py-2"
                    style={{
                      border: '1px solid rgba(212,175,95,0.50)',
                      color: 'rgba(212,175,95,0.95)',
                      background: 'rgba(6,6,6,0.72)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      letterSpacing: '0.28em',
                    }}
                  >
                    {s.helicopter.badge}
                  </motion.div>
                </div>

                {/* Price overlay — bottom left of image */}
                <div className="absolute bottom-6 left-8 z-20">
                  <div
                    className="font-light text-warm-white leading-none"
                    style={{
                      fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                      letterSpacing: '-0.05em',
                      textShadow: '0 2px 24px rgba(0,0,0,0.8)',
                    }}
                  >
                    {s.helicopter.price}
                  </div>
                  <div
                    className="text-[10px] tracking-[0.18em] uppercase font-light mt-1.5"
                    style={{ color: 'rgba(212,175,95,0.70)', textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
                  >
                    {s.helicopter.priceNote}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 p-8 md:p-10">

                {/* Subtext */}
                <p
                  className="text-[10px] tracking-[0.20em] uppercase font-light mb-5"
                  style={{ color: 'rgba(212,175,95,0.55)' }}
                >
                  {s.helicopter.subtext}
                </p>

                <div className="w-full h-px mb-6" style={{ background: 'rgba(212,175,95,0.12)' }} />

                {/* Title + desc */}
                <div className="mb-7">
                  <h3
                    className="font-light text-warm-white leading-snug mb-3"
                    style={{ fontSize: 'clamp(1.15rem, 2vw, 1.45rem)', letterSpacing: '-0.025em' }}
                  >
                    {s.helicopter.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#A8A8A8' }}>
                    {s.helicopter.desc}
                  </p>
                </div>

                {/* Itinerary */}
                <motion.div
                  className="flex flex-col gap-2.5 mb-9"
                  variants={staggerEditorial}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {s.helicopter.itinerary.map((item) => (
                    <ItineraryRow key={item} text={item} />
                  ))}
                </motion.div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href="/booking"
                    className="btn-ea-primary w-full justify-center active:opacity-70"
                  >
                    {s.helicopter.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column: Full Day + By Night stacked ── */}
          <div className="lg:col-span-2 flex flex-col gap-4 md:gap-5">

            {/* ── Full Day ── */}
            <motion.div
              className="flex flex-1"
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.34 }}
            >
              <motion.div
                className="group flex flex-col w-full border"
                style={{ borderColor: 'rgba(154,154,154,0.12)', background: '#0F0F0F' }}
                whileHover={{ y: -6, transition: { duration: 0.55, ease: EASE_APPLE } }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 'clamp(160px, 17vw, 210px)' }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-[1600ms] group-hover:scale-[1.06]"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                  >
                    <Image
                      src="/vehicles/van-interior-2.jpg"
                      alt="Buenos Aires Full Day Experience"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, rgba(6,6,6,0.12) 0%, rgba(6,6,6,0.72) 100%)' }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    <div>
                      <p className="text-[9px] tracking-[0.20em] uppercase font-light mb-1.5" style={{ color: 'rgba(212,175,95,0.50)' }}>
                        {s.fullDay.priceNote}
                      </p>
                      <div
                        className="font-light text-warm-white leading-none"
                        style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', letterSpacing: '-0.04em' }}
                      >
                        {s.fullDay.price}
                      </div>
                    </div>
                    <span className="text-[9px] tracking-[0.16em] uppercase font-light text-right" style={{ color: 'rgba(184,184,184,0.45)' }}>
                      {s.fullDay.subtext}
                    </span>
                  </div>

                  <h3 className="font-light text-warm-white mb-2 leading-snug" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', letterSpacing: '-0.018em' }}>
                    {s.fullDay.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed mb-5" style={{ color: '#A0A0A0' }}>
                    {s.fullDay.desc}
                  </p>

                  <div className="flex flex-col gap-1.5 mb-5">
                    {s.fullDay.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="w-[3px] h-[3px] rounded-full bg-champagne/40 flex-shrink-0" />
                        <span className="text-2xs font-light" style={{ color: '#B0B0B0' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href="/booking" className="btn-ea-ghost w-full justify-center text-[11px] tracking-[0.14em] active:opacity-70">
                      {s.fullDay.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── By Night ── */}
            <motion.div
              className="flex flex-1"
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.50 }}
            >
              <motion.div
                className="group flex flex-col w-full border"
                style={{ borderColor: 'rgba(154,154,154,0.12)', background: '#0F0F0F' }}
                whileHover={{ y: -6, transition: { duration: 0.55, ease: EASE_APPLE } }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 'clamp(140px, 14vw, 180px)' }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-[1600ms] group-hover:scale-[1.06]"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                  >
                    <Image
                      src="/vehicles/van-interior-1.jpg"
                      alt="Buenos Aires By Night"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      style={{ filter: 'brightness(0.75) saturate(0.7)' }}
                    />
                  </div>
                  {/* Night-tone overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, rgba(4,4,12,0.30) 0%, rgba(4,4,12,0.78) 100%)' }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    <div>
                      <p className="text-[9px] tracking-[0.20em] uppercase font-light mb-1.5" style={{ color: 'rgba(212,175,95,0.50)' }}>
                        {s.byNight.priceNote}
                      </p>
                      <div
                        className="font-light text-warm-white leading-none"
                        style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', letterSpacing: '-0.04em' }}
                      >
                        {s.byNight.price}
                      </div>
                    </div>
                    <span className="text-[9px] tracking-[0.16em] uppercase font-light text-right" style={{ color: 'rgba(184,184,184,0.45)' }}>
                      {s.byNight.subtext}
                    </span>
                  </div>

                  <h3 className="font-light text-warm-white mb-2 leading-snug" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', letterSpacing: '-0.018em' }}>
                    {s.byNight.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed mb-5" style={{ color: '#A0A0A0' }}>
                    {s.byNight.desc}
                  </p>

                  <div className="flex flex-col gap-1.5 mb-5">
                    {s.byNight.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="w-[3px] h-[3px] rounded-full bg-champagne/40 flex-shrink-0" />
                        <span className="text-2xs font-light" style={{ color: '#B0B0B0' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href="/booking" className="btn-ea-ghost w-full justify-center text-[11px] tracking-[0.14em] active:opacity-70">
                      {s.byNight.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
