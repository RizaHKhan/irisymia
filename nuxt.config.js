import colors from 'vuetify/es5/util/colors'
import es from './locales/es.json'

export default {
  target: 'static',
  head: {
    titleTemplate: '%s - irisymia',
    title: 'irisymia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['nuxt-i18n', '@nuxtjs/axios', '@nuxt/image'],
  prismic: {
    endpoint: process.env.PRISMIC_ENDPOINT,
  },
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        es,
      },
    },
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.grey.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
}
