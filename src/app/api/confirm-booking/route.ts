import { NextRequest, NextResponse } from 'next/server'
import { generateCode } from '@/lib/utils'

/**
 * POST /api/confirm-booking
 *
 * Registers a new booking against a membership.
 * In production: validate membership code, decrement experience count,
 * save booking to DB, send WhatsApp via Twilio/360dialog/Meta API.
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
    const body = await req.json()
    const {
      airport,
      flightDate,
      flightTime,
      flightNumber,
      destination,
      passengerName,
      passengerCount,
      membershipCode,
      cateringPreference,
      cateringNotes,
    } = body

    // Validate membership code (mock — in prod query DB)
    // if (membershipCode) { ... }

    // Generate confirmation code
    const confirmationCode = generateCode('MRD')

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
      passengerCount,
      membershipCode,
      cateringPreference,
      cateringNotes,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    }

    console.log('Booking confirmed:', booking)

    // In prod: send WhatsApp notification here

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
