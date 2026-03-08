import type { GridFlow } from '../types';

/**
 * Grid styles configuration
 */
export const gridStyles = {
  /**
   * Base styles
   */
  base: "grid",

  /**
   * Flow variants
   */
  flow: {
    row: "grid-flow-row",
    column: "grid-flow-col",
    dense: "grid-flow-dense",
    "row-dense": "grid-flow-row-dense",
    "column-dense": "grid-flow-col-dense",
  } as Record<GridFlow, string>,
};
