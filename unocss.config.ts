import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

import { presetTypography } from './designs/preset-typography';

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
        DEFAULT: '24px',
      },
    },

    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1440px',
    },

    boxShadow: {
      1: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
      2: '0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)',
      3: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)',
      4: '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)',
      5: '0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)',
    },

    dropShadow: {
      icon: '0 1px 2px rgba(0,0,0,0.5)',
      icon_hover: '0 2px 4px rgba(0,0,0,0.5)',
      icon_dark: '0 1px 2px rgba(255,255,255,0.3)',
      icon_dark_hover: '0 1px 3px rgba(255,255,255,0.4)',
    },

    animation: {
      keyframes: {
        'collapsible-slide-down': '{from {height: 0} to {height: var(--radix-collapsible-content-height)}}',
        'collapsible-slide-up': '{from {height: var(--radix-collapsible-content-height)} to {height: 0}}',
        'enter-from-right': '{from{opacity:0;transform:translateX(200px)}to{opacity:1;transform:translateX(0)}}',
        'enter-from-left': '{from{opacity:0;transform:translateX(-200px)}to{opacity:1;transform:translateX(0)}}',
        'exit-to-right': '{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(200px)}}',
        'exit-to-left': '{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-200px)}}',
        'scale-in': '{from{opacity:0;transform:rotateX(-10deg) scale(0.9)}to{opacity:1;transform:rotateX(0deg) scale(1)}}',
        'scale-out': '{from{opacity:1;transform:rotateX(0deg) scale(1)}to{opacity:0;transform:rotateX(-10deg) scale(0.95)}}',
        'fade-in': '{from{opacity:0}to{opacity:1}}',
        'fade-out': '{from{opacity:1}to{opacity:0}}',
        'slide-down-and-fade': '{from {opacity: 0;transform:translateY(-2px)} to {opacity: 1;transform: translateY(0)}}',
        'slide-left-and-fade': '{from {opacity: 0;transform:translateX(2px)} to {opacity: 1;transform: translateX(0)}}',
        'slide-up-and-fade': '{from {opacity: 0;transform:translateY(2px)} to {opacity: 1;transform: translateY(0)}}',
        'slide-right-and-fade': '{from {opacity: 0;transform:translateX(-2px)} to {opacity: 1;transform: translateX(0)}}',
      },

      durations: {
        'collapsible-slide-down': '0.3s',
        'collapsible-slide-up': '0.3s',
        'scale-in': '0.2s',
        'scale-out': '0.2s',
        'fade-in': '0.2s',
        'fade-out': '0.2s',
        'enter-from-left': '0.25s',
        'enter-from-right': '0.25s',
        'exit-to-left': '0.25s',
        'exit-to-right': '0.25s',
        'slide-down-and-fade': '0.4s',
        'slide-left-and-fade': '0.4s',
        'slide-up-and-fade': '0.4s',
        'slide-right-and-fade': '0.4s',
      },

      timingFns: {
        'collapsible-slide-down': 'ease-out',
        'collapsible-slide-up': 'ease-out',
        'scale-in': 'ease',
        'scale-out': 'ease',
        'fade-in': 'ease',
        'fade-out': 'ease',
        'enter-from-left': 'ease',
        'enter-from-right': 'ease',
        'exit-to-left': 'ease',
        'exit-to-right': 'ease',
        'slide-down-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-and-fade': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },

  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },

      collections: {
        company: {
          kintell: `
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M32 64c17.673 0 32-14.327 32-32C64 14.328 49.673 0 32 0 14.326 0 0 14.327 0 32c0 17.673 14.327 32 32 32Z" fill="#4E888C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.144 47.237a2.286 2.286 0 0 1-2.286-2.285V19.048a2.285 2.285 0 1 1 4.572 0v25.904a2.285 2.285 0 0 1-2.286 2.285ZM38.77 17.546a2.287 2.287 0 0 1 3.92 2.352l-6.321 10.535a3.048 3.048 0 0 0 0 3.136l6.32 10.533a2.286 2.286 0 1 1-3.919 2.352l-7.73-12.885a3.048 3.048 0 0 1 0-3.136l7.731-12.887Z" fill="#fff"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 31.997C0 14.327 14.326 0 31.997 0 49.67 0 63.995 14.327 63.995 31.997S49.669 63.995 31.997 63.995C14.326 63.995 0 49.668 0 31.997ZM31.997 4.291c-15.302 0-27.704 12.403-27.704 27.706 0 15.303 12.404 27.706 27.704 27.706 15.302 0 27.705-12.403 27.705-27.706 0-15.303-12.404-27.706-27.705-27.706Z" fill="#4E888C"/>
            </svg>
          `,
          bonza: `
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M164 0H36C16.118 0 0 16.118 0 36v128c0 19.882 16.118 36 36 36h128c19.882 0 36-16.118 36-36V36c0-19.882-16.118-36-36-36Z" fill="#0F1E3A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M58.38 37.17h20v35.414c7.387-5.51 16.449-8.754 26.24-8.754 24.86 0 45 20.9 45 46.67 0 25.77-20.15 46.67-45 46.67-9.791 0-18.853-3.245-26.24-8.754v7.084h-20V37.17Zm20.24 73.33c0 15.65 11.67 28.33 26 28.33 14.38 0 26-12.68 26-28.33 0-15.65-11.63-28.33-26-28.33s-26 12.68-26 28.33Z" fill="url(#a)"/><defs><linearGradient id="a" x1="58" y1="37" x2="150" y2="157" gradientUnits="userSpaceOnUse"><stop stop-color="#0082FF"/><stop offset="1" stop-color="#00EAB9"/></linearGradient></defs></svg>
          `,
          schoters: `
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M44.712.057c-.195.09-.227.142-.096.16.084.01.083.017-.002.02l-1.642.067a.065.065 0 0 0-.06.053c-.007.032-.028.058-.063.079-.04.024-.039.035.006.035.178-.001.355-.009.532-.023.128-.01.222.027.282.108a.194.194 0 0 1-.031.267c-.817.681-1.453 1.596-2.14 2.289-.323.326-.63.666-.92 1.02-.713.866-1.402 1.532-2.146 2.28a.189.189 0 0 0-.057.126c-.014.233-1.467 1.6-1.726 1.886a.1.1 0 0 0 .045.163l.06.018c.03.01.03.018-.003.023-.166.03-.26.13-.284.297a6.56 6.56 0 0 0-3.179 2.326A383.13 383.13 0 0 0 23.1 21.324c-2.386 1.826-3.079 4.162-2.079 7.009-1.047.99-1.694 1.636-1.942 1.936a33.677 33.677 0 0 1-1.35 1.553c-.617.653-1.102 1.335-1.732 1.955-.323.32-.627.657-.91 1.013-.535.67-1.173 1.207-1.709 1.889-1.172 1.488-2.622 2.715-3.769 4.171-.256.325-.53.633-.822.925-.81.805-1.45 1.731-2.34 2.477a.202.202 0 0 0-.063.096.195.195 0 0 0 0 .113c.053.176-.002.282-.165.318a.203.203 0 0 0-.087.04c-.924.774-1.625 1.746-2.438 2.588-.344.358-.705.771-1.084 1.241-.489.607-1.195 1.133-1.666 1.867a1.32 1.32 0 0 1-.54.479.199.199 0 0 0-.11.177c.013 8.549-.017 8.517-.089-.096C.134 42.575.2 34.07.155 25.57.146 20.494.144 15.416.147 10.338.15 8.055-.237 5.407.854 3.302 2.234.636 4.502.055 7.411.053c12.431-.009 24.865-.008 37.3.004Z" fill="#2090C6"/><path d="M44.712.057C52 .041 56.336.04 57.718.05c3.386.026 5.732 2.193 6.231 5.546-.116-.009-.174.007-.173.05.032 1.385.034 2.771.008 4.157-.001.068-.002.07-.004.002-.06-1.753-.067-2.797-.021-3.129a.593.593 0 0 0 .002-.159c-.038-.23-.115-.245-.232-.043-.414.716-1.125 1.225-1.647 1.867-.344.42-.702.815-1.072 1.186-.493.494-2.662 3.2-3.065 3.245a.198.198 0 0 0-.174.196l.002.151a.198.198 0 0 1-.07.151 8.382 8.382 0 0 0-1.29 1.359c-.446.59-.982 1.019-1.444 1.574-.683.825-1.337 1.44-1.95 2.2-1.128 1.393-2.506 2.612-3.625 4.031-.99 1.255-2.236 2.352-3.259 3.585-.412.498-.764.896-1.056 1.196-1.55 1.586-2.859 3.4-4.498 4.898a.195.195 0 0 0-.06.179l.113.642-.336-.205c-.022-.147-.11-.301-.267-.46-1.976-2.019-3.95-4.032-5.92-6.04a.196.196 0 0 1 .001-.276l7.04-7.078c5.1-3.771 1.746-11.64-4.485-9.95.023-.167.118-.266.284-.296.033-.005.034-.013.002-.023l-.059-.018a.1.1 0 0 1-.045-.163c.26-.286 1.712-1.653 1.726-1.886a.189.189 0 0 1 .057-.126c.744-.748 1.433-1.414 2.145-2.28.291-.354.598-.694.921-1.02.687-.693 1.323-1.608 2.14-2.29a.194.194 0 0 0 .031-.266c-.06-.081-.154-.117-.282-.108a7.198 7.198 0 0 1-.532.023c-.045 0-.047-.011-.006-.035.035-.02.056-.047.063-.079a.065.065 0 0 1 .06-.053l1.642-.066c.085-.004.086-.011.002-.022-.131-.017-.1-.07.096-.159Z" fill="#1C88C3"/><path d="M63.95 5.595c-.002 16.977 0 33.952.005 50.927.001 1.318-.09 2.304-.275 2.957-.85 3.025-3.298 4.374-6.353 4.376-17.26.005-34.52 0-51.78-.016l9.988-.094c.103-.001.11-.027.02-.077-.054-.03-.032-.046.064-.049.155-.518.601-.685.854-1.154.328-.607 1.17-1.26 1.657-1.79.17-.187.152-.39.367-.57a9.88 9.88 0 0 0 1.797-1.973c.875-1.274 2.185-2.344 3.259-3.463.174-.18.269-.45.416-.667a.199.199 0 0 1 .194-.083c.126.02.153-.053.083-.218 2.633.762 4.776.086 6.43-2.028a257.822 257.822 0 0 0 9.54-9.488c3.3-2.332 3.495-6.726.218-9.252l-.114-.642a.193.193 0 0 1 .061-.179c1.64-1.498 2.949-3.312 4.498-4.898.292-.3.644-.698 1.056-1.196 1.023-1.233 2.27-2.33 3.259-3.585 1.119-1.419 2.497-2.638 3.626-4.032.612-.76 1.266-1.374 1.95-2.199.46-.555.997-.983 1.442-1.574.378-.5.808-.953 1.29-1.359a.198.198 0 0 0 .07-.15l-.001-.152a.198.198 0 0 1 .175-.196c.402-.045 2.571-2.75 3.064-3.245.37-.37.728-.766 1.072-1.186.522-.642 1.233-1.15 1.647-1.867.117-.202.194-.187.232.043a.593.593 0 0 1-.002.159c-.046.332-.039 1.376.021 3.13.002.066.003.065.004-.003.026-1.386.024-2.772-.008-4.158 0-.042.057-.058.173-.049Z" fill="#187FBE"/><path d="M40.952 18.874c-2.437 1.139-4.518 1.007-6.244-.394-1.074-.87-1.746-1.942-2.017-3.214-.279-1.312-.08-2.65.597-4.015a6.56 6.56 0 0 1 3.179-2.326c6.23-1.69 9.586 6.178 4.485 9.95Z" fill="#E7ECB7"/><path d="M33.288 11.251c-.677 1.365-.875 2.704-.597 4.015.271 1.272.943 2.343 2.017 3.214 1.726 1.401 3.807 1.533 6.244.394l-7.04 7.078a.196.196 0 0 0-.002.276c1.972 2.008 3.945 4.021 5.921 6.04.156.159.245.313.267.46-5.599-2.991-11.029 3.921-6.716 8.523 1.834 1.953 4.44 2.094 6.834.934a257.822 257.822 0 0 1-9.54 9.488c.415-.84.656-1.382.722-1.625 1.362-5.022-3.962-8.587-8.31-6.106a183.865 183.865 0 0 1 6.38-6.358.198.198 0 0 0 .046-.219.193.193 0 0 0-.044-.064 160.195 160.195 0 0 1-6.284-6.498c1.815.862 3.515.922 5.1.178 4.401-2.067 4.238-8.328-.346-10.061-1.558-.589-3.172-.454-4.84.404a383.13 383.13 0 0 1 10.188-10.073Z" fill="#61ACD5"/><path d="M23.186 30.803c-.87-.635-1.591-1.458-2.166-2.47-1-2.847-.307-5.183 2.08-7.009 1.668-.858 3.282-.993 4.84-.404 4.584 1.733 4.747 7.994.346 10.061-1.585.744-3.285.684-5.1-.178Z" fill="#fff"/><path d="M.155 25.57C.2 34.072.134 42.577.205 51.076c.071 8.613.1 8.645.088.096a.196.196 0 0 1 .11-.177 1.32 1.32 0 0 0 .54-.479c.47-.734 1.177-1.26 1.666-1.867.379-.47.74-.883 1.084-1.24.813-.843 1.514-1.815 2.438-2.588a.203.203 0 0 1 .087-.041c.163-.036.218-.142.165-.319a.195.195 0 0 1 0-.112.202.202 0 0 1 .062-.096c.892-.746 1.532-1.672 2.34-2.477.292-.292.567-.6.823-.925 1.147-1.456 2.597-2.683 3.77-4.172.535-.68 1.173-1.219 1.707-1.888.284-.356.588-.694.911-1.013.63-.62 1.115-1.302 1.732-1.956.35-.37.8-.888 1.35-1.552.248-.3.895-.945 1.942-1.936.575 1.012 1.297 1.835 2.166 2.47A160.195 160.195 0 0 0 29.47 37.3a.193.193 0 0 1 .043.218.198.198 0 0 1-.045.065 183.865 183.865 0 0 0-6.38 6.358c-3.654 2.702-3.1 8.02 1.158 9.76.07.164.043.237-.083.217a.198.198 0 0 0-.194.083c-.147.218-.242.486-.416.667-1.074 1.12-2.384 2.19-3.26 3.463a9.88 9.88 0 0 1-1.796 1.973c-.215.18-.198.383-.367.57-.487.53-1.329 1.183-1.657 1.79-.253.47-.698.636-.854 1.154-.096.003-.118.02-.064.05.09.05.083.075-.02.076l-9.989.094c-2.729-.457-4.436-1.884-5.122-4.283-.184-.647-.277-1.62-.277-2.92-.003-10.355 0-20.71.008-31.065Z" fill="#1C88C3"/><path d="m40.098 32.728.336.205c3.277 2.526 3.082 6.92-.218 9.252-2.395 1.16-5 1.02-6.834-.934-4.313-4.602 1.117-11.514 6.716-8.523ZM30.675 51.673c-1.653 2.114-3.796 2.79-6.43 2.028-4.258-1.74-4.811-7.057-1.158-9.759 4.349-2.481 9.673 1.084 8.31 6.106-.065.243-.306.785-.722 1.625Z" fill="#fff"/></svg>
          `,
          oddbit: `
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g clip-path="url(#a)"><path d="M24 43.049c-5.881 0-11.147-2.68-14.643-6.882h16.966v-10.22h-4.766v5.454h-3.504v-19.56H9.357C12.854 7.638 18.12 4.957 24 4.957s11.146 2.68 14.643 6.882H21.557v10.22h4.766v-5.454h3.504v19.561h8.816C35.146 40.37 29.88 43.05 24 43.05ZM13.288 31.4H6.45a18.934 18.934 0 0 1-1.496-7.398c0-2.621.532-5.122 1.496-7.397h6.837V31.4Zm28.261 0h-6.957V16.606h6.958a18.934 18.934 0 0 1 1.495 7.398c0 2.622-.532 5.122-1.495 7.397ZM24 .004c-13.234 0-24 10.766-24 24 0 13.233 10.766 24 24 24s24-10.767 24-24c0-13.234-10.766-24-24-24Z" fill="#ABD138"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z"/></clipPath></defs></svg>
          `,
          carriage: `
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g clip-path="url(#a)"><path d="M24 43.049c-5.881 0-11.147-2.68-14.643-6.882h16.966v-10.22h-4.766v5.454h-3.504v-19.56H9.357C12.854 7.638 18.12 4.957 24 4.957s11.146 2.68 14.643 6.882H21.557v10.22h4.766v-5.454h3.504v19.561h8.816C35.146 40.37 29.88 43.05 24 43.05ZM13.288 31.4H6.45a18.934 18.934 0 0 1-1.496-7.398c0-2.621.532-5.122 1.496-7.397h6.837V31.4Zm28.261 0h-6.957V16.606h6.958a18.934 18.934 0 0 1 1.495 7.398c0 2.622-.532 5.122-1.495 7.397ZM24 .004c-13.234 0-24 10.766-24 24 0 13.233 10.766 24 24 24s24-10.767 24-24c0-13.234-10.766-24-24-24Z" fill="#ABD138"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z"/></clipPath></defs></svg>
          `,
          magloft: `
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><path d="M.77 32.7c0 17.25 13.983 31.233 31.233 31.233S63.236 49.949 63.236 32.7c0-17.25-13.984-31.233-31.233-31.233C14.753 1.467.77 15.451.77 32.7Z" fill="#2A709F"/><path d="M39.977 2.448 51.54 13.977l1.716-4.234A31.258 31.258 0 0 1 63.236 32.7c0 17.25-13.878 31.233-30.996 31.233-9.54 0-18.072-4.342-23.758-11.171l4.992-13.572s-6.76-7.226-8.32-8.383c-2.25-1.669-2.84-4.213-2.727-6.687C6.127 11.042 18.074 1.467 32.24 1.467c2.67 0 5.263.34 7.737.98Z" fill="#11496F"/><path d="m22.69 63.324 1.674-35.503L12.93 58.398a32.19 32.19 0 0 1-5.775-5.531l17.78-47.709s-20.084 6.938-13.26 27.543c-8.764 0-10.647-4.5-10.45-8.791C5.045 10.51 17.378.7 32.002.7c2.255 0 4.454.233 6.576.677l-2.354 48.43L53.476 8.974C59.94 14.83 64.003 23.291 64.003 32.7c0 11.605-6.178 21.767-15.424 27.378l4.4-32-14.965 36.058c-1.947.37-3.957.564-6.012.564a32 32 0 0 1-9.313-1.376Z" fill="#fff"/></svg>
          `,
        },
      },
    }),
    presetTypography(),
    presetUno(),
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
    [
      'toggle-dark-backdrop',
      {
        translate: '0 calc(var(--dark, 0) * (100% - (3 / 8 * var(--width))))',
      },
    ],
  ],

  shortcuts: {
    headline: 'font-bold from-blue-400 to-blue-700 bg-gradient-to-r bg-clip-text pb-1 text-transparent',
    underlined: 'after:(content-empty absolute block w-full left-0 h-[2px] transition-transform-250 scale-x-0 transform-origin-left) hover:after:(scale-x-100 bg-gradient-to-r from-blue-400 to-blue-700) focus:after:(scale-x-100 bg-gradient-to-r from-blue-400 to-blue-700)',
  },

  safelist: [
    'i-company-kintell',
  ],
});
