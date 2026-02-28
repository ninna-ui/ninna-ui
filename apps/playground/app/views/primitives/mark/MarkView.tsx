import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { markMeta } from "./meta";

import Basic from "./demos/basic";
import Colors from "./demos/colors";
import UseCases from "./demos/useCases";

export const markSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const MARK_PROPS: PropDefinition[] = [
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Color variant for the highlight",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Mark, Text } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Text>
      This is some text with <Mark>highlighted content</Mark> in the middle.
    </Text>
  );
}`;

export function MarkView() {
  return (
    <div className="">
      <ComponentHeader meta={markMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Mark component to highlight text."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Default text highlighting."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/mark/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Different color variants for highlighting."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/mark/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of Mark component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/mark/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Mark component."
        >
          <PropsTable data={MARK_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Semantic HTML: Uses native mark element for proper semantics</li>
              <li>Screen readers: Content is announced as highlighted/marked text</li>
              <li>Color contrast: Text colors ensure readable contrast against backgrounds</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
