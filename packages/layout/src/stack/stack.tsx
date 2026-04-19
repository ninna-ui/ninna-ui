import { forwardRef, type ElementType, type ReactElement } from "react";
import { cn } from "@ninna-ui/utils";
import { stackStyles } from "./stack.styles";
import { GAP_SIZES } from "@ninna-ui/core";
import type { StackProps } from "./stack.types";
import type { FlexDirection, GapSize } from '@ninna-ui/core';

const STACK_DEFAULT_DIRECTION: FlexDirection = 'column';
const STACK_DEFAULT_GAP: GapSize = '4';

/**
 * Stack — a flex container for stacking elements vertically or horizontally.
 *
 * Defaults to `direction="column"` (vertical stack).
 * Use `HStack` or `VStack` for explicit direction without needing to pass the prop.
 *
 * @example
 * ```tsx
 * <Stack gap="4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 *
 * <Stack direction="row" align="center" gap="2">
 *   <Icon />
 *   <Text>Label</Text>
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      as,
      children,
      direction = STACK_DEFAULT_DIRECTION,
      gap = STACK_DEFAULT_GAP,
      align,
      justify,
      wrap = false,
      className,
      ...props
    },
    ref
  ) => {
    const Component = (as ?? "div") as ElementType;

    return (
      <Component
        ref={ref}
        data-slot="stack"
        className={cn(
          stackStyles.base,
          stackStyles.direction[direction],
          GAP_SIZES[gap],
          align && stackStyles.align[align],
          justify && stackStyles.justify[justify],
          wrap && stackStyles.wrap,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: StackProps<C>) => ReactElement | null;

(Stack as { displayName?: string }).displayName = "Stack";

/**
 * HStack — horizontal flex layout (row direction).
 * Shorthand for `<Stack direction="row">`.
 *
 * @example
 * ```tsx
 * <HStack gap="3" align="center">
 *   <Avatar />
 *   <Text>Username</Text>
 * </HStack>
 * ```
 */
export const HStack = forwardRef<HTMLElement, Omit<StackProps, "direction">>(
  ({ as, children, gap, align, justify, wrap, className, ...props }, ref) => {
    const Component = (as ?? "div") as ElementType;
    return (
      <Component
        ref={ref}
        data-slot="stack"
        className={cn(
          stackStyles.base,
          stackStyles.direction["row"],
          gap !== undefined ? GAP_SIZES[gap] : GAP_SIZES[STACK_DEFAULT_GAP],
          align && stackStyles.align[align],
          justify && stackStyles.justify[justify],
          wrap && stackStyles.wrap,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: Omit<StackProps<C>, "direction">) => ReactElement | null;

(HStack as { displayName?: string }).displayName = "HStack";

/**
 * VStack — vertical flex layout (column direction).
 * Shorthand for `<Stack direction="column">`.
 *
 * @example
 * ```tsx
 * <VStack gap="6">
 *   <Heading>Title</Heading>
 *   <Text>Description</Text>
 * </VStack>
 * ```
 */
export const VStack = forwardRef<HTMLElement, Omit<StackProps, "direction">>(
  ({ as, children, gap, align, justify, wrap, className, ...props }, ref) => {
    const Component = (as ?? "div") as ElementType;
    return (
      <Component
        ref={ref}
        data-slot="stack"
        className={cn(
          stackStyles.base,
          stackStyles.direction["column"],
          gap !== undefined ? GAP_SIZES[gap] : GAP_SIZES[STACK_DEFAULT_GAP],
          align && stackStyles.align[align],
          justify && stackStyles.justify[justify],
          wrap && stackStyles.wrap,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as <C extends ElementType = "div">(props: Omit<StackProps<C>, "direction">) => ReactElement | null;

(VStack as { displayName?: string }).displayName = "VStack";
