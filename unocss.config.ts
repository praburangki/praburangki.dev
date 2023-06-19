import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

import { presetTypography } from './designs/preset-typography';
import { elevationRule } from './designs/elevation';

export default defineConfig({
  extendTheme: (theme: any) => {
    theme.fontFamily.sans = `Inter var,${theme.fontFamily.sans}`;
    theme.fontFamily.mono = `Fira Code VF,${theme.fontFamily.mono}`;
  },

  layers: {
    vinicunca: 1,
  },

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },

    maxWidth: {
      '8xl': '90rem',
    },

    borderRadius: {
      half: '50%',
    },

    colors: {
      surface: {
        DEFAULT: '#fcfcfc',
        invert: '#0f172a',
      },
    },
  },

  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],

  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],

  variants: [
    (matcher) => {
      if (matcher.startsWith('vin:')) {
        return {
          matcher: matcher.replace('vin:', 'uno-layer-vinicunca:'),
        };
      }
    },
  ],

  rules: [
    elevationRule,
    [
      'toggle-dark-backdrop',
      {
        translate: '0 calc(var(--dark, 0) * (100% - (3 / 8 * var(--width))))',
      },
    ],
  ],
});
