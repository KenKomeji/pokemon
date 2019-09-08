
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    /*
    script: [
      {src: '/__/firebase/6.6.0/firebase-app.js'},
      {src: '/__/firebase/6.6.0/firebase-auth.js'},
      {src: '/__/firebase/6.6.0/firebase-database.js'},
      {src: '/__/firebase/6.6.0/firebase-messaging.js'},
      {src: '/__/firebase/6.6.0/firebase-storage.js'},
      {src: '/__/firebase/6.6.0/firebase-firestore.js'},
      {src: '/__/firebase/6.6.0/firebase-init.js'},
    ]
    */
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/RouterOption' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

module.exports = {
  router: {
    middleware: 'logincheck'
  }  
}
