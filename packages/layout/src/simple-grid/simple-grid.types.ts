import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";
import type { GapSize } from '@ninna-ui/core';

/**
 * Base owned props for the SimpleGrid component.
 */
export interface SimpleGridBaseProps {
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
 * SimpleGrid component props — polymorphic.
 * Defaults to rendering a `<div>`. Use `as="ul"` for semantic grid lists.
 *
 * @example
 * <SimpleGrid columns={3} gap="4"><Card /></SimpleGrid>
 * <SimpleGrid as="ul" minChildWidth="200px" gap="4"><li>...</li></SimpleGrid>
 */
export type SimpleGridProps<C extends ElementType = "div"> = PolymorphicProps<C, SimpleGridBaseProps>;
