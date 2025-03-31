// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    // SCSS file in the project
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],

  modules: ["@vite-pwa/nuxt"],

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