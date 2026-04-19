import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { centerMeta } from "./meta";
import Basic from "./demos/basic";
import Inline from "./demos/inline";
import UseCases from "./demos/useCases";

export const centerSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "inline", title: "Inline", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const CENTER_PROPS: PropDefinition[] = [
  { name: "as", type: "ElementType", description: "Semantic HTML element to render" },
  { name: "inline", type: "boolean", defaultValue: "false", description: "Use inline-flex instead of flex" },
  { name: "className", type: "string", description: "Additional CSS classes" },
  { name: "children", type: "React.ReactNode", description: "Content to center" },
];

const BASIC_USAGE = `import { Center } from "@ninna-ui/layout";

export default function Example() {
  return (
    <Center className="h-screen">
      <Spinner />
    </Center>
  );
}`;

export function CenterView() {
  return (
    <div className="">
      <ComponentHeader meta={centerMeta} />
      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Center component.">
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>
        <ComponentSection id="basic" title="Basic" description="Center content in a container." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/layout/center/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="inline" title="Inline" description="Use inline-flex for inline centering." level={3}>
          <CodePreview component={<Inline />} filePath="app/views/layout/center/demos/inline.tsx" />
        </ComponentSection>

        <ComponentSection id="use-cases" title="Use Cases" description="Common patterns using Center." level={3}>
          <CodePreview component={<UseCases />} filePath="app/views/layout/center/demos/useCases.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props.">
          <PropsTable data={CENTER_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Center is a pure layout component with no semantic meaning</li>
              <li>Useful for loading states, empty states, and hero sections</li>
              <li>Ensure centered content remains accessible at all viewport sizes</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
