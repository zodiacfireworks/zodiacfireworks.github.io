/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#E98A8B',
                    DEFAULT: '#DE5E60',
                    dark: '#D04547',
                },
                info: {
                    light: '#4096ff',
                    DEFAULT: '#1677ff',
                    dark: '#0958d9',
                },
                success: {
                    light: '#73d13d',
                    DEFAULT: '#52c41a',
                    dark: '#389e0d',
                },
                warning: {
                    light: '#ffd666',
                    DEFAULT: '#ffc53d',
                    dark: '#faad14',
                },
                error: {
                    light: '#ff7875',
                    DEFAULT: '#ff4d4f',
                    dark: '#f5222d',
                },
                neutral: {
                    // Light theme (Tailwind defaults)
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    // Dark theme (original Brushed colors)
                    800: '#3C3F45',
                    900: '#2F3238',
                    950: '#26292E',
                },
            },
            fontFamily: {
                sans: ['Titillium Web', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
