'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { membershipSchema, type MembershipFormData } from '@/lib/validations'
import { cn, MEMBERSHIP_PRICE_USD, EXPERIENCES_PER_MEMBERSHIP } from '@/lib/utils'
import type { PaymentMethod } from '@/types'

const WIRE_FIELDS = [
  ['Bank', 'Banco Galicia'],
  ['CBU', '0070123400001234567890'],
  ['Alias', 'BAVITA.TRANSFER'],
] as const

export default function CheckoutPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const c = t.checkoutPage

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mercadopago')
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
    defaultValues: { paymentMethod: 'mercadopago', installments: 1 },
  })

  const onSubmit = async (data: MembershipFormData) => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, paymentMethod }),
      })
      const json = await res.json()
      if (json.success) {
        if (paymentMethod === 'transfer') {
          router.push('/checkout/confirmed?code=' + json.memberCode)
        } else {
          router.push(json.checkoutUrl)
        }
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const installmentOptions = c.installmentOptions(MEMBERSHIP_PRICE_USD)
  const summaryRows = c.summaryRows(MEMBERSHIP_PRICE_USD, EXPERIENCES_PER_MEMBERSHIP)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian pt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">

          <div className="max-w-xl mb-12">
            <div className="ea-label text-silver/60 mb-4">{c.eyebrow}</div>
            <h1
              className="font-light text-warm-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em' }}
            >
              {c.headline}
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

              {/* Form */}
              <div className="lg:col-span-3 flex flex-col gap-6">

                {/* Personal data */}
                <div className="bg-carbon border border-silver/10 p-7">
                  <div className="ea-label mb-6">{c.holderSection}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <label className="ea-label mb-2 block">{c.nameLabel} *</label>
                      <input {...register('name')} className="input-ea" placeholder={c.namePlaceholder} />
                      {errors.name && <p className="text-2xs text-red-400 mt-1.5">{errors.name.message}</p>}
                    </div>
                    <div className="col-span-1">
                      <label className="ea-label mb-2 block">
                        {c.companyLabel} <span className="normal-case">{c.optional}</span>
                      </label>
                      <input {...register('company')} className="input-ea" placeholder={c.companyLabel} />
                    </div>
                    <div className="col-span-1">
                      <label className="ea-label mb-2 block">{c.emailLabel} *</label>
                      <input {...register('email')} type="email" className="input-ea" placeholder="email@company.com" />
                      {errors.email && <p className="text-2xs text-red-400 mt-1.5">{errors.email.message}</p>}
                    </div>
                    <div className="col-span-1">
                      <label className="ea-label mb-2 block">{c.whatsappLabel} *</label>
                      <input {...register('whatsapp')} type="tel" className="input-ea" placeholder={c.whatsappPlaceholder} />
                      {errors.whatsapp && <p className="text-2xs text-red-400 mt-1.5">{errors.whatsapp.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Payment method */}
                <div className="bg-carbon border border-silver/10 p-7">
                  <div className="ea-label mb-6">{c.paymentSection}</div>

                  <div className="grid grid-cols-3 gap-2 mb-7">
                    {c.paymentMethods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id)}
                        className={cn(
                          'p-4 border text-left transition-all duration-200',
                          paymentMethod === m.id
                            ? 'border-champagne/40 bg-carbon-light'
                            : 'border-silver/10 hover:border-silver/25'
                        )}
                      >
                        <div className={cn(
                          'text-xs font-light mb-1',
                          paymentMethod === m.id ? 'text-warm-white' : 'text-silver-light'
                        )}>
                          {m.label}
                        </div>
                        <div className="text-2xs text-silver font-light">{m.sub}</div>
                      </button>
                    ))}
                  </div>

                  {/* Card fields */}
                  {(paymentMethod === 'mercadopago' || paymentMethod === 'stripe') && (
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="ea-label mb-2 block">{c.cardNumberLabel}</label>
                        <input {...register('cardNumber')} className="input-ea" placeholder="4242 4242 4242 4242" maxLength={19} />
                      </div>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div>
                          <label className="ea-label mb-2 block">{c.expiryLabel}</label>
                          <input {...register('cardExpiry')} className="input-ea" placeholder="MM / YY" maxLength={7} />
                        </div>
                        <div>
                          <label className="ea-label mb-2 block">{c.cvvLabel}</label>
                          <input {...register('cardCvv')} className="input-ea" placeholder="123" maxLength={4} />
                        </div>
                      </div>
                      {paymentMethod === 'mercadopago' && (
                        <div>
                          <label className="ea-label mb-2 block">{c.installmentsLabel}</label>
                          <select {...register('installments', { valueAsNumber: true })} className="input-ea">
                            {installmentOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Wire transfer */}
                  {paymentMethod === 'transfer' && (
                    <div className="bg-graphite border border-silver/10 p-6">
                      <div className="ea-label mb-5">{c.wireTitle}</div>
                      <div className="flex flex-col gap-3">
                        {[
                          ...WIRE_FIELDS,
                          ['Holder', 'BA Vita Luxury Transfer SRL'],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between text-xs">
                            <span className="text-silver font-light">{k}</span>
                            <span className="text-warm-white font-light">{v}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-2xs text-silver mt-5 leading-relaxed">
                        {c.wireNote('hola@millenniumtravel.com.ar').split('hola@millenniumtravel.com.ar')[0]}
                        <a href="mailto:hola@millenniumtravel.com.ar" className="text-champagne/80 hover:text-champagne transition-colors">
                          hola@millenniumtravel.com.ar
                        </a>
                        {c.wireNote('hola@millenniumtravel.com.ar').split('hola@millenniumtravel.com.ar')[1]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-ea-primary w-full justify-center py-4 text-xs"
                >
                  {isLoading ? c.processing : c.submit}
                </button>

                <div className="flex items-center justify-center gap-2 text-2xs text-silver/50">
                  <Lock size={10} />
                  {c.security}
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-2">
                <div className="bg-carbon border border-silver/10 p-7 sticky top-24">
                  <div className="ea-label mb-6">{c.summaryLabel}</div>
                  <div className="flex flex-col divide-y divide-silver/10">
                    {summaryRows.map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center py-4 text-xs">
                        <span className="text-silver font-light">{k}</span>
                        <span className="text-warm-white font-light">{v}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-5">
                      <span className="text-sm font-light text-warm-white">{c.total}</span>
                      <span
                        className="font-light text-warm-white"
                        style={{ fontSize: '1.6rem', letterSpacing: '-0.03em' }}
                      >
                        USD {MEMBERSHIP_PRICE_USD.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7 pt-6 border-t border-silver/10 text-2xs text-silver font-light leading-relaxed">
                    <strong className="text-warm-white">23</strong> {c.remaining(23).replace('23 ', '')}
                    {' '}{c.noRestock}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
