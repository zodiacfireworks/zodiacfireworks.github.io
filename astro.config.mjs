import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://zodiacfireworks.github.io',
    i18n: {
        defaultLocale: "en",
        locales: ["en", "es"],
        routing: {
            prefixDefaultLocale: false
        }
    },
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'static',
    build: {
        assets: 'assets'
    }
});
