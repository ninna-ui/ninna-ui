import { forwardRef, useId, useMemo, createContext, useContext } from 'react';
import { cn } from '@ninna-ui/utils';
import type { FormControlProps, FormControlContextValue } from './form-control.types';

const FormControlContext = createContext<FormControlContextValue | null>(null);

/**
 * Hook to access FormControl context
 */
export function useFormControl(): FormControlContextValue | null {
  return useContext(FormControlContext);
}

/**
 * Hook to get form control props for an input element
 */
export function useFormControlProps<T extends Record<string, unknown>>(props: T) {
  const context = useFormControl();
  
  if (!context) {
    return props;
  }

  return {
    ...props,
    id: context.id,
    disabled: context.isDisabled,
    readOnly: context.isReadOnly,
    required: context.isRequired,
    'aria-invalid': context.isInvalid || undefined,
    'aria-required': context.isRequired || undefined,
    'aria-disabled': context.isDisabled || undefined,
    'aria-describedby': context.messageId,
    'aria-labelledby': context.labelId,
  };
}

/**
 * FormControl provides context for form field components
 * 
 * @example
 * ```tsx
 * <FormControl isRequired isInvalid={!!errors.email}>
 *   <FormLabel>Email</FormLabel>
 *   <Input type="email" />
 *   <FormMessage>Please enter a valid email</FormMessage>
 * </FormControl>
 * ```
 */
export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      id: idProp,
      isRequired = false,
      isInvalid = false,
      isDisabled = false,
      isReadOnly = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const labelId = `${id}-label`;
    const messageId = `${id}-message`;

    const contextValue = useMemo<FormControlContextValue>(
      () => ({
        id,
        labelId,
        messageId,
        isRequired,
        isInvalid,
        isDisabled,
        isReadOnly,
      }),
      [id, labelId, messageId, isRequired, isInvalid, isDisabled, isReadOnly]
    );

    return (
      <FormControlContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-slot="form-control"
          role="group"
          className={cn('space-y-1.5', className)}
          {...props}
        >
          {children}
        </div>
      </FormControlContext.Provider>
    );
  }
);

FormControl.displayName = 'FormControl';
