import { cva, type VariantProps } from 'class-variance-authority';

export const formGroupContentVariants = cva(
  "flex",
  {
    variants: {
      orientation: {
        vertical:   "flex-col",
        horizontal: "flex-row flex-wrap items-start",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    compoundVariants: [
      { orientation: "vertical",   size: "sm", class: "gap-2" },
      { orientation: "vertical",   size: "md", class: "gap-4" },
      { orientation: "vertical",   size: "lg", class: "gap-6" },
      { orientation: "horizontal", size: "sm", class: "gap-4" },
      { orientation: "horizontal", size: "md", class: "gap-6" },
      { orientation: "horizontal", size: "lg", class: "gap-8" },
    ],
    defaultVariants: { orientation: "vertical", size: "md" },
  }
);

export type FormGroupContentVariantsProps = VariantProps<typeof formGroupContentVariants>;

export const formGroupStyles = {
  fieldset:    "w-full border-0 p-0 m-0",
  legend:      "text-lg font-semibold text-base-content mb-2",
  description: "text-sm text-base-content/80 mb-4",
};
