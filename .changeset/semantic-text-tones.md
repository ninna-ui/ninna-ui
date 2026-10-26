---
"@ninna-ui/core": minor
"@ninna-ui/primitives": patch
"@ninna-ui/feedback": patch
"@ninna-ui/forms": patch
"@ninna-ui/navigation": patch
"@ninna-ui/overlays": patch
"@ninna-ui/data-display": patch
---

Refine all five semantic palettes so native text, background, border and ring utilities share the same accessible color token. Keep the existing color/content pairs and component color props; do not add a separate text-color API. Validate light, dark, solid hover and soft states, keep semantic colors within sRGB, and improve control boundaries and inherited descriptions. Correct Switch label and thumb colors across variants, including its checked-state track labels. Keep link text and outline button hover colors readable. Add numeric contrast regression checks and update first-party examples for the shared-color model. Custom palettes need no new variables, but should be checked for both text and fill usage.
