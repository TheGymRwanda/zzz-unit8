/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Grotesk', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '82rem',
      },
      colors: {
        primary: {
          300: '#5602E0',
        },
        muted: {
          300: '#9A9A9A',
          200: '#878787',
          100: '#E2E2E2',
          50: '#F4F4F4',
        },
      },
      maxWidth: {
        '8xl': '82rem',
      },
      width: {
        '70w': '70vw',
      },
      letterSpacing: {
        0.01: '0.01rem',
      },
    },
  },
  plugins: [],
};
