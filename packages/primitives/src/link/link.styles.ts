import { TEXT_COLORS, HOVER_TEXT_COLORS, TEXT_SIZE_CLASSES } from '@ninna-ui/core';
import type { Color } from '@ninna-ui/core';
import type { LinkUnderline } from './link.types';

/**
 * Link styles configuration
 */
export const linkStyles = {
  /**
   * Base styles applied to all links
   */
  base: 'inline-flex items-center gap-1 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm',

  /**
   * Size variants from core — matches Text component sizes
   */
  sizes: TEXT_SIZE_CLASSES,

  /**
   * Color variants from core
   */
  colors: TEXT_COLORS,

  /**
   * Hover color variants from core
   */
  hoverColors: HOVER_TEXT_COLORS,

  /**
   * Underline variants
   */
  underline: {
    always: 'underline underline-offset-2',
    hover: 'hover:underline underline-offset-2',
    none: 'no-underline',
  } as Record<LinkUnderline, string>,

  /**
   * External icon styles
   */
  externalIcon: 'inline-block w-3.5 h-3.5 ml-0.5',
};

/**
 * Get hover color class for link
 */
export function getHoverColorClass(color: Color): string {
  return linkStyles.hoverColors[color];
}

/**
 * Get underline class
 */
export function getUnderlineClass(underline: LinkUnderline): string {
  return linkStyles.underline[underline];
}
