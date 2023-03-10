/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            'primary-purple': '#5548A5',
            'secondary-purple': '#A867D3',
            pink: colors.pink,
            white: colors.white,
        },
        extend: {},
    },
    plugins: [],
};
