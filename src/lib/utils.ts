import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '—'
  const [y, m, d] = dateStr.split('-')
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
                  'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
  return `${d} ${months[parseInt(m) - 1]} ${y}`
}

export function formatTime(timeStr: string): string {
  if (!timeStr) return '—'
  return timeStr
}

export function generateCode(prefix: string): string {
  const num = Math.floor(Math.random() * 900) + 100
  return `${prefix}-${new Date().getFullYear()}-${num}`
}

export function generateMemberCode(index: number): string {
  return `MRD-F-${String(index).padStart(3, '0')}`
}

export const AIRPORTS = {
  EZE: 'Ezeiza Internacional',
  AEP: 'Aeroparque Jorge Newbery',
} as const

export const CATERING_LABELS: Record<string, string> = {
  standard:   'Estándar — Champagne + agua mineral',
  'no-alcohol': 'Sin alcohol — Jugos premium + agua',
  custom:     'Personalizado',
  none:       'Sin catering',
}

export const FOUNDERS_TOTAL = 30
export const FOUNDERS_AVAILABLE = 23
export const MEMBERSHIP_PRICE_USD = 2200
export const EXPERIENCES_PER_MEMBERSHIP = 10
