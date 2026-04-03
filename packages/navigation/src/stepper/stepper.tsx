import { forwardRef, Children, isValidElement, createContext, useContext, useRef } from 'react';
import type { CompactSize, Color } from '@ninna-ui/core';
import { cn } from '@ninna-ui/utils';
import {
  stepperIndicatorVariants,
  stepperStyles,
  STEPPER_LABEL_SIZES,
} from './stepper.styles';
import type {
  StepperProps,
  StepProps,
  StepIndicatorProps,
  StepStatus,
  StepperOrientation,
} from './stepper.types';

interface StepperContextValue {
  activeStep: number;
  orientation: StepperOrientation;
  size: CompactSize;
  color: Color;
  totalSteps: number;
  registerStep: () => number;
}

const StepperContext = createContext<StepperContextValue>({
  activeStep: 0,
  orientation: 'horizontal',
  size: 'md',
  color: 'primary',
  totalSteps: 0,
  registerStep: () => 0,
});

const CheckIcon = () => (
  <svg className="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const StepperRoot = forwardRef<HTMLDivElement, StepperProps>(
  ({ activeStep, orientation = 'horizontal', size = 'md', color = 'primary', className, children, 'aria-label': ariaLabel = 'Progress', ...props }, ref) => {
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
      <StepperContext.Provider value={{ activeStep, orientation, size, color, totalSteps, registerStep }}>
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
          {validChildren}
        </div>
      </StepperContext.Provider>
    );
  }
);

StepperRoot.displayName = 'Stepper';

const Step = forwardRef<HTMLDivElement, StepProps>(
  ({ label, description, icon, optional, className, ...domProps }, ref) => {
    const { activeStep, orientation, size, color, registerStep } = useContext(StepperContext);
    const indexRef = useRef<number | null>(null);
    if (indexRef.current === null) {
      indexRef.current = registerStep();
    }
    const index = indexRef.current;
    
    // Status logic:
    // - complete if activeStep > index
    // - current if activeStep === index
    // - upcoming if activeStep < index
    const status: StepStatus =
      index < activeStep ? 'complete' : index === activeStep ? 'current' : 'upcoming';

    const isComplete = index < activeStep;

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
        {/* New Spanning Separator - covers current step to handle continuity */}
        <div
          data-slot="step-separator"
          className={cn(
            stepperStyles.separator.base,
            orientation === 'horizontal'
              ? (stepperStyles.separator.horizontal as any)[size]
              : (stepperStyles.separator.vertical as any)[size],
            {
               // Separator is colored if THIS step is complete
               'bg-primary':    isComplete && color === 'primary',
               'bg-secondary':  isComplete && color === 'secondary',
               'bg-accent':     isComplete && color === 'accent',
               'bg-neutral':    isComplete && color === 'neutral',
               'bg-success':    isComplete && color === 'success',
               'bg-danger':     isComplete && color === 'danger',
               'bg-warning':    isComplete && color === 'warning',
               'bg-info':       isComplete && color === 'info',
               'bg-base-200':   !isComplete,
            }
          )}
        />
        
        <StepIndicator status={status} stepNumber={index + 1} icon={icon} />
        
        <div className={cn(
          'flex flex-col relative z-10', 
          orientation === 'horizontal' ? 'mt-2 items-center text-center' : 'items-start text-left'
        )}>
          <span
            data-slot="step-label"
            className={cn(
              stepperStyles.label,
              STEPPER_LABEL_SIZES[size],
              status === 'upcoming' && 'text-base-content/50'
            )}
          >
            {label}
          </span>
          {description && (
            <span
              data-slot="step-description"
              className={cn(
                stepperStyles.description,
                status === 'upcoming' && 'opacity-50'
              )}
            >
              {description}
            </span>
          )}
          {optional && (
            <span
              data-slot="step-optional"
              className={cn('text-[10px] text-base-content/50 italic mt-0.5')}
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
    const { color, size } = useContext(StepperContext);
    return (
      <div
        ref={ref}
        data-slot="step-indicator"
        data-status={status}
        className={cn(
          stepperIndicatorVariants({ status, color, size }),
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

export const Stepper = Object.assign(StepperRoot, {
  Step,
  Indicator: StepIndicator,
});
