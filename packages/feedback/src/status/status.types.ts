import type { HTMLAttributes, ReactNode } from 'react';
import type { CompactSize } from '@ninna-ui/core';

/** Status value options */
export type StatusValue = 'success' | 'danger' | 'warning' | 'info';

/** Status size - uses core CompactSize for consistency */
export type StatusSize = CompactSize;

/**
 * Props for the Status component
 */
export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Status value that determines the color
   * @default "info"
   */
  value?: StatusValue;

  /**
   * Size of the status indicator
   * @default "md"
   */
  size?: StatusSize;

  /**
   * Label text to display next to the indicator
   */
  children?: ReactNode;
}
