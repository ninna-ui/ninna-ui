import { forwardRef, useId } from 'react';
import { cn } from '@ninna-ui/utils';
import { formGroupStyles, formGroupSpacing } from './form-group.styles';
import type { FormGroupProps } from './form-group.types';

/**
 * FormGroup component for grouping related form fields
 *
 * @example
 * ```tsx
 * <FormGroup legend="Personal Information">
 *   <Input placeholder="First name" />
 *   <Input placeholder="Last name" />
 * </FormGroup>
 * ```
 */
export const FormGroup = forwardRef<HTMLFieldSetElement, FormGroupProps>(
  (
    {
      legend,
      description,
      disabled = false,
      required = false,
      children,
      className,
      spacing = 'md',
      direction = 'vertical',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const fieldsetId = id || generatedId;
    const descriptionId = description ? `${fieldsetId}-description` : undefined;

    return (
      <fieldset
        ref={ref}
        data-slot="form-group"
        id={fieldsetId}
        disabled={disabled}
        className={cn(formGroupStyles.fieldset, className)}
        aria-describedby={descriptionId}
        {...props}
      >
        {legend && (
          <legend className={formGroupStyles.legend}>
            {legend}
            {required && <span className="text-danger ml-1">*</span>}
          </legend>
        )}
        
        {description && (
          <p id={descriptionId} className={formGroupStyles.description}>
            {description}
          </p>
        )}

        <div
          className={cn(
            formGroupStyles.content,
            direction === 'vertical' ? formGroupStyles.contentVertical : formGroupStyles.contentHorizontal,
            formGroupSpacing[spacing][direction]
          )}
        >
          {children}
        </div>
      </fieldset>
    );
  }
);

FormGroup.displayName = 'FormGroup';
