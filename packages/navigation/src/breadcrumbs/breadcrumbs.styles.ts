import type { CompactSize } from '@ninna-ui/core';

export const breadcrumbsStyles = {
  nav: '',
  list: 'flex flex-wrap items-center gap-1.5',
  item: 'inline-flex items-center gap-1.5',
  link: [
    'inline-flex items-center text-base-content/70 transition-colors',
    'hover:text-base-content',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-sm',
  ],
  linkCurrent: 'text-base-content font-medium pointer-events-none',
  separator: 'text-base-content/70 select-none',
  ellipsis: 'flex h-6 w-6 items-center justify-center text-base-content/70',
};

export const BREADCRUMBS_SIZES: Record<CompactSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};
