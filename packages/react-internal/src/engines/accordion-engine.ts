/**
 * Accordion Engine - Radix Accordion adapter
 * 
 * ⚠️ CRITICAL: Do NOT export Radix types directly
 */

import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from '@radix-ui/react-accordion';
import type { ComponentPropsWithoutRef } from 'react';

export const AccordionEngine = {
  Root,
  Item,
  Header,
  Trigger,
  Content,
};

// Our own interface definitions
interface AccordionEngineBaseProps extends ComponentPropsWithoutRef<'div'> {
  disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
}

export interface AccordionEngineSingleProps extends AccordionEngineBaseProps {
  type: 'single';
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
}

export interface AccordionEngineMultipleProps extends AccordionEngineBaseProps {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type AccordionEngineRootProps = AccordionEngineSingleProps | AccordionEngineMultipleProps;

export interface AccordionEngineItemProps extends ComponentPropsWithoutRef<'div'> {
  value: string;
  disabled?: boolean;
}

export type AccordionEngineHeaderProps = ComponentPropsWithoutRef<'h3'>;

export type AccordionEngineTriggerProps = ComponentPropsWithoutRef<'button'>;

export interface AccordionEngineContentProps extends ComponentPropsWithoutRef<'div'> {
  forceMount?: true;
}
