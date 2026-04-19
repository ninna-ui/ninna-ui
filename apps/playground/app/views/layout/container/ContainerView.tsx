import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { containerMeta } from "./meta";
import Basic from "./demos/basic";
import MaxWidths from "./demos/maxWidths";
import Padding from "./demos/padding";
import Center from "./demos/center";
import UseCases from "./demos/useCases";

export const containerSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "max-widths", title: "Max Widths", level: 3 },
  { id: "padding", title: "Padding", level: 3 },
  { id: "center", title: "Center", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const CONTAINER_PROPS: PropDefinition[] = [
  { name: "as", type: "ElementType", description: "Semantic HTML element to render" },
  { name: "maxWidth", type: "ContainerMaxWidth", defaultValue: "'lg'", description: "Maximum width of the container" },
  { name: "center", type: "boolean", defaultValue: "true", description: "Center the container horizontally" },
  { name: "padding", type: "boolean", defaultValue: "true", description: "Add horizontal padding" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const BASIC_USAGE = `import { Container } from "@ninna-ui/layout";

export default function Example() {
  return (
    <Container maxWidth="lg">
      <h1>Page Content</h1>
      <p>Your content here...</p>
    </Container>
  );
}`;

export function ContainerView() {
  return (
    <div className="">
      <ComponentHeader meta={containerMeta} />
      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Container component.">
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>
        <ComponentSection id="basic" title="Basic" description="Container with max-width constraint." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/layout/container/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="max-widths" title="Max Widths" description="Different max-width options." level={3}>
          <CodePreview component={<MaxWidths />} filePath="app/views/layout/container/demos/maxWidths.tsx" />
        </ComponentSection>

        <ComponentSection id="padding" title="Padding" description="Control horizontal padding." level={3}>
          <CodePreview component={<Padding />} filePath="app/views/layout/container/demos/padding.tsx" />
        </ComponentSection>

        <ComponentSection id="center" title="Center" description="Center or left-align the container." level={3}>
          <CodePreview component={<Center />} filePath="app/views/layout/container/demos/center.tsx" />
        </ComponentSection>

        <ComponentSection id="use-cases" title="Use Cases" description="Common patterns using Container." level={3}>
          <CodePreview component={<UseCases />} filePath="app/views/layout/container/demos/useCases.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props.">
          <PropsTable data={CONTAINER_PROPS} />
        </ComponentSection>
        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Container is a pure layout component</li>
              <li>Use semantic elements like main, section, or article as children</li>
              <li>Helps maintain readable line lengths for content</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
