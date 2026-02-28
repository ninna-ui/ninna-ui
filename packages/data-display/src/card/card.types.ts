import type { ComponentPropsWithoutRef } from 'react';

/** Variant options for the Card */
export type CardVariant = 'outline' | 'elevated' | 'filled' | 'ghost';

/** Props for the Card root component */
export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  /** Visual variant @default 'outline' */
  variant?: CardVariant;
  /** Whether the card is interactive (hover/focus styles) */
  interactive?: boolean;
}

/** Props for Card header */
export type CardHeaderProps = ComponentPropsWithoutRef<'div'>;

/** Props for Card body/content */
export type CardBodyProps = ComponentPropsWithoutRef<'div'>;

/** Props for Card footer */
export type CardFooterProps = ComponentPropsWithoutRef<'div'>;

/** Props for Card title */
export type CardTitleProps = ComponentPropsWithoutRef<'h3'>;

/** Props for Card description */
export type CardDescriptionProps = ComponentPropsWithoutRef<'p'>;
