const plugin = require("tailwindcss/plugin");
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-smiley)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-pixel)", ...defaultTheme.fontFamily.mono],
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
      screens: {
        narrow: { raw: "(max-aspect-ratio: 3 / 2)" },
        wide: { raw: "(min-aspect-ratio: 3 / 2)" },
        "taller-than-854": { raw: "(min-height: 854px)" },

        // mobile
        mobile: { max: "767px" },

        // mobile-s
        xs: { min: "320px" },

        // mobile-m (iPhoneX)
        sm: { min: "375px" },

        ul: { min: "390px" },

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
    nextui({
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
