import { cva, type VariantProps } from 'class-variance-authority';
import type { ToastPosition } from './toast.types';
import type { Color } from '@ninna-ui/core';

export const toastVariants = cva(
  "group pointer-events-auto relative flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 overflow-hidden rounded-lg border p-4 shadow-lg transition-all duration-300 ease-out motion-reduce:transition-none",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "",
      },
      color: {
        primary: "",
        secondary: "",
        accent: "",
        neutral: "",
        success: "",
        danger: "",
        warning: "",
        info: "",
      },
    },
    compoundVariants: [
      // solid
      { variant: "solid", color: "primary",   class: "bg-primary text-primary-content border-primary" },
      { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-content border-secondary" },
      { variant: "solid", color: "accent",    class: "bg-accent text-accent-content border-accent" },
      { variant: "solid", color: "neutral",   class: "bg-neutral text-neutral-content border-neutral" },
      { variant: "solid", color: "success",   class: "bg-success text-success-content border-success" },
      { variant: "solid", color: "danger",    class: "bg-danger text-danger-content border-danger" },
      { variant: "solid", color: "warning",   class: "bg-warning text-warning-content border-warning" },
      { variant: "solid", color: "info",      class: "bg-info text-info-content border-info" },
      // soft - tinted background, colored text and border (matches button soft pattern)
      { variant: "soft", color: "primary",   class: "bg-primary/10 text-primary border-primary/20" },
      { variant: "soft", color: "secondary", class: "bg-secondary/10 text-secondary border-secondary/20" },
      { variant: "soft", color: "accent",    class: "bg-accent/10 text-accent border-accent/20" },
      { variant: "soft", color: "neutral",   class: "bg-neutral/10 text-neutral border-neutral/20" },
      { variant: "soft", color: "success",   class: "bg-success/10 text-success border-success/20" },
      { variant: "soft", color: "danger",    class: "bg-danger/10 text-danger border-danger/20" },
      { variant: "soft", color: "warning",   class: "bg-warning/10 text-warning border-warning/20" },
      { variant: "soft", color: "info",      class: "bg-info/10 text-info border-info/20" },
      // outline - transparent bg, colored text and border
      { variant: "outline", color: "primary",   class: "bg-transparent text-primary border-primary" },
      { variant: "outline", color: "secondary", class: "bg-transparent text-secondary border-secondary" },
      { variant: "outline", color: "accent",    class: "bg-transparent text-accent border-accent" },
      { variant: "outline", color: "neutral",   class: "bg-transparent text-neutral border-neutral" },
      { variant: "outline", color: "success",   class: "bg-transparent text-success border-success" },
      { variant: "outline", color: "danger",    class: "bg-transparent text-danger border-danger" },
      { variant: "outline", color: "warning",   class: "bg-transparent text-warning border-warning" },
      { variant: "outline", color: "info",      class: "bg-transparent text-info border-info" },
    ],
    defaultVariants: { variant: "soft", color: "neutral" },
  }
);

export type ToastVariantsProps = VariantProps<typeof toastVariants>;

export const TOAST_ICON_COLORS: Record<Color, string> = {
  primary:   'text-primary',
  secondary: 'text-secondary',
  accent:    'text-accent',
  neutral:   'text-neutral',
  success:   'text-success',
  danger:    'text-danger',
  warning:   'text-warning',
  info:      'text-info',
};

export const toastStyles = {
  content: 'flex-1 flex flex-col gap-1',
  title: 'text-sm font-semibold',
  description: 'text-sm opacity-90',
  closeButton: 'absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity hover:opacity-100 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
  actionButton: 'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
  icon: 'h-5 w-5 shrink-0',
  loadingIcon: 'h-5 w-5 shrink-0 animate-spin',
};

export const TOAST_ANIMATIONS = {
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
};

export const viewportPositions: Record<ToastPosition, string> = {
  'top-left': 'top-0 left-0 items-start',
  'top-center': 'top-0 left-1/2 -translate-x-1/2 items-center',
  'top-right': 'top-0 right-0 items-end',
  'bottom-left': 'bottom-0 left-0 items-start',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-0 right-0 items-end',
};

export const viewportDirections: Record<ToastPosition, string> = {
  'top-left': 'flex-col',
  'top-center': 'flex-col',
  'top-right': 'flex-col',
  'bottom-left': 'flex-col-reverse',
  'bottom-center': 'flex-col-reverse',
  'bottom-right': 'flex-col-reverse',
};

export const VIEWPORT_BASE_CLASS = 'fixed z-[100] flex pointer-events-none max-h-screen w-full p-4 md:max-w-[420px]';
