export default defineNuxtConfig({
  ssr: false,

  css: [
    '@unocss/reset/tailwind.css',
    '@mdi/font/css/materialdesignicons.css',
    '~~/designs/index.css',
  ],

  modules: [
    '@unocss/nuxt',
  ],

  sourcemap: {
    server: true,
    client: false,
  },

  plugins: [
  ],

  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },

  typescript: {
    shim: false,
  },
});
