import type { HTMLAttributes, ReactNode } from 'react';

/**
 * FormControl context state shared between form components
 */
export interface FormControlContextValue {
  /** Unique ID for the form field */
  id: string;
  /** ID for the form label element */
  labelId: string;
  /** ID for the form message/description element */
  messageId: string;
  /** Whether the field is required */
  isRequired: boolean;
  /** Whether the field is invalid */
  isInvalid: boolean;
  /** Whether the field is disabled */
  isDisabled: boolean;
  /** Whether the field is read-only */
  isReadOnly: boolean;
}

/**
 * FormControl props
 */
export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  /** Unique ID for the form field (auto-generated if not provided) */
  id?: string;
  /** Whether the field is required */
  isRequired?: boolean;
  /** Whether the field is invalid */
  isInvalid?: boolean;
  /** Whether the field is disabled */
  isDisabled?: boolean;
  /** Whether the field is read-only */
  isReadOnly?: boolean;
  /** Child components */
  children: ReactNode;
}
