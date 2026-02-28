import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import {
  markStyles,
  getBgColorClass,
  getTextColorClass,
} from "./mark.styles";
import type { MarkProps } from "./mark.types";

/**
 * Mark component for highlighting text.
 *
 * @example
 * ```tsx
 * <Mark>highlighted text</Mark>
 * <Mark color="primary">primary highlight</Mark>
 * <Mark color="success">success highlight</Mark>
 * ```
 */
export const Mark = forwardRef<HTMLElement, MarkProps>(
  (
    {
      color = "neutral",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      markStyles.base,
      getBgColorClass(color),
      getTextColorClass(color),
      className
    );

    return (
      <mark ref={ref} data-slot="mark" className={classes} {...props}>
        {children}
      </mark>
    );
  }
);

Mark.displayName = "Mark";
