import type { HTMLAttributes } from 'react';
import type { Color, TextSize, TextWeight } from '@ninna-ui/core';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** The HTML element to render */
  as?: 'p' | 'span' | 'div' | 'label' | 'strong' | 'em' | 'small' | 'mark' | 'del' | 'ins' | 'sub' | 'sup';
  
  /** Text size */
  size?: TextSize;
  
  /** Font weight */
  weight?: TextWeight;
  
  /** Text color */
  color?: Color;
  
  /** Text alignment */
  align?: TextAlign;
  
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
  
  /** Maximum number of lines before truncating (requires truncate) */
  lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Whether to use muted/secondary text color */
  muted?: boolean;
  
  /** Whether text should not wrap */
  noWrap?: boolean;
  
  /** Whether to transform text to uppercase */
  uppercase?: boolean;
  
  /** Whether to transform text to lowercase */
  lowercase?: boolean;
  
  /** Whether to capitalize text */
  capitalize?: boolean;
  
  /** Whether to apply italic style */
  italic?: boolean;
  
  /** Whether to apply underline */
  underline?: boolean;
  
  /** Whether to apply line-through (strikethrough) */
  strikethrough?: boolean;
}
