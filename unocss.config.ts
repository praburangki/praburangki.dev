import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
  ],

  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],

  theme: {
    fontFamily: {
      sans: 'Inter var, sans-serif',
    },

    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: '#8e8e93',

      light: {
        1: 'rgba(60, 60, 67)',
        2: 'rgba(60, 60, 67, 0.75)',
        3: 'rgba(60, 60, 67, 0.33)',
      },

      dark: {
        1: 'rgba(255, 255, 245, 0.86)',
        2: 'rgba(235, 235, 245, 0.6)',
        3: 'rgba(235, 235, 245, 0.38)',
      },

      green: {
        DEFAULT: '#10b981',
        light: '#34d399',
        lighter: '#6ee7b7',
        dark: '#059669',
        darker: '#047857',
        dimm: {
          1: 'rgba(16, 185, 129, 0.05)',
          2: 'rgba(16, 185, 129, 0.2)',
          3: 'rgba(16, 185, 129, 0.5)',
        },
      },

      yellow: {
        DEFAULT: '#d97706',
        light: '#f59e0b',
        lighter: '#fbbf24',
        dark: '#b45309',
        darker: '#92400e',
        dimm: {
          1: 'rgba(234, 179, 8, 0.05)',
          2: 'rgba(234, 179, 8, 0.2)',
          3: 'rgba(234, 179, 8, 0.5)',
        },
      },

      red: {
        DEFAULT: '#f43f5e',
        light: '#fb7185',
        lighter: '#fda4af',
        dark: '#e11d48',
        darker: '#be123c',
        dimm: {
          1: 'rgba(244, 63, 94, 0.05)',
          2: 'rgba(244, 63, 94, 0.2)',
          3: 'rgba(244, 63, 94, 0.5)',
        },
      },

    },
  },
});
