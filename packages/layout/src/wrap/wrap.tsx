import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { wrapStyles } from "./wrap.styles";
import { GAP_SIZES } from "@ninna-ui/core";
import type { WrapProps } from "./wrap.types";
import { wrapDefaults } from "./wrap.types";

/**
 * Wrap component - A flex container that wraps items.
 * Useful for tag lists, button groups, or any collection that should wrap.
 *
 * @example
 * ```tsx
 * <Wrap gap="2">
 *   <Badge>Tag 1</Badge>
 *   <Badge>Tag 2</Badge>
 *   <Badge>Tag 3</Badge>
 * </Wrap>
 * ```
 */
export const Wrap = forwardRef<HTMLDivElement, WrapProps>(
  (
    {
      children,
      gap = wrapDefaults.gap,
      align,
      justify,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="wrap"
        className={cn(
          wrapStyles.base,
          GAP_SIZES[gap],
          align && wrapStyles.align[align],
          justify && wrapStyles.justify[justify],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Wrap.displayName = "Wrap";
