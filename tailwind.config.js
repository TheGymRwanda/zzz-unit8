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
      lineHeight: {
        12: "4.5rem",
      },
      gap: {
        5.5: "1.125rem",
      },
      fontSize: {
        "2.5xl": "1.25rem",
        "5.5xl": "3.625rem",
      },
      spacing: {
        6.6: "1.6875rem",
        "4%": "4%",
        12: "5.375rem",
        23: "6.5625rem",
        13: "3.25rem",
      },
      inset: {
        0.6: "0.625rem",
        0.3: "0.375rem",
        0.2: "0.125rem",
      },
      maxWidth: {
        "6.5xl": "78rem",
        19: "19.375rem",
        "8xl": "82rem",
      },
      width: {
        "70w": "70vw",
        73: "18.125rem",
        50: "50.375rem",
        74: "19.375rem",
      },
      letterSpacing: {
        0.01: "0.01rem",
      },
      screens: {
        ssm: "25rem",
      },
      margin: {
        11.2: "4.8125rem",
        33: "8.25rem",
      },
    },
  },
  plugins: [],
};
