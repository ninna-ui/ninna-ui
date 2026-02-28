import type { Color, ColorVariant, Size } from "@ninna-ui/core";
import type { ReactNode, HTMLAttributes } from "react";

export type AlertVariant = ColorVariant;

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Visual style variant */
  variant?: AlertVariant;
  
  /** Color theme */
  color?: Color;
  
  /** Alert title */
  title?: ReactNode;
  
  /** Alert description/message */
  description?: ReactNode;
  
  /** Custom icon to display */
  icon?: ReactNode;
  
  /** Whether to show the default icon based on color */
  showIcon?: boolean;
  
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  
  /** Callback when alert is dismissed */
  onDismiss?: () => void;
  
  /** Size of the alert */
  size?: Size;
  
  /** Action element (button, link, etc.) */
  action?: ReactNode;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Alert content (alternative to description) */
  children?: ReactNode;
}
