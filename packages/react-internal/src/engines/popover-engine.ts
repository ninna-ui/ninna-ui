/**
 * Popover Engine - Radix Popover adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 */

import {
  Root,
  Trigger,
  Anchor,
  Portal,
  Content,
  Close,
  Arrow,
} from '@radix-ui/react-popover';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export const PopoverEngine = {
  Root,
  Trigger,
  Anchor,
  Portal,
  Content,
  Close,
  Arrow,
};

// Our own interface definitions
export interface PopoverEngineRootProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export interface PopoverEngineTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export interface PopoverEngineAnchorProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

export interface PopoverEnginePortalProps {
  children: ReactNode;
  forceMount?: true;
  container?: HTMLElement;
}

export interface PopoverEngineContentProps extends ComponentPropsWithoutRef<'div'> {
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionPadding?: number | { top?: number; right?: number; bottom?: number; left?: number };
  forceMount?: true;
  onOpenAutoFocus?: (event: Event) => void;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onFocusOutside?: (event: FocusEvent) => void;
  onInteractOutside?: (event: Event) => void;
}

export interface PopoverEngineCloseProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export interface PopoverEngineArrowProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  height?: number;
}
