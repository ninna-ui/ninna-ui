/**
 * Slot component for polymorphic rendering (asChild pattern)
 * Allows components to render as their child element
 */

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactNode,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

import { composeRefs } from '@ninna-ui/utils';

export interface SlotProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * Slot component that merges its props with its child
 * Used for the asChild pattern in polymorphic components
 *
 * @example
 * const Button = forwardRef(({ asChild, ...props }, ref) => {
 *   const Comp = asChild ? Slot : 'button';
 *   return <Comp ref={ref} {...props} />;
 * });
 *
 * // Usage
 * <Button asChild>
 *   <a href="/home">Home</a>
 * </Button>
 */

function getChildRef(child: ReactElement): React.Ref<HTMLElement> | undefined {
  // In React 19, ref is a regular prop
  return (child as ReactElement & { ref?: React.Ref<HTMLElement> }).ref;
}

function buildMergedProps(
  slotProps: SlotProps,
  childProps: SlotProps,
  childRef: React.Ref<HTMLElement> | undefined,
  forwardedRef: React.ForwardedRef<HTMLElement>
): Record<string, unknown> {
  const merged = mergeProps(slotProps, childProps);
  const composedRef = forwardedRef
    ? composeRefs(forwardedRef, childRef)
    : childRef;
  return { ...merged, ref: composedRef } as Record<string, unknown>;
}

export const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, ...slotProps }, forwardedRef) => {
    const childrenArray = Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);

    if (slottable) {
      const newElement = slottable.props.children as ReactNode;

      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (Children.count(newElement) > 1) {
            return Children.only(null);
          }
          return isValidElement(newElement)
            ? (newElement.props as { children?: ReactNode }).children
            : null;
        }
        return child;
      });

      if (isValidElement(newElement)) {
        const props = buildMergedProps(
          slotProps,
          newElement.props as SlotProps,
          getChildRef(newElement),
          forwardedRef
        );
        return cloneElement(newElement, props, newChildren);
      }
      return null;
    }

    if (isValidElement(children)) {
      const props = buildMergedProps(
        slotProps,
        children.props as SlotProps,
        getChildRef(children),
        forwardedRef
      );
      return cloneElement(children, props);
    }

    return <>{children}</>;
  }
);

Slot.displayName = 'Slot';

interface SlottableProps {
  children: ReactNode;
}

export function Slottable({ children }: SlottableProps): ReactElement {
  return <>{children}</>;
}

function isSlottable(
  child: ReactNode
): child is ReactElement<SlottableProps, typeof Slottable> {
  return isValidElement(child) && child.type === Slottable;
}

function mergeProps(slotProps: SlotProps, childProps: SlotProps): SlotProps {
  const overrideProps: SlotProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName as keyof SlotProps];
    const childPropValue = childProps[propName as keyof SlotProps];

    const isHandler = /^on[A-Z]/.test(propName);

    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName as keyof SlotProps] = (
          ...args: unknown[]
        ): void => {
          (childPropValue as (...args: unknown[]) => void)(...args);
          (slotPropValue as (...args: unknown[]) => void)(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName as keyof SlotProps] = slotPropValue;
      }
    } else if (propName === 'style') {
      overrideProps.style = { ...slotPropValue, ...childPropValue } as Record<
        string,
        unknown
      >;
    } else if (propName === 'className') {
      overrideProps.className = [slotPropValue, childPropValue]
        .filter(Boolean)
        .join(' ');
    }
  }

  return { ...slotProps, ...overrideProps };
}
