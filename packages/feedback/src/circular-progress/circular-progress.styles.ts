import { STROKE_COLORS } from "@ninna-ui/core";
import type { Color, Size } from "@ninna-ui/core";

/**
 * Circular progress styles configuration
 * All size/color classes come from @ninna-ui/core for consistency
 */
export const circularProgressStyles = {
  /**
   * Container styles
   */
  container: "relative inline-flex items-center justify-center",

  /**
   * SVG styles
   */
  svg: "transform -rotate-90",

  /**
   * Track (background circle) styles
   */
  track: "stroke-base-200",

  /**
   * Indicator (progress circle) base styles
   */
  indicator: "transition-all duration-300 ease-out",

  /**
   * Size variants
   */
  sizes: {
    xs: { size: 24, strokeWidth: 2 },
    sm: { size: 32, strokeWidth: 3 },
    md: { size: 48, strokeWidth: 4 },
    lg: { size: 64, strokeWidth: 5 },
    xl: { size: 96, strokeWidth: 6 },
  } satisfies Record<Size, { size: number; strokeWidth: number }>,

  /**
   * Color variants from core
   */
  colors: STROKE_COLORS,

  /**
   * Indeterminate animation
   */
  indeterminate: "animate-spin",

  /**
   * Label styles
   */
  label: {
    base: "font-medium",
    center: "absolute inset-0 flex items-center justify-center text-base-content/80",
    bottom: "mt-2 text-center text-base-content/80",
  },

  /**
   * Label size variants
   */
  labelSizes: {
    xs: "text-[8px]",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  } as Record<Size, string>,
};

/**
 * Get size config for circular progress
 */
export function getSizeConfig(size: Size): { size: number; strokeWidth: number } {
  return circularProgressStyles.sizes[size];
}

/**
 * Get color class for circular progress indicator
 */
export function getColorClass(color: Color): string {
  return circularProgressStyles.colors[color];
}

/**
 * Get label size class
 */
export function getLabelSizeClass(size: Size): string {
  return circularProgressStyles.labelSizes[size];
}
