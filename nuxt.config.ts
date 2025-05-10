// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    // SCSS file in the project
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],
  vite: {
    optimizeDeps: {
      include: ['mapbox-gl'],
    },
    server: {
      allowedHosts: ['ba9b-185-143-147-154.ngrok-free.app'],
      https: {
        key: fs.readFileSync('./192.168.31.45-key.pem'),
        cert: fs.readFileSync('./192.168.31.45.pem')
      }
    }
  },  

  modules: ["@vite-pwa/nuxt", '@vueuse/nuxt', '@pinia/nuxt', '@nuxt/image'],

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
      mapboxToken: process.env.MAPBOX_PERSONAL,
      mapbox: {
        accessToken: process.env.MAPBOX_PERSONAL
      },
    }
  },

  pwa: {
    manifest: {
      name: 'Vroom',
      short_name: 'Vroom',
      theme_color: '#3422F2',
      background_color: '#F8F8FF',
      display: 'standalone'
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'],
    },
    registerType: 'autoUpdate', // Автоматичне оновлення PWA
    devOptions: {
      enabled: true, // Увімкнути PWA в dev-режимі
      type: 'module'
    }
  }
})