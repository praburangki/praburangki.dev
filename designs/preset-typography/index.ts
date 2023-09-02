import { type Theme } from '@unocss/preset-mini';
import { type CSSObject, type Preset, toEscapedSelector } from '@unocss/core';
import { isNil } from '@vinicunca/perkakas';

import { getPreflights } from './preflight';

export interface TypographyOptions {
/**
   * The selector name to use the typographic utilities.
   * To undo the styles to the elements, use it like
   * `not-${selectorName}` which is by default `not-prose`.
   *
   * Note: `not` utility is only available in class mode.
   *
   * @defaultValue `prose`
   */
  selectorName?: string;
  /**
   * Extend or override CSS selectors with CSS declaration block.
   *
   * @defaultValue undefined
   */
  cssExtend?: Record<string, CSSObject>;
}

export function presetTypography(options?: TypographyOptions): Preset<Theme> {
  const escapedSelectors = new Set<string>();
  const selectorName = options?.selectorName || 'prose';
  const selectorNameRE = new RegExp(`^${selectorName}$`);
  const colorsRE = new RegExp(`^${selectorName}-([-\\w]+)$`);
  const invertRE = new RegExp(`^${selectorName}-invert$`);
  const cssExtend = options?.cssExtend;

  return {
    name: '@vinicunca/preset-typography',
    enforce: 'post',
    layers: { typography: -20 },

    rules: [
      [
        selectorNameRE,
        (_, { rawSelector }) => {
          escapedSelectors.add(toEscapedSelector(rawSelector));
          return { color: 'var(--un-prose-body)' };
        },
        { layer: 'typography' },
      ],
      [
        colorsRE,
        ([, color], { theme }) => {
          const baseColor = theme.colors?.[color] as Record<string, string> | string;
          if (isNil(baseColor)) {
            return;
          }

          const colorObject = typeof baseColor === 'object' ? baseColor : {};
          return {
            '--un-prose-body': colorObject[700] ?? baseColor,
            '--un-prose-headings': colorObject[900] ?? baseColor,
            '--un-prose-links': colorObject[900] ?? baseColor,
            '--un-prose-bold': colorObject[900] ?? baseColor,
            '--un-prose-counters': colorObject[500] ?? baseColor,
            '--un-prose-lists': colorObject[400] ?? baseColor,
            '--un-prose-hr': colorObject[200] ?? baseColor,
            '--un-prose-captions': colorObject[500] ?? baseColor,
            '--un-prose-code': colorObject[900] ?? baseColor,
            '--un-prose-borders': colorObject[200] ?? baseColor,
            '--un-prose-bg-soft': colorObject[100] ?? baseColor,
            '--un-prose-bullets': colorObject[300] ?? baseColor,
            '--un-prose-quotes': colorObject[900] ?? baseColor,
            '--un-prose-quote-borders': colorObject[200] ?? baseColor,
            '--un-prose-pre-code': colorObject[200] ?? baseColor,
            '--un-prose-pre-bg': colorObject[800] ?? baseColor,
            '--un-prose-th-borders': colorObject[300] ?? baseColor,
            '--un-prose-td-borders': colorObject[200] ?? baseColor,

            // invert colors (dark mode)
            '--un-prose-invert-body': colorObject[200] ?? baseColor,
            '--un-prose-invert-headings': colorObject[100] ?? baseColor,
            '--un-prose-invert-links': colorObject[100] ?? baseColor,
            '--un-prose-invert-bold': colorObject[100] ?? baseColor,
            '--un-prose-invert-lists': colorObject[500] ?? baseColor,
            '--un-prose-invert-hr': colorObject[700] ?? baseColor,
            '--un-prose-invert-captions': colorObject[400] ?? baseColor,
            '--un-prose-invert-code': colorObject[100] ?? baseColor,
            '--un-prose-invert-borders': colorObject[700] ?? baseColor,
            '--un-prose-invert-bg-soft': colorObject[800] ?? baseColor,
            '--un-prose-invert-pre-bg': colorObject[800] ?? baseColor,
            '--un-prose-invert-counters': colorObject[400] ?? baseColor,
            '--un-prose-invert-bullets': colorObject[600] ?? baseColor,
            '--un-prose-invert-quotes': colorObject[100] ?? baseColor,
            '--un-prose-invert-quote-borders': colorObject[700] ?? baseColor,
            '--un-prose-invert-pre-code': colorObject[300] ?? baseColor,
            '--un-prose-invert-th-borders': colorObject[600] ?? baseColor,
            '--un-prose-invert-td-borders': colorObject[700] ?? baseColor,

            '--un-prose-font-mono': theme.fontFamily?.mono,
          };
        },
        { layer: 'typography' },
      ],
      [
        invertRE,
        () => {
          return {
            '--un-prose-body': 'var(--un-prose-invert-body)',
            '--un-prose-headings': 'var(--un-prose-invert-headings)',
            '--un-prose-links': 'var(--un-prose-invert-links)',
            '--un-prose-lists': 'var(--un-prose-invert-lists)',
            '--un-prose-hr': 'var(--un-prose-invert-hr)',
            '--un-prose-captions': 'var(--un-prose-invert-captions)',
            '--un-prose-code': 'var(--un-prose-invert-code)',
            '--un-prose-borders': 'var(--un-prose-invert-borders)',
            '--un-prose-bg-soft': 'var(--un-prose-invert-bg-soft)',
          };
        },
        { layer: 'typography' },
      ],
    ],

    preflights: [
      {
        layer: 'typography',
        getCSS: () => {
          if (escapedSelectors.size > 0) {
            return getPreflights({ escapedSelectors, selectorName, cssExtend });
          }
        },
      },
    ],
  };
}
