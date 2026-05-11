'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerSlow, EASE_CINEMA, EASE_APPLE } from '@/lib/animations'
import { FOUNDERS_AVAILABLE, FOUNDERS_TOTAL } from '@/lib/utils'

export function HeroSection() {
  const { t } = useLanguage()
  const { scrollY } = useScroll()

  // Parallax: background drifts up — very subtle, cinematic
  const bgY = useTransform(scrollY, [0, 900], [0, -130])
  // Content fades as you leave the hero
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0.25])
  const contentY = useTransform(scrollY, [0, 450], [0, 30])

  return (
    <section className="relative min-h-screen bg-obsidian flex flex-col justify-end overflow-hidden noise-overlay vignette">

      {/* ── Parallax background image ───────────────────────────────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-14%] gpu"
      >
        <Image
          src="/vehicles/van-exterior.jpg"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
          alt="Executive Arrival — Toyota HiAce"
        />

        {/* Base tint — uniform coverage across entire image */}
        <div className="absolute inset-0 bg-obsidian/55" />

        {/* Layered cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              /* Top darkness — strong nav + eyebrow protection */
              'linear-gradient(180deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.72) 25%, rgba(8,8,8,0.40) 50%, transparent 70%)',
              /* Bottom darkness — content readability */
              'linear-gradient(0deg, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.75) 30%, rgba(8,8,8,0.30) 55%, transparent 70%)',
              /* Center left — extra depth behind text block */
              'radial-gradient(ellipse 80% 70% at 15% 65%, rgba(8,8,8,0.55) 0%, transparent 65%)',
            ].join(', '),
          }}
        />
      </motion.div>

      {/* ── Atmospheric edge light — single horizontal line ─────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/18 to-transparent z-10" />

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-28 pt-40 w-full"
      >
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex items-center gap-4 mb-14">
            <motion.span
              initial={{ scaleX: 0, transformOrigin: '0%' }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: EASE_APPLE, delay: 0.1 }}
              className="block w-8 h-px bg-champagne/60 gpu"
            />
            <span className="ea-label text-warm-white/85" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.95)' }}>
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline — large display type */}
          <motion.h1
            variants={fadeUp}
            className="font-light leading-[0.92] text-warm-white mb-10"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
              letterSpacing: '-0.045em',
              textShadow: '0 2px 24px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,1)',
            }}
          >
            <span className="block">{t.hero.headline1}</span>
            <span
              className="block"
              style={{ color: 'rgba(240,236,230,0.75)' }}
            >
              {t.hero.headline2}
            </span>
          </motion.h1>

          {/* Divider line */}
          <motion.div
            variants={fadeIn}
            className="w-10 h-px bg-champagne/30 mb-10"
          />

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            className="font-light leading-relaxed mb-14 max-w-sm"
            style={{
              fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
              color: 'rgba(184,184,184,0.90)',
              letterSpacing: '0.01em',
              textShadow: '0 1px 12px rgba(0,0,0,0.9)',
            }}
          >
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Link href="/membership" className="btn-ea-primary">
              {t.hero.cta1}
            </Link>
            <Link href="/#experience" className="btn-ea-ghost">
              {t.hero.cta2}
            </Link>
          </motion.div>

          {/* Availability dots */}
          <motion.div variants={fadeIn} className="mt-14 flex items-center gap-4">
            <div className="flex gap-[3px]">
              {Array.from({ length: FOUNDERS_TOTAL }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[3px] h-[3px] rounded-full transition-opacity duration-300 ${
                    i < FOUNDERS_TOTAL - FOUNDERS_AVAILABLE
                      ? 'bg-champagne/70'
                      : 'bg-silver/18'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xs font-light tracking-[0.14em]" style={{ color: 'rgba(184,184,184,0.55)' }}>
              {t.hero.availabilityLabel(FOUNDERS_AVAILABLE, FOUNDERS_TOTAL)}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1.2, ease: EASE_CINEMA }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          className="w-px h-11 bg-gradient-to-b from-silver/35 to-transparent"
        />
      </motion.div>
    </section>
  )
}
