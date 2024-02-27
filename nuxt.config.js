export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Janja',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 8000, // Postavite željeni port ovdje
  },
  layouts: {
    default: '~/layouts/default.vue'
  },
  router: {
    routes: [
      {
        name: 'home',
        path: '/',
        component: '~/pages/index.vue'
      },
      {
        name: 'about',
        path: '/about',
        component: '~/pages/about.vue'
      },

    ]
  },
  buildModules: [
    'nuxt-i18n',
    '@nuxt/typescript-build',
    // '@nuxtjs/tailwindcss'
  ],

  i18n: {
    locales: ['en', 'hr'],
    defaultLocale: 'hr',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./assets/locales/en.json'),
        hr: require('./assets/locales/hr.json'),
      },
    },
    strategy: 'no_prefix', // Dodajte ovu liniju kako biste spriječili dodavanje jezika u rutu

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/tailwind.css',
    'aos/dist/aos.css'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
    // 'daisyui/nuxt',
    // '@nuxtjs/color-mode'
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [

  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/color-mode',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: [
  ],


}
