/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Parent} Parent
 * @typedef {import('hast').Element} Element
 * @typedef {Element['children'][number]} ElementChild
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast-util-is-element').Test} Test
 *
 * @typedef {'prepend'|'append'|'wrap'|'before'|'after'} Behavior
 *
 * @callback Build
 * @param {Element} node
 * @returns {ElementChild|ElementChild[]}
 *
 * @typedef Options
 *   Configuration.
 * @property {Behavior} [behavior='prepend']
 *   How to create links.
 * @property {Behavior} [behaviour]
 *   Please use `behavior` instead
 * @property {Properties} [properties]
 *   Extra properties to set on the link when injecting.
 *   Defaults to `{ariaHidden: true, tabIndex: -1}` when `'prepend'` or
 *   `'append'`.
 * @property {ElementChild|ElementChild[]|Build} [content={type: 'element', tagName: 'span', properties: {className: ['icon', 'icon-link']}, children: []}]
 *   hast nodes to insert in the link.
 * @property {ElementChild|ElementChild[]|Build} [group]
 *   hast node to wrap the heading and link with, if `behavior` is `'before'` or
 *   `'after'`.
 *   There is no default.
 * @property {Test} [test]
 *   Test to define which heading elements are linked.
 *   Any test that can be given to `hast-util-is-element` is supported.
 *   The default (no test) is to link all headings.
 *   Can be used to link only h1-h3, or for example all except h1.
 */

import extend from 'extend';
import { SKIP, visit } from 'unist-util-visit';
import { hasProperty } from 'hast-util-has-property';
import { headingRank } from 'hast-util-heading-rank';
import { convertElement } from 'hast-util-is-element';

/**
 * Plugin to automatically add links to headings (h1-h6).
 *
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
export default function rehypeAnchor(options = {}) {
  const props = options.properties;
  const is = convertElement(options.test);

  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        headingRank(node)
        && hasProperty(node, 'id')
        && is(node, index, parent)
      ) {
        return inject(node);
      }
    });
  };

  /** @type {import('unist-util-visit/complex-types').Visitor<Element>} */
  function inject(node) {
    node.children.push(
      create(node, extend(true, {}, props)),
    );

    return [SKIP];
  }

  /**
   * @param {Element} node
   * @param {Properties} props
   * @param {ElementChild[]} children
   * @returns {Element}
   */
  function create(node, props) {
    // console.log('🚀 ~ create ~ node:', node);
    const title = node
      .children
      .filter((token) => token.type === 'text' || token.type === 'code_inline')
      .reduce((acc, t) => acc + t.value, '');

    return {
      type: 'element',
      tagName: 'a',
      properties: Object.assign({}, props, {
        'className': 'header-anchor',
        'aria-label': `Permalink to "${title}"`,
        // Fix hast types and make them required.
        /* c8 ignore next */
        'href': `#${(node.properties || {}).id}`,
      }),
    };
  }
}
