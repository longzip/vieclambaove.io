const publicPath = 'https://longzip.github.io/vieclambaove.io/'
const base = '/vieclambaove.io/'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Việc làm bảo vệ | Tuyển dụng Công ty dịch vụ bảo vệ Chuyên Nghiệp - Uy tín',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bạn đang Tìm việc làm bảo vệ tại công ty dịch vụ bảo vệ chuyên nghiệp - uy tín. Hãy nhắn tin để nhận lịch phỏng vấn đi làm ngay hôm nay.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'SGpv3reVkV7XGzQWktGGJP2I3fMrNmtZ0Sc-9yek0FU' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { publicPath },
  generate: {
    dir: 'docs',
  },
}
