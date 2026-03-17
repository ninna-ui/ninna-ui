import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Color, ColorVariant } from '@ninna-ui/core';
import type { CheckboxSize } from '../types';

/** Checkbox variant - uses core ColorVariant for consistency */
export type CheckboxVariant = ColorVariant;

/**
 * Checkbox props
 */
export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'size' | 'checked'> {
  /** Size of the checkbox */
  size?: CheckboxSize;
  /** Color theme */
  color?: Color;
  /** Visual variant */
  variant?: CheckboxVariant;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Callback when checked state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Whether the checkbox is required */
  required?: boolean;
  /** Whether the checkbox is in an invalid state */
  invalid?: boolean;
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean;
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
  /** Position of the label relative to checkbox */
  labelPosition?: 'start' | 'end';
  /** Custom check icon */
  icon?: ReactNode;
  /** Custom indeterminate icon */
  indeterminateIcon?: ReactNode;
}

/**
 * CheckboxGroup props
 */
export interface CheckboxGroupProps extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange' | 'dir'> {
  /** Selected values */
  value?: string[];
  /** Default selected values (uncontrolled) */
  defaultValue?: string[];
  /** Callback when selection changes */
  onValueChange?: (value: string[]) => void;
  /** Whether the entire group is disabled */
  disabled?: boolean;
  /** Size for all checkboxes in the group */
  size?: CheckboxSize;
  /** Color for all checkboxes in the group */
  color?: Color;
  /** Variant for all checkboxes in the group */
  variant?: CheckboxVariant;
  /** Orientation of the group */
  orientation?: 'horizontal' | 'vertical';
  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg';
  /** Children (CheckboxGroupItem components) */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CheckboxGroupItem props
 */
export interface CheckboxGroupItemProps extends Omit<CheckboxProps, 'checked' | 'defaultChecked' | 'onCheckedChange'> {
  /** Value for this checkbox item */
  value: string;
}
