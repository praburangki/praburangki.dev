import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

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
    resolve('./app/content-post-process'),
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~~/designs/styles/index.css',
    '~~/designs/styles/docs.css',
  ],

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },

  content: {
    documentDriven: {
      injectPage: false,
    },

    highlight: {
      theme: 'one-dark-pro',
    },

    markdown: {
      anchorLinks: false,

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
