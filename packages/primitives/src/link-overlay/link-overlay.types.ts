import type { AnchorHTMLAttributes } from 'react';

export interface LinkOverlayProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Whether the link opens in a new tab */
  external?: boolean;
}

export interface LinkBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The HTML element to render as */
  as?: 'div' | 'article' | 'section' | 'aside' | 'header' | 'footer' | 'main' | 'nav';
}
