// Easing curves
export const EASE_CINEMA: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_APPLE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]
export const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1]
export const EASE_OUT_EXPO: [number, number, number, number] = [0.19, 1, 0.22, 1]

// ─── Core reveal variants ────────────────────────────────────────────────────

// Standard fade-up with blur — the workhorse reveal
export const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: EASE_APPLE },
  },
}

// Slower, more cinematic fade-up for large headings
export const fadeUpSlow = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: EASE_CINEMA },
  },
}

// Fade-in only — for lines, labels, subtle elements (no blur to avoid over-doing it)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_APPLE },
  },
}

// Fade-in with subtle blur — for images and large blocks
export const fadeInBlur = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.0, ease: EASE_APPLE },
  },
}

// Slide in from left — editorial detail elements
export const slideInLeft = {
  hidden: { opacity: 0, x: -20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: EASE_APPLE },
  },
}

// ─── Line / rule reveal ──────────────────────────────────────────────────────

export const lineReveal = {
  hidden: { scaleX: 0, transformOrigin: '0% 50%' },
  visible: {
    scaleX: 1,
    transition: { duration: 1.0, ease: EASE_APPLE },
  },
}

// ─── Container stagger ──────────────────────────────────────────────────────

// Standard — 100ms between children, small initial delay
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
}

// Faster — for lists, grids
export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.0 },
  },
}

// Slow — for hero sequences
export const staggerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}
