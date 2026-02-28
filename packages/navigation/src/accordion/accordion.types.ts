import type { ComponentPropsWithoutRef } from 'react';

/** Variant options for the Accordion */
export type AccordionVariant = 'outline' | 'soft' | 'ghost';

/** Props for a single-type Accordion */
export interface AccordionSingleProps extends ComponentPropsWithoutRef<'div'> {
  type: 'single';
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
  /** Visual variant @default 'outline' */
  variant?: AccordionVariant;
}

/** Props for a multiple-type Accordion */
export interface AccordionMultipleProps extends ComponentPropsWithoutRef<'div'> {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  /** Visual variant @default 'outline' */
  variant?: AccordionVariant;
}

/** Combined Accordion props */
export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

/** Props for an Accordion item */
export interface AccordionItemProps extends ComponentPropsWithoutRef<'div'> {
  /** Unique value for this item */
  value: string;
  /** Whether the item is disabled */
  disabled?: boolean;
}

/** Props for an Accordion trigger */
export type AccordionTriggerProps = ComponentPropsWithoutRef<'button'>;

/** Props for Accordion content */
export interface AccordionContentProps extends ComponentPropsWithoutRef<'div'> {
  /** Whether to force mount the content */
  forceMount?: true;
}
