import type { HTMLAttributes, ReactNode } from 'react';
import type { Color, ColorVariant, Radius, Size } from '@ninna-ui/core';

/** Badge variant - uses core ColorVariant for consistency */
export type BadgeVariant = ColorVariant;

/**
 * Badge props interface
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: BadgeVariant;
  
  /** Color theme */
  color?: Color;
  
  /** Size of the badge
   * @default 'md'
   */
  size?: Size;
  
  /** Border radius style */
  radius?: Radius;
  
  /** Content to display */
  children?: ReactNode;
}
