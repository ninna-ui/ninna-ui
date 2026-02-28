import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface FormGroupProps extends Omit<ComponentPropsWithoutRef<'fieldset'>, 'children' | 'dir'> {
  /** Legend/title for the group */
  legend?: string;
  /** Description for the group */
  description?: string;
  /** Whether the group is disabled */
  disabled?: boolean;
  /** Whether the group is required */
  required?: boolean;
  /** Children components */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Spacing between items */
  spacing?: 'sm' | 'md' | 'lg';
  /** Layout direction */
  direction?: 'vertical' | 'horizontal';
  /** ID for the fieldset */
  id?: string;
}
