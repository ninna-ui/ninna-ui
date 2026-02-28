import { MUTED_BG_COLORS, TEXT_COLORS } from "@ninna-ui/core";
import type { Color } from "@ninna-ui/core";

/**
 * Mark styles configuration
 * Note: Mark uses muted backgrounds (20% opacity) for highlight effect
 */
export const markStyles = {
  /**
   * Base styles applied to all mark elements
   */
  base: "px-0.5 rounded-sm",

  /**
   * Background color variants from core
   */
  bgColors: MUTED_BG_COLORS,

  /**
   * Text color variants from core
   */
  textColors: TEXT_COLORS,
};

/**
 * Get background color class
 */
export function getBgColorClass(color: Color): string {
  return markStyles.bgColors[color];
}

/**
 * Get text color class
 */
export function getTextColorClass(color: Color): string {
  return markStyles.textColors[color];
}
