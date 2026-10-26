---
"@ninna-ui/core": minor
"@ninna-ui/primitives": patch
"@ninna-ui/feedback": patch
"@ninna-ui/forms": patch
"@ninna-ui/navigation": patch
"@ninna-ui/overlays": patch
"@ninna-ui/data-display": patch
"@ninna-ui/layout": patch
"@ninna-ui/code-block": patch
"@ninna-ui/react-internal": patch
---

Refine all five semantic palettes so native text, background, border and ring utilities share the same accessible color token. Keep the existing color/content pairs and component color props; do not add a separate text-color API. Validate light, dark, solid hover and soft states, keep semantic colors within sRGB, and improve control boundaries and inherited descriptions. Correct Switch label and thumb colors across variants, including its checked-state track labels, expose loading and invalid states to assistive technology, and inherit FormControl labeling. Keep filled Input boundaries, link text and outline button hover colors readable. Preserve the client directive in built React component entry points for Server Component consumers without adding a theme provider. Add numeric contrast and package-boundary regression checks and update first-party examples. Custom palettes need no new variables, but should be checked for both text and fill usage.
