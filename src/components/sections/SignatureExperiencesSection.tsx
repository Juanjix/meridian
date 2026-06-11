'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, EASE_CINEMA, EASE_APPLE } from '@/lib/animations'

interface ExperienceCardData {
  title: string
  price: string
  priceNote: string
  subtext: string
  desc: string
  cta: string
}

interface ExperienceCard {
  key: string
  data: ExperienceCardData
  items: readonly string[]
  image: string
  imageStyle?: CSSProperties
  overlay: string
  badge: string | null
  featured: boolean
}

export function SignatureExperiencesSection() {
  const { t } = useLanguage()
  const s = t.signatureExperiences

  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-8%' })

  // Ordered low → high price
  const cards: ExperienceCard[] = [
    {
      key: 'byNight',
      data: s.byNight,
      items: s.byNight.features,
      image: '/vehicles/van-interior-1.jpg',
      imageStyle: { filter: 'brightness(0.75) saturate(0.7)' },
      overlay: 'linear-gradient(to bottom, rgba(4,4,12,0.25) 0%, rgba(4,4,12,0.80) 100%)',
      badge: null,
      featured: false,
    },
    {
      key: 'fullDay',
      data: s.fullDay,
      items: s.fullDay.features,
      image: '/vehicles/van-interior-2.jpg',
      overlay: 'linear-gradient(to bottom, rgba(6,6,6,0.10) 0%, rgba(6,6,6,0.78) 100%)',
      badge: null,
      featured: false,
    },
    {
      key: 'helicopter',
      data: s.helicopter,
      items: s.helicopter.itinerary,
      image: '/vehicles/van-front.jpg',
      imageStyle: { filter: 'brightness(0.78) contrast(1.08) saturate(0.85)' },
      overlay: 'linear-gradient(to bottom, rgba(6,6,6,0.10) 0%, rgba(6,6,6,0.80) 100%)',
      badge: s.helicopter.badge,
      featured: true,
    },
  ]

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

        {/* ── Cards grid — ordered low to high price ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {cards.map((card, i) => (
            <motion.div
              key={card.key}
              className="flex"
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.18 + i * 0.16 }}
            >
              <motion.div
                className="group relative flex flex-col w-full border"
                style={{
                  borderColor: card.featured ? 'rgba(212,175,95,0.28)' : 'rgba(154,154,154,0.12)',
                  background: card.featured ? '#0A0A0A' : '#0F0F0F',
                }}
                whileHover={{ y: -8, transition: { duration: 0.6, ease: EASE_APPLE } }}
              >
                {/* Champagne glow for the featured (most premium) card */}
                {card.featured && (
                  <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{ background: 'radial-gradient(ellipse 90% 50% at 50% -8%, rgba(212,175,95,0.09) 0%, transparent 70%)' }}
                  />
                )}

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 'clamp(180px, 18vw, 230px)' }}>
                  <div
                    className="absolute inset-0 transition-transform duration-[1700ms] group-hover:scale-[1.06]"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                  >
                    <Image
                      src={card.image}
                      alt={card.data.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={card.imageStyle}
                    />
                  </div>
                  <div className="absolute inset-0 pointer-events-none" style={{ background: card.overlay }} />

                  {/* Badge — only on the featured card */}
                  {card.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: EASE_APPLE, delay: 0.55 }}
                        className="text-[9px] tracking-[0.26em] uppercase font-light px-3.5 py-1.5"
                        style={{
                          border: '1px solid rgba(212,175,95,0.50)',
                          color: 'rgba(212,175,95,0.95)',
                          background: 'rgba(6,6,6,0.72)',
                          backdropFilter: 'blur(16px)',
                          WebkitBackdropFilter: 'blur(16px)',
                          letterSpacing: '0.26em',
                        }}
                      >
                        {card.badge}
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 p-7 md:p-8">

                  {/* Price row */}
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    <div>
                      <p className="text-[9px] tracking-[0.20em] uppercase font-light mb-1.5" style={{ color: 'rgba(212,175,95,0.50)' }}>
                        {card.data.priceNote}
                      </p>
                      <div
                        className="font-light text-warm-white leading-none"
                        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', letterSpacing: '-0.04em' }}
                      >
                        {card.data.price}
                      </div>
                    </div>
                    <span className="text-[9px] tracking-[0.16em] uppercase font-light text-right" style={{ color: 'rgba(184,184,184,0.45)' }}>
                      {card.data.subtext}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <h3
                    className="font-light text-warm-white mb-2 leading-snug"
                    style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', letterSpacing: '-0.02em' }}
                  >
                    {card.data.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed mb-5" style={{ color: '#A8A8A8' }}>
                    {card.data.desc}
                  </p>

                  {/* Items list */}
                  <div className="flex flex-col gap-2 mb-6">
                    {card.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 text-[10px] mt-0.5 font-light" style={{ color: 'rgba(212,175,95,0.50)' }}>
                          ——
                        </span>
                        <span className="text-xs font-light leading-relaxed" style={{ color: '#B0B0B0' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href="/booking"
                      className={
                        card.featured
                          ? 'btn-ea-primary w-full justify-center active:opacity-70'
                          : 'btn-ea-ghost w-full justify-center text-[11px] tracking-[0.14em] active:opacity-70'
                      }
                    >
                      {card.data.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
