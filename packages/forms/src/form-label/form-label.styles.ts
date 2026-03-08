import { cva, type VariantProps } from 'class-variance-authority';

export const formLabelVariants = cva(
  "block font-medium text-base-content",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export type FormLabelVariantsProps = VariantProps<typeof formLabelVariants>;
