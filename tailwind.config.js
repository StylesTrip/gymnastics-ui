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
            'primary-purple': '#4E1860',
            'secondary-purple': '#9615DB',
            // 'primary-pink': '#2F8890',
            // 'app-bar': '#189AB4',
            'secondary-app-bar': '#1B1734',
            'primary-app-bar': '#17C4BD',
            'primary-app-background': '#2D3032',
            'primary-table-header-background': '#D2D3D3',
            pink: colors.pink,
            white: colors.white,
            gray: colors.gray,
            black: colors.black,
        },
        extend: {},
    },
    plugins: [],
};
