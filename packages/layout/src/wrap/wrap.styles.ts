import type { FlexAlign, FlexJustify, GapSize } from '../types';

const GAP_SIZES: Record<GapSize, string> = {
  '0': 'gap-0', '1': 'gap-1', '2': 'gap-2', '3': 'gap-3',
  '4': 'gap-4', '5': 'gap-5', '6': 'gap-6', '8': 'gap-8',
  '10': 'gap-10', '12': 'gap-12', '16': 'gap-16',
};

/**
 * Wrap styles configuration
 */
export const wrapStyles = {
  /**
   * Base styles - flex with wrap
   */
  base: "flex flex-wrap",

  /**
   * Align variants
   */
  align: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  } as Record<FlexAlign, string>,

  /**
   * Justify variants
   */
  justify: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  } as Record<FlexJustify, string>,
};

/**
 * Get align class
 */
export function getAlignClass(align: FlexAlign): string {
  return wrapStyles.align[align];
}

/**
 * Get justify class
 */
export function getJustifyClass(justify: FlexJustify): string {
  return wrapStyles.justify[justify];
}

/**
 * Get gap class
 */
export function getGapClass(gap: GapSize): string {
  return GAP_SIZES[gap];
}
