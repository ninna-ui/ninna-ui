import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import type { Color } from '@ninna-ui/core';
import type { SliderSize } from '../types';

/** Slider variant styles */
export type SliderVariant = 'solid' | 'soft';

/** Slider mark definition */
export interface SliderMark {
  value: number;
  label?: ReactNode;
}

export interface SliderProps extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange' | 'dir'> {
  /** Size of the slider */
  size?: SliderSize;
  /** Color theme */
  color?: Color;
  /** Visual variant */
  variant?: SliderVariant;
  /** Current value (controlled) */
  value?: number[];
  /** Default value (uncontrolled) */
  defaultValue?: number[];
  /** Callback when value changes */
  onValueChange?: (value: number[]) => void;
  /** Callback when value is committed (on mouse up) */
  onValueCommit?: (value: number[]) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Minimum steps between thumbs for range sliders */
  minStepsBetweenThumbs?: number;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Whether the slider is in an invalid state */
  invalid?: boolean;
  /** Orientation of the slider */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the slider is inverted */
  inverted?: boolean;
  /** Name for form submission */
  name?: string;
  /** Show value label above thumb */
  showValue?: boolean;
  /** Format function for value display */
  formatValue?: (value: number) => string;
  /** Label for the slider */
  label?: ReactNode;
  /** Helper text below slider */
  helperText?: ReactNode;
  /** Show tooltip on hover/drag */
  showTooltip?: boolean;
  /** Marks to display on the slider track */
  marks?: SliderMark[] | boolean;
  /** Whether marks should be included as steps */
  markSteps?: boolean;
  /** Additional CSS classes */
  className?: string;
}
