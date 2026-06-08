'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerEditorial, EASE_CINEMA, EASE_APPLE } from '@/lib/animations'

export function GiftExperienceSection() {
  const { t } = useLanguage()
  const g = t.giftExperience

  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-8%' })

  const cardAccents = [
    // Transfer — silver/obsidian
    {
      border: 'rgba(154,154,154,0.16)',
      tagColor: 'rgba(184,184,184,0.65)',
      priceColor: '#F0ECE6',
      glow: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(154,154,154,0.07) 0%, transparent 70%)',
    },
    // City — champagne (featured)
    {
      border: 'rgba(212,175,95,0.28)',
      tagColor: 'rgba(212,175,95,0.85)',
      priceColor: '#F0ECE6',
      glow: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,175,95,0.09) 0%, transparent 70%)',
    },
    // Full Day — warm white
    {
      border: 'rgba(154,154,154,0.16)',
      tagColor: 'rgba(184,184,184,0.65)',
      priceColor: '#F0ECE6',
      glow: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(240,236,230,0.04) 0%, transparent 70%)',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="gift"
      className="bg-carbon py-28 md:py-40 overflow-hidden"
    >
      {/* Top separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-champagne/12 to-transparent mb-0" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="ea-label mb-6 justify-center flex"
          >
            {g.label}
          </motion.div>

          <div style={{ overflow: 'hidden', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
            <motion.h2
              initial={{ y: '110%', opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: EASE_CINEMA, delay: 0.1 }}
              className="font-light text-warm-white leading-[0.93]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
            >
              {g.headline1}
              <br />
              <span style={{ color: 'rgba(212,175,95,0.80)' }} className="italic">{g.headline2}</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.0, ease: EASE_CINEMA, delay: 0.28 }}
            className="w-10 h-px mx-auto my-6"
            style={{ background: 'rgba(212,175,95,0.35)' }}
          />

          <motion.p
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            transition={{ delay: 0.35 }}
            className="text-sm font-light leading-relaxed max-w-md mx-auto"
            style={{ color: '#B8B8B8' }}
          >
            {g.sub}
          </motion.p>
        </div>

        {/* ── Gift Cards ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16"
          variants={staggerEditorial}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {g.cards.map((card, i) => {
            const accent = cardAccents[i]
            const isFeatured = i === 1
            return (
              <motion.div
                key={card.id}
                variants={fadeUp}
                className="group relative"
                whileHover={{ y: -8, transition: { duration: 0.55, ease: EASE_APPLE } }}
              >
                <div
                  className="relative flex flex-col h-full p-8 md:p-9 overflow-hidden"
                  style={{
                    background: isFeatured ? '#111111' : '#0D0D0D',
                    border: `1px solid ${accent.border}`,
                  }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: accent.glow }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: isFeatured
                        ? 'linear-gradient(90deg, transparent, rgba(212,175,95,0.5), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(154,154,154,0.2), transparent)',
                    }}
                  />

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Tag */}
                    <div
                      className="text-[9px] tracking-[0.22em] uppercase font-light mb-8"
                      style={{ color: accent.tagColor }}
                    >
                      {card.tag}
                    </div>

                    {/* Price */}
                    <div
                      className="font-light leading-none mb-3"
                      style={{
                        fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                        letterSpacing: '-0.045em',
                        color: accent.priceColor,
                      }}
                    >
                      {card.price}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-light mb-4 leading-snug"
                      style={{
                        fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                        letterSpacing: '-0.018em',
                        color: isFeatured ? '#F0ECE6' : 'rgba(240,236,230,0.80)',
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-xs font-light leading-relaxed flex-1" style={{ color: '#909090' }}>
                      {card.desc}
                    </p>

                    {/* Divider */}
                    <div
                      className="w-full h-px my-7"
                      style={{
                        background: isFeatured
                          ? 'rgba(212,175,95,0.14)'
                          : 'rgba(154,154,154,0.10)',
                      }}
                    />

                    {/* CTA */}
                    <button
                      className="w-full text-center text-[11px] font-light tracking-[0.18em] uppercase py-3 border transition-all duration-300 active:opacity-70"
                      style={{
                        borderColor: isFeatured ? 'rgba(212,175,95,0.35)' : 'rgba(154,154,154,0.20)',
                        color: isFeatured ? 'rgba(212,175,95,0.90)' : 'rgba(240,236,230,0.65)',
                        background: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = isFeatured ? 'rgba(212,175,95,0.65)' : 'rgba(154,154,154,0.40)'
                        e.currentTarget.style.color = isFeatured ? 'rgba(212,175,95,1)' : 'rgba(240,236,230,1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = isFeatured ? 'rgba(212,175,95,0.35)' : 'rgba(154,154,154,0.20)'
                        e.currentTarget.style.color = isFeatured ? 'rgba(212,175,95,0.90)' : 'rgba(240,236,230,0.65)'
                      }}
                    >
                      {g.cta}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── For whom + CTA ── */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          {/* For whom badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {g.forWhom.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.16em] uppercase font-light px-4 py-1.5 border"
                style={{
                  borderColor: 'rgba(154,154,154,0.15)',
                  color: 'rgba(184,184,184,0.60)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Sub note */}
          <p
            className="text-2xs font-light tracking-[0.12em] text-center"
            style={{ color: 'rgba(154,154,154,0.55)' }}
          >
            {g.ctaSub}
          </p>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-silver/8 to-transparent mt-28 md:mt-40" />
    </section>
  )
}
