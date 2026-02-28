import type { HTMLAttributes, ReactNode } from "react";
import type { GapSize } from '../types';

/**
 * SimpleGrid component props
 */
export interface SimpleGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
  /**
   * Fixed number of columns.
   * Applied via inline `gridTemplateColumns` style — mutually exclusive with `minChildWidth`.
   * @default 1
   */
  columns?: number;
  /**
   * Minimum child width for auto-fit responsive columns (e.g. '200px', '12rem').
   * Applied via inline `gridTemplateColumns: repeat(auto-fit, minmax(..., 1fr))` style.
   * Because this is dynamic, Tailwind JIT cannot statically extract it — inline style is intentional.
   * Takes precedence over `columns` when provided.
   */
  minChildWidth?: string;
  
  /** Gap between items */
  gap?: GapSize;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default props for SimpleGrid
 */
export const simpleGridDefaults = {
  columns: 1,
  gap: "4" as GapSize,
};
