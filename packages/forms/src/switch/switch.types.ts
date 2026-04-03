import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Color } from '@ninna-ui/core';
import type { SwitchSize } from '../types';

/** Switch variant styles */
export type SwitchVariant = 'solid' | 'soft' | 'outline';

/**
 * Switch props
 */
export interface SwitchProps extends Omit<ComponentPropsWithoutRef<'button'>, 'onChange'> {
  /** Size of the switch */
  size?: SwitchSize;
  /** Color theme */
  color?: Color;
  /** Visual variant */
  variant?: SwitchVariant;
  /** Whether the switch is checked */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Callback when checked state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Whether the switch is required */
  required?: boolean;
  /** Whether the switch is in an invalid state */
  invalid?: boolean;
  /** Whether the switch is in a loading state */
  loading?: boolean;
  /** Name for form submission */
  name?: string;
  /** Value for form submission */
  value?: string;
  /** Label text */
  label?: ReactNode;
  /** 
   * Description text
   * @deprecated Use Field wrapper with FieldDescription instead for better accessibility
   */
  description?: ReactNode;
  /** Position of the label relative to switch */
  labelPosition?: 'start' | 'end';
  /** Track labels for on/off states */
  trackLabels?: { on?: string; off?: string };
  /** Custom thumb icon */
  thumbIcon?: ReactNode;
}
