import tailwindcss from '@tailwindcss/vite'
import i18nConfig from './i18n/i18n.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  eslint: {
    config: {
      standalone: false,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/kinde',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],

  runtimeConfig: {
    // Private keys which are only available within server-side
    databaseUrl: '',
    kinde: {
      defaultOrg: '',
    },
    public: {
      // Keys within public, will be also exposed to the client-side
      appDomain: '',
      kindeLinkedinConnectionId: '',
      kindeGoogleConnectionId: '',
      kindeAppleConnectionId: '',
      kindeEmailConnectionId: '',
    },
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700, 800, 900],
    },
  },

  i18n: i18nConfig,
})
