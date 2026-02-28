import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { boxMeta } from "./meta";
import Basic from "./demos/basic";
import Variations from "./demos/asElement";
import Styling from "./demos/styling";
import UseCases from "./demos/useCases";

export const boxSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "variations", title: "Variations", level: 3 },
  { id: "styling", title: "Styling", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const BOX_PROPS: PropDefinition[] = [
    { name: "className", type: "string", description: "CSS classes to apply" },
  { name: "children", type: "React.ReactNode", description: "Content to render" },
];

const BASIC_USAGE = `import { Box } from "@ninna-ui/layout";

export default function Example() {
  return (
    <Box className="p-4 bg-base-200 rounded">
      Content
    </Box>
  );
}`;

export function BoxView() {
  return (
    <div className="">
      <ComponentHeader meta={boxMeta} />
      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Box component.">
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>
        <ComponentSection id="basic" title="Basic" description="Box with custom styling." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/layout/box/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="variations" title="Variations" description="Different styling variations." level={3}>
          <CodePreview component={<Variations />} filePath="app/views/layout/box/demos/asElement.tsx" />
        </ComponentSection>

        <ComponentSection id="styling" title="Styling" description="Various styling options." level={3}>
          <CodePreview component={<Styling />} filePath="app/views/layout/box/demos/styling.tsx" />
        </ComponentSection>

        <ComponentSection id="use-cases" title="Use Cases" description="Common patterns using Box." level={3}>
          <CodePreview component={<UseCases />} filePath="app/views/layout/box/demos/useCases.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props.">
          <PropsTable data={BOX_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Box is a generic container with no semantic meaning</li>
              <li>Use semantic HTML elements as children when appropriate</li>
              <li>Consider using section, article, aside, or main for better semantics</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
