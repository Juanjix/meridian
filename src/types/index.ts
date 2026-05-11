export type Airport = 'EZE' | 'AEP'

export type CateringPreference =
  | 'standard'
  | 'no-alcohol'
  | 'custom'
  | 'none'

export type PaymentMethod = 'mercadopago' | 'stripe' | 'transfer'

export interface MembershipPurchase {
  name: string
  company?: string
  email: string
  whatsapp: string
  paymentMethod: PaymentMethod
  installments?: number
}

export interface BookingFormData {
  airport: Airport
  flightDate: string
  flightTime: string
  flightNumber?: string
  destination: string
  passengerName: string
  passengerCount: number
  membershipCode?: string
  cateringPreference: CateringPreference
  cateringNotes?: string
}

export interface Booking extends BookingFormData {
  id: string
  confirmationCode: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}

export interface MembershipData {
  code: string
  holderName: string
  company?: string
  email: string
  whatsapp: string
  totalExperiences: number
  usedExperiences: number
  isFounder: boolean
  purchasedAt: string
}

export interface PaymentIntent {
  method: PaymentMethod
  amount: number
  currency: 'USD' | 'ARS'
  preferenceId?: string  // Mercado Pago
  paymentIntentId?: string  // Stripe
}
