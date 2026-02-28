import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { centerStyles } from "./center.styles";
import type { CenterProps } from "./center.types";

/**
 * Center component - Centers content both horizontally and vertically.
 *
 * @example
 * ```tsx
 * <Center className="h-screen">
 *   <Spinner />
 * </Center>
 * <Center inline>
 *   <Icon />
 * </Center>
 * ```
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ children, inline = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="center"
        className={cn(inline ? centerStyles.inline : centerStyles.base, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Center.displayName = "Center";
