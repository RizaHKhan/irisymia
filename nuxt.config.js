import path from 'path'
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_transparent.ico' },
    ],
  },
  css: ['~/assets/snipcartStyleSheet.scss'],
  plugins: ['~/plugins/notify.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/prismic',
    '@nuxtjs/snipcart',
  ],
  modules: ['nuxt-i18n', '@nuxtjs/axios', '@nuxt/image'],
  prismic: {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: '@/plugins/link-resolver.js',
    htmlSerializer: '@/plugins/html-serializer.js',
  },
  snipcart: {
    key: process.env.SNIPCART_APIKEY,
    attributes: [
      ['data-config-modal-style', 'side'],
      ['data-config-add-product-behavior', 'none'],
    ],
    locales: {
      es: {
        cart_summary: {
          total: 'Total:',
        },
      },
    },
    snipcartCustomize: path.join(__dirname, './plugins/snipcartTemplate'),
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
