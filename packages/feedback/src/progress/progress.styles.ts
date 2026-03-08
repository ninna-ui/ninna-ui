import { cva, type VariantProps } from 'class-variance-authority';

export const progressTrackVariants = cva(
  "w-full overflow-hidden rounded-full bg-base-200",
  {
    variants: {
      size: {
        xs: "h-1",
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
        xl: "h-6",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export const progressIndicatorVariants = cva(
  "h-full rounded-full transition-all duration-300 ease-out",
  {
    variants: {
      color: {
        primary:   "bg-primary",
        secondary: "bg-secondary",
        accent:    "bg-accent",
        neutral:   "bg-neutral",
        success:   "bg-success",
        danger:    "bg-danger",
        warning:   "bg-warning",
        info:      "bg-info",
      },
      variant: {
        default:  "",
        striped:  "bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]",
        animated: "bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]",
      },
    },
    defaultVariants: { color: "primary", variant: "default" },
  }
);

export type ProgressTrackVariantsProps = VariantProps<typeof progressTrackVariants>;
export type ProgressIndicatorVariantsProps = VariantProps<typeof progressIndicatorVariants>;

export const PROGRESS_CONTAINER_CLASS = "w-full";
export const PROGRESS_INDETERMINATE_CLASS = "w-1/3";
export const progressLabelStyles = {
  base: "text-sm font-medium",
  left: "text-base-content/80",
  right: "text-base-content/80",
  top: "text-base-content/80 mb-1",
  inside: "text-base-100 text-xs font-semibold",
};

export const progressAnimations = {
  stripes: { animation: "progress-stripes 1s linear infinite" },
  indeterminate: { animation: "progress-indeterminate 1.5s ease-in-out infinite" },
};

export const PROGRESS_KEYFRAMES = `
@keyframes progress-stripes {
  0% { background-position: 1rem 0; }
  100% { background-position: 0 0; }
}
@keyframes progress-indeterminate {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}
@media (prefers-reduced-motion: reduce) {
  .ninna-progress-animated {
    animation: none !important;
  }
}
`;
