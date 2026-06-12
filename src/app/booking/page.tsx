'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Minus, Plus } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import {
  bookingStep1Schema,
  bookingStep2Schema,
  bookingStep3Schema,
  type BookingStep1Data,
  type BookingStep2Data,
  type BookingStep3Data,
} from '@/lib/validations'
import { cn, formatDate, formatTime, AIRPORTS, generateCode } from '@/lib/utils'
import type { Airport, CateringPreference } from '@/types'

type AllBookingData = BookingStep1Data & BookingStep2Data & BookingStep3Data

export default function BookingPage() {
  const router = useRouter()
  const { t, lang } = useLanguage()
  const b = t.bookingPage

  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [allData, setAllData] = useState<Partial<AllBookingData>>({
    airport: 'EZE',
    passengerCount: 1,
    cateringPreference: 'standard',
  })

  const form1 = useForm<BookingStep1Data>({
    resolver: zodResolver(bookingStep1Schema),
    defaultValues: { airport: 'EZE', ...allData },
  })
  const form2 = useForm<BookingStep2Data>({
    resolver: zodResolver(bookingStep2Schema),
    defaultValues: { passengerCount: 1, ...allData },
  })
  const form3 = useForm<BookingStep3Data>({
    resolver: zodResolver(bookingStep3Schema),
    defaultValues: { cateringPreference: 'standard', ...allData },
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  const onStep1 = (data: BookingStep1Data) => { setAllData((p) => ({ ...p, ...data })); setStep(2) }
  const onStep2 = (data: BookingStep2Data) => { setAllData((p) => ({ ...p, ...data })); setStep(3) }
  const onStep3 = (data: BookingStep3Data) => { setAllData((p) => ({ ...p, ...data })); setStep(4) }

  const onConfirm = async () => {
    setIsLoading(true)
    setHasError(false)
    try {
      const res = await fetch('/api/confirm-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...allData,
          language: lang,
          sourceUrl: window.location.href,
        }),
      })
      const json = await res.json()
      if (json.success) {
        router.push('/booking/confirmed?code=' + json.confirmationCode)
        return
      }
      setHasError(true)
    } catch (err) {
      console.error(err)
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-obsidian pt-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">

          {/* Header */}
          <div className="mb-12">
            <div className="ea-label mb-4">{b.eyebrow}</div>
            <h1
              className="font-light text-warm-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em' }}
            >
              {b.headline}
            </h1>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-4 gap-1 mb-10 md:mb-12">
            {b.steps.map((label, i) => {
              const n = i + 1
              return (
                <div key={label} className="text-center">
                  <div
                    className={cn(
                      'h-px mx-auto mb-3 transition-all duration-700',
                      n < step
                        ? 'bg-champagne/70'
                        : n === step
                        ? 'bg-warm-white/60'
                        : 'bg-silver/15'
                    )}
                  />
                  <span
                    className={cn(
                      'text-2xs tracking-[0.14em] uppercase',
                      n === step
                        ? 'text-warm-white font-light'
                        : n < step
                        ? 'text-champagne/60'
                        : 'text-silver/40'
                    )}
                  >
                    {n} · {label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Form card */}
          <div className="bg-carbon border border-silver/10 p-8 md:p-10">

            {/* Step 1 — Flight */}
            {step === 1 && (
              <form onSubmit={form1.handleSubmit(onStep1)} className="flex flex-col gap-7">
                <div>
                  <label className="ea-label mb-4 block">{b.step1.airportLabel}</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(Object.entries(AIRPORTS) as [Airport, string][]).map(([code, name]) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => form1.setValue('airport', code)}
                        className={cn(
                          'p-5 border text-left transition-all duration-200',
                          form1.watch('airport') === code
                            ? 'border-champagne/40 bg-carbon-light'
                            : 'border-silver/15 hover:border-silver/30'
                        )}
                      >
                        <div
                          className={cn(
                            'text-xl font-light mb-1',
                            form1.watch('airport') === code ? 'text-champagne' : 'text-warm-white/60'
                          )}
                          style={{ letterSpacing: '-0.02em' }}
                        >
                          {code}
                        </div>
                        <div className="text-2xs text-silver-light font-light">{name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="ea-label mb-2 block">{b.step1.dateLabel} *</label>
                    <input {...form1.register('flightDate')} type="date" className="input-ea" />
                    {form1.formState.errors.flightDate && (
                      <p className="text-2xs text-red-400 mt-1.5">{form1.formState.errors.flightDate.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="ea-label mb-2 block">{b.step1.timeLabel} *</label>
                    <input {...form1.register('flightTime')} type="time" className="input-ea" />
                    {form1.formState.errors.flightTime && (
                      <p className="text-2xs text-red-400 mt-1.5">{form1.formState.errors.flightTime.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="ea-label mb-2 block">
                    {b.step1.flightLabel} <span className="normal-case">{b.step1.optional}</span>
                  </label>
                  <input {...form1.register('flightNumber')} className="input-ea" placeholder={b.step1.flightPlaceholder} />
                  <p className="text-2xs text-silver-light mt-1.5">{b.step1.flightNote}</p>
                </div>

                <div>
                  <label className="ea-label mb-2 block">{b.step1.destLabel} *</label>
                  <input {...form1.register('destination')} className="input-ea" placeholder={b.step1.destPlaceholder} />
                  {form1.formState.errors.destination && (
                    <p className="text-2xs text-red-400 mt-1.5">{form1.formState.errors.destination.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-ea-primary w-full sm:w-auto justify-center active:opacity-70">
                    {b.step1.continue}
                  </button>
                </div>
              </form>
            )}

            {/* Step 2 — Passenger */}
            {step === 2 && (
              <form onSubmit={form2.handleSubmit(onStep2)} className="flex flex-col gap-7">
                <div>
                  <label className="ea-label mb-2 block">{b.step2.nameLabel} *</label>
                  <input
                    {...form2.register('passengerName')}
                    className="input-ea"
                    placeholder={b.step2.namePlaceholder}
                  />
                  <p className="text-2xs text-silver-light mt-1.5">{b.step2.nameNote}</p>
                  {form2.formState.errors.passengerName && (
                    <p className="text-2xs text-red-400 mt-1.5">{form2.formState.errors.passengerName.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="ea-label mb-2 block">{b.step2.emailLabel} *</label>
                    <input
                      {...form2.register('email')}
                      type="email"
                      className="input-ea"
                      placeholder={b.step2.emailPlaceholder}
                    />
                    {form2.formState.errors.email && (
                      <p className="text-2xs text-red-400 mt-1.5">{form2.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="ea-label mb-2 block">{b.step2.phoneLabel} *</label>
                    <input
                      {...form2.register('phone')}
                      type="tel"
                      className="input-ea"
                      placeholder={b.step2.phonePlaceholder}
                    />
                    {form2.formState.errors.phone && (
                      <p className="text-2xs text-red-400 mt-1.5">{form2.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <p className="text-2xs text-silver-light -mt-5">{b.step2.phoneNote}</p>

                <div>
                  <label className="ea-label mb-2 block">
                    {b.step2.companyLabel} <span className="normal-case">{b.step2.optionalCompany}</span>
                  </label>
                  <input {...form2.register('company')} className="input-ea" />
                </div>

                <div>
                  <label className="ea-label mb-4 block">{b.step2.countLabel}</label>
                  <div className="flex items-center gap-5">
                    <button
                      type="button"
                      onClick={() => form2.setValue('passengerCount', Math.max(1, (form2.watch('passengerCount') ?? 1) - 1))}
                      className="w-10 h-10 border border-silver/15 flex items-center justify-center hover:border-champagne/40 transition-colors text-silver-light"
                    >
                      <Minus size={14} />
                    </button>
                    <span
                      className="font-light text-warm-white w-8 text-center"
                      style={{ fontSize: '1.8rem', letterSpacing: '-0.03em' }}
                    >
                      {form2.watch('passengerCount') ?? 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => form2.setValue('passengerCount', Math.min(8, (form2.watch('passengerCount') ?? 1) + 1))}
                      className="w-10 h-10 border border-silver/15 flex items-center justify-center hover:border-champagne/40 transition-colors text-silver-light"
                    >
                      <Plus size={14} />
                    </button>
                    <span className="text-xs text-silver-light font-light">{b.step2.passengerUnit}</span>
                  </div>
                </div>

                <div>
                  <label className="ea-label mb-2 block">
                    {b.step2.codeLabel} <span className="normal-case">{b.step2.optional}</span>
                  </label>
                  <input {...form2.register('membershipCode')} className="input-ea" placeholder={b.step2.codePlaceholder} />
                  <p className="text-2xs text-silver-light mt-1.5">{b.step2.codeNote}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="button" onClick={() => setStep(1)} className="btn-ea-ghost active:opacity-70">
                    {b.step2.back}
                  </button>
                  <button type="submit" className="btn-ea-primary sm:flex-1 justify-center active:opacity-70">
                    {b.step2.continue}
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 — Preferences */}
            {step === 3 && (
              <form onSubmit={form3.handleSubmit(onStep3)} className="flex flex-col gap-7">
                {/* Honeypot — hidden from real users, bots tend to fill every field */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden' }}>
                  <label htmlFor="website">Website</label>
                  <input
                    {...form3.register('website')}
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className="ea-label mb-4 block">{b.step3.cateringLabel}</label>
                  <div className="flex flex-col gap-2">
                    {(Object.keys(b.step3.catering) as CateringPreference[]).map((id) => (
                      <label
                        key={id}
                        className={cn(
                          'flex items-center gap-4 p-5 border cursor-pointer transition-all duration-200',
                          form3.watch('cateringPreference') === id
                            ? 'border-champagne/40 bg-carbon-light'
                            : 'border-silver/10 hover:border-silver/25'
                        )}
                      >
                        <input
                          {...form3.register('cateringPreference')}
                          type="radio"
                          value={id}
                          className="accent-champagne"
                        />
                        <span className="text-xs text-warm-white font-light">
                          {b.step3.catering[id]}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="ea-label mb-2 block">
                    {b.step3.notesLabel} <span className="normal-case">{b.step3.optional}</span>
                  </label>
                  <textarea
                    {...form3.register('cateringNotes')}
                    rows={3}
                    className="input-ea resize-none"
                    placeholder={b.step3.notesPlaceholder}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="button" onClick={() => setStep(2)} className="btn-ea-ghost active:opacity-70">
                    {b.step3.back}
                  </button>
                  <button type="submit" className="btn-ea-primary sm:flex-1 justify-center active:opacity-70">
                    {b.step3.review}
                  </button>
                </div>
              </form>
            )}

            {/* Step 4 — Confirm */}
            {step === 4 && (
              <div className="flex flex-col gap-8">
                <div>
                  <div className="ea-label mb-5">{b.step4.summaryLabel}</div>
                  <div className="border border-silver/10 divide-y divide-silver/10">
                    {[
                      [b.step4.keys.airport, `${allData.airport} — ${AIRPORTS[allData.airport as Airport] ?? ''}`],
                      [b.step4.keys.dateTime, `${formatDate(allData.flightDate ?? '')} · ${formatTime(allData.flightTime ?? '')}`],
                      [b.step4.keys.flight, allData.flightNumber ?? '—'],
                      [b.step4.keys.destination, allData.destination ?? '—'],
                      [b.step4.keys.passengerSign, allData.passengerName ?? '—'],
                      [b.step4.keys.email, allData.email ?? '—'],
                      [b.step4.keys.phone, allData.phone ?? '—'],
                      [b.step4.keys.passengers, String(allData.passengerCount ?? 1)],
                      [b.step4.keys.catering, b.step3.catering[allData.cateringPreference as CateringPreference] ?? '—'],
                      [b.step4.keys.remaining, '9 of 10'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between items-start px-5 py-4 text-xs">
                        <span className="text-silver-light font-light">{k}</span>
                        <span className="text-warm-white font-light text-right max-w-[60%]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-graphite border border-silver/10 p-5 text-2xs text-silver leading-relaxed">
                  {b.step4.note}
                </div>

                {hasError && (
                  <div className="border border-red-400/20 bg-red-400/5 p-5">
                    <p className="text-xs text-warm-white font-light mb-1">{b.step4.errorTitle}</p>
                    <p className="text-2xs text-silver-light leading-relaxed">{b.step4.errorMessage}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="button" onClick={() => setStep(3)} className="btn-ea-ghost active:opacity-70">
                    {b.step4.back}
                  </button>
                  <button
                    onClick={onConfirm}
                    disabled={isLoading}
                    className="btn-ea-primary sm:flex-1 justify-center active:opacity-70"
                  >
                    {isLoading ? b.step4.confirming : hasError ? b.step4.retry : b.step4.confirm}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
