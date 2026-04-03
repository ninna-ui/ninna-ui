import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import type { CompactSize, Color } from '@ninna-ui/core';

/** Orientation of the Stepper */
export type StepperOrientation = 'horizontal' | 'vertical';

/** Status of a step */
export type StepStatus = 'complete' | 'current' | 'upcoming';

/** Props for the Stepper root component */
export interface StepperProps extends ComponentPropsWithoutRef<'div'> {
  /** Current active step index (0-based) */
  activeStep: number;
  /** Orientation @default 'horizontal' */
  orientation?: StepperOrientation;
  /** Size @default 'md' */
  size?: CompactSize;
  /** Color theme @default 'primary' */
  color?: Color;
}

/** Props for a Step item */
export interface StepProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  /** Step label */
  label: string;
  /** Optional description */
  description?: string;
  /** Optional custom icon */
  icon?: ReactNode;
  /** Whether the step is optional */
  optional?: boolean;
}

/** Props for the Step indicator (circle) */
export interface StepIndicatorProps extends ComponentPropsWithoutRef<'div'> {
  /** Status of this step */
  status: StepStatus;
  /** Step number (1-based) */
  stepNumber: number;
  /** Optional custom icon */
  icon?: ReactNode;
}

/** Props for the Step separator line */
export interface StepSeparatorProps extends ComponentPropsWithoutRef<'div'> {
  /** Whether the separator is completed */
  isComplete?: boolean;
  /** Orientation @default 'horizontal' */
  orientation?: StepperOrientation;
}
