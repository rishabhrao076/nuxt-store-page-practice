// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'My App',
      meta: [
        {
          name: 'description',
          content: 'Learning Nuxt 3',
        },
      ],
      // adding Stylesheets or other cdn links throughout the app
      // link: [
      //   { rel: 'stylesheet', href: ''}
      // ]
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
