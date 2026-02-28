import type { CompactSize } from '@ninna-ui/core';
import type { TabsVariant } from './tabs.types';

export const tabsStyles = {
  root: 'flex flex-col',
  rootVertical: 'flex-row',
  list: {
    base: 'flex items-center',
    horizontal: 'flex-row',
    vertical: 'flex-col',
  },
  trigger: {
    base: [
      'inline-flex items-center justify-center whitespace-nowrap',
      'font-medium transition-all',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
  },
  content: [
    'mt-2 focus:outline-none',
    'data-[state=inactive]:hidden',
  ],
};

export const TABS_LIST_VARIANTS: Record<TabsVariant, string> = {
  line: 'border-b border-base-200 gap-0',
  enclosed: 'bg-base-200/50 rounded-lg p-1 gap-1',
  soft: 'gap-1',
  outline: 'border border-base-200 rounded-lg p-1 gap-1',
};

export const TABS_TRIGGER_VARIANTS: Record<TabsVariant, string> = {
  line: 'border-b-2 border-transparent px-4 pb-2.5 pt-2 data-[state=active]:border-primary data-[state=active]:text-primary hover:text-base-content/80',
  enclosed: 'rounded-md px-3 py-1.5 data-[state=active]:bg-base-100 data-[state=active]:shadow-sm data-[state=active]:text-base-content text-base-content/70',
  soft: 'rounded-md px-3 py-1.5 data-[state=active]:bg-primary/10 data-[state=active]:text-primary text-base-content/70 hover:bg-base-200/50',
  outline: 'rounded-md px-3 py-1.5 border border-transparent data-[state=active]:bg-base-100 data-[state=active]:border-base-200 data-[state=active]:shadow-sm text-base-content/70',
};

export const TABS_TRIGGER_SIZES: Record<CompactSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};
