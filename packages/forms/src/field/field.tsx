import { forwardRef, useId, cloneElement, isValidElement, Children } from 'react';
import { cn } from '@ninna-ui/utils';
import { fieldStyles, fieldSizes } from './field.styles';
import type { FieldProps } from './field.types';

/**
 * Field component that wraps an input with label, helper text, and error text
 *
 * @example
 * ```tsx
 * <Field label="Email" helperText="We'll never share your email">
 *   <Input placeholder="Enter your email" />
 * </Field>
 *
 * <Field label="Password" errorText="Password is required" invalid>
 *   <Input type="password" />
 * </Field>
 * ```
 */
export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      label,
      helperText,
      errorText,
      required = false,
      invalid = false,
      disabled = false,
      size = 'md',
      optionalText,
      children,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const fieldId = id || generatedId;
    const helperId = helperText || errorText ? `${fieldId}-helper` : undefined;
    const sizeStyles = fieldSizes[size];

    // Clone child to pass necessary props
    const enhancedChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        const childProps = child.props as Record<string, unknown>;
        return cloneElement(child, {
          id: fieldId,
          disabled: disabled || childProps.disabled,
          'aria-invalid': invalid || childProps['aria-invalid'],
          'aria-describedby': helperId || childProps['aria-describedby'],
          'aria-required': required || childProps['aria-required'],
        } as Record<string, unknown>);
      }
      return child;
    });

    return (
      <div 
        ref={ref} 
        data-slot="field"
        data-invalid={invalid || undefined}
        data-disabled={disabled || undefined}
        className={cn(fieldStyles.container, className)}
        {...props}
      >
        {label && (
          <div className={fieldStyles.labelRow}>
            <label
              htmlFor={fieldId}
              className={cn(fieldStyles.label, sizeStyles.label)}
            >
              {label}
              {required && <span className={fieldStyles.required}>*</span>}
            </label>
            {optionalText && (
              <span className={fieldStyles.optional}>{optionalText}</span>
            )}
          </div>
        )}

        {enhancedChildren}

        {invalid && errorText ? (
          <p id={helperId} className={cn(fieldStyles.errorText, sizeStyles.helper)} role="alert">
            {errorText}
          </p>
        ) : helperText ? (
          <p id={helperId} className={cn(fieldStyles.helperText, sizeStyles.helper)}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Field.displayName = 'Field';
