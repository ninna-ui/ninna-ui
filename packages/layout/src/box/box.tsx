import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { BoxProps } from "./box.types";

/**
 * Box component - A basic container component.
 * The base building block for layout composition.
 *
 * @example
 * ```tsx
 * <Box>Default div</Box>
 * <Box className="p-4">Box with padding</Box>
 * ```
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="box" className={cn(className)} {...props}>
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";
