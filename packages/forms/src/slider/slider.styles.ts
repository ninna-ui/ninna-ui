import type { Color } from '@ninna-ui/core';

export const SLIDER_RANGE_COLORS: Record<Color, string> = {
  primary:   "bg-primary",
  secondary: "bg-secondary",
  accent:    "bg-accent",
  neutral:   "bg-neutral",
  success:   "bg-success",
  danger:    "bg-danger",
  warning:   "bg-warning",
  info:      "bg-info",
};

export const SLIDER_THUMB_COLORS: Record<Color, string> = {
  primary:   "bg-base-100 border-primary",
  secondary: "bg-base-100 border-secondary",
  accent:    "bg-base-100 border-accent",
  neutral:   "bg-base-100 border-neutral",
  success:   "bg-base-100 border-success",
  danger:    "bg-base-100 border-danger",
  warning:   "bg-base-100 border-warning",
  info:      "bg-base-100 border-info",
};

export const SLIDER_SIZES = {
  sm: { root: "h-4", track: "h-1", thumb: "h-4 w-4" },
  md: { root: "h-5", track: "h-2", thumb: "h-5 w-5" },
  lg: { root: "h-6", track: "h-3", thumb: "h-6 w-6" },
};

export const sliderStyles = {
  root: 'relative flex touch-none select-none',
  rootHorizontal: 'w-full items-center',
  rootVertical: 'h-full flex-col items-center',
  track: 'relative grow rounded-full bg-base-200',
  trackHorizontal: 'h-2 w-full',
  trackVertical: 'w-2 h-full',
  range: 'absolute rounded-full',
  rangeHorizontal: 'h-full',
  rangeVertical: 'w-full',
  thumb: 'relative block rounded-full border-2 bg-base-100 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 -translate-x-1/2 before:absolute before:inset-[-8px] before:content-[""]',
  thumbVertical: '!translate-x-0 -translate-y-1/2',
  label: 'text-sm font-medium text-base-content/80 mb-2',
  valueLabel: 'text-sm text-base-content/80 ml-2',
  wrapper: 'flex flex-col',
  sliderRow: 'flex items-center',
  
  // Marks container
  marksContainer: 'absolute inset-0 pointer-events-none',
  marksContainerHorizontal: 'flex items-center',
  marksContainerVertical: 'flex flex-col justify-between',
  
  // Individual mark
  mark: 'absolute w-1 h-1 rounded-full bg-base-content/50',
  markHorizontal: 'top-1/2 -translate-y-1/2 -translate-x-1/2',
  markVertical: 'left-1/2 -translate-x-1/2 -translate-y-1/2',
};
