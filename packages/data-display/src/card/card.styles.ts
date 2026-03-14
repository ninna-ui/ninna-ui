import { cva, type VariantProps } from 'class-variance-authority';

export const cardVariants = cva(
  "rounded-xl text-base-content",
  {
    variants: {
      variant: {
        outline:  "border border-base-200 bg-base-100 shadow-sm",
        elevated: "bg-base-100 shadow-md",
        filled:   "bg-base-200/50",
        ghost:    "",
      },
      interactive: {
        true:  "cursor-pointer transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        false: "",
      },
    },
    defaultVariants: { variant: "outline", interactive: false },
  }
);

export type CardVariantsProps = VariantProps<typeof cardVariants>;

export const cardStyles = {
  header:      "flex flex-col gap-1.5 p-4 sm:p-6",
  body:        "p-4 sm:p-6 pt-0",
  footer:      "flex items-center p-4 sm:p-6 pt-0",
  title:       "text-lg font-semibold leading-none tracking-tight",
  description: "text-sm text-base-content/70",
};
