import { cva, type VariantProps } from 'class-variance-authority';

export const fieldLabelVariants = cva(
  "font-medium text-base-content/80",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export const fieldHelperVariants = cva(
  "text-base-content/70",
  {
    variants: {
      size: {
        xs: "text-xs mt-1",
        sm: "text-xs mt-1",
        md: "text-sm mt-1.5",
        lg: "text-sm mt-2",
        xl: "text-base mt-2",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export type FieldLabelVariantsProps = VariantProps<typeof fieldLabelVariants>;
export type FieldHelperVariantsProps = VariantProps<typeof fieldHelperVariants>;

export const fieldStyles = {
  container: "w-full",
  labelRow:  "flex items-center justify-between mb-2",
  required:  "text-danger ml-0.5",
  optional:  "text-sm text-base-content/70",
  errorText: "text-sm text-danger mt-1.5",
};
