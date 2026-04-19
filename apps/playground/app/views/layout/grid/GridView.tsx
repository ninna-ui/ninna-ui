import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { gridMeta } from "./meta";
import Basic from "./demos/basic";
import Columns from "./demos/columns";
import Gap from "./demos/gap";
import Rows from "./demos/rows";
import Flow from "./demos/flow";
import UseCases from "./demos/useCases";

export const gridSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "columns", title: "Columns", level: 3 },
  { id: "gap", title: "Gap Spacing", level: 3 },
  { id: "rows", title: "Rows", level: 3 },
  { id: "flow", title: "Flow", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const GRID_PROPS: PropDefinition[] = [
  { name: "as", type: "ElementType", description: "Semantic HTML element to render" },
  { name: "columns", type: "GridColumns | ResponsiveValue<GridColumns>", defaultValue: "1", description: "Number of columns or breakpoint map" },
  { name: "rows", type: "1 | 2 | 3 | 4 | 5 | 6 | 'none'", description: "Number of rows" },
  { name: "gap", type: "'0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'", defaultValue: "'4'", description: "Gap between items" },
  { name: "rowGap", type: "'0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'", description: "Row gap (overrides gap)" },
  { name: "columnGap", type: "'0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'", description: "Column gap (overrides gap)" },
  { name: "flow", type: "'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'", description: "Grid flow direction" },
  { name: "align", type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'", description: "Align grid items on the cross axis" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const BASIC_USAGE = `import { Grid } from "@ninna-ui/layout";

export default function Example() {
  return (
    <Grid columns={3} gap="4">
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}`;

export function GridView() {
  return (
    <div className="">
      <ComponentHeader meta={gridMeta} />
      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Grid component.">
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>
        <ComponentSection id="basic" title="Basic" description="Basic grid layout with 3 columns." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/layout/grid/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="columns" title="Columns" description="Control the number of columns." level={3}>
          <CodePreview component={<Columns />} filePath="app/views/layout/grid/demos/columns.tsx" />
        </ComponentSection>

        <ComponentSection id="gap" title="Gap Spacing" description="Control spacing between grid items." level={3}>
          <CodePreview component={<Gap />} filePath="app/views/layout/grid/demos/gap.tsx" />
        </ComponentSection>

        <ComponentSection id="rows" title="Rows" description="Define explicit row counts." level={3}>
          <CodePreview component={<Rows />} filePath="app/views/layout/grid/demos/rows.tsx" />
        </ComponentSection>

        <ComponentSection id="flow" title="Flow" description="Control how items flow in the grid." level={3}>
          <CodePreview component={<Flow />} filePath="app/views/layout/grid/demos/flow.tsx" />
        </ComponentSection>

        <ComponentSection id="use-cases" title="Use Cases" description="Common patterns using Grid." level={3}>
          <CodePreview component={<UseCases />} filePath="app/views/layout/grid/demos/useCases.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props.">
          <PropsTable data={GRID_PROPS} />
        </ComponentSection>
        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Grid is a pure layout component with no semantic meaning</li>
              <li>Use appropriate semantic HTML elements as children</li>
              <li>For data grids, consider using table elements</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
