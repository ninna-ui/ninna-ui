# Ninna UI + Next.js

A TypeScript starter with Next.js 16 App Router and React 19, Tailwind CSS 4, and published Ninna UI packages.

## Run the project

Requires Node.js 20.9+. Node.js 24 LTS is recommended for all templates.

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm run start
```

You can also use pnpm, Yarn, or Bun. Use the same package manager for installation and scripts. Commit its generated lockfile. The private application's version starts at 0.0.0 independently of the CLI release.

## Structure

- `app/layout.tsx`: document, metadata, and the selected theme attribute.
- `app/globals.css`: Tailwind, the Ninna preset, and CodeBlock styles.
- `app/components/Showcase.tsx`: a labeled form, alert, color examples, code panel, and keyboard-accessible dialog.
- `public/favicon.svg`: local icon.

## Rendering and hydration

The root layout and page are Server Components. The interactive Showcase has a use client boundary and matching server/client initial state. No hydration warnings are suppressed.

The initial render is deterministic: no random IDs, dates, browser storage, or system-theme checks during React rendering. Styling the body is supported; moving CSS classes into a wrapper does not fix a server/client rendering mismatch.

## Choose a theme

The CLI configures your selected preset. To switch later, update both the preset import in `app/globals.css` and `data-theme` in `app/layout.tsx` to the same name: `default`, `ocean`, `sunset`, `forest`, or `minimal`.

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/ocean.css";
@import "@ninna-ui/code-block/styles";
@variant dark (&:is(.dark *));
```

Without a root light/dark class, CSS follows the system color scheme. For a fixed mode, set `className="dark"` or `className="light"` on the root html element. Keep the server and first client render consistent when adding a persisted theme switcher.

[Ninna UI documentation](https://ninna-ui.dev/getting-started/installation)
