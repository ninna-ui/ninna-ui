/**
 * Slider Engine - Radix Slider adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 */

import { Root, Track, Range, Thumb } from '@radix-ui/react-slider';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export const SliderEngine = {
  Root,
  Track,
  Range,
  Thumb,
};

export interface SliderEngineRootProps {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  inverted?: boolean;
  name?: string;
  className?: string;
  children?: ReactNode;
}

export type SliderEngineTrackProps = ComponentPropsWithoutRef<'span'>;

export type SliderEngineRangeProps = ComponentPropsWithoutRef<'span'>;

export type SliderEngineThumbProps = ComponentPropsWithoutRef<'span'>;
