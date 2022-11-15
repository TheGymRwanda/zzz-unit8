/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "5.5xl": "3.625rem",
      },
      lineHeight: {
        12: "4.5rem",
      },
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
      },
      colors: {
        primary: {
          300: "#5602E0",
        },
        muted: {
          300: "#9A9A9A",
        },
      },
      maxWidth: {
        "8xl": "82rem",
      },
      margin: {
        12: "5.375rem",
      },
    },
  },
  plugins: [],
};
