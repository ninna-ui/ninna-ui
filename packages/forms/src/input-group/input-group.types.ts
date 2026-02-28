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
  /** Whether start element allows pointer events */
  startElementPointerEvents?: 'none' | 'auto';
  /** Whether end element allows pointer events */
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
