import type { ComponentPropsWithoutRef } from 'react';
import type { CompactSize } from '@ninna-ui/core';

/** Variant options for the Tabs */
export type TabsVariant = 'line' | 'enclosed' | 'soft' | 'outline';

/** Props for the Tabs root component */
export interface TabsProps extends ComponentPropsWithoutRef<'div'> {
  /** Controlled value */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Callback when value changes */
  onValueChange?: (value: string) => void;
  /** Orientation of the tabs @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  /** Whether keyboard activation is automatic @default 'automatic' */
  activationMode?: 'automatic' | 'manual';
}

/** Props for the Tabs list */
export interface TabsListProps extends ComponentPropsWithoutRef<'div'> {
  /** Visual variant @default 'line' */
  variant?: TabsVariant;
  /** Size of the tabs @default 'md' */
  size?: CompactSize;
  /** Whether to loop keyboard navigation */
  loop?: boolean;
}

/** Props for a Tab trigger */
export interface TabsTriggerProps extends ComponentPropsWithoutRef<'button'> {
  /** Value that associates the trigger with a content panel */
  value: string;
  /** Whether the trigger is disabled */
  disabled?: boolean;
}

/** Props for a Tab content panel */
export interface TabsContentProps extends ComponentPropsWithoutRef<'div'> {
  /** Value that associates the content with a trigger */
  value: string;
  /** Whether to force mount the content */
  forceMount?: true;
}
