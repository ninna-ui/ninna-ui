---
"@ninna-ui/data-display": minor
"@ninna-ui/navigation": minor
"@ninna-ui/primitives": minor
"@ninna-ui/feedback": minor
"@ninna-ui/overlays": minor
"@ninna-ui/forms": minor
"@ninna-ui/core": minor
---

# Design System Consistency and Component Refinements

This release focuses on standardizing visual continuity, theme support, layout alignment, and accessibility across core component packages.

### Component Updates:

- **Stepper & Timeline**: Re-engineered connector line logic to ensure perfect center-to-center bridging between indicators. Fixed gaps in horizontal and vertical layouts and implemented full brand/semantic color support for indicators and separators.
- **Card**: Implemented comprehensive variant support including `solid`, `soft` (filled), and `outline`. Added cross-theme color propagation (primary, secondary, accent, neutral, success, danger, warning, info) and standardized header/footer alignment.
- **Tree**: Refined indentation logic and branch line connectivity for complex nested structures. Added support for `disabled` states and customized folder/file icons.
- **Checkbox & CheckboxGroup**: Standardized indeterminate state handling, uncontrolled/controlled synchronization, and consistent styling with the rest of the forms package.
- **Slider**: Fixed accessibility issues by correctly mapping `aria-labelledby` from labels to internal slider components. Standardized `data-slot` mappings for testing parity.
- **Blockquote**: Updated `solid` and `soft` variants for better visual distinction and WCAG contrast compliance.
- **Documentation**: Established the "Neutral First" convention for all component examples. Synchronized API references, sidebars, and interactive demos across the Playground, Documentation site, and ninna-ui-web.

### Performance and Stability:

- Resolved multiple TypeScript and ESLint issues across the monorepo, including `Unexpected any` and unused variable warnings.
- Fixed unit test failures in the navigation and primitives packages related to component composition and variant styling.
- Optimized bundle size by refining internal component dependency mappings.
