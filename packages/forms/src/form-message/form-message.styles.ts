import { cva, type VariantProps } from 'class-variance-authority';

export const formMessageVariants = cva(
  "",
  {
    variants: {
      type: {
        error:   "text-danger",
        success: "text-success",
        warning: "text-warning",
        hint:    "text-base-content/70",
      },
      size: {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-sm",
        xl: "text-base",
      },
    },
    defaultVariants: { type: "hint", size: "md" },
  }
);

export type FormMessageVariantsProps = VariantProps<typeof formMessageVariants>;
