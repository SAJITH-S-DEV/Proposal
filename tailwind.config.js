/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "hsl(0 0% 4%)",
                foreground: "hsl(45 30% 96%)",
                primary: "hsl(43 74% 66%)",
                rose: "hsl(350 60% 70%)",
                card: "hsl(0 0% 6%)",
                border: "hsl(0 0% 18%)",
            },
            fontFamily: {
                serif: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [],
}