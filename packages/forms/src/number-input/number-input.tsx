import { forwardRef, useCallback, useId, useState, useEffect } from 'react';
import { cn } from '@ninna-ui/utils';
import { numberInputStyles, NUMBER_INPUT_SIZES } from './number-input.styles';
import type { NumberInputProps } from './number-input.types';

/**
 * NumberInput component with stepper buttons and validation
 *
 * @example
 * ```tsx
 * <NumberInput min={0} max={100} step={1} />
 * <NumberInput defaultValue={50} precision={2} />
 * <NumberInput stepperPosition="sides" />
 * ```
 */
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      size = 'md',
      value: controlledValue,
      defaultValue,
      onChange,
      min,
      max,
      step = 1,
      precision,
      disabled = false,
      readOnly = false,
      invalid = false,
      required = false,
      placeholder,
      name,
      className,
      incrementLabel = 'Increase value',
      decrementLabel = 'Decrease value',
      allowKeyboardInput = true,
      showStepper = true,
      stepperPosition = 'right',
      format,
      parse,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    
    const [internalValue, setInternalValue] = useState<number | undefined>(
      controlledValue ?? defaultValue
    );
    const [displayValue, setDisplayValue] = useState<string>(() => {
      const val = controlledValue ?? defaultValue;
      if (val === undefined) return '';
      return format ? format(val) : String(val);
    });

    const currentValue = controlledValue ?? internalValue;

    // Sync with controlled value
    useEffect(() => {
      if (controlledValue !== undefined) {
        setInternalValue(controlledValue);
        setDisplayValue(format ? format(controlledValue) : String(controlledValue));
      }
    }, [controlledValue, format]);

    const clampValue = useCallback(
      (val: number): number => {
        let clamped = val;
        if (min !== undefined) clamped = Math.max(min, clamped);
        if (max !== undefined) clamped = Math.min(max, clamped);
        if (precision !== undefined) {
          clamped = Number(clamped.toFixed(precision));
        }
        return clamped;
      },
      [min, max, precision]
    );

    const updateValue = useCallback(
      (newValue: number) => {
        const clamped = clampValue(newValue);
        setInternalValue(clamped);
        setDisplayValue(format ? format(clamped) : String(clamped));
        onChange?.(clamped);
      },
      [clampValue, format, onChange]
    );

    const increment = useCallback(() => {
      const base = currentValue ?? 0;
      updateValue(base + step);
    }, [currentValue, step, updateValue]);

    const decrement = useCallback(() => {
      const base = currentValue ?? 0;
      updateValue(base - step);
    }, [currentValue, step, updateValue]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setDisplayValue(inputValue);

        if (inputValue === '' || inputValue === '-') {
          setInternalValue(undefined);
          return;
        }

        const parsed = parse ? parse(inputValue) : parseFloat(inputValue);
        if (!isNaN(parsed)) {
          setInternalValue(parsed);
          onChange?.(clampValue(parsed));
        }
      },
      [parse, onChange, clampValue]
    );

    const handleBlur = useCallback(() => {
      if (currentValue !== undefined) {
        const clamped = clampValue(currentValue);
        setInternalValue(clamped);
        setDisplayValue(format ? format(clamped) : String(clamped));
        if (clamped !== currentValue) {
          onChange?.(clamped);
        }
      }
    }, [currentValue, clampValue, format, onChange]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          increment();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          decrement();
        }
      },
      [increment, decrement]
    );

    const canIncrement = max === undefined || (currentValue ?? 0) < max;
    const canDecrement = min === undefined || (currentValue ?? 0) > min;

    const inputClasses = cn(
      numberInputStyles.input,
      NUMBER_INPUT_SIZES[size],
      numberInputStyles.inputDefault,
      disabled && numberInputStyles.inputDisabled,
      invalid && numberInputStyles.inputInvalid,
      showStepper && stepperPosition === 'right' && numberInputStyles.inputWithStepperRight,
      showStepper && stepperPosition === 'sides' && 'rounded-none',
      className
    );

    if (stepperPosition === 'sides' && showStepper) {
      return (
        <div data-slot="number-input" className={numberInputStyles.container}>
          <button
            data-slot="decrement"
            type="button"
            onClick={decrement}
            disabled={disabled || !canDecrement}
            className={cn(numberInputStyles.sideButton, numberInputStyles.sideButtonLeft, NUMBER_INPUT_SIZES[size])}
            aria-label={decrementLabel}
            tabIndex={-1}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <input
            ref={ref}
            data-slot="input"
            id={inputId}
            type="text"
            inputMode="decimal"
            role="spinbutton"
            name={name}
            value={displayValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            readOnly={readOnly || !allowKeyboardInput}
            required={required}
            placeholder={placeholder}
            className={inputClasses}
            aria-invalid={invalid || undefined}
            aria-disabled={disabled || undefined}
            aria-required={required || undefined}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={currentValue}
            {...props}
          />
          <button
            data-slot="increment"
            type="button"
            onClick={increment}
            disabled={disabled || !canIncrement}
            className={cn(numberInputStyles.sideButton, numberInputStyles.sideButtonRight, NUMBER_INPUT_SIZES[size])}
            aria-label={incrementLabel}
            tabIndex={-1}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      );
    }

    return (
      <div data-slot="number-input" className={numberInputStyles.container}>
        <input
          ref={ref}
          data-slot="input"
          id={inputId}
          type="text"
          inputMode="decimal"
          name={name}
          value={displayValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          readOnly={readOnly || !allowKeyboardInput}
          required={required}
          placeholder={placeholder}
          className={inputClasses}
          aria-invalid={invalid || undefined}
          aria-disabled={disabled || undefined}
          aria-required={required || undefined}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          {...props}
        />
        {showStepper && (
          <div className={numberInputStyles.stepperContainer}>
            <button
              type="button"
              onClick={increment}
              disabled={disabled || !canIncrement}
              className={cn(numberInputStyles.stepperButton, numberInputStyles.stepperButtonTop)}
              aria-label={incrementLabel}
              tabIndex={-1}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={decrement}
              disabled={disabled || !canDecrement}
              className={cn(numberInputStyles.stepperButton, numberInputStyles.stepperButtonBottom)}
              aria-label={decrementLabel}
              tabIndex={-1}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';
