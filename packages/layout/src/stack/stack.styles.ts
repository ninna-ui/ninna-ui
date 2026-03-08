import type { FlexDirection, FlexAlign, FlexJustify } from '../types';

/**
 * Stack styles configuration
 */
export const stackStyles = {
  /**
   * Base styles
   */
  base: "flex",

  /**
   * Direction variants
   */
  direction: {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse",
  } as Record<FlexDirection, string>,

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

  /**
   * Wrap style
   */
  wrap: "flex-wrap",
};
