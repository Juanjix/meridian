import { EXPERIENCES_PER_MEMBERSHIP, FOUNDERS_TOTAL, MEMBERSHIP_PRICE_USD } from '@/lib/utils'

const stats = [
  { value: String(EXPERIENCES_PER_MEMBERSHIP), label: 'Experiencias incluidas', sub: 'por membresía' },
  { value: String(FOUNDERS_TOTAL), label: 'Membresías founders', sub: 'edición limitada' },
  { value: '100%', label: 'Transferible', sub: 'sin restricciones' },
  { value: `USD ${MEMBERSHIP_PRICE_USD.toLocaleString()}`, label: 'Pago único', sub: 'sin renovación' },
]

export function StatsSection() {
  return (
    <section className="bg-midnight py-1">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-10 text-center ${
                i < stats.length - 1 ? 'border-r border-ivory/8' : ''
              }`}
            >
              <div className="font-serif font-light text-3xl text-gold mb-1">{stat.value}</div>
              <div className="text-2xs text-ivory/60 tracking-wider uppercase">{stat.label}</div>
              <div className="text-2xs text-ivory/30 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
