import { TEXT_VARIANTS } from "@ninna-ui/core";
import type { Color } from "@ninna-ui/core";
import type { DividerVariant, DividerWeight } from "./divider.types";

/**
 * Divider styles configuration
 */
export const dividerStyles = {
  /**
   * Base styles for horizontal divider
   */
  horizontal: {
    base: "w-full border-t",
    soft: "border-base-300/50",
    solid: "border-base-300",
  },

  /**
   * Base styles for vertical divider
   */
  vertical: {
    base: "h-full border-l",
    soft: "border-base-300/50",
    solid: "border-base-300",
  },

  /**
   * Base styles for divider with text
   */
  withText: {
    container: "flex items-center gap-3 w-full",
    line: "flex-1 border-t",
    text: "text-sm font-medium whitespace-nowrap",
    soft: "border-base-300/50",
    solid: "border-base-300",
  },
};

/**
 * Get color class for divider text
 */
export function getColorClass(color: Color): string {
  return TEXT_VARIANTS[color];
}

/**
 * Get weight class for divider
 */
export function getWeightClass(variant: DividerVariant, weight: DividerWeight): string {
  if (variant === "horizontal") {
    return dividerStyles.horizontal[weight];
  } else if (variant === "vertical") {
    return dividerStyles.vertical[weight];
  } else {
    return dividerStyles.withText[weight];
  }
}
