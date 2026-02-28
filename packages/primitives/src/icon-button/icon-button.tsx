import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import {
  iconButtonStyles,
  getVariantClasses,
  getIconSizeClass,
} from './icon-button.styles';
import type { IconButtonProps } from './icon-button.types';
import type { Size } from '@ninna-ui/core';

/**
 * IconButton component for icon-only actions.
 * Requires aria-label for accessibility.
 *
 * @example
 * ```tsx
 * <IconButton icon={<SearchIcon />} aria-label="Search" />
 * <IconButton icon={<EditIcon />} variant="ghost" aria-label="Edit" />
 * <IconButton icon={<DeleteIcon />} color="danger" aria-label="Delete" />
 * ```
 */
const IconButtonIcon = ({ icon, size, loading }: { icon: React.ReactNode; size: Size; loading?: boolean }) => {
  if (loading) {
    return (
      <span
        className={cn(
          'animate-spin rounded-full border-2 border-current border-t-transparent',
          iconButtonStyles.spinnerSizes[size]
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <span data-slot="icon" className={cn('inline-flex items-center justify-center', getIconSizeClass(size))} aria-hidden="true">
      {icon}
    </span>
  );
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'solid',
      color = 'primary',
      size = 'md',
      radius = 'md',
      loading = false,
      disabled,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        data-slot="icon-button"
        type="button"
        className={cn(
          iconButtonStyles.base,
          iconButtonStyles.sizes[size],
          iconButtonStyles.radius[radius],
          getVariantClasses(variant, color),
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        aria-label={ariaLabel}
        data-loading={loading}
        {...props}
      >
        <IconButtonIcon icon={icon} size={size} loading={loading} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
