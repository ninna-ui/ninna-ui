/**
 * Switch Engine - Radix Switch adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 */

import { Root, Thumb } from '@radix-ui/react-switch';
import type { ComponentPropsWithoutRef } from 'react';

export const SwitchEngine = {
  Root,
  Thumb,
};

// Our own interface definitions
export interface SwitchEngineRootProps extends ComponentPropsWithoutRef<'button'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

export type SwitchEngineThumbProps = ComponentPropsWithoutRef<'span'>;
