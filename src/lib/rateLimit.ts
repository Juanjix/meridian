/**
 * Minimal in-memory rate limiter for spam protection on form-submission
 * endpoints.
 *
 * NOTE: this is per-instance state. On serverless platforms with multiple
 * concurrent instances it provides a basic, "good enough" first line of
 * defense rather than a hard global guarantee. For stricter limits across
 * instances, swap this for a shared store (e.g. Upstash Redis / Vercel KV).
 */

interface Bucket {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()

/**
 * Returns true if `key` (e.g. an IP address) has exceeded `limit` requests
 * within the trailing `windowMs` window.
 */
export function isRateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }

  if (bucket.count >= limit) return true

  bucket.count += 1
  return false
}

/** Best-effort extraction of the client IP from common proxy headers. */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}
