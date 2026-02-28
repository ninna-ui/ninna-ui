/**
 * Color Design Tokens
 * Semantic color names used throughout the design system
 */

/**
 * Primary semantic colors for components
 * Maps to CSS custom properties in theme presets
 */
export type Color =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

/**
 * All available color values as a readonly array
 * Useful for iteration and validation
 */
export const COLORS = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'danger',
] as const;
