import type { FlexDirection, FlexAlign, FlexJustify, FlexWrap } from '../types';

/**
 * Flex styles configuration
 */
export const flexStyles = {
  /**
   * Base styles
   */
  base: "flex",
  
  /**
   * Inline flex
   */
  inline: "inline-flex",

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
   * Wrap variants
   */
  wrap: {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
    "wrap-reverse": "flex-wrap-reverse",
  } as Record<FlexWrap, string>,
};
