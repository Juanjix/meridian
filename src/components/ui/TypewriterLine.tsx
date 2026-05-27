'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { EASE_APPLE } from '@/lib/animations'

interface TypewriterLineProps {
  phrases: string[]
  typeSpeed?: number       // ms per character
  pauseDuration?: number   // ms to hold the completed phrase
  fadeDuration?: number    // ms for fade-out transition
  initialDelay?: number    // ms before first phrase starts
  className?: string
  style?: React.CSSProperties
}

export function TypewriterLine({
  phrases,
  typeSpeed = 68,
  pauseDuration = 2800,
  fadeDuration = 480,
  initialDelay = 2200,
  className,
  style,
}: TypewriterLineProps) {
  const [text, setText] = useState('')
  const [visible, setVisible] = useState(true)
  const [cursorOn, setCursorOn] = useState(true)
  const [holding, setHolding] = useState(false)

  // All mutable state lives in refs to avoid stale closures
  const r = useRef({
    phraseIndex: 0,
    charIndex: 0,
    timerId: null as ReturnType<typeof setTimeout> | null,
    blinkId: null as ReturnType<typeof setTimeout> | null,
    alive: true,
  })

  useEffect(() => {
    const ctrl = r.current
    ctrl.alive = true

    function clear() {
      if (ctrl.timerId) clearTimeout(ctrl.timerId)
      if (ctrl.blinkId) clearTimeout(ctrl.blinkId)
    }

    function startBlink() {
      let on = true
      function tick() {
        if (!ctrl.alive || ctrl.blinkId === null) return
        on = !on
        setCursorOn(on)
        ctrl.blinkId = setTimeout(tick, 620)
      }
      ctrl.blinkId = setTimeout(tick, 620)
    }

    function stopBlink() {
      if (ctrl.blinkId) {
        clearTimeout(ctrl.blinkId)
        ctrl.blinkId = null
      }
      setCursorOn(true)
    }

    function typePhrase() {
      if (!ctrl.alive) return
      const phrase = phrases[ctrl.phraseIndex]

      if (ctrl.charIndex < phrase.length) {
        // Add one character with slight organic variance
        const delay = typeSpeed + Math.random() * 22
        ctrl.timerId = setTimeout(() => {
          ctrl.charIndex++
          setText(phrase.slice(0, ctrl.charIndex))
          typePhrase()
        }, delay)
      } else {
        // Done typing — hold with blinking cursor
        setHolding(true)
        startBlink()

        ctrl.timerId = setTimeout(() => {
          // Fade out
          stopBlink()
          setHolding(false)
          setVisible(false)

          ctrl.timerId = setTimeout(() => {
            // Reset for next phrase
            setText('')
            ctrl.charIndex = 0
            ctrl.phraseIndex = (ctrl.phraseIndex + 1) % phrases.length
            setVisible(true)

            // Brief pause before next phrase begins
            ctrl.timerId = setTimeout(typePhrase, 320)
          }, fadeDuration)
        }, pauseDuration)
      }
    }

    // Initial delay before first phrase
    ctrl.timerId = setTimeout(typePhrase, initialDelay)

    return () => {
      ctrl.alive = false
      clear()
    }
  }, [phrases, typeSpeed, pauseDuration, fadeDuration, initialDelay])

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: fadeDuration / 1000, ease: EASE_APPLE }}
      className={className}
      style={style}
    >
      <span>{text}</span>

      {/* Cursor — refined champagne line, only blinks when holding */}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '1.5px',
          height: '0.85em',
          background: 'rgba(196, 186, 176, 0.75)',
          marginLeft: '3px',
          verticalAlign: 'text-bottom',
          borderRadius: '1px',
          opacity: cursorOn ? 1 : 0,
          transition: holding ? 'opacity 0.12s ease' : 'none',
        }}
      />
    </motion.div>
  )
}
