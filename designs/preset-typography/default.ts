export const DEFAULT = {
  'a': {
    'color': 'var(--un-prose-links)',
    'text-decoration': 'underline',
    'font-weight': '500',
  },

  'strong': {
    'color': 'var(--un-prose-bold)',
    'font-weight': '600',
  },

  'a strong': {
    color: 'inherit',
  },

  'blockquote strong': {
    color: 'inherit',
  },

  'thead th strong': {
    color: 'inherit',
  },

  'ol': {
    'list-style-type': 'decimal',
    'margin-top': '1.25em',
    'margin-bottom': '1.25em',
    'padding-left': '1.625em',
  },

  'ol[type="A"]': {
    'list-style-type': 'upper-alpha',
  },

  'ol[type="a"]': {
    'list-style-type': 'lower-alpha',
  },

  'ol[type="A" s]': {
    'list-style-type': 'upper-alpha',
  },

  'ol[type="a" s]': {
    'list-style-type': 'lower-alpha',
  },

  'ol[type="I"]': {
    'list-style-type': 'upper-roman',
  },

  'ol[type="i"]': {
    'list-style-type': 'lower-roman',
  },

  'ol[type="I" s]': {
    'list-style-type': 'upper-roman',
  },

  'ol[type="i" s]': {
    'list-style-type': 'lower-roman',
  },

  'ol[type="1"]': {
    'list-style-type': 'decimal',
  },

  'ul': {
    'list-style-type': 'disc',
    'margin-top': '1.25em',
    'margin-bottom': '1.25em',
    'padding-left': '1.625em',
  },

  'ol > li::marker': {
    'font-weight': '400',
    'color': 'var(--un-prose-counters)',
  },

  'ul > li::marker': { color: 'var(--un-prose-bullets)' },

  'hr': {
    'border-color': 'var(--un-prose-hr)',
    'border-top-width': 1,
    'margin-top': '3em',
    'margin-bottom': '3em',
  },

  'blockquote': {
    'font-weight': '500',
    'font-style': 'italic',
    'color': 'var(--un-prose-quotes)',
    'border-left': '0.25em solid var(--un-prose-quote-borders)',
    'quotes': '"\\201C""\\201D""\\2018""\\2019"',
    'margin-top': '1.6em',
    'margin-bottom': '1.6em',
    'padding-left': '1em',
  },

  'blockquote p:first-of-type::before': { content: 'open-quote' },

  'blockquote p:last-of-type::after': { content: 'close-quote' },

  'h1': {
    'color': 'var(--un-prose-headings)',
    'font-weight': '800',
    'font-size': '2.25em',
    'margin-top': '0',
    'margin-bottom': '0.8888889em',
    'line-height': '1.1111111',
  },

  'h1 strong': {
    'font-weight': '900',
    'color': 'inherit',
  },

  'h2': {
    'color': 'var(--un-prose-headings)',
    'font-weight': '700',
    'font-size': '1.5em',
    'margin-top': '2em',
    'margin-bottom': '1em',
    'line-height': '1.3333333',
  },

  'h2 strong': {
    'font-weight': '800',
    'color': 'inherit',
  },

  'h3': {
    'color': 'var(--un-prose-headings)',
    'font-weight': '600',
    'font-size': '1.25em',
    'margin-top': '1.6em',
    'margin-bottom': '0.6em',
    'line-height': '1.6',
  },

  'h3 strong': {
    'font-weight': '700',
    'color': 'inherit',
  },

  'h4': {
    'color': 'var(--un-prose-headings)',
    'font-weight': '600',
    'margin-top': '1.5em',
    'margin-bottom': '0.5em',
    'line-height': '1.5',
  },

  'h4 strong': {
    'font-weight': '700',
    'color': 'inherit',
  },

  'figcaption': {
    'color': 'var(--un-prose-captions)',
    'font-size': '0.875em',
    'line-height': '1.4285714',
    'margin-top': '0.8571429em',
  },

  'code': {
    'color': 'var(--un-prose-code)',
    'font-weight': '600',
    'font-size': '0.875em',
    'font-family': 'var(--un-prose-font-mono)',
  },

  ':not(pre) > code::before,:not(pre) > code::after': {
    content: '"`"',
  },

  'a code': {
    color: 'inherit',
  },

  'h1 code': {
    color: 'inherit',
  },

  'h2 code': {
    'color': 'inherit',
    'font-size': '0.875em',
  },

  'h3 code': {
    'color': 'inherit',
    'font-size': '0.9em',
  },

  'h4 code': {
    color: 'inherit',
  },

  'blockquote code': {
    color: 'inherit',
  },

  'thead th code': {
    color: 'inherit',
  },

  'pre': {
    'color': 'var(--un-prose-pre-code)',
    'background-color': 'var(--un-prose-pre-bg)',
    'overflow-x': 'auto',
    'font-weight': '400',
    'font-size': '0.875em',
    'line-height': '1.7142857',
    'margin-top': '1.7142857em',
    'margin-bottom': '1.7142857em',
    'border-radius': '0.375rem',
    'padding-top': '0.8571429em',
    'padding-right': '1.1428571em',
    'padding-bottom': '0.8571429em',
    'padding-left': '1.1428571em',
    'padding': '1.25rem 1.5rem',
  },

  'pre code': {
    'background-color': 'transparent',
    'border-width': '0',
    'border-radius': '0',
    'padding': '0',
    'font-weight': 'inherit',
    'color': 'inherit',
    'font-size': 'inherit',
    'font-family': 'inherit',
    'line-height': 'inherit',
  },

  'table': {
    'width': '100%',
    'table-layout': 'auto',
    'text-align': 'left',
    'margin-top': '2em',
    'margin-bottom': '2em',
    'font-size': '0.875em',
    'line-height': '1.7142857',
    'border-collapse': 'collapse',
    'overflow-x': 'auto',
  },

  'thead': {
    'border-bottom-width': '1px',
    'border-bottom-color': 'var(--un-prose-th-borders)',
  },

  'thead th': {
    'color': 'var(--un-prose-headings)',
    'font-weight': '600',
    'vertical-align': 'bottom',
    'padding-right': '0.5714286em',
    'padding-bottom': '0.5714286em',
    'padding-left': '0.5714286em',
  },

  'tbody tr': {
    'border-bottom-width': '1px',
    'border-bottom-color': 'var(--un-prose-td-borders)',
  },

  'tbody tr:last-child': { 'border-bottom-width': '0' },

  'tbody td': { 'vertical-align': 'baseline' },

  'tfoot': {
    'border-top-width': '1px',
    'borderTopColor': 'var(--un-prose-th-borders)',
  },

  'tfoot td': { 'vertical-align': 'top' },

  'p': {
    'margin-top': '1.25em',
    'margin-bottom': '1.25em',
  },

  'img': {
    'margin-top': '2em',
    'margin-bottom': '2em',
  },

  'video': {
    'margin-top': '2em',
    'margin-bottom': '2em',
  },

  'figure': {
    'margin-top': '2em',
    'margin-bottom': '2em',
  },

  'figure > *': {
    'margin-top': '0',
    'margin-bottom': '0',
  },

  'li': {
    'margin-top': '0.5em',
    'margin-bottom': '0.5em',
  },

  'ol > li': { 'padding-left': '0.375em' },

  'ul > li': { 'padding-left': '0.375em' },

  '> ul > li p': {
    'margin-top': '0.75em',
    'margin-bottom': '0.75em',
  },

  '> ul > li > *:first-child': { 'margin-top': '1.25em' },

  '> ul > li > *:last-child': { 'margin-bottom': '1.25em' },

  '> ol > li > *:first-child': { 'margin-top': '1.25em' },

  '> ol > li > *:last-child': { 'margin-bottom': '1.25em' },

  'ul ul, ul ol, ol ul, ol ol': {
    'margin-top': '0.75em',
    'margin-bottom': '0.75em',
  },

  'hr + *': { 'margin-top': '0' },

  'h2 + *': { 'margin-top': '0' },

  'h3 + *': { 'margin-top': '0' },

  'h4 + *': { 'margin-top': '0' },

  'thead th:first-child': { 'padding-left': '0' },

  'thead th:last-child': { 'padding-right': '0' },

  'tbody td, tfoot td': {
    'padding-top': '0.5714286em',
    'padding-right': '0.5714286em',
    'padding-bottom': '0.5714286em',
    'padding-left': '0.5714286em',
  },

  'tbody td:first-child, tfoot td:first-child': { 'padding-left': '0' },

  'tbody td:last-child, tfoot td:last-child': { 'padding-right': '0' },

  '> :first-child': { 'margin-top': '0' },

  '> :last-child': { 'margin-bottom': '0' },

  // ----------------ORIGINAL----------------

  'img,video': {
    'max-width': '100%',
  },

  'figure,picture': {
    margin: '1em 0',
  },

  'pre,code': {
    'white-space': 'pre',
    'word-spacing': 'normal',
    'word-break': 'normal',
    'word-wrap': 'normal',
    '-moz-tab-size': 4,
    '-o-tab-size': 4,
    'tab-size': 4,
    '-webkit-hyphens': 'none',
    '-moz-hyphens': 'none',
    'hyphens': 'none',
    'background': 'transparent',
  },

  'ol > li::marker,ul > li::marker,summary::marker': {
    color: 'var(--un-prose-lists)',
  },

  'tr:nth-child(2n)': {
    background: 'var(--un-prose-bg-soft)',
  },

  'td,th': {
    border: '1px solid var(--un-prose-borders)',
    padding: '.625em 1em',
  },

  'abbr': {
    cursor: 'help',
  },

  'kbd': {
    'color': 'var(--un-prose-code)',
    'border': '1px solid',
    'padding': '.25rem .5rem',
    'font-size': '.875em',
    'border-radius': '.25rem',
  },

  'details': {
    margin: '1em 0',
    padding: '1.25rem 1.5rem',
    background: 'var(--un-prose-bg-soft)',
  },

  'summary': {
    'cursor': 'pointer',
    'font-weight': '600',
  },

};
