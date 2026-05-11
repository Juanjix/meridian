import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function CheckoutConfirmedPage({
  searchParams,
}: {
  searchParams: { code?: string }
}) {
  const memberCode = searchParams.code ?? 'MRD-F-023'

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-24 flex items-center">
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <CheckCircle size={40} className="text-gold mx-auto mb-6" strokeWidth={1} />

          <h1 className="text-3xl font-serif font-light text-midnight mb-3">
            Bienvenido,<br />
            <span className="italic text-gold">Founder Member.</span>
          </h1>
          <p className="text-sm text-slate-mid font-light leading-relaxed mb-10 max-w-sm mx-auto">
            Tu membresía fue procesada. En los próximos minutos recibirás
            tu código de miembro y acceso al WhatsApp concierge.
          </p>

          {/* Confirmation card */}
          <div className="bg-midnight border border-gold/15 p-8 text-left mb-8">
            <div className="overline text-gold/50 mb-5">Tu membresía</div>
            {[
              ['Código', memberCode],
              ['Tipo', 'Founders Edition'],
              ['Experiencias', '10 disponibles'],
              ['Vencimiento', 'Sin vencimiento'],
              ['Transferible', 'Sí — ilimitado'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-2.5 border-b border-ivory/8 text-xs">
                <span className="text-ivory/40 font-light">{k}</span>
                <span className="text-ivory font-medium">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <Link href="/booking" className="btn-gold">
              Hacer tu primera reserva →
            </Link>
            <Link href="/" className="btn-ghost">
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
