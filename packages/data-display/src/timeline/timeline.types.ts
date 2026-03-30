import type { ReactNode, ComponentPropsWithoutRef } from 'react';

/** Props for the Timeline root component */
export interface TimelineProps extends ComponentPropsWithoutRef<'div'> {
  /** Orientation @default 'vertical' */
  orientation?: 'vertical' | 'horizontal';
}

/** Props for a Timeline item */
export type TimelineItemProps = ComponentPropsWithoutRef<'div'>;

/** Props for the Timeline indicator (dot/icon) */
export interface TimelineIndicatorProps extends ComponentPropsWithoutRef<'div'> {
  /** Custom icon to show instead of a dot */
  icon?: ReactNode;
  /** Status color */
  status?: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'danger' | 'warning' | 'info';
}

/** Props for Timeline content */
export type TimelineContentProps = ComponentPropsWithoutRef<'div'>;

/** Props for Timeline connector line */
export type TimelineConnectorProps = ComponentPropsWithoutRef<'div'>;

/** Props for Timeline heading */
export type TimelineHeadingProps = ComponentPropsWithoutRef<'h3'>;

/** Props for Timeline description */
export type TimelineDescriptionProps = ComponentPropsWithoutRef<'p'>;

/** Props for Timeline time label */
export type TimelineTimeProps = ComponentPropsWithoutRef<'time'>;
