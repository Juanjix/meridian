'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerSlow, EASE_CINEMA, EASE_APPLE } from '@/lib/animations'

export function HeroSection() {
  const { t } = useLanguage()
  const { scrollY } = useScroll()

  // Parallax — image drifts slightly slower than scroll
  const bgY = useTransform(scrollY, [0, 900], [0, -130])
  // Content drifts and fades as user scrolls away
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0.25])
  const contentY = useTransform(scrollY, [0, 450], [0, 30])

  return (
    <section className="relative min-h-screen bg-obsidian flex flex-col justify-end overflow-hidden noise-overlay vignette">

      {/* ── Parallax background ─────────────────────────────────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-14%] gpu"
      >
        {/* Fallback image — replace with experience-focused imagery (hotel arrival, golden hour, etc.) */}
        <Image
          src="/vehicles/van-exterior.jpg"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
          alt="Private experience in Buenos Aires"
        />

        {/* Cinematic video overlay — covers image when available */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Base tint */}
        <div className="absolute inset-0 bg-obsidian/52" />

        {/* Layered cinematic overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              'linear-gradient(180deg, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.62) 22%, rgba(8,8,8,0.32) 50%, transparent 70%)',
              'linear-gradient(0deg, rgba(8,8,8,1) 0%, rgba(8,8,8,0.82) 28%, rgba(8,8,8,0.32) 55%, transparent 70%)',
              'radial-gradient(ellipse 80% 70% at 15% 65%, rgba(8,8,8,0.50) 0%, transparent 65%)',
            ].join(', '),
          }}
        />
      </motion.div>

      {/* ── Top atmospheric line ─────────────────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/18 to-transparent z-10" />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-28 pt-28 md:pt-40 w-full"
      >
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >

          {/* ── Eyebrow ── */}
          <motion.div variants={fadeIn} className="flex items-center gap-3 md:gap-4 mb-10 md:mb-14">
            <motion.span
              initial={{ scaleX: 0, transformOrigin: '0%' }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: EASE_APPLE, delay: 0.1 }}
              className="block w-6 md:w-8 h-px bg-champagne/60 gpu shrink-0"
            />
            <span
              className="ea-label text-warm-white/85"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.95)' }}
            >
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* ── Main headline ── */}
          <motion.h1
            variants={fadeUp}
            className="font-light leading-[0.92] text-warm-white mb-8 md:mb-10"
            style={{
              fontSize: 'clamp(3rem, 9vw, 8.5rem)',
              letterSpacing: '-0.045em',
              textShadow: '0 2px 24px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,1)',
            }}
          >
            <span className="block">{t.hero.headline1}</span>
            <span className="block" style={{ color: 'rgba(240,236,230,0.75)' }}>
              {t.hero.headline2}
            </span>
          </motion.h1>

          {/* ── Champagne divider ── */}
          <motion.div variants={fadeIn} className="w-8 md:w-10 h-px bg-champagne/30 mb-8 md:mb-10" />

          {/* ── Sub intro ── */}
          <motion.p
            variants={fadeUp}
            className="font-light leading-relaxed mb-6 md:mb-7"
            style={{
              fontSize: 'clamp(0.84rem, 1.3vw, 0.94rem)',
              color: 'rgba(184,184,184,0.85)',
              letterSpacing: '0.01em',
              textShadow: '0 1px 12px rgba(0,0,0,0.9)',
              maxWidth: '36rem',
            }}
          >
            {t.hero.sub}
          </motion.p>

          {/* ── Services list — staggered reveal ── */}
          <div className="mb-6 md:mb-7 flex flex-col gap-2">
            {[...t.hero.services].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: EASE_CINEMA, delay: 1.05 + i * 0.13 }}
                className="flex items-center gap-3"
              >
                <span
                  className="shrink-0 h-px bg-champagne/30"
                  style={{ width: '12px' }}
                />
                <span
                  className="font-light"
                  style={{
                    fontSize: 'clamp(0.71rem, 1.05vw, 0.80rem)',
                    color: 'rgba(196,186,176,0.58)',
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    textShadow: '0 1px 8px rgba(0,0,0,0.95)',
                  }}
                >
                  {service}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ── Coda — champagne accent ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_CINEMA, delay: 1.62 }}
            className="font-light mb-10 md:mb-14"
            style={{
              fontSize: 'clamp(0.71rem, 1.05vw, 0.80rem)',
              color: 'rgba(212,175,95,0.62)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textShadow: '0 1px 8px rgba(0,0,0,0.95)',
            }}
          >
            {t.hero.subCoda}
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4"
          >
            <Link href="/booking" className="btn-ea-primary w-full sm:w-auto active:opacity-70">
              {t.hero.cta1}
            </Link>
            <Link href="/#experiences" className="btn-ea-ghost w-full sm:w-auto active:opacity-70">
              {t.hero.cta2}
            </Link>
          </motion.div>

          {/* ── Brand mark ── */}
          <motion.div variants={fadeIn} className="mt-10 md:mt-14 flex items-center gap-4">
            <div className="w-8 h-px bg-champagne/25" />
            <span
              className="text-2xs font-light tracking-[0.18em] uppercase"
              style={{ color: 'rgba(184,184,184,0.45)' }}
            >
              Buenos Aires · Since 2024
            </span>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2, ease: EASE_CINEMA }}
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
