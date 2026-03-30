import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import type { CompactSize } from '@ninna-ui/core';

/** Props for the Stat root component */
export type StatProps = ComponentPropsWithoutRef<'dl'>;

/** Props for Stat label */
export type StatLabelProps = ComponentPropsWithoutRef<'dt'>;

/** Props for Stat value */
export interface StatValueProps extends ComponentPropsWithoutRef<'dd'> {
  /** Size of the value @default 'md' */
  size?: CompactSize;
}

/** Props for Stat help text */
export type StatHelpTextProps = ComponentPropsWithoutRef<'p'>;

/** Props for Stat trend indicator */
export interface StatTrendProps extends ComponentPropsWithoutRef<'span'> {
  /** Trend direction */
  direction: 'up' | 'down' | 'neutral';
  /** Whether a positive trend is good @default true */
  positiveIsGood?: boolean;
}

/** Props for Stat icon */
export interface StatIconProps extends ComponentPropsWithoutRef<'div'> {
  /** Color theme for the icon background @default 'primary' */
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'danger' | 'warning' | 'info';
  children: ReactNode;
}
