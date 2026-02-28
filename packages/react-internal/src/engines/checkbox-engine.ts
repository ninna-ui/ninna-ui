/**
 * Checkbox Engine - Radix Checkbox adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 */

import { Root, Indicator } from '@radix-ui/react-checkbox';
import type { ComponentPropsWithoutRef } from 'react';

export const CheckboxEngine = {
  Root,
  Indicator,
};

// Our own interface definitions
export interface CheckboxEngineRootProps extends Omit<ComponentPropsWithoutRef<'button'>, 'checked' | 'defaultChecked'> {
  checked?: boolean | 'indeterminate';
  defaultChecked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

export interface CheckboxEngineIndicatorProps extends ComponentPropsWithoutRef<'span'> {
  forceMount?: true;
}
