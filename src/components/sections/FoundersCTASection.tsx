import Link from 'next/link'
import { FOUNDERS_AVAILABLE } from '@/lib/utils'

export function FoundersCTASection() {
  return (
    <section className="bg-ivory py-24 border-t border-midnight/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-midnight rounded-none p-12 md:p-16 relative overflow-hidden grain-overlay">
          {/* Gold corner accent */}
          <div className="absolute top-0 right-0 w-48 h-48 border-r border-t border-gold/15 rounded-bl-full" />

          <div className="relative z-10 max-w-xl">
            <div className="overline text-gold/60 mb-6">Founders edition</div>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-ivory mb-4 leading-tight">
              Quedan {FOUNDERS_AVAILABLE} membresías<br />
              <span className="italic text-gold-light">disponibles.</span>
            </h2>
            <p className="text-sm text-ivory/50 font-light leading-relaxed mb-8 max-w-sm">
              La preventa founders cierra al completarse las 30 unidades. 
              Las membresías no se repondrán a este precio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/membership" className="btn-gold">
                Adquirir membresía founders
              </Link>
              <a
                href="mailto:hola@meridianground.com"
                className="btn-ghost border-ivory/20 text-ivory hover:border-ivory/40"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
