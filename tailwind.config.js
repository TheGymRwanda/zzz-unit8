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
                grotesk: ["Neufile Grotesk", "sans-serif"],
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
                11: "4rem",
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
                "5.4xl": "3.25rem",
                "5.5xl": "3.625rem",
                "6.5xl": "4rem",
            },
            spacing: {
                2.7: "0.6875rem",
                6.5: "1.375rem",
                6.6: "1.6875rem",
                6.7: "1.875rem",
                8.1: "2.0625rem",
                10.75: "2.6875rem",
                11.1: "3rem",
                11.18: "3.5537rem",
                11.19: "3.75rem",
                11.2: "4.1744rem",
                11.5: "4.5rem",
                11.6: "5.0625rem",
                11.8: "5.3125rem",
                12: "5.375rem",
                12.1: "5.6125rem",
                13: "3.25rem",
                13.1: "3.4375rem",
                22.7: "6.1513rem",
                23: "6.5625rem",
                24.2: "6.6125rem",
                25: "7.7881rem",
                25.1: "7.9375rem",
                34: "8.5rem",
                34.7: "8.625rem",
                35: "8.8875rem",
            },
            inset: {
                0.3: "0.375rem",
                0.2: "0.125rem",
                0.6: "0.625rem",
                layout: "calc(calc(100% - 82rem) / 2)",
            },
            maxWidth: {
                sm: "29.8125rem",
                "3.8xl": "50.6875rem",
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
                50.5: "50.6875rem",
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
                "1.5xl": ".875rem",
                "2.3xl": "1.1875rem",
            },
            borderWidth: {
                1.5: "0.0938rem",
            },
            dropShadow: {
                "3xl": "1px 1px 14px rgba(0, 0, 0, 0.1)",
            },
            transitionDuration: {
                0.4: "0.4s",
            },
        },
    },
    plugins: [],
};
