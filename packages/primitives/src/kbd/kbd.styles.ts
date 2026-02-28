import { SOFT_BG_COLORS, MUTED_BORDER_COLORS, TEXT_COLORS } from "@ninna-ui/core";
import type { Color } from "@ninna-ui/core";
import type { KbdSize } from "./kbd.types";

/**
 * Kbd styles configuration
 */
export const kbdStyles = {
  /**
   * Base styles applied to all kbd elements
   */
  base: "inline-flex items-center justify-center font-mono font-medium border rounded shadow-sm",

  /**
   * Size variants
   */
  sizes: {
    xs: "px-1 py-0.5 text-xs min-w-5",
    sm: "px-1.5 py-0.5 text-xs min-w-6",
    md: "px-2 py-1 text-sm min-w-7",
    lg: "px-2.5 py-1 text-base min-w-8",
  } as Record<KbdSize, string>,

  /**
   * Background color variants
   */
  bgColors: SOFT_BG_COLORS,

  /**
   * Border color variants
   */
  borderColors: MUTED_BORDER_COLORS,

  /**
   * Text color variants
   */
  textColors: TEXT_COLORS,
};

/**
 * Get size class
 */
export function getSizeClass(size: KbdSize): string {
  return kbdStyles.sizes[size];
}

/**
 * Get background color class
 */
export function getBgColorClass(color: Color): string {
  return kbdStyles.bgColors[color];
}

/**
 * Get border color class
 */
export function getBorderColorClass(color: Color): string {
  return kbdStyles.borderColors[color];
}

/**
 * Get text color class
 */
export function getTextColorClass(color: Color): string {
  return kbdStyles.textColors[color];
}
