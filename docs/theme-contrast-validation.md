# Shared semantic colors: design and validation

Ninna uses the native Tailwind color model. Each semantic color has two roles:

| Token           | Use                                                       |
| --------------- | --------------------------------------------------------- |
| primary         | Text, fills, borders and focus rings using the same value |
| primary-content | Text and icons on a solid primary fill                    |

The pattern applies to all eight semantic colors. Component props remain
color="primary". There is no separate semantic text token, custom utility
override, runtime color calculation, extra theme package or expanded color scale.
Each of the five CSS presets retains the original 31 variables.

## Why this model

Tailwind maps its color namespace to text, background and other color utilities.
Keeping that mapping predictable makes custom markup and theme overrides easier.
The existing color/content pairing is also familiar from daisyUI; shadcn uses
the name foreground for the equivalent content-on-fill role.

Radix uses different scale steps for solid backgrounds and readable text, which
allows more vivid fills. That is a valid alternative, but exposing a full scale
or another text role would add API here. Ninna instead constrains its bundled
palettes so one semantic value works in the documented text and fill contexts.
This is a deliberate product choice rather than a universal rule for all systems.

The visual tradeoff is explicit: light-mode status fills are deeper green,
gold, teal and red shades; dark-mode colors are lighter. Their hue families are
preserved, with chroma limited to the sRGB gamut. Solid content is light in light
mode and dark in dark mode. No neutral blend is applied to semantic colors.

## Reproduced problem

The original production Button page reused bright fill colors as text. In the
Default light preset, soft Warning measured 1.47:1, Accent 1.73:1, Success 1.88:1,
Info 1.98:1 and Danger 2.47:1. The preview background was not the root cause.
Four original solid hover combinations also fell below AA after opacity reduced
their contrast. Palette values now account for hover as well as the resting fill.

Descriptions and example captions also faded already-colored text. The relevant
Card, Alert and Toast text now inherits its parent's full foreground color;
typography supplies hierarchy. The first-party Alert action uses inherited
content instead of hard-coded white. Enabled calendar/stepper labels retain
readable contrast; disabled controls remain visually distinct and exempt.

Form controls use the existing border roles for identifying boundaries, while
decorative dividers keep the base scale. Switch checked text and thumb colors
follow their variant; ON/OFF track labels now follow the root checked state.
Thumb movement animates independently of the color pairing. Links retain full
foreground contrast on hover, and outline buttons keep their foreground with a
soft hover tint rather than inverting text and background through a transition.

## Regression checks

Run pnpm check-theme-contrast. It checks every bundled preset in light and dark:

- Color/content pairs on solid fills and 90%-opacity hover fills.
- The same semantic color used as text on base-50, base-100 and base-200,
  including 10% soft backgrounds and 20% hover/highlight backgrounds.
- Default body text, 70%-opacity secondary text and 3:1 control boundaries.
- Semantic colors inside sRGB, the 31-variable schema, native utility mappings,
  and identical explicit/system-dark token blocks.

The current 1,200 checks pass: minimum normal-text contrast 4.801:1 and control
boundary contrast 3.201:1. The 400 standard Button examples across all five presets
and both modes pass in-browser, with minimum 6.081:1. Another 360 Alert and Card
text nodes pass in Default light/dark with minimum 6.099:1. Browser measurements
use computed styles, alpha compositing and inherited opacity, rather than
assuming that a jsdom accessibility audit checks rendered CSS contrast.

Additional rendered checks passed: 364 Switch instances/states across all five
presets (minimum indicator contrast 3.206:1 and visible-label contrast 7.592:1),
74 Input and 68 Checkbox instances across Default light/dark (minimum text
6.175:1 and boundary/indicator contrast 3.505:1), 84 Link text nodes (7.089:1),
and 56 Blockquote text/citation nodes (7.516:1). Checkbox label clicks and Switch
keyboard toggling were checked, including ON/OFF visibility and focus. The
unstyled Input example supplies its own readable placeholder styles explicitly.

These checks cover the documented surfaces and state combinations, not arbitrary
opacity overrides, nested tints, image/gradient backgrounds or custom palettes.
Custom authors should test those compositions with the same contrast thresholds.
The presets contain static CSS values; palette-authoring calculations do not ship
in application code.

A follow-up library audit strengthened the control-boundary check so transparent
borders cannot silently skip a styled field. All 370 rendered Input examples
across five presets and light/dark pass: normal text/placeholder minimum 6.165:1,
and identifying boundary minimum 3.498:1 for the 360 styled examples. This includes
the corrected filled Input boundary and the bottom border of flushed Inputs.
See [the React/Tailwind audit](./ui-library-design-audit.md) for package and SSR
integration evidence and its scope.

## Release status

This is an unreleased 0.8 draft. Do not publish packages, merge a release PR, or
deploy the website migration until the user asks for the later combined release.
The documentation site must consume the matching published palette version then.

## Primary references

- [Tailwind theme namespaces](https://tailwindcss.com/docs/theme#theme-variable-namespaces)
- [daisyUI semantic color/content pairs](https://daisyui.com/docs/colors/)
- [shadcn token conventions](https://ui.shadcn.com/docs/theming)
- [Radix scale use cases](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)
- [WCAG text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [WCAG non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
