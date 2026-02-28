/**
 * Select Engine - Radix Select adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 */

import {
  Root,
  Trigger,
  Value,
  Icon,
  Portal,
  Content,
  Viewport,
  Item,
  ItemText,
  ItemIndicator,
  Group,
  Label,
  Separator,
  ScrollUpButton,
  ScrollDownButton,
} from '@radix-ui/react-select';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export const SelectEngine = {
  Root,
  Trigger,
  Value,
  Icon,
  Portal,
  Content,
  Viewport,
  Item,
  ItemText,
  ItemIndicator,
  Group,
  Label,
  Separator,
  ScrollUpButton,
  ScrollDownButton,
};

// Our own interface definitions
export interface SelectEngineRootProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  dir?: 'ltr' | 'rtl';
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface SelectEngineTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export interface SelectEngineValueProps extends ComponentPropsWithoutRef<'span'> {
  placeholder?: ReactNode;
}

export interface SelectEnginePortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export interface SelectEngineContentProps extends ComponentPropsWithoutRef<'div'> {
  position?: 'item-aligned' | 'popper';
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionPadding?: number | { top?: number; right?: number; bottom?: number; left?: number };
}

export type SelectEngineViewportProps = ComponentPropsWithoutRef<'div'>;

export interface SelectEngineItemProps extends ComponentPropsWithoutRef<'div'> {
  value: string;
  disabled?: boolean;
  textValue?: string;
}

export type SelectEngineGroupProps = ComponentPropsWithoutRef<'div'>;

export type SelectEngineLabelProps = ComponentPropsWithoutRef<'div'>;

export type SelectEngineSeparatorProps = ComponentPropsWithoutRef<'div'>;
