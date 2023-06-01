export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: '~/app/layouts/components',
        extensions: ['.vue'],
        prefix: 'layout',
      },
    ],
  },

  devServer: {
    port: 3001,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~~/designs/index.css',
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
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

  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },

  typescript: {
    shim: false,
  },
});
