import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://martin.vuelta.me',
    integrations: [tailwind()],
    output: 'static',
    build: {
        assets: 'assets'
    }
});
