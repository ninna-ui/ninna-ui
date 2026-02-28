import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { wrapMeta } from "./meta";
import Basic from "./demos/basic";
import Gap from "./demos/gap";
import Alignment from "./demos/alignment";
import Justify from "./demos/justify";
import UseCases from "./demos/useCases";

export const wrapSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "gap", title: "Gap Spacing", level: 3 },
  { id: "alignment", title: "Alignment", level: 3 },
  { id: "justify", title: "Justify", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const WRAP_PROPS: PropDefinition[] = [
  { name: "gap", type: "'0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'", defaultValue: "'4'", description: "Gap between items" },
  { name: "align", type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'", description: "Align items on cross axis" },
  { name: "justify", type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'", description: "Justify items on main axis" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const BASIC_USAGE = `import { Wrap } from "@ninna-ui/layout";

export default function Example() {
  return (
    <Wrap gap="2">
      <Badge>Tag 1</Badge>
      <Badge>Tag 2</Badge>
      <Badge>Tag 3</Badge>
    </Wrap>
  );
}`;

export function WrapView() {
  return (
    <div className="">
      <ComponentHeader meta={wrapMeta} />
      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Wrap component.">
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>
        <ComponentSection id="basic" title="Basic" description="Wrap items that overflow." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/layout/wrap/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="gap" title="Gap Spacing" description="Control spacing between wrapped items." level={3}>
          <CodePreview component={<Gap />} filePath="app/views/layout/wrap/demos/gap.tsx" />
        </ComponentSection>

        <ComponentSection id="alignment" title="Alignment" description="Align items on the cross axis." level={3}>
          <CodePreview component={<Alignment />} filePath="app/views/layout/wrap/demos/alignment.tsx" />
        </ComponentSection>

        <ComponentSection id="justify" title="Justify" description="Distribute items along the main axis." level={3}>
          <CodePreview component={<Justify />} filePath="app/views/layout/wrap/demos/justify.tsx" />
        </ComponentSection>

        <ComponentSection id="use-cases" title="Use Cases" description="Common patterns using Wrap." level={3}>
          <CodePreview component={<UseCases />} filePath="app/views/layout/wrap/demos/useCases.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props.">
          <PropsTable data={WRAP_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Wrap is a pure layout component with no semantic meaning</li>
              <li>Ideal for tag clouds, filter chips, and responsive button groups</li>
              <li>Items maintain their natural order when wrapping</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
