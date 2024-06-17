const plugin = require("tailwindcss/plugin");
const { nextui } = require("@nextui-org/react");
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
      cursor: {
        'dot': 'url(/dot_32x32.png) 12 12, auto',
      },
      flex: {
        '1': '0 0 100%',
        '2': '0 0 80%',
        '3': '0 0 60%',
      },
      screens: {

        // mobile
        mobile: { max: "767px" },

        // mobile-s
        xs: { min: "320px" },

        // mobile-m (iPhoneX)
        sm: { min: "375px" },

        pro: { min: "450px"},

        max: { min: "550px" },

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
