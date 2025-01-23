// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "StorifyAI | Create Stunning Short AI Video",
      meta: [
        { name: 'ogTitle', content: 'StorifyAI | Create Stunning Short AI Video' },
        { name: 'description', content: 'Create entertaining AI short videos, from cute cat stories and documentaries to horror and more. Storify AI makes it easy to bring your video ideas to life with AI-generated visuals.' },
        { name: 'ogDescription', content: 'Create entertaining AI short videos, from cute cat stories and documentaries to horror and more. Storify AI makes it easy to bring your video ideas to life with AI-generated visuals.' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-vuefire'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  vuefire: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    },
  },
})