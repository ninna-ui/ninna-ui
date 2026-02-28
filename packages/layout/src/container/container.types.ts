import type { HTMLAttributes, ReactNode } from "react";
import type { ContainerMaxWidth } from '../types';

/**
 * Container component props
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to render */
  children?: ReactNode;
  
  /** Maximum width of the container */
  maxWidth?: ContainerMaxWidth;
  
  /** Center the container horizontally */
  center?: boolean;
  
  /** Add horizontal padding */
  padding?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Default props for Container
 */
export const containerDefaults = {
  maxWidth: "lg" as ContainerMaxWidth,
  center: true,
  padding: true,
};
