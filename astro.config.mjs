// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 4321,
    },
    site: 'https://najmul.one',

    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Inter",
            cssVariable: "--font-inter",
        },
        {
            provider: fontProviders.fontsource(),
            name: "DM Serif Display",
            cssVariable: "--font-dm-serif",
        },
    ]
});
