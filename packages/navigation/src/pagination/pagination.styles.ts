import { cva, type VariantProps } from 'class-variance-authority';

export const paginationLinkVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors hover:bg-base-200 hover:text-base-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 min-w-8 px-2 text-xs",
        md: "h-9 min-w-9 px-3 text-sm",
        lg: "h-10 min-w-10 px-3.5 text-base",
      },
      active: {
        true:  "bg-primary text-primary-content hover:bg-primary/90",
        false: "",
      },
    },
    defaultVariants: { size: "md", active: false },
  }
);

export type PaginationLinkVariantsProps = VariantProps<typeof paginationLinkVariants>;

export const paginationStyles = {
  nav:        "mx-auto flex w-full justify-center",
  content:    "flex flex-row items-center gap-1",
  item:       "inline-flex",
  previous:   "gap-1 pl-2.5 pr-3",
  next:       "gap-1 pl-3 pr-2.5",
  linkActive: "bg-primary text-primary-content hover:bg-primary/90",
  ellipsis:   "flex h-9 w-9 items-center justify-center text-base-content/70",
};
