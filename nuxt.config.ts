import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  app: {
    head: {
      title: 'Next 3 CRUD Application',
      meta: [
        { 'charset': 'utf-8' },
        { 'name': 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
          crossorigin: ''
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/public/favicon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        }
      ]
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      base_url: process.env.API_BASE_URL,
    }
  },
  buildModules: ['@nuxt/typescript-build','@nuxtjs/auth-next'],
  modulesDir:[ './node_modules' ],
  modules:[
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  axios: {
    proxy: true,
    credentials: true
  },
  proxy: {
    '/laravel': {
      target: 'http://localhost:8000',
      pathRewrite: { '^/laravel': '/' }
    }
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
      }
    }
  }
}

export default config