import { cva, type VariantProps } from 'class-variance-authority';

export const checkboxBoxVariants = cva(
  "relative shrink-0 rounded border-2 flex items-center justify-center transition-all duration-200 cursor-pointer peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
  {
    variants: {
      color: {
        primary:   "peer-focus-visible:ring-primary text-primary",
        secondary: "peer-focus-visible:ring-secondary text-secondary",
        accent:    "peer-focus-visible:ring-accent text-accent",
        neutral:   "peer-focus-visible:ring-neutral text-neutral",
        success:   "peer-focus-visible:ring-success text-success",
        danger:    "peer-focus-visible:ring-danger text-danger",
        warning:   "peer-focus-visible:ring-warning text-warning",
        info:      "peer-focus-visible:ring-info text-info",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: { color: "primary", size: "md" },
  }
);

export const checkboxIndicatorClasses = (
  variant: 'outline' | 'soft' | 'solid',
  checked: boolean,
  invalid: boolean
): string => {
  const base: Record<'outline' | 'soft' | 'solid', { unchecked: string; checked: string }> = {
    outline: {
      unchecked: invalid ? 'border-danger bg-base-100' : 'border-base-300 bg-base-100',
      checked:   invalid ? 'border-danger bg-danger'   : 'border-current bg-current',
    },
    soft: {
      unchecked: invalid ? 'border-transparent bg-danger/10' : 'border-transparent bg-current/15',
      checked:   invalid ? 'border-transparent bg-danger'    : 'border-transparent bg-current',
    },
    solid: {
      unchecked: invalid ? 'border-transparent bg-danger/25' : 'border-current/30 bg-current/20',
      checked:   invalid ? 'border-transparent bg-danger'    : 'border-transparent bg-current',
    },
  };
  return checked ? base[variant].checked : base[variant].unchecked;
};

export type CheckboxBoxVariantsProps = VariantProps<typeof checkboxBoxVariants>;

export const CHECKBOX_ICON_SIZES: Record<import('@ninna-ui/core').CompactSize, string> = {
  sm: "w-3 h-3",
  md: "w-3.5 h-3.5",
  lg: "w-4 h-4",
};

export const checkboxStyles = {
  input:   "sr-only peer",
  wrapper: "inline-flex items-start gap-3 min-h-[44px]",
  wrapperReverse:   "flex-row-reverse",
  labelWrapper:     "flex flex-col gap-0.5",
  label:            "text-base-content font-medium cursor-pointer select-none",
  labelDisabled:    "opacity-50 cursor-not-allowed",
  description:      "text-base-content/70 text-sm",
};

export const checkboxGroupStyles = {
  root:       "flex",
  vertical:   "flex-col",
  horizontal: "flex-row flex-wrap",
  gap: { sm: "gap-2", md: "gap-3", lg: "gap-4" },
};
