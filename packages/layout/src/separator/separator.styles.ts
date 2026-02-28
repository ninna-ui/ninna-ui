import type { Color } from '@ninna-ui/core';
import type { SeparatorOrientation } from '../types';

/**
 * Separator styles configuration
 */

export const separatorStyles = {

  /**

   * Base styles

   */

  base: "shrink-0 bg-base-200",



  /**

   * Orientation variants

   */

  orientation: {

    horizontal: "h-px w-full",

    vertical: "h-full w-px",

  } as Record<SeparatorOrientation, string>,

  /**
   * Color variants
   */
  colors: {
    neutral: "bg-neutral/30",
    primary: "bg-primary/30",
    secondary: "bg-secondary/30",
    accent: "bg-accent/30",
    info: "bg-info/30",
    success: "bg-success/30",
    warning: "bg-warning/30",
    danger: "bg-danger/30",
  } as Record<Color, string>,
};

/**
 * Get orientation class
 */
export function getOrientationClass(orientation: SeparatorOrientation): string {
  return separatorStyles.orientation[orientation];
}
