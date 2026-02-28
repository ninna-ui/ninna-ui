import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant, Color, Size, Radius } from '@ninna-ui/core';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon to display */
  icon: ReactNode;
  
  /** Visual style variant */
  variant?: ButtonVariant;
  
  /** Color theme */
  color?: Color;
  
  /** Size of the button */
  size?: Size;
  
  /** Border radius style */
  radius?: Radius;
  
  /** Whether the button is in a loading state */
  loading?: boolean;
  
  /** Accessible label for the button (required for accessibility) */
  "aria-label": string;
}
