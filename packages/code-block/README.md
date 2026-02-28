# @ninna-ui/code-block

> Syntax-highlighted code block component for Ninna-UI with copy-to-clipboard, line numbers, and automatic dark mode.

[![npm](https://img.shields.io/npm/v/@ninna-ui/code-block.svg)](https://www.npmjs.com/package/@ninna-ui/code-block)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://ninna-ui.dev/code-block/code-block)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/code-block)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/code-block)**

A standalone code display component for [Ninna UI](../../README.md) — built-in syntax highlighting for TSX/JSX/CSS/HTML and more, copy-to-clipboard button, optional line numbers, and automatic light/dark mode theming via oklch colors.

**No external syntax highlighting library required.** The component uses a lightweight regex-based tokenizer — no Prism, no Shiki, no heavy dependencies.

## Installation

```bash
pnpm add @ninna-ui/code-block @ninna-ui/core
```

## CSS Setup

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
@source "../node_modules/@ninna-ui/*";
```

## Quick Start

```tsx
import { CodeBlock } from "@ninna-ui/code-block";

function Example() {
  return (
    <CodeBlock
      code={`import { Button } from "@ninna-ui/primitives";

export function App() {
  return <Button color="primary">Click me</Button>;
}`}
      language="tsx"
      showLineNumbers
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | — | The source code to display |
| `language` | `CodeBlockLanguage` | `"tsx"` | Syntax highlighting language |
| `showLineNumbers` | `boolean` | `false` | Show line numbers |
| `showCopyButton` | `boolean` | `true` | Show copy-to-clipboard button |
| `copyButtonAlwaysVisible` | `boolean` | `false` | Keep copy button visible (vs hover-only) |
| `className` | `string` | — | Additional CSS classes |

### Supported Languages

```typescript
type CodeBlockLanguage =
  | "tsx" | "jsx" | "typescript" | "javascript"
  | "css" | "html" | "json" | "bash"
  | "markdown" | "plaintext";
```

Set `language="plaintext"` to disable syntax highlighting entirely.

## Features

- **Lightweight tokenizer** — Regex-based, no Prism/Shiki dependency
- **Automatic dark mode** — oklch syntax colors adapt to light/dark theme
- **Copy to clipboard** — One-click copy with visual feedback
- **Line numbers** — Optional, styled to not interfere with code selection
- **`data-slot` API** — Target `code-block`, `code-content`, `copy-button` for CSS overrides

## All Exports

```typescript
import {
  CodeBlock,
  type CodeBlockProps,
  type CodeBlockLanguage,
} from "@ninna-ui/code-block";
```

## Related Packages

- [`@ninna-ui/core`](../core/README.md) — Design tokens and theme presets (required)
- [`@ninna-ui/primitives`](../primitives/README.md) — Inline `Code` component for short snippets
- [All packages](../../README.md#packages) — Complete package list

## License

[MIT](../../LICENSE)
