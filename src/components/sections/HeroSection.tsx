'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUp, fadeIn, staggerContainer, EASE_CINEMA } from '@/lib/animations'
import { FOUNDERS_AVAILABLE, FOUNDERS_TOTAL } from '@/lib/utils'

export function HeroSection() {
  const { t } = useLanguage()
  const { scrollY } = useScroll()

  // Parallax: background drifts up at 30% of scroll speed
  const bgY = useTransform(scrollY, [0, 800], [0, -160])
  // Subtle foreground text fade on scroll
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.3])

  return (
    <section className="relative min-h-screen bg-obsidian flex flex-col justify-end overflow-hidden">

      {/* Parallax background image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-15%]"
      >
        <Image
          src="/vehicles/van-exterior.jpg"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          alt="Executive Arrival — Toyota HiAce Executive"
        />
        {/* Cinematic dark overlay: heavy on top/bottom, lighter in center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.45) 40%, rgba(8,8,8,0.65) 75%, rgba(8,8,8,0.92) 100%)',
          }}
        />
      </motion.div>

      {/* Subtle top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-40 w-full"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex items-center gap-4 mb-12">
            <span className="block w-8 h-px bg-champagne/50" />
            <span className="ea-label text-champagne/80">
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-light leading-[0.95] text-warm-white mb-10"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', letterSpacing: '-0.04em' }}
          >
            <span className="block">{t.hero.headline1}</span>
            <span className="block" style={{ color: 'rgba(240,236,230,0.75)' }}>
              {t.hero.headline2}
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            className="text-silver-light font-light leading-relaxed mb-14 max-w-md"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
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

          {/* Availability indicator */}
          <motion.div variants={fadeIn} className="mt-12 flex items-center gap-4">
            <div className="flex gap-1">
              {Array.from({ length: FOUNDERS_TOTAL }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-1 rounded-full ${
                    i < FOUNDERS_TOTAL - FOUNDERS_AVAILABLE
                      ? 'bg-champagne/80'
                      : 'bg-silver/20'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xs text-silver-light/70 font-light tracking-[0.14em]">
              {t.hero.availabilityLabel(FOUNDERS_AVAILABLE, FOUNDERS_TOTAL)}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1, ease: EASE_CINEMA }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-silver/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
