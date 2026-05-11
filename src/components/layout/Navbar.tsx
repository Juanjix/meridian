'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-sm border-b border-silver/10'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Wordmark */}
        <Link
          href="/"
          className="text-[11px] tracking-[0.28em] uppercase font-light text-warm-white/90 hover:text-warm-white transition-colors duration-300"
        >
          Executive Arrival
        </Link>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { href: '/#experience', label: t.nav.experience },
            { href: '/membership', label: t.nav.membership },
            { href: '/booking', label: t.nav.reserve },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.16em] uppercase font-light text-silver-mid hover:text-warm-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: lang toggle + CTA */}
        <div className="flex items-center gap-6">
          {/* Language toggle */}
          <div className="hidden sm:flex items-center gap-0">
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

          {/* CTA */}
          <Link href="/membership" className="btn-ea-primary text-[10px] px-5 py-2.5 hidden sm:inline-flex">
            {t.nav.requestAccess}
          </Link>
        </div>
      </nav>
    </header>
  )
}
