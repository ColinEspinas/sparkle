import i18nConfig from './i18n/i18n.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/kinde',
    '@nuxtjs/i18n',
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
      kindeGithubConnectionId: '',
      kindeEmailConnectionId: '',
    },
  },

  i18n: i18nConfig,
})
