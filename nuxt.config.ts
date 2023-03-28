export default defineNuxtConfig({
  ssr: false,

  devServer: {
    port: 3001,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '@mdi/font/css/materialdesignicons.css',
    '~~/designs/index.css',
  ],

  modules: [
    '@unocss/nuxt',
    '@nuxt/image-edge',
  ],

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/praburangki/image/upload/dev-site',
      modifiers: {
        quality: 'auto:best',
        dpr: 'auto',
      },
    },
  },

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
