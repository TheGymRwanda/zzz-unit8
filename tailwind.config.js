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
          400:"#EDEDED",
          300: "#9A9A9A",
          200: "#878787",
          100: "#E2E2E2",
          50: "#F4F4F4",
        },
      },
      lineHeight: {
        8.3: "2.125rem",
        12: "4.5rem",
      },
      letterSpacing:{
        xs:"0.0099rem",
        xsm:"0.0124rem",
        0.01: "0.01rem",
      },
      gap: {
        5.5: "1.125rem",
      },
      fontSize: {
        "2.5xl": "1.25rem",
        "2.9xl": "28px",
        "5.5xl": "3.625rem",
      },
      spacing: {
        6.6: "1.6875rem",
        "4%": "4%",
        12: "5.375rem",
      },
      inset: {
        0.6: "0.625rem",
        0.3: "0.375rem",
        0.2: "0.125rem",
      },
      maxWidth: {
        19: "19.375rem",
        48:"18.875rem",
        "6.5xl": "78rem",
        "8xl": "82rem",
      },
      minWidth: {
        19: "19.375rem",
        48:"18.875rem",
        "6.5xl": "78rem",
        "8xl": "82rem",
      },
      width: {
        "70w": "70vw",
        73: "18.125rem",
        50: "50.375rem",
        74: "19.375rem",
      },
      maxheight:{
        "41":"10.5rem"
      },
      screens: {
        ssm: "400px",
      },
      margin: {
        11.2: "4.8125rem",
        33: "8.25rem",
      },
      padding: {
        "2.5":"0.625rem",
        "0.1":"0.1875rem"
      },
      dropShadow: {
        "custom-sm":"1px 2px 5px rgba(0, 0, 0, 0.25)"
      },
      borderRadius: {
        "2.3xl":"1.1875rem"
      }
    },
  },
  plugins: [],
};
