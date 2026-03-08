import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { DividerProps } from "./divider.types";
import { dividerVariants, dividerStyles, DIVIDER_TEXT_COLORS } from "./divider.styles";

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
            dividerVariants({ orientation: "vertical", weight }),
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
          className={cn(dividerStyles.withTextContainer, className)}
          role="separator"
          aria-label={text}
          {...props}
        >
          <div className={cn(dividerStyles.withTextLine, dividerVariants({ orientation: "horizontal", weight }))} />
          {text && (
            <span data-slot="label" className={cn(dividerStyles.withTextContent, DIVIDER_TEXT_COLORS[color])}>
              {text}
            </span>
          )}
          <div className={cn(dividerStyles.withTextLine, dividerVariants({ orientation: "horizontal", weight }))} />
        </div>
      );
    }

    // Horizontal divider (default)
    return (
      <div
        ref={ref}
        data-slot="divider"
        className={cn(
          dividerVariants({ orientation: "horizontal", weight }),
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
