import { z } from 'zod'

export const membershipSchema = z.object({
  name: z.string().min(2, 'Ingresá tu nombre completo'),
  company: z.string().optional(),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().min(8, 'WhatsApp inválido'),
  paymentMethod: z.enum(['mercadopago', 'stripe', 'transfer']),
  installments: z.number().optional(),
  // Card fields (only validated when method is card-based)
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvv: z.string().optional(),
})

export const bookingStep1Schema = z.object({
  airport: z.enum(['EZE', 'AEP']),
  flightDate: z.string().min(1, 'Seleccioná una fecha'),
  flightTime: z.string().min(1, 'Ingresá la hora'),
  flightNumber: z.string().optional(),
  destination: z.string().min(3, 'Ingresá el destino'),
})

export const bookingStep2Schema = z.object({
  passengerName: z.string().min(2, 'Ingresá el nombre del pasajero'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(6, 'Ingresá un teléfono de contacto'),
  company: z.string().optional(),
  passengerCount: z.number().min(1).max(8),
  membershipCode: z.string().optional(),
})

export const bookingStep3Schema = z.object({
  cateringPreference: z.enum(['standard', 'no-alcohol', 'custom', 'none']),
  cateringNotes: z.string().optional(),
  // Honeypot — must stay empty. Real users never see or fill this field.
  website: z.string().max(0).optional().or(z.literal('')),
})

// Full server-side payload validation for the booking confirmation endpoint.
export const reservationSchema = bookingStep1Schema
  .merge(bookingStep2Schema)
  .merge(bookingStep3Schema)

export type MembershipFormData = z.infer<typeof membershipSchema>
export type BookingStep1Data = z.infer<typeof bookingStep1Schema>
export type BookingStep2Data = z.infer<typeof bookingStep2Schema>
export type BookingStep3Data = z.infer<typeof bookingStep3Schema>
export type ReservationData = z.infer<typeof reservationSchema>
