import type { InputHTMLAttributes } from 'react';
import type { Color, Size, InputVariant } from '@ninna-ui/core';

/**
 * Input props
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size of the input */
  size?: Size;
  /** Visual variant */
  variant?: InputVariant;
  /** Color theme for focus state */
  color?: Color;
  /** Whether the input has an error state */
  invalid?: boolean;
  /** Whether the input takes full width */
  fullWidth?: boolean;
  /** Show a clear button when input has value */
  clearable?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Maximum character length (enables counter when showCounter is true) */
  maxLength?: number;
  /** Show character counter (requires maxLength) */
  showCounter?: boolean;
  /** Floating label text */
  floatingLabel?: string;
}
