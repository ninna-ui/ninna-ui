import { cva, type VariantProps } from 'class-variance-authority';

export const accordionRootVariants = cva(
  "flex flex-col",
  {
    variants: {
      variant: {
        outline: "divide-y divide-base-200 border border-base-200 rounded-lg",
        soft:    "gap-2",
        ghost:   "divide-y divide-base-200",
      },
    },
    defaultVariants: { variant: "outline" },
  }
);

export const accordionItemVariants = cva(
  "overflow-hidden",
  {
    variants: {
      variant: {
        outline: "px-4",
        soft:    "bg-base-200/40 rounded-lg px-4",
        ghost:   "",
      },
    },
    defaultVariants: { variant: "outline" },
  }
);

export type AccordionRootVariantsProps = VariantProps<typeof accordionRootVariants>;
export type AccordionItemVariantsProps = VariantProps<typeof accordionItemVariants>;

export const accordionStyles = {
  trigger:      "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 [&[data-state=open]>svg]:rotate-180",
  chevron:      "h-4 w-4 shrink-0 text-base-content/70 transition-transform duration-200",
  content:      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  contentInner: "pb-4 pt-0",
};
