/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                light: {
                    header: "#eaeefa",
                    body: "#fdfbff",
                    text: "#1B1B1F",
                },
                dark: {
                    header: "#272931",
                    body: "#1b1b1f",
                    text: "#E3E2E6",
                },
            },
        },
    },
    plugins: [],
};
