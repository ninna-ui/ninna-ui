import { forwardRef, Children, isValidElement, cloneElement } from 'react';
import { cn } from '@ninna-ui/utils';
import { inputGroupStyles, inputAddonStyles, INPUT_GROUP_SIZES } from './input-group.styles';
import type { InputGroupProps, InputAddonProps } from './input-group.types';

/**
 * InputAddon component for adding addons to inputs (outside the input border)
 *
 * @example
 * ```tsx
 * <div className="flex">
 *   <InputAddon placement="start">https://</InputAddon>
 *   <Input className="rounded-l-none" />
 *   <InputAddon placement="end">.com</InputAddon>
 * </div>
 * ```
 */
export const InputAddon = forwardRef<HTMLDivElement, InputAddonProps>(
  ({ size = 'md', placement = 'start', children, className, ...props }, ref) => {
    const sizeStyles = INPUT_GROUP_SIZES[size];

    return (
      <div
        ref={ref}
        data-slot="addon"
        className={cn(
          inputAddonStyles.base,
          placement === 'start' ? inputAddonStyles.start : inputAddonStyles.end,
          sizeStyles.addon,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

InputAddon.displayName = 'InputAddon';

/**
 * Resolve the CSS class that controls pointer-events on a slot wrapper.
 *
 * Default (`undefined`): the wrapper is `pointer-events-none` so clicks fall
 * through to the underlying input, but any interactive descendants
 * (`button`, `a`, `input`, `[role="button"]`) are re-enabled via a descendant
 * selector — no React-level heuristics required.
 *
 * Explicit `'auto'` / `'none'` forces the behaviour regardless of content.
 */
const resolvePointerEventsClass = (value: 'auto' | 'none' | undefined) => {
  if (value === 'auto') return inputGroupStyles.elementPointerAuto;
  if (value === 'none') return inputGroupStyles.elementPointerNone;
  return inputGroupStyles.elementPointerSmart;
};

/**
 * InputGroup component for adding elements inside the input (icons, text, buttons)
 *
 * By default, decorative content (icons, text) inside `startElement` /
 * `endElement` does not block clicks to the underlying input, while
 * interactive descendants (`<button>`, `<a>`, `<input>`, `[role="button"]`)
 * receive pointer events automatically. This covers the common show/hide
 * password, clear, and submit-inside-input patterns with zero configuration.
 *
 * @example
 * ```tsx
 * // Decorative icon — clicks pass through to the input
 * <InputGroup startElement={<SearchIcon className="size-4" />}>
 *   <Input placeholder="Search..." />
 * </InputGroup>
 *
 * // Show/hide password — IconButton renders a <button>, so it's clickable automatically
 * <InputGroup
 *   startElement={<Lock className="size-4" />}
 *   endElement={
 *     <IconButton aria-label="Toggle" icon={<Eye />} onClick={toggle} />
 *   }
 * >
 *   <Input type={show ? 'text' : 'password'} />
 * </InputGroup>
 *
 * // Force pointer events on a non-standard interactive slot
 * <InputGroup
 *   endElement={<span role="button" onClick={handle}>Send</span>}
 *   endElementPointerEvents="auto"
 * >
 *   <Input />
 * </InputGroup>
 * ```
 */
export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  (
    {
      size = 'md',
      startElement,
      endElement,
      startElementPointerEvents,
      endElementPointerEvents,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const sizeStyles = INPUT_GROUP_SIZES[size];

    // Clone child input to add padding for elements and propagate size.
    const enhancedChildren = Children.map(children, (child) => {
      if (!isValidElement(child)) return child;

      const additionalClasses = cn(
        startElement && sizeStyles.elementPadding.start,
        endElement && sizeStyles.elementPadding.end
      );
      const childProps = child.props as Record<string, unknown>;
      return cloneElement(child, {
        className: cn(childProps.className as string, additionalClasses),
        size: childProps.size || size,
      } as Record<string, unknown>);
    });

    return (
      <div ref={ref} data-slot="input-group" className={cn(inputGroupStyles.container, className)} {...props}>
        <div className={inputGroupStyles.wrapper}>
          {startElement && (
            <div
              data-slot="start-element"
              className={cn(
                inputGroupStyles.element,
                inputGroupStyles.elementStart,
                sizeStyles.element,
                resolvePointerEventsClass(startElementPointerEvents)
              )}
            >
              {startElement}
            </div>
          )}
          {enhancedChildren}
          {endElement && (
            <div
              data-slot="end-element"
              className={cn(
                inputGroupStyles.element,
                inputGroupStyles.elementEnd,
                sizeStyles.element,
                resolvePointerEventsClass(endElementPointerEvents)
              )}
            >
              {endElement}
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';
