import {
  SOLID_VARIANTS,
  SOFT_VARIANTS,
  OUTLINE_VARIANTS,
  GHOST_VARIANTS,
  TEXT_VARIANTS,
  RADIUS_CLASSES,
} from '@ninna-ui/core';
import type { ButtonVariant, Color, Size } from '@ninna-ui/core';

/**
 * IconButton styles configuration
 * All size/radius classes come from @ninna-ui/core for consistency
 */
export const iconButtonStyles = {
  /**
   * Base styles applied to all icon buttons
   */
  base: [
    'relative isolate inline-flex items-center justify-center',
    'font-medium transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
    'disabled:opacity-50 disabled:pointer-events-none',
    'data-[loading=true]:cursor-wait data-[loading=true]:pointer-events-none',
  ].join(' '),

  /**
   * Size variants - square dimensions
   */
  sizes: {
    xs: 'h-7 w-7',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-11 w-11',
    xl: 'h-12 w-12',
  } satisfies Record<Size, string>,

  /**
   * Icon sizes within button
   */
  iconSizes: {
    xs: 'h-3.5 w-3.5',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6',
  } satisfies Record<Size, string>,

  /**
   * Spinner sizes for loading state
   */
  spinnerSizes: {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  } satisfies Record<Size, string>,

  /**
   * Radius variants from core
   */
  radius: RADIUS_CLASSES,
};

/**
 * Get variant classes for a specific color
 */
export function getVariantClasses(variant: ButtonVariant, color: Color): string {
  switch (variant) {
    case 'solid':
      return [SOLID_VARIANTS.base[color], SOLID_VARIANTS.hover[color]].filter(Boolean).join(' ');
    case 'soft':
      return [SOFT_VARIANTS.base[color], SOFT_VARIANTS.hover[color]].filter(Boolean).join(' ');
    case 'outline':
      return [OUTLINE_VARIANTS.base[color], OUTLINE_VARIANTS.hover[color]].filter(Boolean).join(' ');
    case 'ghost':
      return GHOST_VARIANTS[color];
    case 'text':
      return TEXT_VARIANTS[color];
    default:
      return [SOLID_VARIANTS.base[color], SOLID_VARIANTS.hover[color]].filter(Boolean).join(' ');
  }
}

/** Get icon size class */
export function getIconSizeClass(size: Size): string {
  return iconButtonStyles.iconSizes[size];
}

