/**
 * Tabs Engine - Radix Tabs adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 */

import {
  Root,
  List,
  Trigger,
  Content,
} from '@radix-ui/react-tabs';
import type { ComponentPropsWithoutRef } from 'react';

export const TabsEngine = {
  Root,
  List,
  Trigger,
  Content,
};

// Our own interface definitions
export interface TabsEngineRootProps extends ComponentPropsWithoutRef<'div'> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  dir?: 'ltr' | 'rtl';
  activationMode?: 'automatic' | 'manual';
}

export interface TabsEngineListProps extends ComponentPropsWithoutRef<'div'> {
  loop?: boolean;
}

export interface TabsEngineTriggerProps extends ComponentPropsWithoutRef<'button'> {
  value: string;
  disabled?: boolean;
}

export interface TabsEngineContentProps extends ComponentPropsWithoutRef<'div'> {
  value: string;
  forceMount?: true;
}
