import type { ContainerMaxWidth } from '../types';

/**
 * Container styles configuration
 */
export const containerStyles = {
  /**
   * Base styles
   */
  base: "w-full",

  /**
   * Center styles
   */
  center: "mx-auto",

  /**
   * Padding styles
   */
  padding: "px-4 sm:px-6 lg:px-8",
};

/**
 * Max width class mappings
 */
const MAX_WIDTHS: Record<ContainerMaxWidth, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
  none: '',
};

/**
 * Get max width class
 */
export function getMaxWidthClass(maxWidth: ContainerMaxWidth): string {
  return MAX_WIDTHS[maxWidth];
}
