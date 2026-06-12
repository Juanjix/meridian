/**
 * Minimal structured logger.
 *
 * Emits single-line JSON so logs are queryable in any log aggregator
 * (Vercel, Datadog, CloudWatch, etc.). Used primarily to make sure
 * notification-email failures are never silent — a reservation can always
 * be recovered from the database even if its emails failed.
 */

type LogContext = Record<string, unknown>

function emit(level: 'info' | 'warn' | 'error', message: string, context?: LogContext) {
  const entry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...context,
  }

  const line = JSON.stringify(entry)
  if (level === 'error') console.error(line)
  else if (level === 'warn') console.warn(line)
  else console.log(line)
}

export const logger = {
  info: (message: string, context?: LogContext) => emit('info', message, context),
  warn: (message: string, context?: LogContext) => emit('warn', message, context),
  error: (message: string, context?: LogContext) => emit('error', message, context),
}
