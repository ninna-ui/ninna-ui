import { BG_COLORS, BORDER_COLORS } from "@ninna-ui/core";
import type { Color } from "@ninna-ui/core";

/**
 * Slider color variants using core utilities
 */
export const SLIDER_COLORS: Record<Color, { range: string; thumb: string }> = {
  primary: { range: BG_COLORS.primary, thumb: `bg-base-100 ${BORDER_COLORS.primary}` },
  secondary: { range: BG_COLORS.secondary, thumb: `bg-base-100 ${BORDER_COLORS.secondary}` },
  accent: { range: BG_COLORS.accent, thumb: `bg-base-100 ${BORDER_COLORS.accent}` },
  neutral: { range: BG_COLORS.neutral, thumb: `bg-base-100 ${BORDER_COLORS.neutral}` },
  success: { range: BG_COLORS.success, thumb: `bg-base-100 ${BORDER_COLORS.success}` },
  danger: { range: BG_COLORS.danger, thumb: `bg-base-100 ${BORDER_COLORS.danger}` },
  warning: { range: BG_COLORS.warning, thumb: `bg-base-100 ${BORDER_COLORS.warning}` },
  info: { range: BG_COLORS.info, thumb: `bg-base-100 ${BORDER_COLORS.info}` },
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
  thumb: 'block rounded-full border-2 bg-base-100 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 -translate-x-1/2',
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
