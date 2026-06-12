import { NextRequest, NextResponse } from 'next/server'
import { generateCode, AIRPORTS, CATERING_LABELS } from '@/lib/utils'
import { reservationSchema } from '@/lib/validations'
import { sendReservationEmail, sendCustomerConfirmationEmail } from '@/lib/email'
import { isRateLimited, getClientIp } from '@/lib/rateLimit'
import { prisma } from '@/lib/prisma'
import { logger } from '@/lib/logger'
import type { Airport } from '@/types'

/**
 * POST /api/confirm-booking
 *
 * Flow:
 *   1. Validate + sanitize the incoming reservation.
 *   2. Persist it to the database — this is the source of truth. Once this
 *      succeeds, the lead is safe even if every email below fails.
 *   3. Notify the concierge team by email (Reply-To = guest email).
 *   4. Send the guest a short confirmation email.
 *
 * Email failures are logged with structured context and recorded on the
 * reservation row (adminEmailError / customerEmailError) so they can be
 * spotted and retried — they do NOT fail the request, since the reservation
 * itself was already saved.
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
  const ip = getClientIp(req)
  const userAgent = req.headers.get('user-agent') ?? undefined

  try {
    // ── Basic spam protection: rate limit by IP ──────────────────────────
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

    // Analytics fields — informational only, never validated as required.
    const language = typeof body.language === 'string' ? body.language.slice(0, 10) : undefined
    const sourceUrl = typeof body.sourceUrl === 'string' ? body.sourceUrl.slice(0, 500) : undefined

    const confirmationCode = generateCode('MRD')

    // ── 1. Persist — the reservation must exist before anything else ───────
    let reservation
    try {
      reservation = await prisma.reservation.create({
        data: {
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
          ipAddress: ip,
          userAgent,
          language,
          sourceUrl,
        },
      })
    } catch (dbError) {
      logger.error('Failed to persist reservation', {
        error: dbError instanceof Error ? dbError.message : String(dbError),
        confirmationCode,
        email,
        ip,
      })
      return NextResponse.json(
        { success: false, error: 'Booking failed. Please try again.' },
        { status: 500 }
      )
    }

    // ── 2. Notify the concierge team by email ───────────────────────────────
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
        timestamp: reservation.createdAt.toISOString(),
        extra,
      })
      await prisma.reservation.update({
        where: { id: reservation.id },
        data: { adminEmailSent: true },
      })
    } catch (emailError) {
      const message = emailError instanceof Error ? emailError.message : String(emailError)
      logger.error('Admin notification email failed', {
        reservationId: reservation.id,
        confirmationCode,
        error: message,
      })
      await prisma.reservation
        .update({ where: { id: reservation.id }, data: { adminEmailError: message } })
        .catch((e) => logger.error('Failed to record admin email error', { reservationId: reservation.id, error: String(e) }))
    }

    // ── 3. Send the guest a confirmation email ──────────────────────────────
    try {
      await sendCustomerConfirmationEmail({
        email,
        name: passengerName,
        language: language === 'es' ? 'es' : 'en',
      })
      await prisma.reservation.update({
        where: { id: reservation.id },
        data: { customerEmailSent: true },
      })
    } catch (emailError) {
      const message = emailError instanceof Error ? emailError.message : String(emailError)
      logger.error('Customer confirmation email failed', {
        reservationId: reservation.id,
        confirmationCode,
        error: message,
      })
      await prisma.reservation
        .update({ where: { id: reservation.id }, data: { customerEmailError: message } })
        .catch((e) => logger.error('Failed to record customer email error', { reservationId: reservation.id, error: String(e) }))
    }

    return NextResponse.json({
      success: true,
      confirmationCode,
      booking: reservation,
    })
  } catch (error) {
    logger.error('Unhandled booking error', {
      error: error instanceof Error ? error.message : String(error),
      ip,
    })
    return NextResponse.json({ success: false, error: 'Booking failed' }, { status: 500 })
  }
}
