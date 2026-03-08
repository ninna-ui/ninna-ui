import { cva, type VariantProps } from 'class-variance-authority';

export const statusIndicatorVariants = cva(
  "rounded-full shrink-0",
  {
    variants: {
      value: {
        success: "bg-success",
        danger:  "bg-danger",
        warning: "bg-warning",
        info:    "bg-info",
      },
      size: {
        sm: "h-2 w-2",
        md: "h-2.5 w-2.5",
        lg: "h-3 w-3",
      },
    },
    defaultVariants: {
      value: "info",
      size: "md",
    },
  }
);

export const statusLabelVariants = cva(
  "",
  {
    variants: {
      value: {
        success: "text-success",
        danger:  "text-danger",
        warning: "text-warning",
        info:    "text-info",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      value: "info",
      size: "md",
    },
  }
);

export type StatusIndicatorVariantsProps = VariantProps<typeof statusIndicatorVariants>;
export type StatusLabelVariantsProps = VariantProps<typeof statusLabelVariants>;

export const STATUS_ROOT_CLASS = "inline-flex items-center gap-2";
