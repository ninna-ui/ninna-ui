import type { Size } from "@ninna-ui/core";
import type { FormMessageType } from "./form-message.types";

/** Form message size class mappings */
export const FORM_MESSAGE_SIZES: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm",
  xl: "text-base",
};

/** Form message color mappings */
export const FORM_MESSAGE_COLORS: Record<FormMessageType, string> = {
  error: 'text-danger',
  success: 'text-success',
  warning: 'text-warning',
  hint: 'text-base-content/70',
};
