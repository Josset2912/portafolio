// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 👇 CAMBIA ESTO por tu dominio real cuando lo tengas.
  //    Necesario para que el sitemap y las URLs absolutas salgan bien.
  site: 'https://tu-dominio.vercel.app',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
