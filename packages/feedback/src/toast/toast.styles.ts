/**
 * Toast styles
 */

import type { ToastType, ToastPosition, ToastVariant } from './toast.types';

/** Base toast styles */
export const toastStyles = {
  base: [
    'group pointer-events-auto relative flex w-full items-center justify-between',
    'space-x-4 overflow-hidden rounded-lg border p-4 shadow-lg',
    'transition-all duration-300 ease-out',
    'motion-reduce:transition-none',
  ].join(' '),
  
  entering: 'animate-in fade-in-0 slide-in-from-bottom-full',
  
  exiting: 'animate-out fade-out-0 slide-out-to-bottom-full',

  enteringTop: 'animate-in fade-in-0 slide-in-from-top-full',

  exitingTop: 'animate-out fade-out-0 slide-out-to-top-full',

  enteringLeft: 'animate-in fade-in-0 slide-in-from-left-full',

  exitingLeft: 'animate-out fade-out-0 slide-out-to-left-full',

  enteringRight: 'animate-in fade-in-0 slide-in-from-right-full',

  exitingRight: 'animate-out fade-out-0 slide-out-to-right-full',

  enteringCenter: 'animate-in fade-in-0 zoom-in-95',

  exitingCenter: 'animate-out fade-out-0 zoom-out-95',
  
  content: 'flex-1 flex flex-col gap-1',
  
  title: 'text-sm font-semibold',
  
  description: 'text-sm opacity-90',
  
  closeButton: [
    'absolute right-2 top-2 rounded-md p-1',
    'opacity-0 transition-opacity',
    'hover:opacity-100 group-hover:opacity-100',
    'focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
  ].join(' '),
  
  actionButton: [
    'inline-flex items-center justify-center rounded-md px-3 py-1.5',
    'text-sm font-medium transition-colors',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
  ].join(' '),
  
  icon: 'h-5 w-5 shrink-0',
  
  loadingIcon: 'h-5 w-5 shrink-0 animate-spin',
};

/** Toast variant styles */
export const toastVariants: Record<ToastVariant, Record<ToastType, string>> = {
  solid: {
    default: 'bg-base-content text-base-100 border-base-content',
    success: 'bg-success text-success-content border-success',
    danger: 'bg-danger text-danger-content border-danger',
    warning: 'bg-warning text-warning-content border-warning',
    info: 'bg-info text-info-content border-info',
    loading: 'bg-base-content text-base-100 border-base-content',
  },
  soft: {
    default: 'bg-base-100 text-base-content border-base-200',
    success: 'bg-success/10 text-success border-success/20',
    danger: 'bg-danger/10 text-danger border-danger/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    info: 'bg-info/10 text-info border-info/20',
    loading: 'bg-base-100 text-base-content border-base-200',
  },
  outline: {
    default: 'bg-base-100 text-base-content border-base-300',
    success: 'bg-base-100 text-success border-success',
    danger: 'bg-base-100 text-danger border-danger',
    warning: 'bg-base-100 text-warning border-warning',
    info: 'bg-base-100 text-info border-info',
    loading: 'bg-base-100 text-base-content border-base-300',
  },
};

/** Toast icon colors */
export const toastIconColors: Record<ToastType, string> = {
  default: 'text-current',
  success: 'text-success',
  danger: 'text-danger',
  warning: 'text-warning',
  info: 'text-info',
  loading: 'text-current',
};

/** Viewport position styles */
export const viewportPositions: Record<ToastPosition, string> = {
  'top-left': 'top-0 left-0 items-start',
  'top-center': 'top-0 left-1/2 -translate-x-1/2 items-center',
  'top-right': 'top-0 right-0 items-end',
  'bottom-left': 'bottom-0 left-0 items-start',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-0 right-0 items-end',
};

/** Viewport flex direction by position (top = col, bottom = col-reverse for stacking order) */
export const viewportDirections: Record<ToastPosition, string> = {
  'top-left': 'flex-col',
  'top-center': 'flex-col',
  'top-right': 'flex-col',
  'bottom-left': 'flex-col-reverse',
  'bottom-center': 'flex-col-reverse',
  'bottom-right': 'flex-col-reverse',
};

/** Viewport base styles */
export const viewportStyles = {
  base: 'fixed z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]',
};
