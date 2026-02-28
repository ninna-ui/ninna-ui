import type { HTMLAttributes } from 'react';
import type { Color, TextSize, TextWeight, HeadingLevel } from '@ninna-ui/core';

export type HeadingAlign = 'left' | 'center' | 'right';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** The heading level (h1-h6) - determines semantic HTML element */
  as?: HeadingLevel;
  
  /** Override the default size for the heading level */
  size?: TextSize;
  
  /** Font weight override */
  weight?: TextWeight;
  
  /** Text color */
  color?: Color;
  
  /** Text alignment */
  align?: HeadingAlign;
  
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
  
  /** Maximum number of lines before truncating */
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Whether text should not wrap */
  noWrap?: boolean;
}
