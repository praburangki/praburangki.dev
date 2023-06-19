export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: '~/app/layout/components',
        extensions: ['.vue'],
        prefix: 'layout',
      },
      {
        path: '~/app/site/components',
        extensions: ['.vue'],
        prefix: 'site',
      },
      {
        path: '~/app/toggle-dark/components',
        extensions: ['.vue'],
        prefix: 'toggle-dark',
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
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: '',
  },

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
