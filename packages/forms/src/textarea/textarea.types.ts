import type { TextareaHTMLAttributes } from 'react';
import type { Color, Size, InputVariant } from '@ninna-ui/core';

/**
 * Textarea props
 */
export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** Size of the textarea */
  size?: Size;
  /** Visual variant */
  variant?: InputVariant;
  /** Color theme for focus state */
  color?: Color;
  /** Whether the textarea has an error state */
  invalid?: boolean;
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  /** Whether the textarea takes full width */
  fullWidth?: boolean;
  /** Auto-resize textarea based on content */
  autoResize?: boolean;
  /** Minimum number of rows when autoResize is enabled */
  minRows?: number;
  /** Maximum number of rows when autoResize is enabled */
  maxRows?: number;
  /** Show character counter (requires maxLength) */
  showCounter?: boolean;
}
