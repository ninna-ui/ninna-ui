import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { kbdVariants } from "./kbd.styles";
import type { KbdProps } from "./kbd.types";

/**
 * Kbd component for displaying keyboard keys or shortcuts.
 *
 * @example
 * ```tsx
 * <Kbd>⌘</Kbd>
 * <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
 * <Kbd size="lg" color="primary">Enter</Kbd>
 * ```
 */
export const Kbd = forwardRef<HTMLElement, KbdProps>(
  (
    {
      color = "neutral",
      size = "sm",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      kbdVariants({ size, color }),
      className
    );

    return (
      <kbd ref={ref} data-slot="kbd" className={classes} {...props}>
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";
