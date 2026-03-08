import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { flexStyles } from "./flex.styles";
import { GAP_SIZES } from "@ninna-ui/core";
import type { FlexProps } from "./flex.types";
import { flexDefaults } from "./flex.types";

/**
 * Flex component - A flexible box container.
 * Provides flexbox utilities for layout composition.
 *
 * @example
 * ```tsx
 * <Flex gap="4" align="center">
 *   <Avatar />
 *   <Text>Username</Text>
 * </Flex>
 * <Flex direction="column" gap="2">
 *   <Input />
 *   <Button>Submit</Button>
 * </Flex>
 * ```
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      direction = flexDefaults.direction,
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
    return (
      <div
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
      </div>
    );
  }
);

Flex.displayName = "Flex";
