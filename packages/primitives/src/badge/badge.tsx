import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { badgeStyles, getVariantClasses } from './badge.styles';
import type { BadgeProps } from './badge.types';

/**
 * Badge component for status indicators, labels, and tags.
 * 
 * @example
 * ```tsx
 * <Badge color="primary">New</Badge>
 * <Badge variant="outline" color="success">Active</Badge>
 * <Badge variant="soft" color="error" radius="full">3</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'soft',
      color = 'primary',
      size = 'md',
      radius = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        data-slot="badge"
        className={cn(
          badgeStyles.base,
          badgeStyles.sizes[size],
          badgeStyles.radius[radius],
          getVariantClasses(variant, color),
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
