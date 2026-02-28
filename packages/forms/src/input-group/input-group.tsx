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
 * InputGroup component for adding elements inside the input (icons, text, buttons)
 *
 * @example
 * ```tsx
 * // With icon
 * <InputGroup startElement={<SearchIcon className="w-5 h-5" />}>
 *   <Input placeholder="Search..." />
 * </InputGroup>
 *
 * // With text
 * <InputGroup endElement={<span>USD</span>}>
 *   <Input type="number" placeholder="0.00" />
 * </InputGroup>
 *
 * // With clickable button
 * <InputGroup 
 *   endElement={<Button size="sm">Send</Button>}
 *   endElementPointerEvents="auto"
 * >
 *   <Input placeholder="Enter message" />
 * </InputGroup>
 * ```
 */
export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  (
    {
      size = 'md',
      startElement,
      endElement,
      startElementPointerEvents = 'none',
      endElementPointerEvents = 'none',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const sizeStyles = INPUT_GROUP_SIZES[size];

    // Clone child input to add padding for elements
    const enhancedChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        const additionalClasses = cn(
          startElement && sizeStyles.elementPadding.start,
          endElement && sizeStyles.elementPadding.end
        );
        const childProps = child.props as Record<string, unknown>;
        return cloneElement(child, {
          className: cn(childProps.className as string, additionalClasses),
          size: childProps.size || size,
        } as Record<string, unknown>);
      }
      return child;
    });

    return (
      <div ref={ref} data-slot="input-group" className={cn(inputGroupStyles.container, className)} {...props}>
        <div className={inputGroupStyles.wrapper}>
          {startElement && (
            <div
              className={cn(
                inputGroupStyles.element,
                inputGroupStyles.elementStart,
                sizeStyles.element,
                startElementPointerEvents === 'none'
                  ? inputGroupStyles.elementPointerNone
                  : inputGroupStyles.elementPointerAuto
              )}
            >
              {startElement}
            </div>
          )}
          {enhancedChildren}
          {endElement && (
            <div
              className={cn(
                inputGroupStyles.element,
                inputGroupStyles.elementEnd,
                sizeStyles.element,
                endElementPointerEvents === 'none'
                  ? inputGroupStyles.elementPointerNone
                  : inputGroupStyles.elementPointerAuto
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
