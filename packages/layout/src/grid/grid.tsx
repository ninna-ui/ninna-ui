import { forwardRef, type ElementType, type ReactElement } from "react";
import { cn } from "@ninna-ui/utils";
import { gridStyles } from "./grid.styles";
import { getResponsiveGridCols, GRID_ROWS, GAP_SIZES, ROW_GAP_SIZES, COLUMN_GAP_SIZES } from "@ninna-ui/core";
import type { GridProps } from "./grid.types";
import type { GridColumns, GapSize } from '@ninna-ui/core';

const GRID_DEFAULT_COLUMNS: GridColumns = 1;
const GRID_DEFAULT_GAP: GapSize = '4';

/**
 * Grid — a CSS Grid container with responsive column support.
 *
 * Pass a number for fixed columns, or a responsive breakpoint map for adaptive layouts.
 * Use `rowGap` / `columnGap` to override the unified `gap` for a single axis.
 *
 * @example
 * ```tsx
 * // Fixed columns
 * <Grid columns={3} gap="4">
 *   <Card /><Card /><Card />
 * </Grid>
 *
 * // Responsive columns (the killer feature)
 * <Grid columns={{ base: 1, md: 2, lg: 4 }} gap="6">
 *   <Card /><Card /><Card /><Card />
 * </Grid>
 *
 * // With cross-axis alignment (e.g. side-by-side text+image)
 * <Grid columns={{ base: 1, lg: 2 }} gap="12" align="center">
 *   <Image /><Text />
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      as,
      children,
      columns = GRID_DEFAULT_COLUMNS,
      rows,
      gap = GRID_DEFAULT_GAP,
      rowGap,
      columnGap,
      flow,
      align,
      className,
      ...props
    },
    ref
  ) => {
    const Component = (as ?? "div") as ElementType;
    const hasSpecificGaps = rowGap || columnGap;

    return (
      <Component
        ref={ref}
        data-slot="grid"
        className={cn(
          gridStyles.base,
          getResponsiveGridCols(columns),
          rows && GRID_ROWS[rows],
          !hasSpecificGaps && GAP_SIZES[gap],
          rowGap && ROW_GAP_SIZES[rowGap],
          columnGap && COLUMN_GAP_SIZES[columnGap],
          flow && gridStyles.flow[flow],
          align && gridStyles.align[align],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: GridProps<C>) => ReactElement | null;

(Grid as { displayName?: string }).displayName = "Grid";
