import { PackageOverview } from "~/components/docs/PackageOverview";
import { UsageExample } from "~/components/docs";
import type { ComponentSectionType } from "~/components/docs/types";

export const codeBlockOverviewSections: ComponentSectionType[] = [
  { id: "features", title: "Features", level: 2 },
  { id: "components", title: "Components", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const components = [
  {
    name: "CodeBlock",
    description: "Syntax-highlighted code block with copy-to-clipboard, line numbers, and explicit light/dark mode control.",
    href: "/code-block",
  },
];

const QUICK_START = `/* your CSS entry point */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

/* Required: loads --ninna-cb-* syntax token CSS variables */
@import "@ninna-ui/code-block/styles";`;

const features = [
  "Zero external highlighting dependencies - pure regex tokenizer",
  "TSX / JSX / CSS / HTML / JSON / Bash language support",
  "Copy-to-clipboard button with hover or always-visible mode",
  "Optional line numbers",
  "colorScheme prop: force light, dark, or auto (follows theme)",
  "CSS custom properties (--ninna-cb-*) for per-token color overrides",
  "Static CSS - no runtime style injection, strict CSP compatible",
  "Full TypeScript support",
];

export default function CodeBlockOverview() {
  return (
    <div>
      <PackageOverview
        packageName="@ninna-ui/code-block"
        title="Code Block"
        description="Lightweight syntax-highlighted code block with no external highlighting dependencies. Copy-to-clipboard, line numbers, explicit color scheme control, and strict CSP compliance via static CSS."
        components={components}
        features={features}
      />
      <div className="mt-8 space-y-3">
        <p className="text-sm font-semibold text-base-content">CSS Setup</p>
        <p className="text-sm text-base-content/60">
          After installing, add one extra <code className="font-mono text-xs bg-base-200 px-1.5 py-0.5 rounded">@import</code> line
          to your CSS entry point. Without it syntax colors will be missing.
        </p>
        <UsageExample code={QUICK_START} />
      </div>
    </div>
  );
}
