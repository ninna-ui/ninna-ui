import { forwardRef, useCallback, useRef, useState, useEffect } from 'react';
import { cn } from '@ninna-ui/utils';
import { pinInputStyles, PIN_INPUT_SIZES } from './pin-input.styles';
import type { PinInputProps } from './pin-input.types';

/**
 * PinInput component for entering PIN codes or OTP
 *
 * @example
 * ```tsx
 * <PinInput length={6} onComplete={(pin) => console.log(pin)} />
 * <PinInput length={4} type="password" mask />
 * ```
 */
export const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  (
    {
      length = 4,
      size = 'md',
      value: controlledValue,
      defaultValue = '',
      onChange,
      onComplete,
      disabled = false,
      invalid = false,
      placeholder = '',
      type = 'text',
      mask = false,
      autoFocus = false,
      otp = false,
      name,
      className,
      'aria-label': ariaLabel = 'PIN input',
      ...props
    },
    ref
  ) => {
    const [values, setValues] = useState<string[]>(() => {
      const initial = controlledValue || defaultValue;
      return initial.split('').slice(0, length).concat(Array(length - initial.length).fill(''));
    });
    
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Sync with controlled value
    useEffect(() => {
      if (controlledValue !== undefined) {
        const newValues = controlledValue.split('').slice(0, length);
        setValues(newValues.concat(Array(length - newValues.length).fill('')));
      }
    }, [controlledValue, length]);

    const focusInput = useCallback((index: number) => {
      if (index >= 0 && index < length) {
        inputRefs.current[index]?.focus();
      }
    }, [length]);

    const handleChange = useCallback(
      (index: number, inputValue: string) => {
        const newChar = inputValue.slice(-1);
        
        // For number type, only allow digits
        if (type === 'number' && !/^\d*$/.test(newChar)) {
          return;
        }

        const newValues = [...values];
        newValues[index] = newChar;
        setValues(newValues);

        const fullValue = newValues.join('');
        onChange?.(fullValue);

        // Move to next input if value entered
        if (newChar && index < length - 1) {
          focusInput(index + 1);
        }

        // Check if complete
        if (newValues.every((v) => v !== '') && fullValue.length === length) {
          onComplete?.(fullValue);
        }
      },
      [values, length, onChange, onComplete, focusInput, type]
    );

    const handleKeyDown = useCallback(
      (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace') {
          if (!values[index] && index > 0) {
            // Move to previous input if current is empty
            focusInput(index - 1);
            const newValues = [...values];
            newValues[index - 1] = '';
            setValues(newValues);
            onChange?.(newValues.join(''));
          } else {
            // Clear current input
            const newValues = [...values];
            newValues[index] = '';
            setValues(newValues);
            onChange?.(newValues.join(''));
          }
        } else if (event.key === 'ArrowLeft' && index > 0) {
          focusInput(index - 1);
        } else if (event.key === 'ArrowRight' && index < length - 1) {
          focusInput(index + 1);
        }
      },
      [values, length, focusInput, onChange]
    );

    const handlePaste = useCallback(
      (event: React.ClipboardEvent) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData('text').slice(0, length);
        
        // For number type, only allow digits
        const filteredData = type === 'number' 
          ? pastedData.replace(/\D/g, '') 
          : pastedData;

        const newValues = filteredData.split('').slice(0, length);
        const paddedValues = newValues.concat(Array(length - newValues.length).fill(''));
        
        setValues(paddedValues);
        onChange?.(paddedValues.join(''));

        // Focus last filled input or first empty
        const lastFilledIndex = Math.min(newValues.length, length - 1);
        focusInput(lastFilledIndex);

        if (newValues.length === length) {
          onComplete?.(paddedValues.join(''));
        }
      },
      [length, onChange, onComplete, focusInput, type]
    );

    const sizeStyles = PIN_INPUT_SIZES[size];

    return (
      <div 
        ref={ref} 
        data-slot="pin-input"
        className={cn(pinInputStyles.container, sizeStyles.gap, className)}
        role="group"
        aria-label={ariaLabel}
        {...props}
      >
        {Array.from({ length }).map((_, index) => (
          <input
            key={`pin-input-${index}`}
            ref={(el) => { inputRefs.current[index] = el; }}
            type={mask || type === 'password' ? 'password' : 'text'}
            inputMode={type === 'number' ? 'numeric' : 'text'}
            pattern={type === 'number' ? '[0-9]*' : undefined}
            autoComplete={otp ? 'one-time-code' : 'off'}
            autoFocus={autoFocus && index === 0}
            disabled={disabled}
            value={values[index]}
            placeholder={placeholder}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={(e) => e.target.select()}
            className={cn(
              pinInputStyles.input,
              sizeStyles.input,
              disabled && pinInputStyles.inputDisabled,
              invalid && pinInputStyles.inputInvalid
            )}
            aria-label={`Pin digit ${index + 1} of ${length}`}
            aria-invalid={invalid || undefined}
            aria-disabled={disabled || undefined}
          />
        ))}
        {name && (
          <input type="hidden" name={name} value={values.join('')} />
        )}
      </div>
    );
  }
);

PinInput.displayName = 'PinInput';
