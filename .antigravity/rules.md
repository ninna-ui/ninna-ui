# Ninna UI — Project Rules (Google Antigravity)

This is the Ninna UI component library monorepo. Always follow these rules and load the relevant skill.

## Always

- Read `@/AGENTS.md` for the package layout and the exact `@ninna-ui/*` import map. Never guess imports.
- Style with **semantic tokens only** (`bg-primary`, `text-base-content`, `bg-base-100`, `border-base-200`). Never hardcode hex/palette colors for normal UI.
- There is **NO `tailwind.config.ts`** — Tailwind v4 is configured via CSS imports only.
- Never import from `@ninna-ui/react-internal` or `@ninna-ui/utils` in app code (internal packages).

## Skills (Agent Skills live in `.agents/skills/`)

Load the matching skill before acting; full instructions are in `.claude/skills/` (source of truth):

- **ninna-component-authoring** — creating/editing a component (4-file pattern, cva, data-slot, forwardRef).
- **ninna-theming-tokens** — colors, theme presets, oklch tokens, dark mode.
- **ninna-accessibility-patterns** — WCAG 2.1 AA for interactive components.
- **ninna-component-testing** — Vitest + Testing Library + @sa11y/vitest tests.

## Workflows (slash commands)

Defined in `.agent/workflows/` and `.agents/workflows/`: `/new-component`, `/audit-a11y`, `/add-theme-token`.

## Cross-IDE note

This repo supports both Windsurf (`.windsurf/workflows/`, `.claude/skills/`) and Antigravity (`.agents/skills/`, `.agent/workflows/`). The canonical content lives under `.claude/skills/` and `.windsurf/workflows/`; the Antigravity files are thin pointers — edit the canonical files.
