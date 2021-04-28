const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Shaun Scott 2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'og:url', content: 'https://scott2019.com' },
      { name: 'og:image', content: 'https://scott2019.com/climate-strike-speech.jpg' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Shaun Scott 2019' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'twitter:title', name: 'twitter:title', content:'Shaun Scott 2019' },
      { hid: 'twitter:card', name: 'twitter:card', content:'https://scott2019.com/climate-strike-speech.jpg' },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/gif', href: 'https://scott2019.com/favicon.gif' },
      { rel: 'canonical', href: 'https://scott2019.com' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Montserrat:400,600' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '@/components/Loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-moment'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',

    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS
    }],
    '@nuxtjs/separate-env'
  ],
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'layouts/error.vue')
      })
    }
  },




  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
