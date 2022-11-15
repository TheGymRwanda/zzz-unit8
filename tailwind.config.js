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
                primary: "#5602E0",
                muted: "#9A9A9A",
            },
        },
    },
    plugins: [],
};
