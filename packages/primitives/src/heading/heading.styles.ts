import {
  TEXT_SIZE_CLASSES,
  TEXT_WEIGHT_CLASSES,
  TEXT_COLORS,
} from '@ninna-ui/core';
import type { Color, TextSize, TextWeight, HeadingLevel } from '@ninna-ui/core';
import type { HeadingAlign } from './heading.types';

/**
 * Heading styles configuration
 * All size/color classes come from @ninna-ui/core for consistency
 */
export const headingStyles = {
  /**
   * Base styles applied to all headings
   */
  base: "scroll-m-20",

  /**
   * Default size classes per heading level
   */
  levelSizes: {
    h1: 'text-4xl lg:text-5xl',
    h2: 'text-3xl lg:text-4xl',
    h3: 'text-2xl lg:text-3xl',
    h4: 'text-xl lg:text-2xl',
    h5: 'text-lg lg:text-xl',
    h6: 'text-base lg:text-lg',
  } satisfies Record<HeadingLevel, string>,

  /**
   * Default weight classes per heading level
   */
  levelWeights: {
    h1: 'font-bold',
    h2: 'font-bold',
    h3: 'font-semibold',
    h4: 'font-semibold',
    h5: 'font-medium',
    h6: 'font-medium',
  } satisfies Record<HeadingLevel, string>,

  /**
   * Size variants from core (for override)
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
   * Text alignment classes
   */
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } as Record<HeadingAlign, string>,

  /**
   * Truncation styles
   */
  truncate: "truncate",

  /**
   * Line clamp styles
   */
  lineClamp: {
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
    5: "line-clamp-5",
    6: "line-clamp-6",
  } as Record<number, string>,

  /**
   * No wrap style
   */
  noWrap: "whitespace-nowrap",
};

/**
 * Get default size class for heading level (without weight)
 */
export function getLevelSizeClass(level: HeadingLevel): string {
  return headingStyles.levelSizes[level];
}

/**
 * Get default weight class for heading level
 */
export function getLevelWeightClass(level: HeadingLevel): string {
  return headingStyles.levelWeights[level];
}

/**
 * Get size class override
 */
export function getSizeClass(size: TextSize): string {
  return headingStyles.sizes[size];
}

/**
 * Get weight class
 */
export function getWeightClass(weight: TextWeight): string {
  return headingStyles.weights[weight];
}

/**
 * Get color class for heading
 */
export function getColorClass(color: Color): string {
  return headingStyles.colors[color];
}

/**
 * Get alignment class
 */
export function getAlignClass(align: HeadingAlign): string {
  return headingStyles.align[align];
}

/**
 * Get line clamp class
 */
export function getLineClampClass(lines: number): string {
  return headingStyles.lineClamp[lines] ?? "";
}
