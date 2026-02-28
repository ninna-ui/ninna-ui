import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import {
  stackStyles,
  getDirectionClass,
  getAlignClass,
  getJustifyClass,
  getGapClass,
} from "./stack.styles";
import type { StackProps } from "./stack.types";
import { stackDefaults } from "./stack.types";

/**
 * Stack component - A flex container for stacking elements.
 * Defaults to vertical (column) direction.
 *
 * @example
 * ```tsx
 * <Stack gap="4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * <Stack direction="row" align="center" gap="2">
 *   <Icon />
 *   <Text>Label</Text>
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      direction = stackDefaults.direction,
      gap = stackDefaults.gap,
      align,
      justify,
      wrap = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-slot="stack"
        className={cn(
          stackStyles.base,
          getDirectionClass(direction),
          getGapClass(gap),
          align && getAlignClass(align),
          justify && getJustifyClass(justify),
          wrap && stackStyles.wrap,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack";

/**
 * HStack component - Horizontal stack (row direction).
 * Convenience wrapper for Stack with direction="row".
 *
 * @example
 * ```tsx
 * <HStack gap="4">
 *   <Button>Cancel</Button>
 *   <Button>Save</Button>
 * </HStack>
 * ```
 */
export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => {
    return <Stack ref={ref} direction="row" {...props} />;
  }
);

HStack.displayName = "HStack";

/**
 * VStack component - Vertical stack (column direction).
 * Convenience wrapper for Stack with direction="column".
 *
 * @example
 * ```tsx
 * <VStack gap="4">
 *   <Heading>Title</Heading>
 *   <Text>Description</Text>
 * </VStack>
 * ```
 */
export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => {
    return <Stack ref={ref} direction="column" {...props} />;
  }
);

VStack.displayName = "VStack";
