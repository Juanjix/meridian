export const EASE_CINEMA: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: EASE_CINEMA },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.0, ease: 'easeOut' },
  },
}

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: EASE_CINEMA },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.0 },
  },
}

export const lineReveal = {
  hidden: { scaleX: 0, originX: '0%' },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, ease: EASE_CINEMA },
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: EASE_CINEMA },
  },
}
