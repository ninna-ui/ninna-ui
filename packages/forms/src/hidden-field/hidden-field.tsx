import { forwardRef } from 'react';

export interface HiddenFieldProps {
  /** Name for form submission */
  name: string;
  /** Value of the hidden field */
  value?: string | number | readonly string[];
  /** Disabled state */
  disabled?: boolean;
}

/**
 * HiddenField component for hidden form values
 *
 * @example
 * ```tsx
 * <HiddenField name="userId" value="123" />
 * <HiddenField name="token" value={sessionToken} />
 * ```
 */
export const HiddenField = forwardRef<HTMLInputElement, HiddenFieldProps>(
  ({ name, value, disabled }, ref) => {
    return (
      <input
        ref={ref}
        data-slot="hidden-field"
        type="hidden"
        name={name}
        value={value}
        disabled={disabled}
      />
    );
  }
);

HiddenField.displayName = 'HiddenField';
