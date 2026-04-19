import { forwardRef, type ElementType, type ReactElement } from "react";
import { cn } from "@ninna-ui/utils";
import { flexStyles } from "./flex.styles";
import { GAP_SIZES } from "@ninna-ui/core";
import type { FlexProps } from "./flex.types";
import type { FlexDirection } from '@ninna-ui/core';

const FLEX_DEFAULT_DIRECTION: FlexDirection = 'row';

/**
 * Flex — a flexbox container with full directional and alignment control.
 *
 * For fixed-direction usage prefer `Stack`/`HStack`/`VStack`.
 * Flex is more explicit and allows all Tailwind flex props to pass through.
 *
 * @example
 * ```tsx
 * <Flex gap="4" align="center">
 *   <Avatar />
 *   <Text>Username</Text>
 * </Flex>
 *
 * <Flex direction="column" gap="2" as="form">
 *   <Input />
 *   <Button>Submit</Button>
 * </Flex>
 * ```
 */
export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      as,
      children,
      direction = FLEX_DEFAULT_DIRECTION,
      gap,
      align,
      justify,
      wrap,
      inline = false,
      className,
      ...props
    },
    ref
  ) => {
    const Component = (as ?? "div") as ElementType;

    return (
      <Component
        ref={ref}
        data-slot="flex"
        className={cn(
          inline ? flexStyles.inline : flexStyles.base,
          flexStyles.direction[direction],
          gap && GAP_SIZES[gap],
          align && flexStyles.align[align],
          justify && flexStyles.justify[justify],
          wrap && flexStyles.wrap[wrap],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: FlexProps<C>) => ReactElement | null;

(Flex as { displayName?: string }).displayName = "Flex";
