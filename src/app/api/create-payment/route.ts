import { NextRequest, NextResponse } from 'next/server'
import { generateMemberCode } from '@/lib/utils'
import type { PaymentMethod } from '@/types'

/**
 * POST /api/create-payment
 *
 * Handles membership purchase initiation.
 * For MP/Stripe: creates preference/PaymentIntent and returns checkout URL.
 * For transfer: registers the pending membership and returns member code.
 *
 * INTEGRATION NOTES:
 *   Mercado Pago: npm install mercadopago
 *     import { MercadoPagoConfig, Preference } from 'mercadopago'
 *     const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! })
 *
 *   Stripe: npm install stripe
 *     import Stripe from 'stripe'
 *     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, whatsapp, company, paymentMethod, installments } = body as {
      name: string
      email: string
      whatsapp: string
      company?: string
      paymentMethod: PaymentMethod
      installments?: number
    }

    // Generate a member code (in prod this comes from your DB)
    const memberCode = generateMemberCode(Math.floor(Math.random() * 30) + 1)

    if (paymentMethod === 'mercadopago') {
      /**
       * MERCADO PAGO INTEGRATION (uncomment when ready):
       *
       * const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! })
       * const preference = new Preference(client)
       * const result = await preference.create({
       *   body: {
       *     items: [{
       *       id: 'meridian-founders',
       *       title: 'Meridian Founders Membership',
       *       quantity: 1,
       *       unit_price: 1500,
       *       currency_id: 'USD',
       *     }],
       *     payer: { name, email },
       *     payment_methods: {
       *       installments: installments ?? 1,
       *       default_installments: installments ?? 1,
       *     },
       *     back_urls: {
       *       success: `${process.env.NEXT_PUBLIC_URL}/checkout/confirmed?code=${memberCode}`,
       *       failure: `${process.env.NEXT_PUBLIC_URL}/checkout`,
       *       pending: `${process.env.NEXT_PUBLIC_URL}/checkout/pending`,
       *     },
       *     auto_return: 'approved',
       *     external_reference: memberCode,
       *   }
       * })
       * return NextResponse.json({ success: true, checkoutUrl: result.init_point, memberCode })
       */

      // MOCK for dev
      return NextResponse.json({
        success: true,
        memberCode,
        checkoutUrl: `/checkout/confirmed?code=${memberCode}`,
      })
    }

    if (paymentMethod === 'stripe') {
      /**
       * STRIPE INTEGRATION (uncomment when ready):
       *
       * const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
       * const session = await stripe.checkout.sessions.create({
       *   payment_method_types: ['card'],
       *   line_items: [{
       *     price_data: {
       *       currency: 'usd',
       *       product_data: { name: 'Meridian Founders Membership' },
       *       unit_amount: 150000, // cents
       *     },
       *     quantity: 1,
       *   }],
       *   mode: 'payment',
       *   customer_email: email,
       *   metadata: { memberCode, name, whatsapp },
       *   success_url: `${process.env.NEXT_PUBLIC_URL}/checkout/confirmed?code=${memberCode}`,
       *   cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`,
       * })
       * return NextResponse.json({ success: true, checkoutUrl: session.url, memberCode })
       */

      // MOCK for dev
      return NextResponse.json({
        success: true,
        memberCode,
        checkoutUrl: `/checkout/confirmed?code=${memberCode}`,
      })
    }

    // Transfer — no payment gateway needed, just register
    // In prod: save to DB with status 'pending_transfer'
    console.log('Transfer membership pending:', { name, email, whatsapp, company, memberCode })

    return NextResponse.json({ success: true, memberCode })
  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json({ success: false, error: 'Payment failed' }, { status: 500 })
  }
}
