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
 * Button styles configuration
 * All size/radius classes come from @ninna-ui/core for consistency
 */
export const buttonStyles = {
  /**
   * Base styles applied to all buttons
   */
  base: [
    "relative isolate inline-flex items-center justify-center gap-2",
    "font-medium transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
    "disabled:opacity-50 disabled:pointer-events-none",
    "data-[loading=true]:cursor-wait data-[loading=true]:pointer-events-none",
  ].join(" "),

  /**
   * Size variants
   */
  sizes: {
    xs: 'h-7 px-2 text-xs',
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
    xl: 'h-12 px-6 text-base',
  } satisfies Record<Size, string>,

  /**
   * Radius variants from core
   */
  radius: RADIUS_CLASSES,

  /**
   * Full width style
   */
  fullWidth: "w-full",

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

