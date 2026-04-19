import { forwardRef, type ElementType, type ReactElement } from "react";
import { cn } from "@ninna-ui/utils";
import { wrapStyles } from "./wrap.styles";
import { GAP_SIZES } from "@ninna-ui/core";
import type { WrapProps } from "./wrap.types";
import type { GapSize } from '@ninna-ui/core';

const WRAP_DEFAULT_GAP: GapSize = '4';

/**
 * Wrap — a flex-wrap container for items that flow onto multiple lines.
 *
 * Ideal for tag clouds, button groups, or any collection that should wrap.
 *
 * @example
 * ```tsx
 * <Wrap gap="2">
 *   <Badge>React</Badge>
 *   <Badge>TypeScript</Badge>
 *   <Badge>Design Systems</Badge>
 * </Wrap>
 * ```
 */
export const Wrap = forwardRef<HTMLElement, WrapProps>(
  ({ as, children, gap = WRAP_DEFAULT_GAP, align, justify, className, ...props }, ref) => {
    const Component = (as ?? "div") as ElementType;

    return (
      <Component
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
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: WrapProps<C>) => ReactElement | null;

(Wrap as { displayName?: string }).displayName = "Wrap";
