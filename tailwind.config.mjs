/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#DE5E60',
                    dark: '#26292E',
                    darker: '#2F3238',
                },
                gray: {
                    DEFAULT: '#7F8289',
                    light: '#6E7074',
                    dark: '#3C3F45',
                },
            },
            fontFamily: {
                sans: ['Titillium Web', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
