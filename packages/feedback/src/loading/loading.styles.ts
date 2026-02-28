import { TEXT_COLORS } from "@ninna-ui/core";
import type { Color, SpinnerSize } from "@ninna-ui/core";
import type { LoadingVariant } from "./loading.types";

/**
 * Loading styles configuration
 */
export const loadingStyles = {
  /**
   * Base styles applied to all loading indicators
   */
  base: "inline-block",

  /**
   * Size variants
   */
  sizes: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-8 w-8",
    "2xl": "h-10 w-10",
    "3xl": "h-12 w-12",
  } satisfies Record<SpinnerSize, string>,

  /**
   * Variant-specific styles
   */
  variants: {
    spin: "animate-spin rounded-full border-2 border-current border-t-transparent",
    ping: "animate-ping rounded-full",
    pulse: "animate-pulse rounded-full",
    dots: "flex items-center gap-1",
  },
};

/**
 * Get color class for loading indicator
 */
export function getColorClass(color: Color): string {
  return TEXT_COLORS[color];
}

/**
 * Get size class for loading indicator
 */
export function getSizeClass(size: SpinnerSize): string {
  return loadingStyles.sizes[size];
}

/**
 * Get variant class for loading indicator
 */
export function getVariantClass(variant: LoadingVariant): string {
  return loadingStyles.variants[variant];
}
