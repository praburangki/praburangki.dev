import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import transformerAlias from 'unocss-transformer-alias';

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

    dropShadow: {
      icon: '0 1px 2px rgba(0,0,0,0.5)',
      icon_hover: '0 2px 4px rgba(0,0,0,0.5)',
      icon_dark: '0 1px 2px rgba(255,255,255,0.3)',
      icon_dark_hover: '0 1px 3px rgba(255,255,255,0.4)',
    },
  },

  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      customizations: {
        iconCustomizer(_collection, icon, props) {
          if (icon === 'cypress-icon') {
            props.stroke = '#ffffff';
          }
        },
      },
    }),
    presetTypography(),
    presetUno(),
  ],

  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerAlias(),
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

  shortcuts: {
    headline: 'font-bold from-blue-400 to-blue-700 bg-gradient-to-r bg-clip-text pb-1 text-transparent',
  },
});
