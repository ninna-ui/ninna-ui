import { forwardRef, type ElementType, type ReactElement } from "react";
import { cn } from "@ninna-ui/utils";
import { separatorVariants } from "./separator.styles";
import type { SeparatorProps } from "./separator.types";
import type { SeparatorOrientation } from '@ninna-ui/core';

const SEPARATOR_DEFAULT_ORIENTATION: SeparatorOrientation = 'horizontal';
const SEPARATOR_DEFAULT_DECORATIVE = true;

/**
 * Separator — a visual divider between content sections.
 *
 * Renders as `<hr>` by default (semantically correct).
 * Use `orientation="vertical"` for vertical dividers (add a height class).
 *
 * @example
 * ```tsx
 * <Separator />
 * <Separator orientation="vertical" className="h-6" />
 * <Separator color="primary" />
 * <Separator decorative={false} aria-label="Section divider" />
 * ```
 */
export const Separator = forwardRef<HTMLElement, SeparatorProps>(
  (
    {
      as,
      orientation = SEPARATOR_DEFAULT_ORIENTATION,
      color,
      decorative = SEPARATOR_DEFAULT_DECORATIVE,
      className,
      ...props
    },
    ref
  ) => {
    const Component = (as ?? "hr") as ElementType;

    return (
      <Component
        ref={ref}
        data-slot="separator"
        role={decorative ? "none" : "separator"}
        aria-orientation={decorative ? undefined : orientation}
        className={cn(separatorVariants({ orientation, color }), className)}
        {...props}
      />
    );
  }
) as <C extends ElementType = "hr">(props: SeparatorProps<C>) => ReactElement | null;

(Separator as { displayName?: string }).displayName = "Separator";
