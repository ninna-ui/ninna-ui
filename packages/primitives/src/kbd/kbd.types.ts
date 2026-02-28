import type { HTMLAttributes } from "react";
import type { Color, Size } from "@ninna-ui/core";

/**
 * Kbd size type
 */
export type KbdSize = Extract<Size, "xs" | "sm" | "md" | "lg">;

/**
 * Props for the Kbd component
 */
export interface KbdProps extends HTMLAttributes<HTMLElement> {
  /**
   * Color variant
   * @default "neutral"
   */
  color?: Color;

  /**
   * Size variant
   * @default "sm"
   */
  size?: KbdSize;
}
