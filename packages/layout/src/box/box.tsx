import { forwardRef, type ElementType, type ReactElement } from "react";
import type { BoxProps } from "./box.types";

/**
 * Box — the foundational layout primitive.
 *
 * A transparent wrapper that renders any HTML element or React component
 * while passing through all native element props + ref.
 * Use `as` to change the rendered element for semantic HTML.
 *
 * @example
 * ```tsx
 * <Box>Default div</Box>
 * <Box as="section" className="p-4">Semantic section</Box>
 * <Box as="article" aria-label="Post">Article element</Box>
 * ```
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as, children, className, ...props }, ref) => {
    const Component = (as ?? "div") as ElementType;

    return (
      <Component
        ref={ref}
        data-slot="box"
        className={className}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: BoxProps<C>) => ReactElement | null;

(Box as { displayName?: string }).displayName = "Box";
