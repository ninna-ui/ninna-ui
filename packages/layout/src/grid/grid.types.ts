import type { HTMLAttributes, ReactNode } from "react";
import type { GridColumns, GridRows, GridFlow, GapSize } from '../types';

/**
 * Grid component props
 */
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
  /** Number of columns */
  columns?: GridColumns;
  
  /** Number of rows */
  rows?: GridRows;
  
  /** Gap between items */
  gap?: GapSize;
  
  /** Row gap (overrides gap for rows) */
  rowGap?: GapSize;
  
  /** Column gap (overrides gap for columns) */
  columnGap?: GapSize;
  
  /** Flow direction */
  flow?: GridFlow;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default props for Grid
 */
export const gridDefaults = {
  columns: 1 as GridColumns,
  gap: "4" as GapSize,
};
