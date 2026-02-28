import { TEXT_SIZE_CLASSES, SOFT_BG_COLORS, TEXT_COLORS } from "@ninna-ui/core";
import type { Color, TextSize } from "@ninna-ui/core";

/**
 * Code styles configuration
 */
export const codeStyles = {
  /**
   * Base styles applied to all code elements
   */
  base: "inline-block px-1.5 py-0.5 rounded font-mono",

  /**
   * Background color variants from core
   */
  bgColors: SOFT_BG_COLORS,

  /**
   * Text color variants from core
   */
  textColors: TEXT_COLORS,

  /**
   * Size variants from core
   */
  sizes: TEXT_SIZE_CLASSES,
};

/**
 * Get background color class for code
 */
export function getBgColorClass(color: Color): string {
  return codeStyles.bgColors[color];
}

/**
 * Get text color class for code
 */
export function getTextColorClass(color: Color): string {
  return codeStyles.textColors[color];
}

/**
 * Get size class for code
 */
export function getSizeClass(size: TextSize): string {
  return codeStyles.sizes[size];
}
