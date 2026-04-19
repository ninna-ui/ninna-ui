import { forwardRef, type ElementType, type ReactElement } from "react";
import { cn } from "@ninna-ui/utils";
import { centerStyles } from "./center.styles";
import type { CenterProps } from "./center.types";

/**
 * Center — centers content both horizontally and vertically using flexbox.
 *
 * @example
 * ```tsx
 * <Center className="h-screen"><Spinner /></Center>
 * <Center as="main" className="min-h-screen"><ErrorPage /></Center>
 * <Center inline><Icon /></Center>
 * ```
 */
export const Center = forwardRef<HTMLElement, CenterProps>(
  ({ as, children, inline = false, className, ...props }, ref) => {
    const Component = (as ?? "div") as ElementType;

    return (
      <Component
        ref={ref}
        data-slot="center"
        className={cn(inline ? centerStyles.inline : centerStyles.base, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: CenterProps<C>) => ReactElement | null;

(Center as { displayName?: string }).displayName = "Center";
