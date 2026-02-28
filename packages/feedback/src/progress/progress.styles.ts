import { BG_COLORS } from "@ninna-ui/core";
import type { Color, Size } from "@ninna-ui/core";
import type { ProgressVariant } from "./progress.types";

/**
 * Progress styles configuration
 * All size/color classes come from @ninna-ui/core for consistency
 */
export const progressStyles = {
  /**
   * Container styles
   */
  container: "w-full",

  /**
   * Track (background) styles
   */
  track: "w-full overflow-hidden rounded-full bg-base-200",

  /**
   * Indicator (filled) base styles
   */
  indicator: "h-full rounded-full transition-all duration-300 ease-out",

  /**
   * Size variants
   */
  sizes: {
    xs: "h-1",
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
    xl: "h-6",
  } satisfies Record<Size, string>,

  /**
   * Color variants from core
   */
  colors: BG_COLORS,

  /**
   * Variant styles - striped pattern using CSS gradient
   */
  variants: {
    default: "",
    striped: "bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]",
    animated: "bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]",
  } as Record<ProgressVariant, string>,

  /**
   * Indeterminate base styles (animation applied via inline style)
   */
  indeterminate: "w-1/3",

  /**
   * Label styles
   */
  label: {
    base: "text-sm font-medium",
    left: "text-base-content/80",
    right: "text-base-content/80",
    top: "text-base-content/80 mb-1",
    inside: "text-base-100 text-xs font-semibold",
  },
};

/**
 * CSS keyframe animations as inline styles
 * These are applied directly to elements to avoid external CSS dependencies
 */
export const progressAnimations = {
  stripes: {
    animation: "progress-stripes 1s linear infinite",
  },
  indeterminate: {
    animation: "progress-indeterminate 1.5s ease-in-out infinite",
  },
};

/**
 * CSS keyframes definition for injection
 * This should be injected once into the document
 */
export const PROGRESS_KEYFRAMES = `
@keyframes progress-stripes {
  0% { background-position: 1rem 0; }
  100% { background-position: 0 0; }
}
@keyframes progress-indeterminate {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}
@media (prefers-reduced-motion: reduce) {
  .ninna-progress-animated {
    animation: none !important;
  }
}
`;

/**
 * Get size class for progress track
 */
export function getSizeClass(size: Size): string {
  return progressStyles.sizes[size];
}

/**
 * Get color class for progress indicator
 */
export function getColorClass(color: Color): string {
  return progressStyles.colors[color];
}

/**
 * Get variant class for progress indicator
 */
export function getVariantClass(variant: ProgressVariant): string {
  return progressStyles.variants[variant];
}
