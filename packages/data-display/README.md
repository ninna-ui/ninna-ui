# @ninna-ui/data-display

> **7 React data visualization components** - Card, Stat, Table, DataTable, Timeline, Tree, and Calendar. Built with semantic HTML, keyboard navigation, and ARIA roles. No Radix dependency - pure custom implementations.

[![npm](https://img.shields.io/npm/v/@ninna-ui/data-display.svg)](https://www.npmjs.com/package/@ninna-ui/data-display)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/data-display)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/data-display)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/data-display)**

Data presentation components for [Ninna UI](../../README.md) - everything you need to display structured information, metrics, and hierarchical data. All are custom implementations (no Radix dependency) built on semantic HTML - `<table>`, `<th scope>`, `<caption>`, `role="grid"`, `role="tree"`, and proper `aria-expanded` attributes for screen reader compatibility.

## Installation

```bash
pnpm add @ninna-ui/data-display @ninna-ui/core
```

## CSS Setup

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));
```

## HTML Setup

Add the `data-theme` attribute to your `<html>` element:

```html
<html data-theme="default">
```

## Components

| Component | Description | Key Features |
|-----------|-------------|-------------|
| `Card` | Content container with header, body, footer | Variants, padding control, clickable |
| `Stat` | Key metric display (label, value, delta) | Trend indicators, color-coded deltas |
| `Table` | Semantic HTML table with styling | Striped, hoverable, compact modes |
| `DataTable` | Feature-rich data grid | Sorting, pagination, column resize |
| `Timeline` | Chronological event display | Vertical layout, icon markers |
| `Tree` | Hierarchical tree view | Expandable nodes, keyboard navigation |
| `Calendar` | Date display/selection | Month view, date range, keyboard nav |

## Quick Start

```tsx
import { Card, Stat, Table, Timeline } from "@ninna-ui/data-display";

function Dashboard() {
  return (
    <>
      {/* Stat Cards */}
      <Card>
        <Card.Header>Revenue</Card.Header>
        <Card.Body>
          <Stat value="$12,450" label="Total Revenue" delta="+12.5%" trend="up" />
        </Card.Body>
      </Card>

      {/* Table */}
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Project Alpha</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}
```

## Accessibility

- **Table** - Semantic `<table>`, `<th scope="col">`, `<caption>` for screen readers
- **DataTable** - `role="grid"`, sortable column headers with `aria-sort`
- **Tree** - `role="tree"` / `role="treeitem"`, `aria-expanded`, arrow key navigation
- **Calendar** - `role="grid"`, arrow key date navigation, `aria-selected`
- **All components** - `forwardRef`, `data-slot`, `className` support

## Related Packages

- [`@ninna-ui/core`](../core/README.md) - Design tokens and theme presets (required)
- [`@ninna-ui/layout`](../layout/README.md) - Layout components for page structure
- [`@ninna-ui/primitives`](../primitives/README.md) - Base components (Badge, Text, Heading)
- [All packages](../../README.md#packages) - Complete package list

## License

[MIT](../../LICENSE)
