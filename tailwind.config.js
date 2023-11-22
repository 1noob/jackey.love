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
    },
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
      addUtilities(newUtilities, ['group-hover'])
    })
  ],
}
