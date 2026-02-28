import type { CompactSize } from '@ninna-ui/core';

export const paginationStyles = {
  nav: 'mx-auto flex w-full justify-center',
  content: 'flex flex-row items-center gap-1',
  item: '',
  link: [
    'inline-flex items-center justify-center rounded-md font-medium',
    'transition-colors',
    'hover:bg-base-200 hover:text-base-content',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  linkActive: 'bg-primary text-primary-content hover:bg-primary/90',
  previous: 'gap-1 pl-2.5',
  next: 'gap-1 pr-2.5',
  ellipsis: 'flex h-9 w-9 items-center justify-center text-base-content/70',
};

export const PAGINATION_SIZES: Record<CompactSize, string> = {
  sm: 'h-8 min-w-8 px-2 text-xs',
  md: 'h-9 min-w-9 px-3 text-sm',
  lg: 'h-10 min-w-10 px-3.5 text-base',
};
