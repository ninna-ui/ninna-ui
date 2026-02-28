import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Size } from '@ninna-ui/core';

export interface FieldProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  /** Label text */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error text displayed when invalid */
  errorText?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is invalid */
  invalid?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Size of the field elements */
  size?: Size;
  /** Optional text displayed on the right side of the label */
  optionalText?: string;
  /** Children components (usually an input) */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** ID for the field (used to link label with input) */
  id?: string;
}
