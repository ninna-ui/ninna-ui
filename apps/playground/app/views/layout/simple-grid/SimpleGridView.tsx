import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { simpleGridMeta } from "./meta";
import Basic from "./demos/basic";
import Columns from "./demos/columns";
import MinChildWidth from "./demos/minChildWidth";
import Gap from "./demos/gap";
import UseCases from "./demos/useCases";

export const simpleGridSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "columns", title: "Columns", level: 3 },
  { id: "min-child-width", title: "Min Child Width", level: 3 },
  { id: "gap", title: "Gap Spacing", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const SIMPLE_GRID_PROPS: PropDefinition[] = [
  { name: "columns", type: "number", defaultValue: "1", description: "Fixed number of columns (uses inline style - mutually exclusive with minChildWidth)" },
  { name: "minChildWidth", type: "string", description: "Minimum child width for auto-fit responsive columns (e.g., '200px'). Uses inline style - dynamic values cannot be statically extracted by Tailwind JIT." },
  { name: "gap", type: "'0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'", defaultValue: "'4'", description: "Gap between items (uses Tailwind gap-* classes)" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const BASIC_USAGE = `import { SimpleGrid } from "@ninna-ui/layout";

export default function Example() {
  return (
    <SimpleGrid columns={3} gap="4">
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  );
}`;

export function SimpleGridView() {
  return (
    <div className="">
      <ComponentHeader meta={simpleGridMeta} />
      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the SimpleGrid component.">
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>
        <ComponentSection id="basic" title="Basic" description="Fixed column grid layout." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/layout/simple-grid/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="columns" title="Columns" description="Control the number of columns." level={3}>
          <CodePreview component={<Columns />} filePath="app/views/layout/simple-grid/demos/columns.tsx" />
        </ComponentSection>

        <ComponentSection id="min-child-width" title="Min Child Width" description="Auto-responsive grid based on minimum child width." level={3}>
          <CodePreview component={<MinChildWidth />} filePath="app/views/layout/simple-grid/demos/minChildWidth.tsx" />
        </ComponentSection>

        <ComponentSection id="gap" title="Gap Spacing" description="Control spacing between grid items." level={3}>
          <CodePreview component={<Gap />} filePath="app/views/layout/simple-grid/demos/gap.tsx" />
        </ComponentSection>

        <ComponentSection id="use-cases" title="Use Cases" description="Common patterns using SimpleGrid." level={3}>
          <CodePreview component={<UseCases />} filePath="app/views/layout/simple-grid/demos/useCases.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props.">
          <PropsTable data={SIMPLE_GRID_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>SimpleGrid is a pure layout component with no semantic meaning</li>
              <li>Automatically adjusts columns based on available space</li>
              <li>Use appropriate semantic HTML elements as children</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
