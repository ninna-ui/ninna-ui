import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { formLabelVariants } from './form-label.styles';
import { useFormControl } from '../form-control';
import type { FormLabelProps } from './form-label.types';

/**
 * FormLabel renders an accessible label for form fields
 * 
 * @example
 * ```tsx
 * <FormControl isRequired>
 *   <FormLabel>Email</FormLabel>
 *   <Input type="email" />
 * </FormControl>
 * ```
 */
export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  (
    {
      size = 'md',
      showRequired = true,
      requiredIndicator = '*',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const formControl = useFormControl();
    const isRequired = formControl?.isRequired ?? false;
    const isDisabled = formControl?.isDisabled ?? false;
    const htmlFor = props.htmlFor ?? formControl?.id;

    return (
      <label
        ref={ref}
        data-slot="label"
        id={formControl?.labelId}
        htmlFor={htmlFor}
        className={cn(
          formLabelVariants({ size }),
          isDisabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {children}
        {isRequired && showRequired && (
          <span className="ml-0.5 text-danger" aria-hidden="true">
            {requiredIndicator}
          </span>
        )}
      </label>
    );
  }
);

FormLabel.displayName = 'FormLabel';
