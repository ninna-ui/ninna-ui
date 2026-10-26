# Semantic color contrast regression

The reported Button page failure was reproduced from computed styles on the
production website. It affects the library's reuse of fill tokens as text colors;
the website's preview surface is not the root cause.

Default light measurements before the fix (normal text, minimum 4.5:1):

| Color   | Solid | Soft | Outline / ghost / text |
| ------- | ----: | ---: | ---------------------: |
| Accent  |  9.44 | 1.73 |                   1.86 |
| Info    |  8.43 | 1.98 |                   2.15 |
| Success |  8.90 | 1.88 |                   2.04 |
| Warning | 10.80 | 1.47 |                   1.54 |
| Danger  |  6.69 | 2.47 |                   2.74 |

The existing solid fill/content pairs pass in all five presets. Their 90%-opacity
hover backgrounds fail in four cases: Forest dark secondary, Ocean light accent,
Ocean dark secondary and Sunset light primary. Their fill lightness is now tuned
to pass with the existing 90%-opacity hover behavior. Hue and chroma are retained.

## Changes

- Keep established solid palettes and their matching `-content` API, with the four
  small fill-lightness corrections described above.
- Add explicit `-text` tones to each preset. Preserve the semantic hue and chroma
  and adjust lightness only when the rendered contrast requires it. Reuse the fill
  directly when it passes. Use these tones for text/icons and focus rings on base
  surfaces and tints; keep vivid decorative outline borders.
- Avoid a blanket blend with neutral text, which unnecessarily muted already
  readable colors. No runtime color calculation or new theme package is needed.
- Update first-party examples and CLI starter text to demonstrate the new roles.
- Use darker stops in the custom Button gradient demonstration, which previously
  combined bright fills with white text independently of the core palette.

## Validation

`pnpm check-theme-contrast` evaluates 1,040 color pairs from the shipped CSS:
five presets × two modes × eight semantic colors × (one solid/content pair +
three hover surfaces + three base surfaces × three tint strengths). All pass
4.5:1; the minimum across this matrix is 4.509:1. System-dark token blocks are
also checked against explicit dark. The check rejects raw semantic fill colors
used as text in public component source, guarding the original regression.

Browser measurements of all 400 standard Button examples (five variants × eight
colors × five presets × two modes) pass, with minimum 5.039:1. Measurements use
computed colors and composite transparent backgrounds through the DOM ancestry.
Keyboard focus was checked on the outline variant with the new readable ring.

The numeric check converts wide-gamut colors to sRGB with gamut mapping before
WCAG luminance calculations and alpha compositing. It runs in CI because jsdom
accessibility tests do not verify rendered CSS contrast.

This is a regression check for the documented base-50, base-100 and base-200
surfaces and semantic tints up to 20%. It does not certify arbitrary custom
palettes, nested backgrounds, opacity overrides, gradients or every possible
component composition. These need checks in their actual rendered context.

## Naming and scope

The public component API stays `color="primary"`. Custom markup uses three clear
roles: `bg-primary` for a fill, `text-primary-content` on that fill, and
`text-primary-text` for readable colored text on base surfaces or soft tints.
The existing `-content` name remains compatible. We do not overload `-foreground`
to mean colored text on a base surface: shadcn uses it for content on the matching
solid fill, the role already covered by Ninna's `-content`.

Radix also separates solid fill tones from text tones. A full 12-step scale would
add more API than this fix needs. Five CSS presets already ship as individually
importable files in core, and the CLI already defaults to the Default preset.
A separate theme package would add release and dependency work without improving
that import model. Custom themes can override their text tones directly; custom
palette authors must check all three roles in light and dark modes.

These changes are staged for the future 0.8 release. They are not published and
the production website remains on 0.7.0 until the user approves a later release.

Reference: [WCAG 2.1 text contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
and [non-text contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html).
Design references: [Radix color use cases](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)
and [shadcn token conventions](https://ui.shadcn.com/docs/theming).
