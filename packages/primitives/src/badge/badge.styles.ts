import {
  SOLID_VARIANTS,
  SOFT_VARIANTS,
  OUTLINE_VARIANTS,
  RADIUS_CLASSES,
} from '@ninna-ui/core';
import type { Color, Size } from '@ninna-ui/core';
import type { BadgeVariant } from './badge.types';

/**
 * Badge styles configuration
 * All radius classes come from @ninna-ui/core for consistency
 */
export const badgeStyles = {
  /**
   * Base styles applied to all badges
   */
  base: 'inline-flex items-center justify-center font-medium whitespace-nowrap',

  /**
   * Size variants
   */
  sizes: {
    xs: 'px-1 py-0 text-[10px]',
    sm: 'px-1.5 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
    xl: 'px-4 py-2 text-lg',
  } satisfies Record<Size, string>,

  /**
   * Radius variants from core
   */
  radius: RADIUS_CLASSES,
};

/**
 * Get variant classes for a specific color
 */
export function getVariantClasses(variant: BadgeVariant, color: Color): string {
  switch (variant) {
    case 'solid':
      return SOLID_VARIANTS.base[color];
    case 'soft':
      return SOFT_VARIANTS.base[color];
    case 'outline':
      return OUTLINE_VARIANTS.base[color];
    default:
      return SOFT_VARIANTS.base[color];
  }
}
