# React and Tailwind library audit

This reviews the unreleased theme draft against official shadcn/ui, daisyUI,
Chakra UI, Mantine, React, Next.js and Tailwind guidance. These libraries make
different tradeoffs; none supplies a universal architecture to copy.

## Design decisions retained

| Reference                                               | Relevant pattern                                                           | Ninna decision                                                                                                                       |
| ------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [shadcn/ui](https://ui.shadcn.com/docs/theming)         | Semantic CSS variables and foreground/background pairs                     | Keep semantic colors and matching `-content`; native Tailwind utilities resolve predictably.                                         |
| [daisyUI](https://daisyui.com/docs/colors/)             | Theme-aware color/content pairs                                            | Keep the existing two-role API and independently imported CSS presets.                                                               |
| [Chakra UI](https://chakra-ui.com/docs/theming/recipes) | Base styles, variants, compound variants and defaults                      | Retain typed CVA recipes, consumer class overrides and component slots; no second recipe engine.                                     |
| [Mantine](https://mantine.dev/theming/colors/)          | Color scales, light/dark selection and optional filled-color auto-contrast | Validate explicit static pairs at authoring time. A runtime resolver or ten-shade scale is not needed for Ninna's current contract.  |
| [Tailwind](https://tailwindcss.com/docs/theme)          | Color variables generate text, background, border and ring utilities       | `text-primary`, `bg-primary`, `border-primary` and `ring-primary` share one value. No `text-primary-text` alias or utility override. |

The single shared semantic shade restricts how vivid a readable light-mode fill
can be. A broader scale, as used by Mantine or Radix, would offer more independent
art direction. Ninna intentionally accepts this restriction for its simpler API;
it does not imply that one shade is best for every design system.

## Corrections from this audit

- Filled Input controls now retain an identifying boundary, including invalid
  controls. Textarea reuses this recipe. A subtle fill alone was insufficient.
- Switch exposes invalid, busy and disabled states, inherits FormControl naming,
  and hides decorative track labels/thumb content from assistive technology.
  Its visible ON/OFF labels still follow the root checked state. Wrapper regression
  tests cover keyboard interaction and controlled state without testing CSS strings.
- Built React entry points retain `"use client"`, following [Next.js library
  author guidance](https://nextjs.org/docs/app/getting-started/server-and-client-components#third-party-components).
  The existing Rollup pass strips directives, so a small post-build callback
  restores the directive and shifts source-map mappings by one generated line.
  Existing bundling, tree shaking, exports and declarations remain in place.
  Core and utils stay unmarked; no theme provider or browser-only palette logic
  is introduced. CI checks actual built entries rather than source annotations.
- CI now checks the generated `safelist.css`, not just its importing file. This
  prevents stale generated utilities from silently passing the existing check.
- Core's Tailwind peer requirement starts at 4.1, matching the introduction of
  [`@source inline()`](https://tailwindcss.com/blog/tailwindcss-v4-1#safelist-specific-utilities-with-source-inline)
  used by the distributed safelist. It no longer advertises unsupported 4.0.
- Next.js examples keep a focused client wrapper that also works with published
  0.7 packages. Documentation no longer claims that oklch itself guarantees AA,
  or that CSS variables alone prevent application hydration bugs or theme flash.
  The agent theming guidance no longer recommends 50%-opacity secondary text.

## Scope and verification

The review covers every file changed by the theme draft: presets, Tailwind bridge,
class recipes, React wrappers, generated safelist, CI, Changeset and first-party
examples/documentation. It also checks emitted package boundaries and a packed
Next.js consumer. Formatting-only changes produced by the repository formatter
were distinguished from behavioral changes during source review.

The component API still forwards refs, accepts native attributes, merges caller
classes last and uses the existing Radix adapters for complex interactions.
React 19 permits ref props directly, but retaining the repository's forwardRef
convention avoids a broad, unnecessary component rewrite in this audit.

See [theme contrast evidence](./theme-contrast-validation.md) for the 1,200 palette
checks and rendered text/control measurements. jsdom/axe cannot verify rendered
CSS contrast. Automated checks do not certify every custom composition, every
assistive technology or the entire library against all WCAG criteria.

Final validation: 70 test files / 1,066 tests pass; workspace build (15 tasks),
types (27 tasks), lint/types (41 tasks), all 12 package export/pack checks and the
nine built React entry checks pass. The website guide passes types, lint and its
application production build, without regenerating public AI assets from draft
source.

A stronger browser boundary check covered 370 Input examples across all five
presets and both modes. It requires a visible border or contrasting fill rather
than skipping transparent borders, and checks the bottom edge of flushed inputs.
All 360 styled examples pass (minimum boundary 3.498:1); all text/placeholder
pairs pass (minimum 6.165:1). The ten explicitly unstyled examples opt out of
library boundaries, while retaining text checks.

An isolated Next.js 16.4.3 starter installed local tarballs for all 11 runtime
packages, passed types and production build, then passed browser hydration,
Switch Space toggling, input typing, starter form submission, Modal open/Escape
and Code tab rendering with no browser warnings/errors. Direct server imports
were exercised for Button, Heading, Input, Switch, Card and VStack. Compound API
usage remains in the starter's focused client wrapper; this is not a claim that
every compound member is independently usable as a Server Component reference.

This remains an unreleased draft for the later combined 0.8 release. No public
version was bumped, no package published and no website migration deployed.
