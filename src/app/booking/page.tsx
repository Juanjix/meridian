'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Minus, Plus } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import {
  bookingStep1Schema,
  bookingStep2Schema,
  bookingStep3Schema,
  type BookingStep1Data,
  type BookingStep2Data,
  type BookingStep3Data,
} from '@/lib/validations'
import { cn, formatDate, formatTime, AIRPORTS, CATERING_LABELS, generateCode } from '@/lib/utils'
import type { Airport, CateringPreference } from '@/types'

const STEPS = ['Flight', 'Passenger', 'Preferences', 'Confirm']

type AllBookingData = BookingStep1Data & BookingStep2Data & BookingStep3Data

export default function BookingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
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

  const onStep1 = (data: BookingStep1Data) => { setAllData((p) => ({ ...p, ...data })); setStep(2) }
  const onStep2 = (data: BookingStep2Data) => { setAllData((p) => ({ ...p, ...data })); setStep(3) }
  const onStep3 = (data: BookingStep3Data) => { setAllData((p) => ({ ...p, ...data })); setStep(4) }

  const onConfirm = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/confirm-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allData),
      })
      const json = await res.json()
      if (json.success) router.push('/booking/confirmed?code=' + json.confirmationCode)
    } catch (err) {
      console.error(err)
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
            <div className="ea-label text-silver/60 mb-4">Reserve</div>
            <h1
              className="font-light text-warm-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.04em' }}
            >
              Schedule an Experience
            </h1>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-4 gap-1 mb-12">
            {STEPS.map((label, i) => {
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
                  <label className="ea-label mb-4 block">Airport</label>
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
                        <div className="text-2xs text-silver font-light">{name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="ea-label mb-2 block">Flight date *</label>
                    <input {...form1.register('flightDate')} type="date" className="input-ea" />
                    {form1.formState.errors.flightDate && (
                      <p className="text-2xs text-red-400 mt-1.5">{form1.formState.errors.flightDate.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="ea-label mb-2 block">Arrival time *</label>
                    <input {...form1.register('flightTime')} type="time" className="input-ea" />
                    {form1.formState.errors.flightTime && (
                      <p className="text-2xs text-red-400 mt-1.5">{form1.formState.errors.flightTime.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="ea-label mb-2 block">Flight number <span className="normal-case">(optional)</span></label>
                  <input {...form1.register('flightNumber')} className="input-ea" placeholder="e.g. AA 930 · LA 406" />
                  <p className="text-2xs text-silver/50 mt-1.5">Allows us to monitor delays in real time.</p>
                </div>

                <div>
                  <label className="ea-label mb-2 block">Final destination *</label>
                  <input {...form1.register('destination')} className="input-ea" placeholder="Hotel, address, or company" />
                  {form1.formState.errors.destination && (
                    <p className="text-2xs text-red-400 mt-1.5">{form1.formState.errors.destination.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-ea-primary">Continue →</button>
                </div>
              </form>
            )}

            {/* Step 2 — Passenger */}
            {step === 2 && (
              <form onSubmit={form2.handleSubmit(onStep2)} className="flex flex-col gap-7">
                <div>
                  <label className="ea-label mb-2 block">Passenger name *</label>
                  <input
                    {...form2.register('passengerName')}
                    className="input-ea"
                    placeholder="Full name as it should appear on the OLED sign"
                  />
                  <p className="text-2xs text-silver/50 mt-1.5">This name will be displayed on the OLED sign at the airport.</p>
                  {form2.formState.errors.passengerName && (
                    <p className="text-2xs text-red-400 mt-1.5">{form2.formState.errors.passengerName.message}</p>
                  )}
                </div>

                <div>
                  <label className="ea-label mb-4 block">Number of passengers</label>
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
                    <span className="text-xs text-silver font-light">passenger(s)</span>
                  </div>
                </div>

                <div>
                  <label className="ea-label mb-2 block">Membership code <span className="normal-case">(optional)</span></label>
                  <input {...form2.register('membershipCode')} className="input-ea" placeholder="e.g. MRD-F-007" />
                  <p className="text-2xs text-silver/50 mt-1.5">If the passenger is not the holder, enter the membership code that authorizes the service.</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setStep(1)} className="btn-ea-ghost">← Back</button>
                  <button type="submit" className="btn-ea-primary">Continue →</button>
                </div>
              </form>
            )}

            {/* Step 3 — Preferences */}
            {step === 3 && (
              <form onSubmit={form3.handleSubmit(onStep3)} className="flex flex-col gap-7">
                <div>
                  <label className="ea-label mb-4 block">Catering preferences</label>
                  <div className="flex flex-col gap-2">
                    {(Object.entries(CATERING_LABELS) as [CateringPreference, string][]).map(([id, label]) => (
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
                        <span className="text-xs text-warm-white font-light">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="ea-label mb-2 block">Additional notes <span className="normal-case">(optional)</span></label>
                  <textarea
                    {...form3.register('cateringNotes')}
                    rows={3}
                    className="input-ea resize-none"
                    placeholder="Special preferences, driver instructions, hotel coordination..."
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setStep(2)} className="btn-ea-ghost">← Back</button>
                  <button type="submit" className="btn-ea-primary">Review booking →</button>
                </div>
              </form>
            )}

            {/* Step 4 — Confirm */}
            {step === 4 && (
              <div className="flex flex-col gap-8">
                <div>
                  <div className="ea-label mb-5">Experience Summary</div>
                  <div className="border border-silver/10 divide-y divide-silver/10">
                    {[
                      ['Airport', `${allData.airport} — ${AIRPORTS[allData.airport as Airport] ?? ''}`],
                      ['Date & time', `${formatDate(allData.flightDate ?? '')} · ${formatTime(allData.flightTime ?? '')}`],
                      ['Flight', allData.flightNumber ?? '—'],
                      ['Destination', allData.destination ?? '—'],
                      ['Passenger / Sign', allData.passengerName ?? '—'],
                      ['Passengers', String(allData.passengerCount ?? 1)],
                      ['Catering', CATERING_LABELS[allData.cateringPreference as CateringPreference] ?? '—'],
                      ['Remaining experiences', '9 of 10'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between items-start px-5 py-4 text-xs">
                        <span className="text-silver font-light">{k}</span>
                        <span className="text-warm-white font-light text-right max-w-[60%]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-graphite border border-silver/10 p-5 text-2xs text-silver leading-relaxed">
                  You will receive confirmation via WhatsApp within 15 minutes. The chauffeur will contact you 30 minutes before the flight arrives.
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(3)} className="btn-ea-ghost">← Back</button>
                  <button
                    onClick={onConfirm}
                    disabled={isLoading}
                    className="btn-ea-primary flex-1 justify-center"
                  >
                    {isLoading ? 'Confirming...' : 'Confirm Experience →'}
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
