/**
 * Syntax token type names. CSS custom properties are --ninna-cb-{type}
 * defined in code-block.css (static file, no runtime injection).
 */

export const LIGHT_TOKENS = {
  comment: "oklch(0.40 0.02 264)",
  string: "oklch(0.45 0.14 155)",
  keyword: "oklch(0.45 0.16 295)",
  boolean: "oklch(0.45 0.14 250)",
  number: "oklch(0.45 0.16 70)",
  punctuation: "oklch(0.40 0.02 264)",
  tag: "oklch(0.45 0.18 350)",
  attr: "oklch(0.45 0.14 50)",
  component: "oklch(0.45 0.14 255)",
} as const;

export const DARK_TOKENS = {
  comment: "oklch(0.85 0.02 264)",
  string: "oklch(0.90 0.16 155)",
  keyword: "oklch(0.90 0.18 300)",
  boolean: "oklch(0.90 0.16 255)",
  number: "oklch(0.92 0.16 80)",
  punctuation: "oklch(0.85 0.02 264)",
  tag: "oklch(0.90 0.20 350)",
  attr: "oklch(0.92 0.16 55)",
  component: "oklch(0.90 0.16 255)",
} as const;

export type TokenType = keyof typeof LIGHT_TOKENS;
