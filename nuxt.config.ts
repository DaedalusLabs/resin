// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-04-03",
   devtools: { enabled: true },

   modules: [
      "@nuxt/image",
      "@nuxt/eslint",
      "@nuxtjs/tailwindcss",
      "@nuxtjs/i18n",
      "@vite-pwa/nuxt",
      "@nuxt/fonts",
      "@nuxtjs/leaflet",
      "@pinia/nuxt"
   ],

   leaflet: {
      markerCluster: true,
   },

   i18n: {
      locales: ["en-US", "nl-NL"],
      strategy: "prefix",
      defaultLocale: "en-US",
      detectBrowserLanguage: false,
      vueI18n: "./i18n.config.ts",
   },

   fonts: {
      families: [{ name: "Inter", provider: "fontsource" }],
   },

   pwa: {
      manifest: {
         name: "Resin - Buy a home without a bank",
         short_name: "Resin",
         description: "Buy a home without a bank",
         display: "standalone",
         theme_color: "#000000",
         scope: "/",
         icons: [
            {
               src: "/android-chrome-512x512.png",
               sizes: "512x512",
               type: "image/png",
            },
            {
               src: "/android-chrome-192x192.png",
               sizes: "192x192",
               type: "image/png",
            },
         ],
      },
      workbox: {
         navigateFallback: null,
      },

      devOptions: {
         enabled: true,
         type: "module",
      },
   },

   app: {
      head: {
         title: "Resin - Buy a home without a bank",
         meta: [
            { charset: "utf-8" },
            {
               name: "viewport",
               content: "width=device-width, initial-scale=1",
            },
            {
               hid: "description",
               name: "description",
               content: "Nuxt Image module example",
            },
         ],
      },
   },

   // Nuxt Image module configuration
   image: {
      format: ["webp"],
      quality: 80,
   },
});