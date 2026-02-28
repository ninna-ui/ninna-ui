import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { simpleGridStyles, getGapClass } from "./simple-grid.styles";
import type { SimpleGridProps } from "./simple-grid.types";
import { simpleGridDefaults } from "./simple-grid.types";

/**
 * SimpleGrid component - A responsive grid with auto-fit columns.
 * Either specify fixed columns or minChildWidth for auto-responsive behavior.
 *
 * @example
 * ```tsx
 * // Fixed 3 columns
 * <SimpleGrid columns={3} gap="4">
 *   <Card />
 *   <Card />
 *   <Card />
 * </SimpleGrid>
 * 
 * // Auto-fit with minimum width
 * <SimpleGrid minChildWidth="200px" gap="4">
 *   <Card />
 *   <Card />
 *   <Card />
 * </SimpleGrid>
 * ```
 */
export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  (
    {
      children,
      columns = simpleGridDefaults.columns,
      minChildWidth,
      gap = simpleGridDefaults.gap,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const gridStyle = minChildWidth
      ? {
          gridTemplateColumns: `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`,
          ...style,
        }
      : {
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          ...style,
        };

    return (
      <div
        ref={ref}
        data-slot="simple-grid"
        className={cn(simpleGridStyles.base, getGapClass(gap), className)}
        style={gridStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SimpleGrid.displayName = "SimpleGrid";
