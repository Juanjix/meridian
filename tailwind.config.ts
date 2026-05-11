import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#080808',
          50:  '#0F0F0F',
          100: '#141414',
        },
        graphite: {
          DEFAULT: '#111111',
          50:  '#161616',
          100: '#1A1A1A',
        },
        carbon: {
          DEFAULT: '#1C1C1C',
          mid:   '#242424',
          light: '#2E2E2E',
        },
        silver: {
          DEFAULT: '#5A5A5A',
          mid:   '#8A8A8A',
          light: '#B8B8B8',
          pale:  '#D4D4D4',
        },
        champagne: {
          DEFAULT: '#C4BAB0',
          light:   '#D8D2C8',
          dark:    '#A09690',
        },
        'warm-white': {
          DEFAULT: '#F0ECE6',
          50:  '#F8F6F3',
          100: '#E8E4DE',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      letterSpacing: {
        'display': '-0.04em',
        'heading': '-0.03em',
        'widest2': '0.2em',
        'widest3': '0.3em',
      },
      animation: {
        'fade-up':      'fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':      'fadeIn 1.0s ease forwards',
        'line-reveal':  'lineReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineReveal: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
    },
  },
  plugins: [],
}

export default config
