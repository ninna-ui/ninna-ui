import { CodeBlock } from "@ninna-ui/code-block";

const code = `/* Custom theme with oklch colors */
:root,
[data-theme="my-brand"] {
  color-scheme: light;

  --color-primary: oklch(0.55 0.20 250);
  --color-primary-content: oklch(0.97 0.01 250);

  --color-base-100: oklch(1.0 0 0);
  --color-base-content: oklch(0.21 0.021 260);
}`;

export default function CssHighlight() {
  return <CodeBlock code={code} showLineNumbers />;
}
