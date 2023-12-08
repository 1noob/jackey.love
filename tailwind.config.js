const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        highlight: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      screens: {
        narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
        wide: { raw: '(min-aspect-ratio: 3 / 2)' },
        'taller-than-854': { raw: '(min-height: 854px)' },
      },
      keyframes: {
        sc: {
          '0%': { transform: 'translate(0px, 0%)' },
          '100%': { transform: 'translate(0px, -50%)' },
        }
      },
      animation: {
        sc_30: 'sc 30s linear infinite',
        sc_60: 'sc 60s linear infinite',
        sc_90: 'sc 90s linear infinite',
        sc_120: 'sc 120s linear infinite',
        sc_150: 'sc 150s linear infinite',
        sc_180: 'sc 180s linear infinite',
        sc_210: 'sc 210s linear infinite',
      }
    },
  },
  screens: {
    // iPhoneX: 375
    'sm': {'min': '400px'},
    // => @media (min-width: 640px and max-width: 767px) { ... }

    'md': {'min': '768px'},
    // => @media (min-width: 768px and max-width: 1023px) { ... }

    // iPadAir: 768
    'lg': {'min': '768px'},
    // => @media (min-width: 1024px and max-width: 1279px) { ... }

    // iPadPro
    'xl': {'min': '1024px'},
    // => @media (min-width: 1280px and max-width: 1535px) { ... }

    '2xl': {'min': '1536px'},
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rotate-y-0': {
          transform: 'rotateY(0deg)'
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)'
        },
        '.rotate-y-360': {
          transform: 'rotateY(360deg)'
        },
        '.transform-style-3d': {
          transformStyle: 'preserve-3d'
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden'
        },
        '.perspective': {
          perspective: '1000px'
        }
      }
      addUtilities(newUtilities)
    })
  ],
}
