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
          500: "#E4E4E4",
          400: "#EDEDED",
          300: "#9A9A9A",
          200: "#878787",
          100: "#E2E2E2",
          50: "#F4F4F4",
        },
      },
      lineHeight: {
        8.3: "2.125rem",
        12: "4.5rem",
        tighter: "1.125",
      },
      letterSpacing: {
        xs: "0.0099rem",
        xsm: "0.0124rem",
        sm: "0.01em",
        lg: "0.015em",
      },
      gap: {
        5.5: "1.125rem",
      },
      fontSize: {
        "2.5xl": "1.25rem",
        "2.9xl": "1.75rem",
        "5.5xl": "3.625rem",
      },
      spacing: {
        6.6: "1.6875rem",
        10.75: "2.6875rem",
        11.1: "3rem",
        12: "5.375rem",
        13: "3.25rem",
        23: "6.5625rem",
      },
      inset: {
        0.3: "0.375rem",
        0.2: "0.125rem",
        0.6: "0.625rem",
        layout: "calc(calc(100% - 82rem) / 2)",
      },
      maxWidth: {
        sm: "29.8125rem",
        "8xl": "90rem",
      },
      minWidth: {
        xs: "18.875rem",
        sm: "29.8125rem",
      },
      minHeight: {
        86: "23.0625rem",
        94: "29.8125rem",
        96: "47.31rem",
      },
      height: {
        0.1: "0.125rem",
        111: "27.3125rem",
      },
      width: {
        50: "50.375rem",
        73: "18.125rem",
        74: "19.375rem",
      },
      screens: {
        xs: "25rem",
      },
      margin: {
        11.1: "3rem",
        11.2: "4.8125rem",
        33: "8.25rem",
      },
      padding: {
        0.1: "0.1875rem",
        2.5: "0.625rem",
      },
      boxShadow: {
        "custom-sm": "1px 2px 5px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "2.3xl": "1.1875rem",
      },
      borderWidth: {
        1.5: "0.0938rem",
      },
    },
  },
  plugins: [],
};
