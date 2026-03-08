# Getting Started with Ninna-UI

Quick start guide for installing and using Ninna-UI in your React project.

> **Full documentation:** [ninna-ui.dev](https://ninna-ui.dev) — live component demos, API reference, and guides.

---

## Installation

### 1. Install the Core Package

```bash
npm install @ninna-ui/core @ninna-ui/primitives
# or
pnpm add @ninna-ui/core @ninna-ui/primitives
# or
yarn add @ninna-ui/core @ninna-ui/primitives
```

### 2. Import the Theme CSS

Add this to your main CSS file:

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));
```

### 3. Set `data-theme` on your root element

```html
<html data-theme="default">
```

> **Required:** Theme variables only activate when `data-theme` matches the preset name. No `@source` directive needed — each preset automatically scans `@ninna-ui` package dist files.

**Available theme presets:**
- `default.css` → `data-theme="default"` — Electric purple + magenta
- `ocean.css` → `data-theme="ocean"` — Blue + cyan
- `sunset.css` → `data-theme="sunset"` — Orange + rose
- `forest.css` → `data-theme="forest"` — Green + amber
- `minimal.css` → `data-theme="minimal"` — Monochrome

Tailwind CSS v4 uses CSS-first configuration — no `tailwind.config.ts` needed.

---

## Basic Usage

### Import Components

```typescript
import { Button } from '@ninna-ui/primitives';
import { Input, Field } from '@ninna-ui/forms';
import { Modal } from '@ninna-ui/overlays';
```

### Use in Your App

```tsx
import { Button } from '@ninna-ui/primitives';

export default function App() {
  return (
    <div className="p-8">
      <Button color="primary">Click me</Button>
    </div>
  );
}
```

---

## Available Packages

| Package | Purpose | Install |
|---------|---------|---------|
| `@ninna-ui/core` | Design tokens and CSS themes | `npm install @ninna-ui/core` |
| `@ninna-ui/primitives` | Basic components (Button, Badge, Avatar, etc.) | `npm install @ninna-ui/primitives` |
| `@ninna-ui/forms` | Form components (Input, Select, Checkbox, etc.) | `npm install @ninna-ui/forms` |
| `@ninna-ui/feedback` | Feedback components (Alert, Toast, Progress, etc.) | `npm install @ninna-ui/feedback` |
| `@ninna-ui/layout` | Layout components (Stack, Flex, Grid, etc.) | `npm install @ninna-ui/layout` |
| `@ninna-ui/overlays` | Overlay components (Modal, Drawer, Popover, etc.) | `npm install @ninna-ui/overlays` |
| `@ninna-ui/navigation` | Navigation components (Tabs, Accordion, Breadcrumbs, etc.) | `npm install @ninna-ui/navigation` |
| `@ninna-ui/data-display` | Data display components (Card, Table, Timeline, etc.) | `npm install @ninna-ui/data-display` |
| `@ninna-ui/cli` | Command-line interface for Ninna-UI | `npm install @ninna-ui/cli` |
| `@ninna-ui/code-block` | Syntax-highlighted code block | `npm install @ninna-ui/code-block` |

---

## Customization

### Change Theme

Switch themes by importing a different CSS file and updating `data-theme` on `<html>`:

```css
/* 1. Change the CSS import */
@import "@ninna-ui/core/theme/presets/ocean.css";
```

```html
<!-- 2. Update data-theme on your root element -->
<html data-theme="ocean">
```

### Override Colors

Use CSS custom properties to customize colors — scope to `[data-theme]` to match the current selector pattern:

```css
[data-theme="default"] {
  --color-primary: oklch(0.55 0.25 280);
  --color-primary-content: oklch(0.97 0.01 280);
}

/* Dark mode overrides */
.dark [data-theme="default"],
[data-theme="default"].dark {
  --color-primary: oklch(0.72 0.22 280);
  --color-primary-content: oklch(0.12 0.02 280);
}
```

### Style Components with `data-slot`

Target specific component parts for styling:

```css
/* Style the input inside a Field component */
[data-slot="input"] {
  border-radius: 0.5rem;
}
```

---

## Next Steps

- **[Documentation Website](https://ninna-ui.dev)** — Full component docs with live examples
- **[Component Standards](../standards/COMPONENT_STANDARD.md)** — Learn component patterns
- **[Architecture](../architecture/ARCHITECTURE.md)** — Understand the system design
- **[Accessibility](../standards/ACCESSIBILITY.md)** — WCAG compliance details
- **[Contributing](./CONTRIBUTING.md)** — Help improve Ninna-UI

---

## Requirements

- **React:** >=19.0.0
- **React DOM:** >=19.0.0
- **Tailwind CSS:** >=4.0.0
- **Node.js:** >=20.0.0

---

## Support

- **Documentation Website:** [ninna-ui.dev](https://ninna-ui.dev)
- **GitHub Issues:** [Report bugs](https://github.com/ninna-ui/ninna-ui/issues)
- **npm:** [npmjs.com/org/ninna-ui](https://www.npmjs.com/org/ninna-ui)
- **Contributing:** [CONTRIBUTING.md](./CONTRIBUTING.md)

