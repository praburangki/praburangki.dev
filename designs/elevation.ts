import { type Rule } from '@unocss/core';
import { convertToUnit } from '@vinicunca/js-utilities';

const COLOR_RING_OFFSET = 'rgba(0, 0, 0, 0.2)';
const COLOR_RING_SHADOW = 'rgba(0, 0, 0, 0.14)';
const COLOR_SHADOW = 'rgba(0, 0, 0, 0.12)';

const ELEVATION_DICTIONARY: Record<string, number[][]> = {
  0: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  1: [[0, 1, 3, 0], [0, 1, 1, 0], [0, 2, 1, -1]],
  2: [[0, 1, 5, 0], [0, 2, 2, 0], [0, 3, 1, -2]],
  3: [[0, 1, 8, 0], [0, 3, 4, 0], [0, 3, 3, -2]],
  4: [[0, 2, 4, -1], [0, 4, 5, 0], [0, 1, 10, 0]],
  5: [[0, 3, 5, -1], [0, 5, 8, 0], [0, 1, 14, 0]],
  6: [[0, 3, 5, -1], [0, 6, 10, 0], [0, 1, 18, 0]],
  7: [[0, 4, 5, -2], [0, 7, 10, 1], [0, 2, 16, 1]],
  8: [[0, 5, 5, -3], [0, 8, 10, 1], [0, 3, 14, 2]],
  9: [[0, 5, 6, -3], [0, 9, 12, 1], [0, 3, 16, 2]],
  10: [[0, 6, 6, -3], [0, 10, 14, 1], [0, 4, 18, 3]],
  11: [[0, 6, 7, -4], [0, 11, 15, 1], [0, 4, 20, 3]],
  12: [[0, 7, 8, -4], [0, 12, 17, 2], [0, 5, 22, 4]],
  13: [[0, 7, 8, -4], [0, 13, 19, 2], [0, 5, 24, 4]],
  14: [[0, 7, 9, -4], [0, 14, 21, 2], [0, 5, 26, 4]],
  15: [[0, 8, 9, -5], [0, 15, 22, 2], [0, 6, 28, 5]],
  16: [[0, 8, 10, -5], [0, 16, 24, 2], [0, 6, 30, 5]],
  17: [[0, 8, 11, -5], [0, 17, 26, 2], [0, 6, 32, 5]],
  18: [[0, 9, 11, -5], [0, 18, 28, 2], [0, 7, 34, 6]],
  19: [[0, 9, 12, -6], [0, 19, 29, 2], [0, 7, 36, 6]],
  20: [[0, 10, 13, -6], [0, 20, 31, 3], [0, 8, 38, 7]],
  21: [[0, 10, 13, -6], [0, 21, 33, 3], [0, 8, 40, 7]],
  22: [[0, 10, 14, -6], [0, 22, 35, 3], [0, 8, 42, 7]],
  23: [[0, 11, 14, -7], [0, 23, 36, 3], [0, 9, 44, 8]],
  24: [[0, 11, 15, -7], [0, 24, 38, 3], [0, 9, 46, 8]],
};

function addPixels(value: number[]): string {
  return value.map((v) => convertToUnit(v)).join(' ');
}

export const elevationRule: Rule = [
  /^elevation-([\d.]+)$/,
  ([, body]) => {
    const elevation = ELEVATION_DICTIONARY[body];

    if (!elevation) {
      return;
    }

    const [ringOffset, ringShadow, shadow] = elevation;

    const unRingOffsetShadow = addPixels(ringOffset);
    const unRingShadow = addPixels(ringShadow);
    const unShadow = addPixels(shadow);

    return {
      '--un-ring-offset-shadow': `${unRingOffsetShadow} ${COLOR_RING_OFFSET}`,
      '--un-ring-shadow': `${unRingShadow} ${COLOR_RING_SHADOW}`,
      '--un-shadow': `${unShadow} ${COLOR_SHADOW}`,
      'box-shadow': 'var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
    };
  },
];
