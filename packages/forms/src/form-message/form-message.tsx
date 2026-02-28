import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { FORM_MESSAGE_SIZES, FORM_MESSAGE_COLORS } from './form-message.styles';
import { useFormControl } from '../form-control';
import type { FormMessageProps } from './form-message.types';

/**
 * FormMessage displays error, success, warning, or hint messages
 * 
 * @example
 * ```tsx
 * <FormControl isInvalid>
 *   <FormLabel>Email</FormLabel>
 *   <Input type="email" />
 *   <FormMessage type="error">Please enter a valid email</FormMessage>
 * </FormControl>
 * ```
 */
export const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  (
    {
      type: typeProp,
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const formControl = useFormControl();
    const isInvalid = formControl?.isInvalid ?? false;
    
    // Auto-detect type based on form control state
    const type = typeProp ?? (isInvalid ? 'error' : 'hint');
    
    // Don't render if no children
    if (!children) {
      return null;
    }

    return (
      <p
        ref={ref}
        data-slot="message"
        id={formControl?.messageId}
        role={type === 'error' ? 'alert' : undefined}
        aria-live={type === 'error' ? 'polite' : undefined}
        className={cn(
          FORM_MESSAGE_SIZES[size],
          FORM_MESSAGE_COLORS[type],
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

FormMessage.displayName = 'FormMessage';
