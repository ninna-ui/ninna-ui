import { forwardRef, type ElementType, type ReactElement } from "react";
import { cn } from "@ninna-ui/utils";
import { simpleGridStyles } from "./simple-grid.styles";
import { GAP_SIZES } from "@ninna-ui/core";
import type { SimpleGridProps } from "./simple-grid.types";
import type { GapSize } from '@ninna-ui/core';

const SIMPLE_GRID_DEFAULT_COLUMNS = 1;
const SIMPLE_GRID_DEFAULT_GAP: GapSize = '4';

/**
 * SimpleGrid — a grid with either fixed columns or auto-fit responsive columns.
 *
 * Either specify `columns` for a fixed layout, or `minChildWidth` for automatic
 * responsive behavior (auto-fit). Use `as` for semantic HTML (e.g. `<ul>`).
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
 *
 * // Semantic list grid
 * <SimpleGrid as="ul" columns={3} gap="4">
 *   <li><Card /></li>
 * </SimpleGrid>
 * ```
 */
export const SimpleGrid = forwardRef<HTMLElement, SimpleGridProps>(
  (
    {
      as,
      children,
      columns = SIMPLE_GRID_DEFAULT_COLUMNS,
      minChildWidth,
      gap = SIMPLE_GRID_DEFAULT_GAP,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const Component = (as ?? "div") as ElementType;

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
      <Component
        ref={ref}
        data-slot="simple-grid"
        className={cn(simpleGridStyles.base, GAP_SIZES[gap], className)}
        style={gridStyle}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: SimpleGridProps<C>) => ReactElement | null;

(SimpleGrid as { displayName?: string }).displayName = "SimpleGrid";
