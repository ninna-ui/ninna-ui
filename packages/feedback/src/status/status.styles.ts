import type { StatusValue, StatusSize } from './status.types';

/**
 * Status styles configuration
 */
export const statusStyles = {
  /**
   * Base styles for the status root container
   */
  base: "inline-flex items-center gap-2",

  /**
   * Indicator base styles
   */
  indicator: {
    base: "rounded-full shrink-0",
  },

  /**
   * Indicator size variants
   */
  indicatorSizes: {
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
  } as Record<StatusSize, string>,

  /**
   * Label size variants
   */
  labelSizes: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  } as Record<StatusSize, string>,

  /**
   * Indicator color variants
   */
  indicatorColors: {
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
  } as Record<StatusValue, string>,

  /**
   * Text color variants
   */
  textColors: {
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info',
  } as Record<StatusValue, string>,
};

/**
 * Get indicator size class
 */
export function getIndicatorSizeClass(size: StatusSize): string {
  return statusStyles.indicatorSizes[size];
}

/**
 * Get label size class
 */
export function getLabelSizeClass(size: StatusSize): string {
  return statusStyles.labelSizes[size];
}

/**
 * Get indicator color class
 */
export function getIndicatorColorClass(value: StatusValue): string {
  return statusStyles.indicatorColors[value];
}

/**
 * Get text color class
 */
export function getTextColorClass(value: StatusValue): string {
  return statusStyles.textColors[value];
}
