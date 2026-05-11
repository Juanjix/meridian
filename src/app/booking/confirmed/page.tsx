import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function BookingConfirmedPage({
  searchParams,
}: {
  searchParams: { code?: string }
}) {
  const code = searchParams.code ?? 'MRD-2025-001'

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-24 flex items-center">
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <CheckCircle size={40} className="text-gold mx-auto mb-6" strokeWidth={1} />

          <h1 className="text-3xl font-serif font-light text-midnight mb-3">
            Experiencia confirmada.
          </h1>
          <p className="text-sm text-slate-mid font-light leading-relaxed mb-10 max-w-sm mx-auto">
            Tu reserva fue recibida. Recibirás confirmación por WhatsApp
            en los próximos 15 minutos con todos los detalles.
          </p>

          <div className="bg-midnight border border-gold/15 p-8 text-left mb-8">
            <div className="overline text-gold/50 mb-5">Referencia de reserva</div>
            {[
              ['Código', code],
              ['Aeropuerto', 'EZE — Ezeiza Internacional'],
              ['Estado', 'Confirmada'],
              ['Experiencias restantes', '9 de 10'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-2.5 border-b border-ivory/8 text-xs last:border-b-0">
                <span className="text-ivory/40 font-light">{k}</span>
                <span className={cn('font-medium', k === 'Estado' ? 'text-green-400' : 'text-ivory')}>
                  {v}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <Link href="/booking" className="btn-gold">Nueva reserva</Link>
            <Link href="/" className="btn-ghost">Volver al inicio</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
