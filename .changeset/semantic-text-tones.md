---
"@ninna-ui/core": minor
"@ninna-ui/primitives": patch
"@ninna-ui/feedback": patch
"@ninna-ui/forms": patch
"@ninna-ui/navigation": patch
"@ninna-ui/overlays": patch
"@ninna-ui/data-display": patch
"@ninna-ui/cli": patch
---

Add explicit semantic text tones alongside existing fill/content pairs to fix low contrast in soft, outline, ghost and text variants across all five presets and both color modes. Preserve hue and chroma while tuning lightness only where contrast requires it, and retain vivid decorative outline borders. Adjust four near-threshold solid fills to keep existing hover behavior accessible. Add numeric, gamut-aware contrast regression checks for solid rest/hover pairs and colored text on base surfaces and tints.
