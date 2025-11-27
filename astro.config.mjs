import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://martin.vuelta.me',
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'static',
    build: {
        assets: 'assets'
    }
});
