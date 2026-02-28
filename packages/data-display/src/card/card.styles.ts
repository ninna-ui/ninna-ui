import type { CardVariant } from './card.types';

export const cardStyles = {
  root: 'rounded-xl text-base-content',
  header: 'flex flex-col gap-1.5 p-6',
  body: 'p-6 pt-0',
  footer: 'flex items-center p-6 pt-0',
  title: 'text-lg font-semibold leading-none tracking-tight',
  description: 'text-sm text-base-content/70',
  interactive: 'cursor-pointer transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
};

export const CARD_VARIANTS: Record<CardVariant, string> = {
  outline: 'border border-base-200 bg-base-100 shadow-sm',
  elevated: 'bg-base-100 shadow-md',
  filled: 'bg-base-200/50',
  ghost: '',
};
