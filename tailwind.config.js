const plugin = require('tailwindcss/plugin')
const {nextui} = require("@nextui-org/react");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono Web', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      boxShadow: {
        highlight: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      screens: {
        narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
        wide: { raw: '(min-aspect-ratio: 3 / 2)' },
        'taller-than-854': { raw: '(min-height: 854px)' },
        // iPhoneX: 375
        'sm': {'min': '400px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': {'min': '550px'},
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
      keyframes: {
        scx: {
          '0%': { transform: 'translate(0px, 0%)' },
          '100%': { transform: 'translate(0px, -50%)' },
        },
        scy: {
          '0%': {
          transform: 'translate(0%, 0px)'
        },
          '100%': {
              transform: 'translate(-50%, 0px)'
          }
        }
      },
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
    nextui(),
  ],
}
