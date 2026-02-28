import { MARKER_COLORS, TEXT_COLORS } from "@ninna-ui/core";
import type { Color } from "@ninna-ui/core";
import type { ListSpacing, ListMarker } from "./list.types";

/**
 * List styles configuration
 */
export const listStyles = {
  /**
   * Base styles applied to all lists
   */
  base: "pl-5",

  /**
   * Spacing variants
   */
  spacing: {
    none: "space-y-0",
    sm: "space-y-1",
    md: "space-y-2",
    lg: "space-y-4",
  } as Record<ListSpacing, string>,

  /**
   * Marker styles for unordered lists
   */
  unorderedMarkers: {
    disc: "list-disc",
    circle: "list-[circle]",
    square: "list-[square]",
    none: "list-none",
  },

  /**
   * Marker styles for ordered lists
   */
  orderedMarkers: {
    decimal: "list-decimal",
    alpha: "list-[lower-alpha]",
    roman: "list-[lower-roman]",
    none: "list-none",
  },

  /**
   * Marker color variants from core (for native list markers)
   */
  markerColors: MARKER_COLORS,

  /**
   * Icon color variants from core (for custom icon markers)
   */
  iconColors: TEXT_COLORS,

  /**
   * Custom marker base styles (for icon markers)
   */
  customMarker: "list-none",

  /**
   * List item base styles
   */
  itemBase: "text-base-content/80",

  /**
   * List item with custom icon
   */
  itemWithIcon: "flex items-start gap-2",

  /**
   * Icon wrapper styles
   */
  iconWrapper: "flex-shrink-0 mt-0.5",
};

/**
 * Get spacing class
 */
export function getSpacingClass(spacing: ListSpacing): string {
  return listStyles.spacing[spacing];
}

/**
 * Get marker class for unordered list
 */
export function getUnorderedMarkerClass(marker: ListMarker): string {
  if (marker in listStyles.unorderedMarkers) {
    return listStyles.unorderedMarkers[marker as keyof typeof listStyles.unorderedMarkers];
  }
  return listStyles.unorderedMarkers.disc;
}

/**
 * Get marker class for ordered list
 */
export function getOrderedMarkerClass(marker: ListMarker): string {
  if (marker in listStyles.orderedMarkers) {
    return listStyles.orderedMarkers[marker as keyof typeof listStyles.orderedMarkers];
  }
  return listStyles.orderedMarkers.decimal;
}

/**
 * Get marker color class (for native list markers)
 */
export function getMarkerColorClass(color: Color): string {
  return listStyles.markerColors[color];
}

/**
 * Get icon color class (for custom icon markers)
 */
export function getIconColorClass(color: Color): string {
  return listStyles.iconColors[color];
}
