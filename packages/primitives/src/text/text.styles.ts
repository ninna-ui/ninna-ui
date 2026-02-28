import {
  TEXT_SIZE_CLASSES,
  TEXT_WEIGHT_CLASSES,
  TEXT_COLORS,
  TEXT_MUTED_COLORS,
} from '@ninna-ui/core';
import type { Color, TextSize, TextWeight } from '@ninna-ui/core';
import type { TextAlign } from './text.types';

/**
 * Text styles configuration
 * All size/color classes come from @ninna-ui/core for consistency
 */
export const textStyles = {
  /**
   * Base styles applied to all text
   */
  base: '',

  /**
   * Size variants from core
   */
  sizes: TEXT_SIZE_CLASSES,

  /**
   * Weight variants from core
   */
  weights: TEXT_WEIGHT_CLASSES,

  /**
   * Color variants from core
   */
  colors: TEXT_COLORS,

  /**
   * Muted colors
   */
  muted: TEXT_MUTED_COLORS,

  /**
   * Text alignment classes
   */
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  } as Record<TextAlign, string>,

  /**
   * Truncation styles
   */
  truncate: 'truncate',

  /**
   * Line clamp styles
   */
  lineClamp: {
    1: 'line-clamp-1',
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
    5: 'line-clamp-5',
    6: 'line-clamp-6',
  } as Record<number, string>,

  /**
   * No wrap style
   */
  noWrap: 'whitespace-nowrap',

  /**
   * Text transform styles
   */
  transform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
  },

  /**
   * Text decoration styles
   */
  decoration: {
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
  },
};

/**
 * Get size class for text
 */
export function getSizeClass(size: TextSize): string {
  return textStyles.sizes[size];
}

/**
 * Get weight class for text
 */
export function getWeightClass(weight: TextWeight): string {
  return textStyles.weights[weight];
}

/**
 * Get color class for text
 */
export function getColorClass(color: Color, muted?: boolean): string {
  if (muted) {
    return textStyles.muted.neutral;
  }
  return textStyles.colors[color];
}

/**
 * Get alignment class for text
 */
export function getAlignClass(align: TextAlign): string {
  return textStyles.align[align];
}

/**
 * Get line clamp class
 */
export function getLineClampClass(lines: number): string {
  return textStyles.lineClamp[lines] ?? '';
}
