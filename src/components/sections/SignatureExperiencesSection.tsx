'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerEditorial, EASE_CINEMA, EASE_APPLE } from '@/lib/animations'

function FeatureRow({ text }: { text: string }) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3">
      <span
        className="flex-shrink-0 text-[10px] mt-0.5 font-light"
        style={{ color: 'rgba(212,175,95,0.45)' }}
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

          {/* ── CARD 1: Full Day (Featured / Flagship) ── */}
          <motion.div
            className="lg:col-span-3 flex"
            initial={{ opacity: 0, y: 44 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.18 }}
          >
            <motion.div
              className="group relative flex flex-col w-full"
              style={{ border: '1px solid rgba(212,175,95,0.22)', background: '#0F0F0F' }}
              whileHover={{ y: -6, transition: { duration: 0.55, ease: EASE_APPLE } }}
            >
              {/* Champagne glow */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(ellipse 90% 40% at 50% -5%, rgba(212,175,95,0.06) 0%, transparent 100%)',
                }}
              />

              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 'clamp(260px, 28vw, 320px)' }}>
                <div
                  className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                >
                  <Image
                    src="/vehicles/van-front.jpg"
                    alt="Buenos Aires Full Day Experience"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(6,6,6,0.18) 0%, rgba(6,6,6,0.02) 40%, rgba(6,6,6,0.82) 100%)',
                  }}
                />
                {/* Badge */}
                <div className="absolute top-5 right-5 z-20">
                  <div
                    className="text-[9px] tracking-[0.24em] uppercase font-light px-3.5 py-2"
                    style={{
                      border: '1px solid rgba(212,175,95,0.40)',
                      color: 'rgba(212,175,95,0.92)',
                      background: 'rgba(6,6,6,0.65)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    {s.fullDay.badge}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 p-8 md:p-10">
                {/* Price */}
                <div className="mb-7">
                  <p
                    className="text-[10px] tracking-[0.22em] uppercase font-light mb-2"
                    style={{ color: 'rgba(212,175,95,0.55)' }}
                  >
                    {s.fullDay.priceNote}
                  </p>
                  <div
                    className="font-light text-warm-white leading-none"
                    style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', letterSpacing: '-0.045em' }}
                  >
                    {s.fullDay.price}
                  </div>
                  <p
                    className="text-[11px] font-light tracking-[0.10em] mt-2"
                    style={{ color: 'rgba(212,175,95,0.55)' }}
                  >
                    {s.fullDay.subtext}
                  </p>
                </div>

                <div className="w-full h-px mb-7" style={{ background: 'rgba(212,175,95,0.12)' }} />

                {/* Title */}
                <div className="mb-7">
                  <h3
                    className="font-light text-warm-white leading-snug mb-3"
                    style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', letterSpacing: '-0.022em' }}
                  >
                    {s.fullDay.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#A8A8A8' }}>
                    {s.fullDay.desc}
                  </p>
                </div>

                {/* Itinerary */}
                <motion.div
                  className="flex flex-col gap-2.5 mb-9"
                  variants={staggerEditorial}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {s.fullDay.itinerary.map((item) => (
                    <FeatureRow key={item} text={item} />
                  ))}
                </motion.div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href="/booking"
                    className="btn-ea-primary w-full justify-center active:opacity-70"
                  >
                    {s.fullDay.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column: Executive + By Night stacked ── */}
          <div className="lg:col-span-2 flex flex-col gap-4 md:gap-5">

            {/* ── CARD 2: Executive Experience ── */}
            <motion.div
              className="flex flex-1"
              initial={{ opacity: 0, y: 44 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.34 }}
            >
              <motion.div
                className="group flex flex-col w-full border"
                style={{ borderColor: 'rgba(154,154,154,0.10)', background: '#0F0F0F' }}
                whileHover={{ y: -6, transition: { duration: 0.55, ease: EASE_APPLE } }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 'clamp(160px, 16vw, 200px)' }}>
                  <div
                    className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                  >
                    <Image
                      src="/vehicles/van-interior-2.jpg"
                      alt="Executive Buenos Aires Experience"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(6,6,6,0.15) 0%, rgba(6,6,6,0.70) 100%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p
                        className="text-[9px] tracking-[0.22em] uppercase font-light mb-1.5"
                        style={{ color: 'rgba(212,175,95,0.50)' }}
                      >
                        {s.executive.priceNote}
                      </p>
                      <div
                        className="font-light text-warm-white leading-none"
                        style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', letterSpacing: '-0.04em' }}
                      >
                        {s.executive.price}
                      </div>
                    </div>
                    <span
                      className="text-[9px] tracking-[0.18em] uppercase font-light"
                      style={{ color: 'rgba(184,184,184,0.45)' }}
                    >
                      {s.executive.subtext}
                    </span>
                  </div>

                  <h3
                    className="font-light text-warm-white mb-2 leading-snug"
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', letterSpacing: '-0.018em' }}
                  >
                    {s.executive.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed mb-5" style={{ color: '#A0A0A0' }}>
                    {s.executive.desc}
                  </p>

                  <div className="flex flex-col gap-1.5 mb-5">
                    {s.executive.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="w-[3px] h-[3px] rounded-full bg-champagne/40 flex-shrink-0" />
                        <span className="text-2xs font-light" style={{ color: '#B0B0B0' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/booking"
                      className="btn-ea-ghost w-full justify-center text-[11px] tracking-[0.14em] active:opacity-70"
                    >
                      {s.executive.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── CARD 3: By Night ── */}
            <motion.div
              className="flex flex-1"
              initial={{ opacity: 0, y: 44 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.50 }}
            >
              <motion.div
                className="group flex flex-col w-full border"
                style={{ borderColor: 'rgba(154,154,154,0.10)', background: '#0F0F0F' }}
                whileHover={{ y: -6, transition: { duration: 0.55, ease: EASE_APPLE } }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 'clamp(140px, 14vw, 180px)' }}>
                  <div
                    className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                  >
                    <Image
                      src="/vehicles/van-interior-1.jpg"
                      alt="Buenos Aires By Night"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  {/* Darker night tint */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(4,4,10,0.35) 0%, rgba(4,4,10,0.75) 100%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p
                        className="text-[9px] tracking-[0.22em] uppercase font-light mb-1.5"
                        style={{ color: 'rgba(212,175,95,0.50)' }}
                      >
                        {s.byNight.priceNote}
                      </p>
                      <div
                        className="font-light text-warm-white leading-none"
                        style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', letterSpacing: '-0.04em' }}
                      >
                        {s.byNight.price}
                      </div>
                    </div>
                    <span
                      className="text-[9px] tracking-[0.18em] uppercase font-light"
                      style={{ color: 'rgba(184,184,184,0.45)' }}
                    >
                      {s.byNight.subtext}
                    </span>
                  </div>

                  <h3
                    className="font-light text-warm-white mb-2 leading-snug"
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', letterSpacing: '-0.018em' }}
                  >
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
                    <Link
                      href="/booking"
                      className="btn-ea-ghost w-full justify-center text-[11px] tracking-[0.14em] active:opacity-70"
                    >
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
