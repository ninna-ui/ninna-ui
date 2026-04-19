import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { separatorMeta } from "./meta";
import Basic from "./demos/basic";
import Orientation from "./demos/orientation";
import Decorative from "./demos/decorative";
import UseCases from "./demos/useCases";

export const separatorSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "orientation", title: "Orientation", level: 3 },
  { id: "decorative", title: "Decorative", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const SEPARATOR_PROPS: PropDefinition[] = [
  { name: "as", type: "ElementType", defaultValue: '"hr"', description: "Semantic HTML element to render" },
  { name: "orientation", type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: "Orientation of the separator" },
  { name: "decorative", type: "boolean", defaultValue: "true", description: "If true, separator has no semantic meaning" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const BASIC_USAGE = `import { Separator } from "@ninna-ui/layout";

export default function Example() {
  return (
    <div>
      <p>Content above</p>
      <Separator />
      <p>Content below</p>
    </div>
  );
}`;

export function SeparatorView() {
  return (
    <div className="">
      <ComponentHeader meta={separatorMeta} />
      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Separator component.">
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>
        <ComponentSection id="basic" title="Basic" description="Horizontal and vertical separators." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/layout/separator/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="orientation" title="Orientation" description="Horizontal and vertical orientations." level={3}>
          <CodePreview component={<Orientation />} filePath="app/views/layout/separator/demos/orientation.tsx" />
        </ComponentSection>

        <ComponentSection id="decorative" title="Decorative" description="Control semantic meaning for accessibility." level={3}>
          <CodePreview component={<Decorative />} filePath="app/views/layout/separator/demos/decorative.tsx" />
        </ComponentSection>

        <ComponentSection id="use-cases" title="Use Cases" description="Common patterns using Separator." level={3}>
          <CodePreview component={<UseCases />} filePath="app/views/layout/separator/demos/useCases.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props.">
          <PropsTable data={SEPARATOR_PROPS} />
        </ComponentSection>
        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>By default, Separator is decorative (role="none")</li>
              <li>Set decorative=false for semantic separators (role="separator")</li>
              <li>Vertical separators include aria-orientation</li>
              <li>Use semantic separators when they represent a thematic break in content</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
