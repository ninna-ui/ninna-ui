import type { ElementType } from "react";
import type { PolymorphicProps } from "@ninna-ui/utils";
import type { ContainerMaxWidth } from '@ninna-ui/core';

/**
 * Base owned props for the Container component.
 */
export interface ContainerBaseProps {
  
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
 * Container component props
 */
export type ContainerProps<C extends ElementType = "div"> = PolymorphicProps<C, ContainerBaseProps>;
