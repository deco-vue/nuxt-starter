// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@pinia/nuxt", "@nuxt/ui", "@nuxtjs/tailwindcss"],
  colorMode: {
    preference: 'light'
  },
  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: true },
  ssr: false,
});
