import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Color, ColorVariant } from '@ninna-ui/core';
import type { RadioSize } from '../types';

/** Radio variant — uses core ColorVariant for consistency */
export type RadioVariant = ColorVariant;

/**
 * RadioGroup props
 */
export interface RadioGroupProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** Size of the radio buttons */
  size?: RadioSize;
  /** Color theme */
  color?: Color;
  /** Visual variant */
  variant?: RadioVariant;
  /** Current value (controlled) */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Callback when value changes */
  onValueChange?: (value: string) => void;
  /** Whether the group is disabled */
  disabled?: boolean;
  /** Whether a selection is required */
  required?: boolean;
  /** Whether the group is in an invalid state */
  invalid?: boolean;
  /** Name for form submission */
  name?: string;
  /** Orientation of the group */
  orientation?: 'horizontal' | 'vertical';
  /** Whether to loop keyboard navigation */
  loop?: boolean;
  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg';
  /** Radio items */
  children: ReactNode;
}

/**
 * RadioGroupItem props
 */
export interface RadioGroupItemProps extends Omit<ComponentPropsWithoutRef<'button'>, 'value'> {
  /** Value of this radio item */
  value: string;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Label text */
  label?: ReactNode;
  /** Description text */
  description?: ReactNode;
  /** Position of the label relative to radio */
  labelPosition?: 'start' | 'end';
}

/**
 * RadioCard props for card-style radio buttons
 */
export interface RadioCardProps {
  /** Value of this radio card */
  value: string;
  /** Whether this card is disabled */
  disabled?: boolean;
  /** Card title */
  title?: ReactNode;
  /** Card description */
  description?: ReactNode;
  /** Card icon */
  icon?: ReactNode;
  /** Accessible label for the radio card */
  'aria-label'?: string;
  /** ID of element that describes this radio card */
  'aria-describedby'?: string;
  /** Additional CSS classes */
  className?: string;
}
