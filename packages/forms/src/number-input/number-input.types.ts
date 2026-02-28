import type { ComponentPropsWithoutRef } from 'react';
import type { Size } from '@ninna-ui/core';

export interface NumberInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'defaultValue' | 'value' | 'size' | 'type'> {
  /** Size of the input */
  size?: Size;
  /** Current value (controlled) */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Callback when value changes */
  onChange?: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Precision (decimal places) */
  precision?: number;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is read-only */
  readOnly?: boolean;
  /** Whether the input is invalid */
  invalid?: boolean;
  /** Whether the input is required */
  required?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Name for form submission */
  name?: string;
  /** Accessible label for the increment button @default 'Increase value' */
  incrementLabel?: string;
  /** Accessible label for the decrement button @default 'Decrease value' */
  decrementLabel?: string;
  /** Additional CSS classes */
  className?: string;
  /** Allow keyboard input */
  allowKeyboardInput?: boolean;
  /** Show stepper buttons */
  showStepper?: boolean;
  /** Stepper position */
  stepperPosition?: 'right' | 'sides';
  /** Format display value */
  format?: (value: number) => string;
  /** Parse input value */
  parse?: (value: string) => number;
  /** ID for the input */
  id?: string;
}
