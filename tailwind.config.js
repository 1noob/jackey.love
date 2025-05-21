const plugin = require("tailwindcss/plugin");
const { heroui } = require("@heroui/react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // important: true,
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        '16': 'repeat(16, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      fontFamily: {
        chill: ["var(--font-chill)"],
        smiley: ["var(--font-smiley)"],
        pixel: ["var(--font-pixel)"],
        jetbrains: ["var(--font-jetbrains)"],
        handwrite: ["var(--font-handwrite)"],
      },
      backgroundColor: {
        page: "rgba(var(--page))",
        content: "rgba(var(--content))",
        blur: "rgba(var(--blur))",
        card: "rgba(var(--card))",
      },
      boxShadow: {
        highlight: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      cursor: {
        dot: "url(/dot_32x32.png) 12 12, auto",
      },
      flex: {
        1: "0 0 100%",
        2: "0 0 80%",
        3: "0 0 55%",
      },
      screens: {
        // mobile
        mobile: { max: "767px" },

        // mobile-s
        xs: { min: "324px" },

        // mobile-m (iPhoneX)
        sm: { min: "375px" },

        std: { min: "448px" },

        // iPad Mini: 768
        md: { min: "768px" },

        // iPad Pro: 1024
        lg: { min: "1024px" },

        xl: { min: "1440x" },

        xxl: { min: "2160px" },
      },
      keyframes: {
        scx: {
          "0%": { transform: "translate(0px, 0%)" },
          "100%": { transform: "translate(0px, -50%)" },
        },
        scy: {
          "0%": {
            transform: "translate(0%, 0px)",
          },
          "100%": {
            transform: "translate(-50%, 0px)",
          },
        },
      },
    },
  },
  plugins: [
    heroui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            danger: {
              DEFAULT: "#eb1b2e",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            danger: {
              DEFAULT: "#eb1b2e",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
