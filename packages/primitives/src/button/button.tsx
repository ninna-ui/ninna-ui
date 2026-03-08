import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { buttonVariants, BUTTON_SPINNER_SIZES } from './button.styles';
import type { ButtonProps } from './button.types';

/**
 * Button component with multiple variants, sizes, and states.
 * 
 * @example
 * ```tsx
 * <Button variant="solid" color="primary">Click me</Button>
 * <Button variant="outline" loading>Loading...</Button>
 * <Button leftIcon={<Icon />}>With Icon</Button>
 * <Button radius="full">Pill Button</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      color = "primary",
      size = "md",
      radius = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        data-slot="button"
        className={cn(
          buttonVariants({ variant, color, size, radius, fullWidth }),
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        data-loading={loading}
        {...props}
      >
        {leftIcon && <span data-slot="icon">{leftIcon}</span>}
        {loading && (
          <span
            className={cn(
              'animate-spin rounded-full border-2 border-current border-t-transparent',
              BUTTON_SPINNER_SIZES[size]
            )}
            aria-hidden="true"
          />
        )}
        {children}
        {rightIcon && <span data-slot="icon">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
