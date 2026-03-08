import { cva, type VariantProps } from 'class-variance-authority';

export const emptyStateVariants = cva(
  "flex flex-col items-center justify-center text-center",
  {
    variants: {
      size: {
        sm: "py-6 px-4",
        md: "py-10 px-6",
        lg: "py-16 px-8",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export const emptyStateIconContainerVariants = cva(
  "flex items-center justify-center rounded-full bg-base-100 text-base-content/70 mb-4",
  {
    variants: {
      size: {
        sm: "w-10 h-10",
        md: "w-14 h-14",
        lg: "w-20 h-20",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export const emptyStateTitleVariants = cva(
  "font-semibold text-base-content",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export const emptyStateDescriptionVariants = cva(
  "text-base-content/70 mt-1",
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

export type EmptyStateVariantsProps = VariantProps<typeof emptyStateVariants>;

export const EMPTY_STATE_ICON_SIZES: Record<import('@ninna-ui/core').CompactSize, string> = {
  sm: "w-5 h-5",
  md: "w-7 h-7",
  lg: "w-10 h-10",
};

export const emptyStateStyles = {
  action:   "mt-4",
  children: "mt-4",
};
