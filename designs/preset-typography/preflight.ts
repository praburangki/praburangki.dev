import { mergeDeep } from '@vinicunca/js-utilities';

import { DEFAULT } from './default';

export function getPreflights(
  options: {
    escapedSelectors: Set<string>;
    selectorName: string;
    cssExtend?: object;
  },
): string {
  const { escapedSelectors, selectorName, cssExtend } = options;
  const escapedSelector = Array.from(escapedSelectors);

  if (cssExtend) {
    return getCSS({ escapedSelector, selectorName, preflights: mergeDeep(DEFAULT, cssExtend) });
  }

  return getCSS({ escapedSelector, selectorName, preflights: DEFAULT });
}

export function getCSS(options: {
  escapedSelector: string[];
  selectorName: string;
  preflights: object;
}) {
  const { escapedSelector, selectorName, preflights } = options;

  let css = '';

  for (const selector in preflights) {
    // @ts-expect-error preflights do not have definitive keys
    const cssDeclarationBlock = preflights[selector];
    const notProseSelector = `:not(:where(.not-${selectorName},
      .not-${selectorName} *))`;

    // since pseudo class & elements can't be matched
    // within single :where(), they are split and rejoined.
    const pseudoCSSMatchArray = selector
      .split(',')
      .map((s) => {
        // pseudo class & pseudo elements matcher
        // matches :, ::, -, (), numbers and words
        const match = s.match(/::?(?:[\(\)\:\-\d\w]+)$/g);

        if (match) {
          const matchStr = match[0];
          s = s.replace(matchStr, '');
          return escapedSelector.map((e) =>
            `${e} :where(${s})${notProseSelector}${matchStr}`,
          ).join(',');
        }
        return null;
      })
      .filter((v) => v);

    // rejoin pseudo class & elements
    // multi selectors, single utility
    if (pseudoCSSMatchArray.length) {
      css += pseudoCSSMatchArray.join(',');
    } else {
      // directly from css declaration
      css += escapedSelector.map((e) =>
        `${e} :where(${selector})${notProseSelector}`,
      ).join(',');
    }

    css += '{';

    for (const k in cssDeclarationBlock) {
      const v = cssDeclarationBlock[k];
      css += `${k}:${v};`;
    }

    css += '}';
  }

  return css;
}
