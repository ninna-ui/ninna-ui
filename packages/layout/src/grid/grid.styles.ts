import { FLEX_ALIGN } from '@ninna-ui/core';
import type { GridFlow } from '@ninna-ui/core';

export const gridStyles = {
  base: "grid",
  flow: {
    row:            "grid-flow-row",
    column:         "grid-flow-col",
    dense:          "grid-flow-dense",
    "row-dense":    "grid-flow-row-dense",
    "column-dense": "grid-flow-col-dense",
  } as Record<GridFlow, string>,
  align: FLEX_ALIGN,
};
