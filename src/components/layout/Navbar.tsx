'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'
import { EASE_APPLE, EASE_CINEMA } from '@/lib/animations'

const itemVariants = {
  closed: { opacity: 0, y: 28, filter: 'blur(6px)' },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_CINEMA, delay: 0.08 + i * 0.07 },
  }),
}

const footerVariants = {
  closed: { opacity: 0, y: 12 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_APPLE, delay: 0.38 } },
}

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const savedScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // iOS-safe scroll lock
  useEffect(() => {
    if (menuOpen) {
      savedScrollY.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${savedScrollY.current}px`
      document.body.style.width = '100%'
      document.body.style.overflowY = 'scroll'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
      if (savedScrollY.current) {
        window.scrollTo(0, savedScrollY.current)
      }
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const links = [
    { href: '/#experience', label: t.nav.experience, num: '01' },
    { href: '/membership', label: t.nav.membership, num: '02' },
    { href: '/booking', label: t.nav.reserve, num: '03' },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled || menuOpen
            ? 'bg-obsidian/96 backdrop-blur-md border-b border-silver/10'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between">

          {/* Wordmark */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-[11px] tracking-[0.28em] uppercase font-light text-warm-white/90 hover:text-warm-white transition-colors duration-300 relative z-10"
          >
            Executive Arrival
          </Link>

          {/* Center links — desktop only */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.16em] uppercase font-light text-silver-mid hover:text-warm-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-6">

            {/* Language toggle — desktop */}
            <div className="hidden sm:flex items-center">
              <button
                onClick={() => setLang('en')}
                className={cn(
                  'text-[10px] tracking-[0.18em] uppercase font-light px-2 py-1 transition-colors duration-200',
                  lang === 'en' ? 'text-warm-white' : 'text-silver hover:text-silver-light'
                )}
              >
                EN
              </button>
              <span className="text-silver/30 text-[10px]">|</span>
              <button
                onClick={() => setLang('es')}
                className={cn(
                  'text-[10px] tracking-[0.18em] uppercase font-light px-2 py-1 transition-colors duration-200',
                  lang === 'es' ? 'text-warm-white' : 'text-silver hover:text-silver-light'
                )}
              >
                ES
              </button>
            </div>

            {/* CTA — desktop */}
            <Link href="/membership" className="btn-ea-primary text-[10px] px-5 py-2.5 hidden sm:inline-flex">
              {t.nav.requestAccess}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden relative w-11 h-11 flex items-center justify-center -mr-1.5 touch-manipulation"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-[22px] flex flex-col gap-[5px]">
                <motion.span
                  className="block h-px bg-warm-white origin-center"
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.32, ease: EASE_APPLE }}
                />
                <motion.span
                  className="block h-px bg-warm-white"
                  animate={menuOpen ? { opacity: 0, scaleX: 0.5 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2, ease: EASE_APPLE }}
                />
                <motion.span
                  className="block h-px bg-warm-white origin-center"
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.32, ease: EASE_APPLE }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile fullscreen menu ──────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_CINEMA } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.28, ease: EASE_APPLE } }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col md:hidden overflow-hidden"
          >
            {/* Atmospheric layers */}
            <div className="absolute inset-0 noise-overlay pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: [
                  'radial-gradient(ellipse 90% 55% at 85% 15%, rgba(28,28,28,0.9) 0%, transparent 60%)',
                  'radial-gradient(ellipse 60% 40% at 10% 85%, rgba(20,20,20,0.6) 0%, transparent 55%)',
                ].join(', '),
              }}
            />

            {/* Spacer for navbar height */}
            <div className="h-16 shrink-0" />

            {/* Navigation content */}
            <div className="relative z-10 flex flex-col flex-1 px-7 pt-6 pb-10 overflow-y-auto">

              {/* Primary nav links */}
              <nav className="flex flex-col mb-auto">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center gap-5 py-6 border-b border-silver/10 active:opacity-50 transition-opacity"
                    >
                      <span className="text-[9px] tracking-[0.22em] text-silver/35 font-light w-5 shrink-0 pt-0.5">
                        {link.num}
                      </span>
                      <span
                        className="font-light text-warm-white flex-1"
                        style={{ fontSize: 'clamp(1.85rem, 9.5vw, 2.6rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
                      >
                        {link.label}
                      </span>
                      <motion.span
                        className="text-silver/20 text-base"
                        initial={{ x: -4, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.22 + i * 0.07, duration: 0.4, ease: EASE_APPLE }}
                      >
                        ↗
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom area */}
              <motion.div
                variants={footerVariants}
                initial="closed"
                animate="open"
                className="mt-10 flex flex-col gap-4"
              >
                {/* CTA */}
                <Link
                  href="/membership"
                  onClick={closeMenu}
                  className="btn-ea-primary w-full justify-center py-4 text-[11px] active:opacity-70"
                >
                  {t.nav.requestAccess}
                </Link>

                {/* Lang + location row */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center">
                    <button
                      onClick={() => setLang('en')}
                      className={cn(
                        'text-[10px] tracking-[0.18em] uppercase font-light px-2.5 py-2 transition-colors',
                        lang === 'en' ? 'text-warm-white' : 'text-silver/60'
                      )}
                    >
                      EN
                    </button>
                    <span className="text-silver/25 text-[9px]">|</span>
                    <button
                      onClick={() => setLang('es')}
                      className={cn(
                        'text-[10px] tracking-[0.18em] uppercase font-light px-2.5 py-2 transition-colors',
                        lang === 'es' ? 'text-warm-white' : 'text-silver/60'
                      )}
                    >
                      ES
                    </button>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-[9px] tracking-[0.18em] uppercase text-silver/35 font-light">
                      Buenos Aires
                    </span>
                    <span className="text-[9px] tracking-[0.12em] uppercase text-silver/25 font-light">
                      Executive Ground
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
