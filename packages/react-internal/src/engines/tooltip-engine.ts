/**
 * Tooltip Engine - Radix Tooltip adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 * Define our own interfaces that mirror the required props
 */

import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from '@radix-ui/react-tooltip';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export const TooltipEngine = {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
};

// Our own interface definitions - NOT exposing Radix types
export interface TooltipEngineProviderProps {
  children: ReactNode;
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
}

export interface TooltipEngineRootProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

export interface TooltipEngineTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean;
}

export interface TooltipEnginePortalProps {
  children: ReactNode;
  forceMount?: true;
  container?: HTMLElement;
}

export interface TooltipEngineContentProps extends ComponentPropsWithoutRef<'div'> {
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionBoundary?: Element | Element[] | null;
  collisionPadding?: number | { top?: number; right?: number; bottom?: number; left?: number };
  arrowPadding?: number;
  sticky?: 'partial' | 'always';
  hideWhenDetached?: boolean;
  forceMount?: true;
}

export interface TooltipEngineArrowProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  height?: number;
}
