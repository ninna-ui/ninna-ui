import type { LabelHTMLAttributes } from 'react';
import type { Size } from '@ninna-ui/core';

/**
 * FormLabel props
 */
export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Size of the label text */
  size?: Size;
  /** Whether to show required indicator */
  showRequired?: boolean;
  /** Custom required indicator */
  requiredIndicator?: React.ReactNode;
}
