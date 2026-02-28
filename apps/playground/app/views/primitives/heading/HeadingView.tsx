import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { headingMeta } from "./meta";

import Basic from "./demos/basic";
import Levels from "./demos/levels";
import Sizes from "./demos/sizes";
import Weights from "./demos/weights";
import Colors from "./demos/colors";
import Alignment from "./demos/alignment";
import Truncate from "./demos/truncate";
import UseCases from "./demos/useCases";

export const headingSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "levels", title: "Heading Levels", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "weights", title: "Weights", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "alignment", title: "Alignment", level: 3 },
  { id: "truncate", title: "Truncation", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const HEADING_PROPS: PropDefinition[] = [
  {
    name: "as",
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
    defaultValue: "'h2'",
    description: "The heading level - determines the semantic HTML element",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'",
    description: "Override the default size for the heading level",
  },
  {
    name: "weight",
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    description: "Font weight override",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Text color",
  },
  {
    name: "align",
    type: "'left' | 'center' | 'right'",
    description: "Text alignment",
  },
  {
    name: "truncate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to truncate text with ellipsis",
  },
  {
    name: "lineClamp",
    type: "1 | 2 | 3 | 4 | 5 | 6",
    description: "Maximum number of lines before truncating",
  },
  {
    name: "noWrap",
    type: "boolean",
    defaultValue: "false",
    description: "Whether text should not wrap",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Heading } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Heading as="h1">Page Title</Heading>
  );
}`;

export function HeadingView() {
  return (
    <div className="">
      <ComponentHeader meta={headingMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Heading component to render semantic headings."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Default heading rendering with automatic styling based on level."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/heading/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="levels"
          title="Heading Levels"
          description="All six heading levels (h1-h6) with their default styles."
          level={3}
        >
          <CodePreview
            component={<Levels />}
            filePath="app/views/primitives/heading/demos/levels.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Override the default size with the size prop."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/primitives/heading/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="weights"
          title="Weights"
          description="Different font weights from light to bold."
          level={3}
        >
          <CodePreview
            component={<Weights />}
            filePath="app/views/primitives/heading/demos/weights.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Headings with different color variants."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/heading/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="alignment"
          title="Alignment"
          description="Text alignment options: left, center, and right."
          level={3}
        >
          <CodePreview
            component={<Alignment />}
            filePath="app/views/primitives/heading/demos/alignment.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="truncate"
          title="Truncation"
          description="Truncate headings with ellipsis or limit to specific number of lines."
          level={3}
        >
          <CodePreview
            component={<Truncate />}
            filePath="app/views/primitives/heading/demos/truncate.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of Heading component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/heading/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Heading component."
        >
          <PropsTable data={HEADING_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Semantic HTML: Always use the appropriate heading level (h1-h6) for document structure</li>
              <li>Heading hierarchy: Maintain proper heading order (h1 → h2 → h3) without skipping levels</li>
              <li>Single h1: Each page should have only one h1 element</li>
              <li>Color contrast: All color variants meet WCAG AA contrast requirements</li>
              <li>Screen readers: Headings help screen reader users navigate the page structure</li>
              <li>Size vs Level: Use the &apos;as&apos; prop for semantic level and &apos;size&apos; prop for visual styling</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
