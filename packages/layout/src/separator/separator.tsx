import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { separatorStyles, getOrientationClass } from "./separator.styles";
import type { SeparatorProps } from "./separator.types";
import { separatorDefaults } from "./separator.types";

/**
 * Separator component - A visual divider between content.
 * Can be horizontal or vertical.
 *
 * @example
 * ```tsx
 * <Separator />
 * <Separator orientation="vertical" className="h-6" />
 * <Separator decorative={false} />
 * ```
 */
export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      orientation = separatorDefaults.orientation,
      decorative = separatorDefaults.decorative,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="separator"
        role={decorative ? "none" : "separator"}
        aria-orientation={decorative ? undefined : orientation}
        className={cn(
          separatorStyles.base,
          getOrientationClass(orientation),
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";
