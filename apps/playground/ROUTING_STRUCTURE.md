# Routing Structure

## Overview

The developer sandbox uses **React Router v7** in SPA mode with **flat file-based routing** via `@react-router/fs-routes`. Routes use dot notation for nested URLs — all route files live in a single `app/routes/` directory.

Route configuration is defined in `app/routes.ts`:

```typescript
import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes() satisfies RouteConfig;
```

## Route Convention

Dot notation maps to nested URL segments:

| File | URL |
|------|-----|
| `_index.tsx` | `/` |
| `getting-started.installation.tsx` | `/getting-started/installation` |
| `primitives.button.tsx` | `/primitives/button` |
| `feedback._index.tsx` | `/feedback` (category overview) |
| `feedback.alert.tsx` | `/feedback/alert` |

## Current Routes (~55 files)

```
routes/
├── _index.tsx                           # Home
├── getting-started.installation.tsx     # /getting-started/installation
├── getting-started.theming.tsx          # /getting-started/theming
├── getting-started.styling.tsx          # /getting-started/styling
├── getting-started.colors.tsx           # /getting-started/colors
├── primitives._index.tsx                # /primitives (overview)
├── primitives.button.tsx                # /primitives/button
├── ...                                  # (15 primitive routes)
├── feedback._index.tsx                  # /feedback (overview)
├── feedback.alert.tsx                   # /feedback/alert
├── ...                                  # (9 feedback routes)
├── forms._index.tsx                     # /forms (overview)
├── ...                                  # (17 form routes)
├── layout._index.tsx                    # /layout (overview)
├── ...                                  # (10 layout routes)
├── overlays._index.tsx                  # /overlays (overview)
├── ...                                  # (5 overlay routes)
├── navigation._index.tsx                # /navigation (overview)
├── ...                                  # (5 navigation routes)
├── data-display._index.tsx              # /data-display (overview)
├── ...                                  # (7 data-display routes)
└── code-block.tsx                       # /code-block
```

## Adding a New Route

1. Create `routes/<category>.<component-name>.tsx`
2. Create the view in `views/<category>/<component-name>/`
3. Add to sidebar navigation in `components/layout/Sidebar.tsx`

Example for a new `Tag` component in primitives:
```
routes/primitives.tag.tsx          → /primitives/tag
views/primitives/tag/TagView.tsx   → View implementation
```

## Generated Types

React Router v7 generates route types in `.react-router/types/`. These are gitignored and regenerated on build/dev. The playground `tsconfig.json` includes them for type checking.
