/**
 * Base Color Class Mappings
 * Direct color utility classes for backgrounds, text, borders, etc.
 */
import type { Color } from "../../tokens";

/** Background color classes */
export const BG_COLORS: Record<Color, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  neutral: "bg-neutral",
  success: "bg-success",
  danger: "bg-danger",
  warning: "bg-warning",
  info: "bg-info",
};

/** Text color classes */
export const TEXT_COLORS: Record<Color, string> = {
  primary: "text-primary-text",
  secondary: "text-secondary-text",
  accent: "text-accent-text",
  neutral: "text-neutral-text",
  success: "text-success-text",
  danger: "text-danger-text",
  warning: "text-warning-text",
  info: "text-info-text",
};

/** Border color classes */
export const BORDER_COLORS: Record<Color, string> = {
  primary: "border-primary",
  secondary: "border-secondary",
  accent: "border-accent",
  neutral: "border-neutral",
  success: "border-success",
  danger: "border-danger",
  warning: "border-warning",
  info: "border-info",
};

/** Stroke color classes (for SVG elements) */
export const STROKE_COLORS: Record<Color, string> = {
  primary: "stroke-primary-text",
  secondary: "stroke-secondary-text",
  accent: "stroke-accent-text",
  neutral: "stroke-neutral-text",
  success: "stroke-success-text",
  danger: "stroke-danger-text",
  warning: "stroke-warning-text",
  info: "stroke-info-text",
};

/** Marker colors (for list items) */
export const MARKER_COLORS: Record<Color, string> = {
  primary: "marker:text-primary-text",
  secondary: "marker:text-secondary-text",
  accent: "marker:text-accent-text",
  neutral: "marker:text-neutral-text",
  success: "marker:text-success-text",
  danger: "marker:text-danger-text",
  warning: "marker:text-warning-text",
  info: "marker:text-info-text",
};
