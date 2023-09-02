export default defineNuxtConfig({
  devServer: {
    port: 3001,
  },

  modules: [
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~~/designs/styles/index.css',
  ],

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },

  content: {
    highlight: {
      theme: 'one-dark-pro',
    },

    navigation: {
      fields: ['icon', 'titleTemplate', 'header', 'main', 'aside', 'footer'],
    },

    markdown: {
      anchorLinks: false,

      rehypePlugins: [
        'rehype-anchor',
      ],

      toc: {
        depth: 1,
      },
    },
  },

  image: {
    provider: 'cloudinary',
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
});
