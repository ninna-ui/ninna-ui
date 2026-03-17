# Ninna UI Storybook

> **Interactive component explorer and visual testing environment** for the Ninna UI design system - 65+ stories covering all 69 components across 8 packages, with live theme switching, dark mode toggle, and auto-generated API docs.

Built with [Storybook 10](https://storybook.js.org/) for isolated component development, visual regression testing, and interactive prop exploration.

## Development

```bash
# From monorepo root
pnpm --filter docs dev
```

Runs at `http://localhost:6006` by default.

## Features

- **Auto-generated API docs** - `tags: ['autodocs']` on every story surfaces prop tables, usage examples, and type information automatically
- **Live theme switching** - Toggle between all 5 Ninna UI presets (Default, Ocean, Sunset, Forest, Minimal) via the toolbar
- **Dark mode toggle** - Test light and dark mode variants side by side
- **Interactive controls** - Edit every prop in real-time via Storybook controls panel
- **Full component coverage** - Stories for all 8 component packages: primitives, feedback, forms, layout, overlays, navigation, data-display, and code-block

## Story Organization

Stories mirror the Ninna UI package structure for easy navigation:

```
src/stories/
├── primitives/     # Button, Badge, Avatar, Text, Heading, Link, Code, etc.
├── feedback/       # Alert, Toast, Loading, Progress, Skeleton, etc.
├── forms/          # Input, Select, Checkbox, Switch, Slider, etc.
├── layout/         # Stack, Grid, Container, Flex, SimpleGrid, etc.
├── overlays/       # Modal, Drawer, Popover, Tooltip, DropdownMenu
├── navigation/     # Tabs, Accordion, Breadcrumbs, Pagination, Stepper
├── data-display/   # Card, Table, DataTable, Timeline, Tree, Calendar
└── code-block/     # CodeBlock with syntax highlighting
```

## Related

- [Ninna UI](../../README.md) - Main project README and package overview
- [Playground](../playground/README.md) - Developer sandbox for local component preview
- [Documentation Website](https://www.ninna-ui.dev) - Full public docs with live demos
