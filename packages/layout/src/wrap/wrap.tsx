import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { wrapStyles, getAlignClass, getJustifyClass, getGapClass } from "./wrap.styles";
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
          getGapClass(gap),
          align && getAlignClass(align),
          justify && getJustifyClass(justify),
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
