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
        },
    },
    plugins: [],
};
