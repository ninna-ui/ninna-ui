import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";
import type { GridColumns, GridRows, GridFlow, GapSize, FlexAlign, Breakpoint } from '@ninna-ui/core';

/**
 * Responsive columns value — a fixed column count or a breakpoint map.
 *
 * @example
 * columns={3}
 * columns={{ base: 1, md: 2, lg: 3 }}
 */
export type ResponsiveColumns = GridColumns | Partial<Record<Breakpoint, GridColumns>>;

/**
 * Base owned props for the Grid component.
 */
export interface GridBaseProps {
  /**
   * Number of columns — fixed or responsive breakpoint map.
   * @default 1
   * @example columns={3} or columns={{ base: 1, md: 2, lg: 4 }}
   */
  columns?: ResponsiveColumns;

  /** Number of rows */
  rows?: GridRows;

  /** Gap between all cells (row and column) */
  gap?: GapSize;

  /** Row gap — overrides `gap` for rows only */
  rowGap?: GapSize;

  /** Column gap — overrides `gap` for columns only */
  columnGap?: GapSize;

  /** Grid auto-flow direction */
  flow?: GridFlow;

  /**
   * Align grid items on the cross axis (align-items).
   * Useful for equal-height card rows.
   * @example align="center"
   */
  align?: FlexAlign;

  /** Additional CSS class names */
  className?: string;
}

/**
 * Grid component props — polymorphic.
 * Defaults to rendering a `<div>`.
 */
export type GridProps<C extends ElementType = "div"> = PolymorphicProps<C, GridBaseProps>;
