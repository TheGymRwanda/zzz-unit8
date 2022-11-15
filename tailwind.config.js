/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
      },
      colors: {
        primary: {
          300: "#5602E0",
        },
        muted: {
          300: "#9A9A9A",
          200: "#878787",
          100: "#E2E2E2",
          50: "#F4F4F4",
        },
      },
      gap: {
        5.5: "1.125rem",
      },
      fontSize: {
        "2.5xl": "1.25rem",
      },
      spacing: {
        6.6: "1.6875rem",
      },
      spacing:{
        "6.6": "1.6875rem",
        "4%": "4%"
      },
      inset: {
        "0.6": "0.625rem",
        "0.3": "0.375rem",
        "0.2": "0.125rem"
      },
      maxWidth: {
        '6.5xl': '78rem',
        "19": '19.375rem',
        "8xl": "82rem",
      },
      width: {
        "70w": "70vw",
      },
      letterSpacing: {
        0.01: "0.01rem",
      }
    },
  },
  plugins: [],
};
