/**
 * Dropdown Menu Engine - Radix DropdownMenu adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 * Define our own interfaces that mirror the required props
 */

import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  CheckboxItem,
  RadioGroup,
  RadioItem,
  ItemIndicator,
  Label,
  Separator,
  Sub,
  SubTrigger,
  SubContent,
  Arrow,
} from '@radix-ui/react-dropdown-menu';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export const DropdownEngine = {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  CheckboxItem,
  RadioGroup,
  RadioItem,
  ItemIndicator,
  Label,
  Separator,
  Sub,
  SubTrigger,
  SubContent,
  Arrow,
};

// Our own interface definitions - NOT exposing Radix types
export interface DropdownEngineRootProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  dir?: 'ltr' | 'rtl';
}

export interface DropdownEngineTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export interface DropdownEnginePortalProps {
  children: ReactNode;
  forceMount?: true;
  container?: HTMLElement;
}

export interface DropdownEngineContentProps extends ComponentPropsWithoutRef<'div'> {
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionPadding?: number | { top?: number; right?: number; bottom?: number; left?: number };
  forceMount?: true;
  loop?: boolean;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onFocusOutside?: (event: FocusEvent) => void;
  onInteractOutside?: (event: Event) => void;
}

export interface DropdownEngineItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  textValue?: string;
}

export interface DropdownEngineCheckboxItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  textValue?: string;
}

export interface DropdownEngineRadioGroupProps extends ComponentPropsWithoutRef<'div'> {
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface DropdownEngineRadioItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  value: string;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  textValue?: string;
}

export interface DropdownEngineLabelProps extends ComponentPropsWithoutRef<'div'> {
  inset?: boolean;
}

export type DropdownEngineSeparatorProps = ComponentPropsWithoutRef<'div'>;
