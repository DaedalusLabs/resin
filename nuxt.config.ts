// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-04-03",
   devtools: { enabled: false },

   modules: [
      "@nuxt/image",
      "@nuxt/eslint",
      "@nuxtjs/tailwindcss",
      "@nuxtjs/i18n",
   ],

   i18n: {
      detectBrowserLanguage: false,
      strategy: "prefix",
      lazy: true,
      langDir: "locales",
      defaultLocale: "en",
      baseUrl: "https://resin.com",
      locales: [
         { code: "nl", iso: "nl-NL", file: "nl.json" },
         { code: "en", iso: "en-US", file: "en.json" },
      ],
   },

   app: {
      head: {
         title: "Nuxt Image",
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
         // use google font
         link: [
            {
               rel: "stylesheet",
               href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
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
