import { NextRequest, NextResponse } from 'next/server'
import { generateCode, AIRPORTS, CATERING_LABELS } from '@/lib/utils'
import { reservationSchema } from '@/lib/validations'
import { sendReservationEmail } from '@/lib/email'
import { isRateLimited, getClientIp } from '@/lib/rateLimit'
import type { Airport } from '@/types'

/**
 * POST /api/confirm-booking
 *
 * Registers a new booking/reservation request and notifies the concierge
 * team by email (server-side only — credentials live in env vars, see
 * src/lib/email.ts). In production: also persist the booking to a database
 * and send a WhatsApp confirmation.
 *
 * WHATSAPP INTEGRATION NOTE:
 *   Use Twilio for simplicity:
 *   npm install twilio
 *   client.messages.create({
 *     from: 'whatsapp:+14155238886',
 *     to: `whatsapp:${memberWhatsapp}`,
 *     body: `Meridian confirma tu experiencia...\nCódigo: ${confirmationCode}`
 *   })
 */

export async function POST(req: NextRequest) {
  try {
    // ── Basic spam protection: rate limit by IP ──────────────────────────
    const ip = getClientIp(req)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await req.json()

    // ── Honeypot: bots fill every field, real users never see `website` ──
    if (body?.website) {
      // Silently pretend success so bots don't learn the field is checked.
      return NextResponse.json({ success: true, confirmationCode: generateCode('MRD') })
    }

    // ── Server-side validation ────────────────────────────────────────────
    const parsed = reservationSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid reservation data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const {
      airport,
      flightDate,
      flightTime,
      flightNumber,
      destination,
      passengerName,
      email,
      phone,
      company,
      passengerCount,
      membershipCode,
      cateringPreference,
      cateringNotes,
    } = parsed.data

    const confirmationCode = generateCode('MRD')
    const createdAt = new Date().toISOString()

    // In prod: save booking to DB
    const booking = {
      id: crypto.randomUUID(),
      confirmationCode,
      airport,
      flightDate,
      flightTime,
      flightNumber,
      destination,
      passengerName,
      email,
      phone,
      company,
      passengerCount,
      membershipCode,
      cateringPreference,
      cateringNotes,
      status: 'confirmed',
      createdAt,
    }

    // ── Notify the concierge team by email ────────────────────────────────
    const extra: Record<string, string> = {}
    if (flightNumber) extra['Vuelo'] = flightNumber
    if (membershipCode) extra['Código de membresía'] = membershipCode
    extra['Preferencia de cabina'] = CATERING_LABELS[cateringPreference] ?? cateringPreference

    try {
      await sendReservationEmail({
        name: passengerName,
        company,
        email,
        phone,
        service: 'Traslado Ejecutivo / Airport Transfer',
        date: flightDate,
        time: flightTime,
        passengers: passengerCount,
        origin: AIRPORTS[airport as Airport] ?? airport,
        destination,
        message: cateringNotes,
        timestamp: createdAt,
        extra,
      })
    } catch (emailError) {
      console.error('Reservation email failed:', emailError)
      return NextResponse.json(
        { success: false, error: 'We could not send your reservation. Please try again or contact us directly.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      confirmationCode,
      booking,
    })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ success: false, error: 'Booking failed' }, { status: 500 })
  }
}
