import { forwardRef, type ElementType, type ReactElement } from "react";
import { cn } from "@ninna-ui/utils";
import { containerStyles, MAX_WIDTHS } from "./container.styles";
import type { ContainerProps } from "./container.types";
import type { ContainerMaxWidth } from '@ninna-ui/core';

const CONTAINER_DEFAULT_MAX_WIDTH: ContainerMaxWidth = 'lg';
const CONTAINER_DEFAULT_CENTER = true;
const CONTAINER_DEFAULT_PADDING = true;

/**
 * Container — a max-width content wrapper.
 *
 * Centers content and applies consistent horizontal padding.
 * Use `as` for semantic HTML: `<Container as="main">`, `<Container as="section">`.
 *
 * @example
 * ```tsx
 * <Container>Page content</Container>
 * <Container as="main" maxWidth="xl">Wide content</Container>
 * <Container as="section" padding={false}>No padding</Container>
 * ```
 */
export const Container = forwardRef<HTMLElement, ContainerProps>(
  (
    {
      as,
      children,
      maxWidth = CONTAINER_DEFAULT_MAX_WIDTH,
      center = CONTAINER_DEFAULT_CENTER,
      padding = CONTAINER_DEFAULT_PADDING,
      className,
      ...props
    },
    ref
  ) => {
    const Component = (as ?? "div") as ElementType;

    return (
      <Component
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
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: ContainerProps<C>) => ReactElement | null;

(Container as { displayName?: string }).displayName = "Container";
