export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniel | Building awesome web apps',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I love creating user-centric web tech products, focusing on intuitive UX, performance, and clean code practices. As a front-end focused full stack engineer, I enjoy creating real-time, complex, and accessible web applications using modern JavaScript technologies.",
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:site_name', content: 'Daniel | Building awesome web apps' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.danielilievski.com/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Daniel | Building awesome web apps',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "I love creating user-centric web tech products, focusing on intuitive UX, performance, and clean code practices. As a front-end focused full stack engineer, I enjoy creating real-time, complex, and accessible web applications using modern JavaScript technologies.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.danielilievski.com/thumbnail.gif',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },

      { name: 'twitter:site', content: '@vo1dmind' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.danielilievski.com',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Daniel | Building awesome web apps',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          "I love creating user-centric web tech products, focusing on intuitive UX, performance, and clean code practices. As a front-end focused full stack engineer, I enjoy creating real-time, complex, and accessible web applications using modern JavaScript technologies.",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.danielilievski.com/thumbnail.gif',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#8f4db2' },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // {
      //   rel: 'preload',
      //   href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
      //   as: 'style',
      // },
    ],
    script: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue2-touch-events.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/fontawesome', '@nuxt/image'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    transpile: ['gsap'],
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
    component: 'fa',
  },

  sitemap: {
    hostname: 'https://www.danielilievski.com/',
  },
}
