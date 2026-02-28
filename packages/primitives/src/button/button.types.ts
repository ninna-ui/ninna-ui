import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant, Color, Size, Radius } from '@ninna-ui/core';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  
  /** Whether to make the button full width */
  fullWidth?: boolean;
  
  /** Icon to display on the left */
  leftIcon?: ReactNode;
  
  /** Icon to display on the right */
  rightIcon?: ReactNode;
}
