import type { FlexAlign, FlexJustify } from '../types';

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
