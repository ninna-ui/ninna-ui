import { cva, type VariantProps } from 'class-variance-authority';

export const stepperIndicatorVariants = cva(
  "flex items-center justify-center rounded-full font-medium transition-colors shrink-0 z-10 isolate relative",
  {
    variants: {
      status: {
        complete:  "",
        current:   "bg-base-100",
        upcoming:  "border-2 border-base-300 bg-base-100 text-base-content/70",
      },
      color: {
        primary:   "",
        secondary: "",
        accent:    "",
        neutral:   "",
        success:   "",
        danger:    "",
        warning:   "",
        info:      "",
      },
      size: {
        sm: "h-7 w-7 text-xs",
        md: "h-9 w-9 text-sm",
        lg: "h-11 w-11 text-base",
      },
    },
    compoundVariants: [
      // Complete
      { status: "complete", color: "primary",   class: "bg-primary text-primary-content" },
      { status: "complete", color: "secondary", class: "bg-secondary text-secondary-content" },
      { status: "complete", color: "accent",    class: "bg-accent text-accent-content" },
      { status: "complete", color: "neutral",   class: "bg-neutral text-neutral-content" },
      { status: "complete", color: "success",   class: "bg-success text-success-content" },
      { status: "complete", color: "danger",    class: "bg-danger text-danger-content" },
      { status: "complete", color: "warning",   class: "bg-warning text-warning-content" },
      { status: "complete", color: "info",      class: "bg-info text-info-content" },
      
      // Current
      { status: "current", color: "primary",   class: "border-2 border-primary text-primary" },
      { status: "current", color: "secondary", class: "border-2 border-secondary text-secondary" },
      { status: "current", color: "accent",    class: "border-2 border-accent text-accent" },
      { status: "current", color: "neutral",   class: "border-2 border-neutral text-neutral" },
      { status: "current", color: "success",   class: "border-2 border-success text-success" },
      { status: "current", color: "danger",    class: "border-2 border-danger text-danger" },
      { status: "current", color: "warning",   class: "border-2 border-warning text-warning" },
      { status: "current", color: "info",      class: "border-2 border-info text-info" },
    ],
    defaultVariants: { status: "upcoming", size: "md" },
  }
);

export type StepperIndicatorVariantsProps = VariantProps<typeof stepperIndicatorVariants>;

export const stepperStyles = {
  root:                "relative flex w-full group/stepper",
  rootHorizontal:      "flex-row items-start", // Changed from items-baseline
  rootVertical:        "flex-col gap-0",
  step:                "relative flex group/step isolate", // Added isolate
  stepHorizontal:      "flex-1 flex-col items-center text-center px-4", // Added padding for better line visibility
  stepVertical:        "flex-row items-start gap-4 pb-12 last:pb-0",
  label:               "font-semibold text-base-content",
  description:         "text-xs text-base-content/60 mt-0.5",
  separator: {
    base:              "absolute pointer-events-none transition-colors duration-200 z-0 bg-base-200", // Default color
    // Horizontal separator spans the item and handles its own offsets for first/last
    horizontal: {
       sm: "h-0.5 top-3.5 -translate-y-1/2 inset-x-0 group-first/step:left-1/2 group-last/step:right-1/2",
       md: "h-0.5 top-4.5 -translate-y-1/2 inset-x-0 group-first/step:left-1/2 group-last/step:right-1/2",
       lg: "h-0.5 top-5.5 -translate-y-1/2 inset-x-0 group-first/step:left-1/2 group-last/step:right-1/2",
    },
    vertical: {
       sm: "w-0.5 left-3.5 top-0 bottom-0 -ml-px group-last/step:h-3.5 group-last/step:bottom-auto group-first/step:top-3.5",
       md: "w-0.5 left-4.5 top-0 bottom-0 -ml-px group-last/step:h-4.5 group-last/step:bottom-auto group-first/step:top-4.5",
       lg: "w-0.5 left-5.5 top-0 bottom-0 -ml-px group-last/step:h-5.5 group-last/step:bottom-auto group-first/step:top-5.5",
    },
  },
};

export const STEPPER_LABEL_SIZES: Record<string, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};
