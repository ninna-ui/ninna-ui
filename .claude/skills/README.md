# Ninna UI — Claude Agent Skills

Portable [Claude Agent Skills](https://github.com/anthropics/skills) that teach AI agents how to build Ninna UI to the project's framework-quality standard (a tree-shakeable React component library with zero-runtime oklch theming and Radix-powered accessibility).

Each skill is a folder with a `SKILL.md` (YAML frontmatter + instructions). Agents auto-load a skill when its `description` matches the task. These mirror the canonical docs in `docs/standards/` and are kept in sync with the codebase.

## Skills

| Skill                                                                     | Use it when                                                                                                                                                                                 |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ninna-component-authoring`](./ninna-component-authoring/SKILL.md)       | Creating/refactoring a component in `packages/*/src` — 4-file pattern, cva variants, `data-slot`, forwardRef, barrels, package choice. Includes copy-paste stubs in `templates/component/`. |
| [`ninna-theming-tokens`](./ninna-theming-tokens/SKILL.md)                 | Styling with colors, editing/adding theme presets, auditing for hardcoded colors — oklch semantic tokens, dark mode, `data-slot` CSS API, no `tailwind.config`.                             |
| [`ninna-accessibility-patterns`](./ninna-accessibility-patterns/SKILL.md) | Building/reviewing interactive components for WCAG 2.1 AA — semantic HTML, focus/ARIA states, keyboard nav, Radix via `@ninna-ui/react-internal`.                                           |
| [`ninna-component-testing`](./ninna-component-testing/SKILL.md)           | Writing/reviewing `*.test.tsx` — Vitest + Testing Library + `@sa11y/vitest`, mandatory test matrix, what not to test.                                                                       |

## Cross-IDE support (Windsurf + Google Antigravity)

The canonical skill content lives here in `.claude/skills/`. The same skills/workflows are exposed to both IDEs:

| Concern                | Windsurf                                     | Google Antigravity                                                      |
| ---------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| Skills                 | `.claude/skills/<name>/SKILL.md` (canonical) | `.agents/skills/<name>/SKILL.md` (thin pointers)                        |
| Workflows (`/command`) | `.windsurf/workflows/<name>.md` (canonical)  | `.agent/workflows/<name>.md` + `.agents/workflows/<name>.md` (pointers) |
| Project rules          | `.windsurf/rules/`                           | `.antigravity/rules.md`                                                 |

Slash commands available in both: `/new-component`, `/audit-a11y`, `/add-theme-token`.

**Edit the canonical files** (`.claude/skills/`, `.windsurf/workflows/`); the Antigravity files are pointers (`@/path` references) that intentionally avoid content duplication. Both `.agent/workflows/` and `.agents/workflows/` are provided because Google's own docs/codelabs use both spellings across Antigravity versions.

## Conventions encoded

- Canonical 4-file component pattern + co-located tests.
- `cva` variant matrices; semantic-token-only styling (no hardcoded colors).
- `data-slot` customization API; `forwardRef` + `displayName` everywhere.
- WCAG 2.1 AA gate via `toBeAccessible()`.
- Zero-runtime oklch theming; no `tailwind.config.ts`.

Authoritative source of truth remains `docs/standards/` and `AGENTS.md`.
