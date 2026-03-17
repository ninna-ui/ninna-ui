# @ninna-ui/playground

> **Internal developer sandbox for Ninna UI** - live component demos, interactive prop exploration, and local preview for all 69 components. Built with React Router v7 in SPA mode.

**This is an internal developer tool, not the public documentation website.**  
For the full public docs, visit **[ninna-ui.dev](https://ninna-ui.dev)**.

Built with [React Router v7](https://reactrouter.com/) in SPA mode, powered entirely by Ninna UI components. Runs locally for contributors to preview, test, and iterate on components in real-time.

## Development

```bash
# From monorepo root
pnpm --filter playground dev
```

Runs at `http://localhost:3000` by default.

## Structure

```
playground/
├── app/
│   ├── components/
│   │   ├── docs/           # Documentation components (CodePreview, PropsTable, etc.)
│   │   └── layout/         # Sidebar, Topbar, TableOfContents
│   ├── views/
│   │   ├── getting-started/ # Introduction, Installation, Theming, Styling, Colors
│   │   ├── primitives/      # 15 primitive component pages
│   │   ├── feedback/        # 9 feedback component pages
│   │   ├── forms/           # 17 form component pages
│   │   ├── layout/          # 10 layout component pages
│   │   ├── overlays/        # 5 overlay component pages
│   │   ├── navigation/      # 5 navigation component pages
│   │   ├── data-display/    # 7 data display component pages
│   │   └── code-block/      # CodeBlock component page
│   ├── routes/              # Flat-file routes (dot notation)
│   └── routes.ts            # Route config (flatRoutes from @react-router/fs-routes)
├── react-router.config.ts   # React Router config (SPA mode, ssr: false)
└── package.json
```

## Sidebar Sections

- **Getting Started** - Introduction, Installation, Theming, Styling, Colors
- **Primitives** - Button, Badge, Avatar, Text, Heading, Link, Code, Blockquote, List, Kbd, Mark, Divider, IconButton, LinkOverlay
- **Feedback** - Alert, Toast, Loading, Progress, CircularProgress, Status, Skeleton, EmptyState
- **Forms** - Input, Textarea, Checkbox, Switch, RadioGroup, Select, Slider, Field, and more
- **Layout** - Box, Container, Stack, Flex, Grid, SimpleGrid, Center, Wrap, AspectRatio, Separator
- **Overlays** - Modal, Drawer, Popover, Tooltip, DropdownMenu
- **Navigation** - Tabs, Accordion, Breadcrumbs, Pagination, Stepper
- **Data Display** - Card, Stat, Table, DataTable, Timeline, Tree, Calendar
- **Code Block** - CodeBlock

## Page Structure

Each component page follows a consistent pattern:

1. **ComponentHeader** - Title, description, package import
2. **Usage** - Import example with `UsageExample`
3. **Demos** - Live interactive examples with `CodePreview`
4. **API Reference** - Props table with `PropsTable`
5. **Accessibility** - ARIA notes and keyboard support

## Related

- [Ninna UI](../../README.md) - Main project README
- [Storybook](../docs/README.md) - Component stories
