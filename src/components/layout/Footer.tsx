'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-graphite border-t border-silver/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="text-[11px] tracking-[0.28em] uppercase font-light text-warm-white mb-3">
              BA Vita Luxury Transfer
            </div>
            <div className="text-2xs tracking-[0.18em] uppercase text-silver mb-1">
              {t.footer.tagline}
            </div>
            <div className="text-2xs text-silver/60">
              {t.footer.location}
            </div>
          </div>

          {/* Links columns */}
          <div className="flex gap-12 md:gap-24">
            <div>
              <div className="ea-label mb-5">{t.footer.servicesLabel}</div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/membership"
                  className="text-xs font-light text-silver hover:text-warm-white transition-colors duration-200"
                >
                  {t.footer.links.membership}
                </Link>
                <Link
                  href="/booking"
                  className="text-xs font-light text-silver hover:text-warm-white transition-colors duration-200"
                >
                  {t.footer.links.reserve}
                </Link>
              </div>
            </div>

            <div>
              <div className="ea-label mb-5">{t.footer.contactLabel}</div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${t.footer.contact.email}`}
                  className="text-xs font-light text-silver hover:text-warm-white transition-colors duration-200"
                >
                  {t.footer.contact.email}
                </a>
                <a
                  href="https://wa.me/5491100000000"
                  className="text-xs font-light text-silver hover:text-warm-white transition-colors duration-200"
                >
                  {t.footer.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-7 md:pt-8 border-t border-silver/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="text-2xs font-light text-silver/50">
            {t.footer.copyright(year)}
          </div>
          <div className="text-2xs font-light text-silver/40 tracking-[0.12em] uppercase">
            {t.footer.sub}
          </div>
        </div>
      </div>
    </footer>
  )
}
