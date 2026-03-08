/**
 * Base Color Class Mappings
 * Direct color utility classes for backgrounds, text, borders, etc.
 */
import type { Color } from '../../tokens';

/** Background color classes */
export const BG_COLORS: Record<Color, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  neutral: 'bg-neutral',
  success: 'bg-success',
  danger: 'bg-danger',
  warning: 'bg-warning',
  info: 'bg-info',
};

/** Text color classes */
export const TEXT_COLORS: Record<Color, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  neutral: 'text-neutral',
  success: 'text-success',
  danger: 'text-danger',
  warning: 'text-warning',
  info: 'text-info',
};

/** Border color classes */
export const BORDER_COLORS: Record<Color, string> = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  accent: 'border-accent',
  neutral: 'border-neutral',
  success: 'border-success',
  danger: 'border-danger',
  warning: 'border-warning',
  info: 'border-info',
};

/** Stroke color classes (for SVG elements) */
export const STROKE_COLORS: Record<Color, string> = {
  primary: 'stroke-primary',
  secondary: 'stroke-secondary',
  accent: 'stroke-accent',
  neutral: 'stroke-neutral',
  success: 'stroke-success',
  danger: 'stroke-danger',
  warning: 'stroke-warning',
  info: 'stroke-info',
};

/** Marker colors (for list items) */
export const MARKER_COLORS: Record<Color, string> = {
  primary: 'marker:text-primary',
  secondary: 'marker:text-secondary',
  accent: 'marker:text-accent',
  neutral: 'marker:text-neutral',
  success: 'marker:text-success',
  danger: 'marker:text-danger',
  warning: 'marker:text-warning',
  info: 'marker:text-info',
};
