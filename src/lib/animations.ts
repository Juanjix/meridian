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

// Fade-in only — for lines, labels, subtle elements
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

// ─── Mask reveals — cinematic image/text clipping ───────────────────────────

// Horizontal mask — reveals left to right (editorial text lines, labels)
export const maskRevealH = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1.2, ease: EASE_CINEMA },
  },
}

// Vertical mask — reveals bottom to top (cinematic image entrance)
export const maskRevealV = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 1.5, ease: EASE_CINEMA },
  },
}

// Vertical mask — reveals top to bottom (for overlays, dividers)
export const maskRevealDown = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.4, ease: EASE_CINEMA },
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

// Editorial — generous stagger for feature pillars / columns
export const staggerEditorial = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.2 },
  },
}
