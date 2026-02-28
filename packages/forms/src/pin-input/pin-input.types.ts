import type { ComponentPropsWithoutRef } from 'react';
import type { Size } from '@ninna-ui/core';

export interface PinInputProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange' | 'defaultValue'> {
  /** Number of input fields */
  length?: number;
  /** Size of the inputs */
  size?: Size;
  /** Value (controlled) */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Callback when all fields are filled */
  onComplete?: (value: string) => void;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is invalid */
  invalid?: boolean;
  /** Placeholder for each field */
  placeholder?: string;
  /** Input type (text or password) */
  type?: 'text' | 'password' | 'number';
  /** Mask input value */
  mask?: boolean;
  /** Auto focus first input */
  autoFocus?: boolean;
  /** One-time password mode */
  otp?: boolean;
  /** Name for form submission */
  name?: string;
  /** Additional CSS classes */
  className?: string;
}
