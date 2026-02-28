import type { AccordionVariant } from './accordion.types';

export const accordionStyles = {
  root: 'flex flex-col',
  item: 'overflow-hidden',
  trigger: [
    'flex flex-1 items-center justify-between py-4 text-left font-medium',
    'transition-all hover:underline',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
    '[&[data-state=open]>svg]:rotate-180',
  ],
  chevron: 'h-4 w-4 shrink-0 text-base-content/70 transition-transform duration-200',
  content: [
    'overflow-hidden text-sm',
    'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  ],
  contentInner: 'pb-4 pt-0',
};

export const ACCORDION_VARIANTS: Record<AccordionVariant, { root: string; item: string }> = {
  outline: {
    root: 'divide-y divide-base-200 border border-base-200 rounded-lg',
    item: 'px-4',
  },
  soft: {
    root: 'gap-2',
    item: 'bg-base-200/40 rounded-lg px-4',
  },
  ghost: {
    root: 'divide-y divide-base-200',
    item: '',
  },
};
