import { resolve } from 'path'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-boilerplate-v1',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vue-awesome-swiper.js',
    '~/plugins/utilsFN.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/apollo',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  googleFonts: {
    families: {
      'Open+Sans': true,
      'Open+Sans': {
        wght: [300, 400, 500, 600, 700, 900],
      },
    },
    display: 'swap',
    preconnect: true,
    preload: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    baseURL: 'https://brijj.ssmdataserver.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },

  // Loading Progressbar Configuration: https://nuxtjs.org/docs/features/loading
  loading: false,

  // Server Configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-server
  server: {
    port: 3000,
    host: '0.0.0.0',
    timing: false,
  },
  apollo: {
    clientConfigs: {
      default: {
        // httpEndpoint: 'https://gc.crankup.net/graphql',
        httpEndpoint: 'http://192.168.100.233:5000/api/graphql',
      },
    },
  },

  // Alias Configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-alias
  alias: {
    assets: resolve(__dirname, './assets'),
    components: resolve(__dirname, './components'),
    layouts: resolve(__dirname, './layouts'),
    pages: resolve(__dirname, './pages'),
  },
}
