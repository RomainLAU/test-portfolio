/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#F7E3CB',
                secondary: '#876255',
                neutral: 'BBB046',
                primaryDark: '#343131',
                secondaryDark: '#434242',
                accentColor: '#BD5B41',
            },
        },
    },
    plugins: [],
};
