# Version labels

The playground and documentation website read the installed core package version:

```ts
import corePackage from "@ninna-ui/core/package.json";

export const NINNA_UI_VERSION = corePackage.version;
```

Each app exposes this through its local `app/constants/version.ts`. Import that constant in component metadata and current-release labels. Storybook release examples also read core metadata. The website SEO generator derives its version the same way.

Changesets owns public package versions. Do not edit version constants or public package versions by hand to announce a release. Merge the validated Changesets release PR, verify npm publication, then update website dependencies and regenerate SEO and AI reference assets. The playground workspace dependency follows the versioned core package automatically.

Historical changelog entries and articles keep their original versions. Private application package versions are not public Ninna UI release labels.
