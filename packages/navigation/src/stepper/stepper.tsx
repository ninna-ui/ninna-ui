import React, { forwardRef, Children, isValidElement, createContext, useContext, useRef } from 'react';
import type { CompactSize } from '@ninna-ui/core';
import { cn } from '@ninna-ui/utils';
import {
  stepperIndicatorVariants,
  stepperStyles,
  STEPPER_LABEL_SIZES,
  STEPPER_DESCRIPTION_SIZES,
} from './stepper.styles';
import type {
  StepperProps,
  StepProps,
  StepIndicatorProps,
  StepSeparatorProps,
  StepStatus,
  StepperOrientation,
} from './stepper.types';

interface StepperContextValue {
  activeStep: number;
  orientation: StepperOrientation;
  size: CompactSize;
  totalSteps: number;
  registerStep: () => number;
}

const StepperContext = createContext<StepperContextValue>({
  activeStep: 0,
  orientation: 'horizontal',
  size: 'md',
  totalSteps: 0,
  registerStep: () => 0,
});

const CheckIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const StepperRoot = forwardRef<HTMLDivElement, StepperProps>(
  ({ activeStep, orientation = 'horizontal', size = 'md', className, children, 'aria-label': ariaLabel = 'Progress', ...props }, ref) => {
    const validChildren = Children.toArray(children).filter(isValidElement);
    const totalSteps = validChildren.length;
    const stepCounter = useRef(0);
    stepCounter.current = 0;

    const registerStep = () => {
      const index = stepCounter.current;
      stepCounter.current += 1;
      return index;
    };

    return (
      <StepperContext.Provider value={{ activeStep, orientation, size, totalSteps, registerStep }}>
        <div
          ref={ref}
          data-slot="stepper"
          data-orientation={orientation}
          role="list"
          aria-label={ariaLabel}
          className={cn(
            stepperStyles.root,
            orientation === 'horizontal' ? stepperStyles.rootHorizontal : stepperStyles.rootVertical,
            className
          )}
          {...props}
        >
          {validChildren.map((child, mapIndex) => (
            <React.Fragment key={mapIndex}>
              {child}
              {mapIndex < totalSteps - 1 && (
                <StepSeparator
                  isComplete={mapIndex < activeStep}
                  orientation={orientation}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </StepperContext.Provider>
    );
  }
);

StepperRoot.displayName = 'Stepper';

const Step = forwardRef<HTMLDivElement, StepProps>(
  ({ label, description, icon, optional, className, ...domProps }, ref) => {
    const { activeStep, orientation, size, registerStep } = useContext(StepperContext);
    const indexRef = useRef<number | null>(null);
    if (indexRef.current === null) {
      indexRef.current = registerStep();
    }
    const index = indexRef.current;
    const status: StepStatus =
      index < activeStep ? 'complete' : index === activeStep ? 'current' : 'upcoming';

    return (
      <div
        ref={ref}
        data-slot="step"
        data-status={status}
        role="listitem"
        aria-label={`Step ${index + 1}: ${label}${optional ? ' (optional)' : ''} - ${status}`}
        className={cn(
          stepperStyles.step,
          orientation === 'horizontal' ? stepperStyles.stepHorizontal : stepperStyles.stepVertical,
          className
        )}
        {...domProps}
      >
        <StepIndicator status={status} stepNumber={index + 1} icon={icon} />
        <div className={cn('flex flex-col', orientation === 'horizontal' ? 'items-start text-left sm:items-center sm:text-center' : 'items-start text-left')}>
          <span
            data-slot="step-label"
            className={cn(
              stepperStyles.label,
              STEPPER_LABEL_SIZES[size],
              status === 'upcoming' && stepperStyles.labelUpcoming
            )}
          >
            {label}
          </span>
          {description && (
            <span
              data-slot="step-description"
              className={cn(
                stepperStyles.description,
                STEPPER_DESCRIPTION_SIZES[size],
                status === 'upcoming' && stepperStyles.descriptionUpcoming
              )}
            >
              {description}
            </span>
          )}
          {optional && (
            <span
              data-slot="step-optional"
              className={cn(stepperStyles.optional, STEPPER_DESCRIPTION_SIZES[size])}
            >
              Optional
            </span>
          )}
        </div>
      </div>
    );
  }
);

Step.displayName = 'Stepper.Step';

const StepIndicator = forwardRef<HTMLDivElement, StepIndicatorProps>(
  ({ status, stepNumber, icon, className, ...props }, ref) => {
    const { size } = useContext(StepperContext);
    return (
      <div
        ref={ref}
        data-slot="step-indicator"
        data-status={status}
        className={cn(
          stepperIndicatorVariants({ status, size }),
          className
        )}
        {...props}
      >
        {status === 'complete' ? (
          icon ?? <CheckIcon />
        ) : (
          icon ?? stepNumber
        )}
      </div>
    );
  }
);

StepIndicator.displayName = 'Stepper.Indicator';

const StepSeparator = forwardRef<HTMLDivElement, StepSeparatorProps>(
  ({ isComplete, orientation = 'horizontal', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="step-separator"
        role="presentation"
        aria-hidden="true"
        className={cn(
          stepperStyles.separator.base,
          orientation === 'horizontal'
            ? stepperStyles.separator.horizontal
            : stepperStyles.separator.vertical,
          isComplete
            ? stepperStyles.separator.complete
            : stepperStyles.separator.incomplete,
          className
        )}
        {...props}
      />
    );
  }
);

StepSeparator.displayName = 'Stepper.Separator';

export const Stepper = Object.assign(StepperRoot, {
  Step,
  Indicator: StepIndicator,
  Separator: StepSeparator,
});
