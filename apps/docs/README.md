# Ninna UI Storybook

> Component stories and visual testing for the Ninna UI design system.

Built with [Storybook](https://storybook.js.org/) for isolated component development, visual regression testing, and interactive API exploration.

## Development

```bash
# From monorepo root
pnpm --filter docs dev
```

Runs at `http://localhost:6006` by default.

## Features

- **Auto-generated docs** — `tags: ['autodocs']` on all stories
- **Theme toolbar** — Switch between all 5 Ninna UI presets (Default, Ocean, Sunset, Forest, Minimal)
- **Dark mode toggle** — Test light and dark mode variants
- **Controls** — Interactive prop editing via Storybook controls
- **All component packages** — Stories for primitives, feedback, forms, layout, overlays, navigation, data-display, and code-block

## Story Organization

Stories mirror the package structure:

```
src/stories/
├── primitives/     # Button, Badge, Avatar, Text, Heading, etc.
├── feedback/       # Alert, Toast, Loading, Progress, etc.
├── forms/          # Input, Select, Checkbox, Switch, etc.
├── layout/         # Stack, Grid, Container, Flex, etc.
├── overlays/       # Modal, Drawer, Popover, Tooltip, etc.
├── navigation/     # Tabs, Accordion, Breadcrumbs, etc.
├── data-display/   # Card, Table, Timeline, Tree, etc.
└── code-block/     # CodeBlock
```

## Related

- [Ninna UI](../../README.md) — Main project README
- [Playground](../playground/README.md) — Interactive documentation site
