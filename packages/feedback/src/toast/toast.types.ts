import type { ReactNode } from 'react';
import type { Color, ColorVariant } from '@ninna-ui/core';

/** Toast position on screen */
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

/** Toast variant - uses core ColorVariant for consistency */
export type ToastVariant = ColorVariant;

/** Toast data structure for creating toasts */
export interface ToastData {
  /** Unique identifier for the toast */
  id: string;
  /** Toast title */
  title?: ReactNode;
  /** Toast description/message */
  description?: ReactNode;
  /** Color theme */
  color?: Color;
  /** Visual variant */
  variant?: ToastVariant;
  /** Show a spinning loading indicator (used by toast.loading()) */
  isLoading?: boolean;
  /** Duration in milliseconds (0 = persistent) */
  duration?: number;
  /** Whether the toast can be dismissed */
  closable?: boolean;
  /** Custom icon */
  icon?: ReactNode;
  /** Action button configuration */
  action?: {
    label: string;
    onClick: () => void;
    altText?: string;
  };
  /** Callback when toast is closed */
  onClose?: () => void;
  /** Callback when toast opens */
  onOpen?: () => void;
  /** Route this toast to a specific Toaster by its id */
  toasterId?: string;
}

/** Props for creating a new toast */
export type CreateToastOptions = Omit<ToastData, 'id'>;

/** Toast component props */
export interface ToastProps {
  /** Toast data */
  toast: ToastData;
  /** Callback to dismiss the toast */
  onDismiss?: (id: string) => void;
  /** Position of the toaster - used for correct enter/exit animations */
  position?: ToastPosition;
  /** Additional CSS classes */
  className?: string;
}

/** Toaster provider props */
export interface ToasterProps {
  /** Position of toasts on screen */
  position?: ToastPosition;
  /** Maximum number of visible toasts */
  max?: number;
  /** Gap between toasts */
  gap?: number;
  /** Offset from screen edges */
  offset?: string | number;
  /** Pause auto-dismiss on hover */
  pauseOnHover?: boolean;
  /** Unique id - only toasts created with this toasterId will be shown */
  id?: string;
  /** Additional CSS classes for viewport */
  className?: string;
  /** Children (usually not needed) */
  children?: ReactNode;
}

/** Toast context value */
export interface ToastContextValue {
  /** Create a new toast */
  toast: (options: CreateToastOptions) => string;
  /** Dismiss a toast by id, or all if no id provided */
  dismiss: (id?: string) => void;
  /** Dismiss all toasts */
  dismissAll: () => void;
  /** Update an existing toast */
  update: (id: string, options: Partial<CreateToastOptions>) => void;
  /** Promise-based toast - shows loading spinner, then success/error on resolution */
  promise: <T>(
    promise: Promise<T>,
    options: {
      loading: CreateToastOptions | string;
      success: CreateToastOptions | string | ((data: T) => CreateToastOptions | string);
      error: CreateToastOptions | string | ((error: unknown) => CreateToastOptions | string);
    }
  ) => Promise<T>;
}
