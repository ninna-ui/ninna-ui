import { SOLID_VARIANTS, SOFT_VARIANTS, OUTLINE_VARIANTS, TEXT_COLORS } from "@ninna-ui/core";
import type { Color, Size } from "@ninna-ui/core";
import type { AlertVariant } from "./alert.types";

/**
 * Alert styles configuration
 * All color classes come from @ninna-ui/core for consistency
 */
export const alertStyles = {
  /**
   * Base styles applied to all alerts
   */
  base: [
    "relative w-full rounded-lg p-4",
    "flex items-start gap-3",
  ].join(" "),

  /**
   * Variant-specific styles using core color utilities
   */
  variants: {
    solid: SOLID_VARIANTS.base,
    soft: SOFT_VARIANTS.base,
    outline: OUTLINE_VARIANTS.base,
  } as Record<AlertVariant, Record<Color, string>>,

  /**
   * Icon colors from core
   */
  iconColors: TEXT_COLORS,

  /**
   * Icon container styles
   */
  iconContainer: "flex-shrink-0 mt-0.5",

  /**
   * Content container styles
   */
  contentContainer: "flex-1 min-w-0",

  /**
   * Title styles
   */
  title: "font-semibold text-sm",

  /**
   * Description styles
   */
  description: "text-sm mt-1 opacity-90",

  /**
   * Action container styles
   */
  actionContainer: "mt-3",

  /**
   * Dismiss button styles
   */
  dismissButton: [
    "flex-shrink-0 ml-auto -mr-1 -mt-1 p-1 rounded-md",
    "opacity-70 hover:opacity-100 transition-opacity",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2",
  ].join(" "),

  /**
   * Size variants
   */
  sizes: {
    xs: "p-2 text-xs gap-2",
    sm: "p-3 text-sm gap-2",
    md: "p-4 text-sm gap-3",
    lg: "p-5 text-base gap-3",
    xl: "p-6 text-base gap-4",
  } satisfies Record<Size, string>,

  /**
   * Icon size variants
   */
  iconSizes: {
    xs: "h-4 w-4",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
  } satisfies Record<Size, string>,
};

/**
 * Get variant class for alert
 */
export function getVariantClass(variant: AlertVariant, color: Color): string {
  return alertStyles.variants[variant][color];
}

/**
 * Get icon color class based on variant and color
 */
export function getIconColorClass(variant: AlertVariant, color: Color): string {
  if (variant === "solid") {
    return "text-current";
  }
  return alertStyles.iconColors[color];
}
