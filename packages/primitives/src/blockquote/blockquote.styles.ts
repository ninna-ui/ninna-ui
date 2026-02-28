import { BORDER_COLORS, SOFT_BG_COLORS, TEXT_MUTED_COLORS } from "@ninna-ui/core";
import type { Color } from "@ninna-ui/core";
import type { BlockquoteVariant } from "./blockquote.types";

/**
 * Blockquote styles configuration
 */
export const blockquoteStyles = {
  /**
   * Base styles applied to all blockquotes
   */
  base: "relative my-4",

  /**
   * Variant styles
   */
  variants: {
    outline: "pl-4 border-l-4",
    solid: "pl-4 border-l-4 py-4 pr-4 rounded-r-lg",
    soft: "pl-4 border-l-4 py-4 pr-4 border rounded-lg",
  } as Record<BlockquoteVariant, string>,

  /**
   * Border color variants from core
   */
  borderColors: BORDER_COLORS,

  /**
   * Background color variants from core
   */
  bgColors: SOFT_BG_COLORS,

  /**
   * Icon color variants from core
   */
  iconColors: TEXT_MUTED_COLORS,

  /**
   * Quote content styles
   */
  content: "text-base-content/80 italic",

  /**
   * Citation styles
   */
  citation: "mt-2 text-sm text-base-content/70 not-italic",

  /**
   * Icon wrapper styles
   */
  iconWrapper: "absolute -left-3 -top-2 text-4xl opacity-50",
};

/**
 * Get variant class
 */
export function getVariantClass(variant: BlockquoteVariant): string {
  return blockquoteStyles.variants[variant];
}

/**
 * Get border color class
 */
export function getBorderColorClass(color: Color): string {
  return blockquoteStyles.borderColors[color];
}

/**
 * Get background color class
 */
export function getBgColorClass(color: Color): string {
  return blockquoteStyles.bgColors[color];
}

/**
 * Get icon color class
 */
export function getIconColorClass(color: Color): string {
  return blockquoteStyles.iconColors[color];
}
