import type { ComponentPropsWithoutRef } from 'react';

export type CodeBlockLanguage = "tsx" | "jsx" | "typescript" | "javascript" | "css" | "html" | "json" | "bash" | "text";

export type CodeBlockColorScheme = "light" | "dark" | "auto";

export interface CodeBlockProps extends ComponentPropsWithoutRef<'div'> {
  /** Code string to display */
  code: string;
  /** Language for syntax highlighting. Defaults to "tsx". Use "text" or "bash" for no highlighting. */
  language?: CodeBlockLanguage;
  /** Show line numbers in the gutter */
  showLineNumbers?: boolean;
  /** Show a copy-to-clipboard button (visible on hover by default) */
  showCopyButton?: boolean;
  /** Always show the copy button instead of only on hover */
  copyButtonAlwaysVisible?: boolean;
  /**
   * Force a specific color scheme for syntax highlighting, independent of the page theme.
   * - `"auto"` (default) — follows the nearest `.dark` ancestor class
   * - `"light"` — always uses light syntax colors
   * - `"dark"`  — always uses dark syntax colors
   */
  colorScheme?: CodeBlockColorScheme;
  /** Additional class name for the root container */
  className?: string;
}
