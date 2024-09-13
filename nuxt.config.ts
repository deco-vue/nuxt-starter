export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/sass/main.sass'],
  modules: ['@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'My App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
      ],
      link: [
      ],
      noscript: [
      ]
    }
  },

  // plugins: [
  //   { src: "~/plugins/aos" },
  // ],
})