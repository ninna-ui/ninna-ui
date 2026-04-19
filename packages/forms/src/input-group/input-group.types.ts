import type { ReactNode, HTMLAttributes } from 'react';
import type { Size } from '@ninna-ui/core';

/**
 * InputGroup props
 */
export interface InputGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Size of the input group - passed to child elements */
  size?: Size;
  /** Element to display at the start of the input (inside border) */
  startElement?: ReactNode;
  /** Element to display at the end of the input (inside border) */
  endElement?: ReactNode;
  /**
   * Override pointer-events behaviour for the start slot.
   *
   * - `undefined` (default): smart — wrapper is inert, but interactive
   *   descendants (`button`, `a`, `input`, `[role="button"]`) receive clicks.
   * - `'auto'`: the entire slot receives pointer events.
   * - `'none'`: the entire slot (including interactive descendants) is inert.
   */
  startElementPointerEvents?: 'none' | 'auto';
  /** See {@link InputGroupProps.startElementPointerEvents}. */
  endElementPointerEvents?: 'none' | 'auto';
  /** Children (typically Input component) */
  children: ReactNode;
}

/**
 * InputAddon props
 */
export interface InputAddonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Size of the addon */
  size?: Size;
  /** Placement of the addon */
  placement?: 'start' | 'end';
  /** Addon content */
  children: ReactNode;
}
