import type { HTMLAttributes } from 'react';
import type { Size } from '@ninna-ui/core';

/** Message type */
export type FormMessageType = 'error' | 'success' | 'warning' | 'hint';

/**
 * FormMessage props
 */
export interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Type of message */
  type?: FormMessageType;
  /** Size of the message text */
  size?: Size;
}
