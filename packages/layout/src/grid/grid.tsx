import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { gridStyles } from "./grid.styles";
import { GRID_COLUMNS, GRID_ROWS, GAP_SIZES, ROW_GAP_SIZES, COLUMN_GAP_SIZES } from "@ninna-ui/core";
import type { GridProps } from "./grid.types";
import { gridDefaults } from "./grid.types";

/**
 * Grid component - A CSS Grid container.
 * Provides grid utilities for layout composition.
 *
 * @example
 * ```tsx
 * <Grid columns={3} gap="4">
 *   <Card />
 *   <Card />
 *   <Card />
 * </Grid>
 * <Grid columns={2} rows={2} gap="6">
 *   <div>1</div>
 *   <div>2</div>
 *   <div>3</div>
 *   <div>4</div>
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      columns = gridDefaults.columns,
      rows,
      gap = gridDefaults.gap,
      rowGap,
      columnGap,
      flow,
      className,
      ...props
    },
    ref
  ) => {
    const hasSpecificGaps = rowGap || columnGap;

    return (
      <div
        ref={ref}
        data-slot="grid"
        className={cn(
          gridStyles.base,
          GRID_COLUMNS[columns],
          rows && GRID_ROWS[rows],
          !hasSpecificGaps && GAP_SIZES[gap],
          rowGap && ROW_GAP_SIZES[rowGap],
          columnGap && COLUMN_GAP_SIZES[columnGap],
          flow && gridStyles.flow[flow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";
