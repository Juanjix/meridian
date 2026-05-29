'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerEditorial, EASE_CINEMA, EASE_APPLE } from '@/lib/animations'

// ─── Feature row ─────────────────────────────────────────────────────────────

function FeatureRow({ text }: { text: string }) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3">
      <span
        className="flex-shrink-0 text-[10px] mt-0.5 font-light"
        style={{ color: 'rgba(212,175,95,0.40)' }}
      >
        ——
      </span>
      <span className="text-xs font-light leading-relaxed" style={{ color: '#C0C0C0' }}>
        {text}
      </span>
    </motion.div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function ExecutiveExperiencesSection() {
  const { t } = useLanguage()
  const ex = t.executiveExperiences

  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-12%' })

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="bg-obsidian py-28 md:py-40 overflow-hidden"
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
            {ex.label}
          </motion.div>

          <div style={{ overflow: 'hidden', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
            <motion.h2
              initial={{ y: '110%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.1 }}
              className="font-light text-warm-white leading-[0.93]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
            >
              {ex.headline}
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
            {ex.sub}
          </motion.p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-5 items-stretch">

          {/* ── Card 1: Transfer ── */}
          <motion.div
            className="lg:col-span-2 flex"
            initial={{ opacity: 0, y: 44 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.22 }}
          >
            <motion.div
              className="group flex flex-col w-full border"
              style={{ borderColor: 'rgba(154,154,154,0.10)', background: '#0F0F0F' }}
              whileHover={{ y: -6, transition: { duration: 0.55, ease: EASE_APPLE } }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                >
                  <Image
                    src="/vehicles/van-exterior.jpg"
                    alt="BA Vita Luxury Transfer — Executive Van exterior"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                {/* Cinematic vignette */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(6,6,6,0.22) 0%, rgba(6,6,6,0.02) 42%, rgba(6,6,6,0.80) 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8 md:p-9">

                {/* Price block */}
                <div className="mb-7">
                  <p
                    className="text-[10px] tracking-[0.22em] uppercase font-light mb-2"
                    style={{ color: 'rgba(212,175,95,0.55)' }}
                  >
                    {ex.transfer.priceNote}
                  </p>
                  <div
                    className="font-light text-warm-white leading-none"
                    style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.6rem)', letterSpacing: '-0.045em' }}
                  >
                    {ex.transfer.price}
                  </div>
                  <p
                    className="text-[11px] font-light tracking-[0.10em] mt-2.5"
                    style={{ color: '#A8A8A8' }}
                  >
                    {ex.transfer.subtext}
                  </p>
                </div>

                {/* Thin divider */}
                <div className="w-full h-px mb-7" style={{ background: 'rgba(212,175,95,0.10)' }} />

                {/* Title + desc */}
                <div className="mb-7">
                  <h3
                    className="font-light text-warm-white leading-snug mb-3"
                    style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', letterSpacing: '-0.022em' }}
                  >
                    {ex.transfer.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#A8A8A8' }}>
                    {ex.transfer.desc}
                  </p>
                </div>

                {/* Features */}
                <motion.div
                  className="flex flex-col gap-2.5 mb-9"
                  variants={staggerEditorial}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {ex.transfer.features.map((f) => (
                    <FeatureRow key={f} text={f} />
                  ))}
                </motion.div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href="/booking"
                    className="btn-ea-ghost w-full justify-center text-[11px] tracking-[0.14em] active:opacity-70"
                  >
                    {ex.transfer.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Card 2: Membership (featured) ── */}
          <motion.div
            className="lg:col-span-3 flex"
            initial={{ opacity: 0, y: 44 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.40 }}
          >
            <motion.div
              className="group relative flex flex-col w-full"
              style={{ border: '1px solid rgba(212,175,95,0.22)', background: '#0F0F0F' }}
              whileHover={{ y: -6, transition: { duration: 0.55, ease: EASE_APPLE } }}
            >
              {/* Subtle champagne radial glow — top center */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                  background:
                    'radial-gradient(ellipse 90% 40% at 50% -5%, rgba(212,175,95,0.055) 0%, transparent 100%)',
                }}
              />

              {/* Image */}
              <div className="relative h-72 md:h-84 overflow-hidden" style={{ height: 'clamp(288px, 30vw, 340px)' }}>
                <div
                  className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                >
                  <Image
                    src="/vehicles/van-front.jpg"
                    alt="BA Vita Luxury Transfer — Founding Membership"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                {/* Cinematic vignette */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(6,6,6,0.22) 0%, rgba(6,6,6,0.02) 42%, rgba(6,6,6,0.80) 100%)',
                  }}
                />

                {/* Badge */}
                <div className="absolute top-5 right-5 z-20">
                  <div
                    className="text-[9px] tracking-[0.24em] uppercase font-light px-3.5 py-2"
                    style={{
                      border: '1px solid rgba(212,175,95,0.38)',
                      color: 'rgba(212,175,95,0.90)',
                      background: 'rgba(6,6,6,0.65)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    {ex.membership.badge}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 p-8 md:p-10">

                {/* Price block */}
                <div className="mb-7">
                  <p
                    className="text-[10px] tracking-[0.22em] uppercase font-light mb-2"
                    style={{ color: 'rgba(212,175,95,0.55)' }}
                  >
                    {ex.membership.priceNote}
                  </p>
                  <div
                    className="font-light text-warm-white leading-none"
                    style={{ fontSize: 'clamp(2.6rem, 4.5vw, 3.6rem)', letterSpacing: '-0.045em' }}
                  >
                    {ex.membership.price}
                  </div>
                  <p
                    className="text-[11px] font-light tracking-[0.10em] mt-2.5"
                    style={{ color: 'rgba(212,175,95,0.55)' }}
                  >
                    {ex.membership.subtext}
                  </p>
                </div>

                {/* Thin divider */}
                <div className="w-full h-px mb-7" style={{ background: 'rgba(212,175,95,0.15)' }} />

                {/* Title + desc */}
                <div className="mb-7">
                  <h3
                    className="font-light text-warm-white leading-snug mb-3"
                    style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', letterSpacing: '-0.022em' }}
                  >
                    {ex.membership.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#A8A8A8' }}>
                    {ex.membership.desc}
                  </p>
                </div>

                {/* Features — 2-col on md+ */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-10"
                  variants={staggerEditorial}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  {ex.membership.features.map((f) => (
                    <FeatureRow key={f} text={f} />
                  ))}
                </motion.div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href="/membership"
                    className="btn-ea-primary w-full justify-center active:opacity-70"
                  >
                    {ex.membership.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
