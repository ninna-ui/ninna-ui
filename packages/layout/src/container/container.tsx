import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { containerStyles, MAX_WIDTHS } from "./container.styles";
import type { ContainerProps } from "./container.types";
import { containerDefaults } from "./container.types";

/**
 * Container component - A max-width wrapper for page content.
 * Centers content and provides consistent horizontal padding.
 *
 * @example
 * ```tsx
 * <Container>Page content</Container>
 * <Container maxWidth="xl">Wide content</Container>
 * <Container maxWidth="sm" padding={false}>Narrow, no padding</Container>
 * ```
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      maxWidth = containerDefaults.maxWidth,
      center = containerDefaults.center,
      padding = containerDefaults.padding,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="container"
        className={cn(
          containerStyles.base,
          MAX_WIDTHS[maxWidth],
          center && containerStyles.center,
          padding && containerStyles.padding,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
