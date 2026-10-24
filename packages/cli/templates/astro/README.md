# Ninna UI + Astro

A TypeScript starter with Astro 7 and its React 19 integration, Tailwind CSS 4, and published Ninna UI packages.

## Run the project

Requires Node.js 22.23.4+. Node.js 24 LTS is recommended for all templates.

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

You can also use pnpm, Yarn, or Bun. Use the same package manager for installation and scripts. Commit its generated lockfile. The private application's version starts at 0.0.0 independently of the CLI release.

## Structure

- `src/layouts/Layout.astro`: document, metadata, and the selected theme attribute.
- `src/styles/globals.css`: Tailwind, the Ninna preset, and CodeBlock styles.
- `src/components/Showcase.tsx`: a labeled form, alert, color examples, code panel, and keyboard-accessible dialog.
- `public/favicon.svg`: local icon.

## Rendering and hydration

Astro pre-renders the page. One React island uses client:load to hydrate the interactive Showcase. Keep React state and event handlers in .tsx components; callbacks cannot be passed from .astro markup.

The initial render is deterministic: no random IDs, dates, browser storage, or system-theme checks during React rendering. Styling the body is supported; moving CSS classes into a wrapper does not fix a server/client rendering mismatch.

## Choose a theme

The CLI configures your selected preset. To switch later, update both the preset import in `src/styles/globals.css` and `data-theme` in `src/layouts/Layout.astro` to the same name: `default`, `ocean`, `sunset`, `forest`, or `minimal`.

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/ocean.css";
@import "@ninna-ui/code-block/styles";
@variant dark (&:is(.dark *));
```

Without a root light/dark class, CSS follows the system color scheme. For a fixed mode, set `class="dark"` or `class="light"` on the root html element. Keep the server and first client render consistent when adding a persisted theme switcher.

[Ninna UI documentation](https://ninna-ui.dev/getting-started/installation)
