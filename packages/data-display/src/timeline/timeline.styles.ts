import type { Color } from '@ninna-ui/core';

export const timelineStyles = {
  root: 'relative flex flex-col gap-0',
  rootHorizontal: 'flex-row overflow-x-auto',
  item: 'relative flex gap-4 pb-8 last:pb-0 group/timeline-item',
  itemHorizontal: 'flex-col items-center',
  indicator: {
    base: 'relative z-10 flex h-3 w-3 shrink-0 items-center justify-center rounded-full mt-1.5 transition-colors duration-200',
    withIcon: 'h-8 w-8 mt-0',
    default: 'bg-neutral', // Follow button/badge default
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    neutral: 'bg-neutral',
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
  },
  // Connector now starts from top-0 and ends at bottom-0 of the item to ensure continuity.
  // We use a group-based selector or a specific mt offset to handle the first item's top part in CSS if needed,
  // but simpler is to use top-0 and z-0, then for first-child we adjust with a utility or just let it start at dot center.
  // Actually, absolute inset-0 style pattern is better.
  connector: 'absolute left-[5px] top-0 bottom-0 w-0.5 bg-base-200 z-0 group-first/timeline-item:top-3 group-last/timeline-item:bottom-auto group-last/timeline-item:h-3',
  connectorHorizontal: 'static h-0.5 w-full',
  content: 'flex-1 min-w-0 pt-0',
  heading: 'text-sm font-semibold text-base-content leading-6',
  description: 'text-sm text-base-content/70 mt-1',
  time: 'text-xs text-base-content/70 mt-1',
};

export const TIMELINE_INDICATOR_STATUS: Record<Color, string> = {
  primary: timelineStyles.indicator.primary,
  secondary: timelineStyles.indicator.secondary,
  accent: timelineStyles.indicator.accent,
  neutral: timelineStyles.indicator.neutral,
  success: timelineStyles.indicator.success,
  danger: timelineStyles.indicator.danger,
  warning: timelineStyles.indicator.warning,
  info: timelineStyles.indicator.info,
};
