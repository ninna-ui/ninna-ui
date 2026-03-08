import { cva, type VariantProps } from 'class-variance-authority';

export const breadcrumbsVariants = cva(
  "flex flex-wrap items-center gap-1.5 break-words text-base-content/70 sm:gap-2.5",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export type BreadcrumbsVariantsProps = VariantProps<typeof breadcrumbsVariants>;

export const breadcrumbsStyles = {
  list:        "flex flex-wrap items-center gap-1.5 sm:gap-2.5",
  item:        "inline-flex items-center gap-1.5",
  link:        "inline-flex items-center text-base-content/70 hover:text-base-content transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-sm",
  currentLink: "text-base-content font-medium pointer-events-none",
  separator:   "text-base-content/70 select-none",
  ellipsis:    "flex h-6 w-6 items-center justify-center text-base-content/70",
};
