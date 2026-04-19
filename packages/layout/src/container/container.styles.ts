import type { ContainerMaxWidth } from '@ninna-ui/core';

/**
 * Container styles configuration
 */
export const containerStyles = {
  base:    "w-full",
  center:  "mx-auto",
  padding: "px-4 sm:px-6 lg:px-8",
};

export const MAX_WIDTHS: Record<ContainerMaxWidth, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
  none: '',
};
