import type { ModalSize } from './modal.types';

export const modalStyles = {
  overlay: [
    'fixed inset-0 z-50',
    'bg-black/60 backdrop-blur-sm',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
  ],
  content: [
    'fixed z-50',
    'bg-base-100 rounded-xl shadow-xl',
    'border border-base-200',
    'focus:outline-none',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'max-h-[85vh] overflow-y-auto',
  ],
  contentCentered: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  contentTop: 'left-1/2 top-[10vh] -translate-x-1/2',
  header: 'flex items-center justify-between px-6 pt-6 pb-2',
  body: 'px-6 py-4',
  footer: 'flex items-center justify-end gap-2 px-6 pt-2 pb-6',
  close: [
    'absolute top-3 right-3',
    'inline-flex items-center justify-center rounded-md p-1.5',
    'text-base-content/70 hover:text-base-content hover:bg-base-200',
    'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
  ],
};

export const MODAL_SIZES: Record<ModalSize, string> = {
  xs: 'w-full max-w-xs',
  sm: 'w-full max-w-sm',
  md: 'w-full max-w-md',
  lg: 'w-full max-w-lg',
  xl: 'w-full max-w-xl',
  full: 'w-[calc(100%-2rem)] h-[calc(100%-2rem)] max-w-none max-h-none',
};
