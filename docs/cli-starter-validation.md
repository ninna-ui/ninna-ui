# CLI starter validation

Validated on 25 October 2026 with Node.js 24.13.0 and npm 11.6.2 on Windows. Use Node.js 24 LTS for a common runtime across the CLI and all four starters.

## Dependency baseline

Versions were checked against the npm registry on 24 October 2026. Framework versions use compatible ranges except React Router, whose framework packages stay on the same exact release.

| Starter      | Framework          | Integration             | Minimum Node.js |
| ------------ | ------------------ | ----------------------- | --------------- |
| Vite React   | Vite 8.3.5         | React plugin 6.1.2      | 20.19 or 22.12+ |
| Next.js      | Next.js 16.4.3     | App Router, Turbopack   | 20.9            |
| React Router | React Router 8.5.0 | Vite 8.3.5, Node SSR    | 22.22           |
| Astro        | Astro 7.4.2        | React integration 7.1.1 | 22.23.4         |

All starters use React/React DOM 19.3.1, Tailwind CSS 4.3.3, TypeScript 6.0.3, and published `@ninna-ui/*@latest` packages (0.6.0 during this validation). TypeScript remains on the latest compatible 6.0 patch for Astro's checker. The CLI itself requires Node.js 22.12 or newer.

## Checks performed

- 31 CLI tests passed in both the package and root test configurations, covering actual generation for all 20 framework/preset combinations, invalid arguments, existing directories, interactive choices, package-manager guidance, and installation recovery. CLI tests explicitly use the Node environment.
- CLI build, TypeScript, ESLint, template-version validation, and whitespace checks passed.
- Packed the actual CLI tarball and generated four isolated projects outside the workspace. All four installed published dependencies with strict peer checks, type-checked, and built for production: 12 successful phases.
- Rebuilt all four projects after the final CodeBlock styling adjustment.
- Checked production pages in a browser: form submission and reset, keyboard tabs, code preview/copy, dialog labeling, focus containment, Escape dismissal, and focus restoration. No hydration warnings or console errors appeared.
- Repeated the browser interaction checks on all four development servers, after the first dependency optimization and island hydration completed. No hydration warnings or console errors appeared in development either.
- Checked all four layouts at 375px wide: no horizontal document overflow.
- Verified the Forest preset and system dark mode, including CodeBlock's background. The generator tests check the CSS import and document theme for every preset.
- Verified that the compiled CLI prompts for a preset when `--preset` is omitted, writes the selected Ocean preset to both CSS and document markup, and exits without waiting for stdin to close. `--version` reads release-managed package metadata.

The examples use deterministic initial React state. Next.js keeps the document in a server layout and places interactions in a client component; Astro hydrates the React showcase with `client:load`; React Router uses matching server/client entries. Hydration warnings are not suppressed. CodeBlock's documented CSS variables bind its colors to Ninna semantic tokens so the example follows system color mode without browser reads during render.

## Reproduce

From the repository root after installing workspace dependencies:

```bash
pnpm --filter @ninna-ui/cli test
pnpm --filter @ninna-ui/cli typecheck
pnpm --filter @ninna-ui/cli lint
node scripts/check-template-versions.js
pnpm --filter @ninna-ui/cli build
node scripts/check-cli-interactive.mjs
node scripts/smoke-cli-templates.mjs
node scripts/smoke-cli-templates.mjs --serve
```

The smoke script writes local results to the ignored `tmp/cli-starters-smoke.json` file and prints the temporary project directory. `--serve` exposes production previews on loopback ports 4311–4314; Ctrl+C stops those servers. Browser interaction and hydration checks are manual. The CLI starters workflow repeats packed generation, strict dependency installation, type checks, and production builds on relevant pull requests.

Only `@ninna-ui/cli` receives a minor Changeset. Private generated apps start at `0.0.0`; the normal release workflow handles the published CLI version.
