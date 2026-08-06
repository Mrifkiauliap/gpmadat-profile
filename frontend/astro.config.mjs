// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

/**
 * URL kanonik situs, dipakai untuk <link rel="canonical">, Open Graph, sitemap,
 * dan robots.txt. Urutan prioritas:
 *
 *  1. PUBLIC_SITE_URL          — override manual (isi ini setelah domain asli aktif)
 *  2. VERCEL_PROJECT_PRODUCTION_URL — otomatis dari Vercel; berisi domain produksi,
 *     jadi nilainya ikut berubah sendiri begitu domain kustom dipasang di Vercel
 *  3. localhost                — untuk build/dev di komputer sendiri
 *
 * Jangan memakai domain yang belum aktif di sini: canonical yang menunjuk ke
 * domain tak bisa diakses membuat halaman tidak terindeks mesin pencari.
 */
const SITE_URL =
  process.env.PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // Selaras dengan `cleanUrls: true` + `trailingSlash: false` di vercel.json.
  // Tanpa ini canonical dan sitemap berisi URL berakhiran "/" yang justru
  // dialihkan (308) oleh Vercel ke versi tanpa "/".
  trailingSlash: 'never',
  build: { format: 'file' },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      weights: [400, 500, 600, 700],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), icon()]
});