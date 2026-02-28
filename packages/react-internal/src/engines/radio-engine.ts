/**
 * Radio Engine - Radix RadioGroup adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 */

import { Root, Item, Indicator } from '@radix-ui/react-radio-group';
import type { ComponentPropsWithoutRef } from 'react';

export const RadioEngine = {
  Root,
  Item,
  Indicator,
};

// Our own interface definitions
export interface RadioEngineRootProps extends ComponentPropsWithoutRef<'div'> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  orientation?: 'horizontal' | 'vertical';
  dir?: 'ltr' | 'rtl';
  loop?: boolean;
}

export interface RadioEngineItemProps extends ComponentPropsWithoutRef<'button'> {
  value: string;
  disabled?: boolean;
  required?: boolean;
}

export interface RadioEngineIndicatorProps extends ComponentPropsWithoutRef<'span'> {
  forceMount?: true;
}
