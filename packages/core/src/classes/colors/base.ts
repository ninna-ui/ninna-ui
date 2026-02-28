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

/** Muted text color classes (70% opacity) */
export const TEXT_MUTED_COLORS: Record<Color, string> = {
  primary: 'text-primary/70',
  secondary: 'text-secondary/70',
  accent: 'text-accent/70',
  neutral: 'text-neutral/70',
  success: 'text-success/70',
  danger: 'text-danger/70',
  warning: 'text-warning/70',
  info: 'text-info/70',
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

/** Ring color classes */
export const RING_COLORS: Record<Color, string> = {
  primary: 'ring-primary',
  secondary: 'ring-secondary',
  accent: 'ring-accent',
  neutral: 'ring-neutral',
  success: 'ring-success',
  danger: 'ring-danger',
  warning: 'ring-warning',
  info: 'ring-info',
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

/** Soft background colors (10% opacity) */
export const SOFT_BG_COLORS: Record<Color, string> = {
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  accent: 'bg-accent/10',
  neutral: 'bg-neutral/10',
  success: 'bg-success/10',
  danger: 'bg-danger/10',
  warning: 'bg-warning/10',
  info: 'bg-info/10',
};

/** Muted background colors (20% opacity) */
export const MUTED_BG_COLORS: Record<Color, string> = {
  primary: 'bg-primary/20',
  secondary: 'bg-secondary/20',
  accent: 'bg-accent/20',
  neutral: 'bg-neutral/20',
  success: 'bg-success/20',
  danger: 'bg-danger/20',
  warning: 'bg-warning/20',
  info: 'bg-info/20',
};

/** Muted border colors (30% opacity) */
export const MUTED_BORDER_COLORS: Record<Color, string> = {
  primary: 'border-primary/30',
  secondary: 'border-secondary/30',
  accent: 'border-accent/30',
  neutral: 'border-neutral/30',
  success: 'border-success/30',
  danger: 'border-danger/30',
  warning: 'border-warning/30',
  info: 'border-info/30',
};

/** Hover text colors (80% opacity on hover) */
export const HOVER_TEXT_COLORS: Record<Color, string> = {
  primary: 'hover:text-primary/80',
  secondary: 'hover:text-secondary/80',
  accent: 'hover:text-accent/80',
  neutral: 'hover:text-neutral/80',
  success: 'hover:text-success/80',
  danger: 'hover:text-danger/80',
  warning: 'hover:text-warning/80',
  info: 'hover:text-info/80',
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
