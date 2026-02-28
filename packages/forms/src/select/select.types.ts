import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Color, Size } from '@ninna-ui/core';

/** Select visual variants */
export type SelectVariant = 'outline' | 'filled' | 'flushed';

/**
 * Select props
 */
export interface SelectProps {
  /** Accessible label for the select trigger */
  'aria-label'?: string;
  /** ID of element that labels the select */
  'aria-labelledby'?: string;
  /** Size of the select */
  size?: Size;
  /** Color theme */
  color?: Color;
  /** Visual variant */
  variant?: SelectVariant;
  /** Current value (controlled) */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Callback when value changes */
  onValueChange?: (value: string) => void;
  /** Whether the select is open */
  open?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether a selection is required */
  required?: boolean;
  /** Name for form submission */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the select has an error state */
  invalid?: boolean;
  /** Whether the select takes full width */
  fullWidth?: boolean;
  /** Whether the select is clearable */
  clearable?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Select options */
  children: ReactNode;
  /** Additional class name for trigger */
  className?: string;
}

/**
 * SelectItem props
 */
export interface SelectItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'value'> {
  /** Value of this option */
  value: string;
  /** Whether this option is disabled */
  disabled?: boolean;
  /** Text value for typeahead */
  textValue?: string;
  /** Icon to display before the item */
  icon?: ReactNode;
  /** Description text */
  description?: string;
}

/**
 * SelectGroup props
 */
export interface SelectGroupProps extends ComponentPropsWithoutRef<'div'> {
  /** Label for the group */
  label?: string;
}
