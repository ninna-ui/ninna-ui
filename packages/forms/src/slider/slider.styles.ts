import { cva, type VariantProps } from 'class-variance-authority';

export const sliderRootVariants = cva(
  "relative flex touch-none select-none items-center",
  {
    variants: {
      orientation: {
        horizontal: "w-full",
        vertical: "h-full flex-col justify-center py-3",
      },
      size: {
        sm: "h-4",
        md: "h-5",
        lg: "h-6",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      { orientation: "vertical", size: "sm", class: "w-4 h-full" },
      { orientation: "vertical", size: "md", class: "w-5 h-full" },
      { orientation: "vertical", size: "lg", class: "w-6 h-full" },
    ],
    defaultVariants: {
      orientation: "horizontal",
      size: "md",
      disabled: false,
    },
  }
);

export const sliderTrackVariants = cva(
  "relative grow rounded-full bg-base-300 overflow-hidden",
  {
    variants: {
      orientation: {
        horizontal: "w-full",
        vertical: "h-full",
      },
      size: {
        sm: "h-1 w-1",
        md: "h-1.5 w-1.5",
        lg: "h-2 w-2",
      },
    },
    compoundVariants: [
      { orientation: "horizontal", size: "sm", class: "h-1" },
      { orientation: "horizontal", size: "md", class: "h-1.5" },
      { orientation: "horizontal", size: "lg", class: "h-2" },
      { orientation: "vertical", size: "sm", class: "w-1" },
      { orientation: "vertical", size: "md", class: "w-1.5" },
      { orientation: "vertical", size: "lg", class: "w-2" },
    ],
    defaultVariants: {
      orientation: "horizontal",
      size: "md",
    },
  }
);

export const sliderRangeVariants = cva(
  "absolute rounded-full",
  {
    variants: {
      variant: {
        solid: "",
        soft: "opacity-40",
      },
      color: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        accent: "bg-accent",
        neutral: "bg-neutral",
        success: "bg-success",
        danger: "bg-danger",
        warning: "bg-warning",
        info: "bg-info",
      },
      orientation: {
        horizontal: "h-full",
        vertical: "w-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      color: "primary",
      orientation: "horizontal",
    },
  }
);

export const sliderThumbVariants = cva(
  "block rounded-full border-2 bg-base-100 shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none before:absolute before:inset-[-8px] before:content-[''] hover:scale-110 active:scale-95",
  {
    variants: {
      variant: {
        solid: "border-primary",
        soft: "border-primary",
      },
      color: {
        primary: "border-primary focus-visible:ring-primary",
        secondary: "border-secondary focus-visible:ring-secondary",
        accent: "border-accent focus-visible:ring-accent",
        neutral: "border-neutral focus-visible:ring-neutral",
        success: "border-success focus-visible:ring-success",
        danger: "border-danger focus-visible:ring-danger",
        warning: "border-warning focus-visible:ring-warning",
        info: "border-info focus-visible:ring-info",
      },
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      orientation: {
        horizontal: "-translate-x-1/2",
        vertical: "translate-y-1/2",
      },
    },
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
      orientation: "horizontal",
    },
  }
);

export const sliderStyles = {
  wrapper: 'flex flex-col gap-2',
  sliderRow: 'flex items-center gap-3',
  label: 'text-sm font-medium text-base-content/80',
  valueLabel: 'text-sm font-semibold text-base-content tabular-nums min-w-[3rem] text-right',
  marksContainer: 'absolute inset-0 pointer-events-none',
  mark: 'absolute w-1.5 h-1.5 rounded-full bg-base-content/20 -translate-x-1/2 -translate-y-1/2',
  markActive: 'bg-primary ring-1 ring-primary/20',
};

export type SliderRootVariantsProps = VariantProps<typeof sliderRootVariants>;
export type SliderTrackVariantsProps = VariantProps<typeof sliderTrackVariants>;
export type SliderRangeVariantsProps = VariantProps<typeof sliderRangeVariants>;
export type SliderThumbVariantsProps = VariantProps<typeof sliderThumbVariants>;
