import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type { Color, TextSize } from '@ninna-ui/core';

export type LinkUnderline = 'always' | 'hover' | 'none';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Text size - matches Text component sizes */
  size?: TextSize;

  /** Color variant */
  color?: Color;
  
  /** Underline behavior */
  underline?: LinkUnderline;
  
  /** Whether the link opens in a new tab (adds target="_blank" and rel="noopener noreferrer") */
  external?: boolean;
  
  /** Whether to show an external link icon */
  showExternalIcon?: boolean;
  
  /** Custom external icon */
  externalIcon?: ReactNode;
}
