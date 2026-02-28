import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { codeMeta } from "./meta";

import Basic from "./demos/basic";
import Colors from "./demos/colors";
import Sizes from "./demos/sizes";
import UseCases from "./demos/useCases";

export const codeSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const CODE_PROPS: PropDefinition[] = [
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Color variant of the code",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'",
    defaultValue: "'sm'",
    description: "Text size of the code",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <p>
      Run <Code>npm install</Code> to install dependencies.
    </p>
  );
}`;

export function CodeView() {
  return (
    <div className="">
      <ComponentHeader meta={codeMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Code component to display inline code snippets."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Default code rendering within text."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/code/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Code with different color variants for semantic meaning."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/code/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Code with different text sizes."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/primitives/code/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of Code component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/code/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Code component."
        >
          <PropsTable data={CODE_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Semantic HTML: Uses native code element for proper semantics</li>
              <li>Monospace font: Uses monospace font for code readability</li>
              <li>Color contrast: All color variants meet WCAG AA contrast requirements</li>
              <li>Screen readers: Code content is read naturally by screen readers</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
