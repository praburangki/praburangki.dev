import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: false,

  css: [
    '@unocss/reset/tailwind.css',
    '@mdi/font/css/materialdesignicons.css',
    '~~/designs/index.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@unocss/nuxt',

    async (options, nuxt) => {
      nuxt.hooks.hook(
        'vite:extendConfig',
        // @ts-expect-error typings
        (config) => config.plugins?.push(
          vuetify(),
        ),
      );
    },
  ],

  sourcemap: {
    server: true,
    client: false,
  },

  plugins: [
    '~~/designs/vuetify.plugin',
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
