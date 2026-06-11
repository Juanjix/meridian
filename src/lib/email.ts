import nodemailer from 'nodemailer'

/**
 * Reservation notification email.
 *
 * Credentials are read exclusively from environment variables at call time
 * (never bundled into client code, never hardcoded). Configure in `.env.local`:
 *
 *   SMTP_HOST=smtp.gmail.com
 *   SMTP_PORT=587
 *   SMTP_USER=hola@meridianground.com
 *   SMTP_PASS=your_app_password
 *   SMTP_FROM="Executive Arrival <hola@meridianground.com>"   (optional, defaults to SMTP_USER)
 *   RESERVATION_EMAIL_TO=vitalmariano7@gmail.com               (optional, has a built-in default)
 */

export interface ReservationEmailData {
  name?: string
  company?: string
  email?: string
  phone?: string
  service?: string
  date?: string
  time?: string
  passengers?: string | number
  origin?: string
  destination?: string
  message?: string
  timestamp?: string
  /** Any additional fields from the form, rendered at the bottom of the email. */
  extra?: Record<string, string>
}

const DEFAULT_RECIPIENT = 'vitalmariano7@gmail.com'
const MAX_FIELD_LENGTH = 2000

/**
 * Strips control characters / line breaks (header-injection protection) and
 * trims to a sane length. Returns an em dash placeholder for empty values.
 */
function sanitize(value: unknown): string {
  if (value === undefined || value === null) return '—'
  const str = String(value)
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/[\x00-\x1F\x7F]/g, '')
    .trim()
    .slice(0, MAX_FIELD_LENGTH)
  return str.length > 0 ? str : '—'
}

let transporter: nodemailer.Transporter | null = null

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      'Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in your environment.'
    )
  }

  const port = Number(SMTP_PORT) || 587

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for 465 (SSL), false for 587/25 (STARTTLS)
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  return transporter
}

function buildBody(data: ReservationEmailData): string {
  const lines = [
    'Nueva solicitud recibida.',
    '',
    'Nombre:',
    sanitize(data.name),
    '',
    'Empresa:',
    sanitize(data.company),
    '',
    'Email:',
    sanitize(data.email),
    '',
    'Teléfono:',
    sanitize(data.phone),
    '',
    'Servicio:',
    sanitize(data.service),
    '',
    'Fecha:',
    sanitize(data.date),
    '',
    'Hora:',
    sanitize(data.time),
    '',
    'Pasajeros:',
    sanitize(data.passengers),
    '',
    'Origen:',
    sanitize(data.origin),
    '',
    'Destino:',
    sanitize(data.destination),
    '',
    'Mensaje:',
    sanitize(data.message),
    '',
    'Creado:',
    sanitize(data.timestamp),
  ]

  if (data.extra && Object.keys(data.extra).length > 0) {
    lines.push('', '— Campos adicionales —')
    for (const [key, value] of Object.entries(data.extra)) {
      lines.push('', `${key}:`, sanitize(value))
    }
  }

  return lines.join('\n')
}

/**
 * Sends the reservation notification email. Throws if the email service is
 * not configured or the send fails — callers should catch this and surface
 * an error to the client.
 */
export async function sendReservationEmail(data: ReservationEmailData): Promise<void> {
  const to = process.env.RESERVATION_EMAIL_TO || DEFAULT_RECIPIENT
  const from = process.env.SMTP_FROM || process.env.SMTP_USER

  await getTransporter().sendMail({
    from,
    to,
    replyTo: data.email && data.email.includes('@') ? sanitize(data.email) : undefined,
    subject: 'New Executive Arrival Reservation',
    text: buildBody(data),
  })
}
