/**
 * Dialog Engine - Radix Dialog adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 * Define our own interfaces that mirror the required props
 */

import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from '@radix-ui/react-dialog';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export const DialogEngine = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
};

// Our own interface definitions - NOT exposing Radix types
export interface DialogEngineRootProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export interface DialogEngineTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export interface DialogEnginePortalProps {
  children: ReactNode;
  forceMount?: true;
  container?: HTMLElement;
}

export interface DialogEngineOverlayProps extends ComponentPropsWithoutRef<'div'> {
  forceMount?: true;
}

export interface DialogEngineContentProps extends ComponentPropsWithoutRef<'div'> {
  forceMount?: true;
  onOpenAutoFocus?: (event: Event) => void;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: PointerEvent) => void;
  onInteractOutside?: (event: Event) => void;
}

export type DialogEngineTitleProps = ComponentPropsWithoutRef<'h2'>;

export type DialogEngineDescriptionProps = ComponentPropsWithoutRef<'p'>;

export interface DialogEngineCloseProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}
