import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { DividerProps } from "./divider.types";
import { dividerStyles, getColorClass, getWeightClass } from "./divider.styles";

/**
 * Divider component for visual separation
 * 
 * @example
 * ```tsx
 * <Divider variant="horizontal" />
 * <Divider variant="vertical" className="h-20" />
 * <Divider variant="with-text" text="OR" color="primary" />
 * ```
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      variant = "horizontal",
      color = "primary",
      weight = "soft",
      text,
      className,
      ...props
    },
    ref
  ) => {
    // Vertical divider
    if (variant === "vertical") {
      return (
        <div
          ref={ref}
          data-slot="divider"
          className={cn(
            dividerStyles.vertical.base,
            getWeightClass(variant, weight),
            className
          )}
          role="separator"
          aria-orientation="vertical"
          {...props}
        />
      );
    }

    // Divider with text
    if (variant === "with-text") {
      return (
        <div
          ref={ref}
          data-slot="divider"
          className={cn(dividerStyles.withText.container, className)}
          role="separator"
          aria-label={text}
          {...props}
        >
          <div className={cn(dividerStyles.withText.line, getWeightClass(variant, weight))} />
          {text && (
            <span data-slot="label" className={cn(dividerStyles.withText.text, getColorClass(color))}>
              {text}
            </span>
          )}
          <div className={cn(dividerStyles.withText.line, getWeightClass(variant, weight))} />
        </div>
      );
    }

    // Horizontal divider (default)
    return (
      <div
        ref={ref}
        data-slot="divider"
        className={cn(
          dividerStyles.horizontal.base,
          getWeightClass(variant, weight),
          className
        )}
        role="separator"
        aria-orientation="horizontal"
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
