import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { Code } from "@ninna-ui/primitives";
import { dataTableMeta } from "./meta";

import Basic from "./demos/basic";
import Striped from "./demos/striped";
import Compact from "./demos/compact";
import CustomCells from "./demos/customCells";
import Advanced from "./demos/advanced";

export const dataTableSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "striped", title: "Striped", level: 3 },
  { id: "compact", title: "Compact", level: 3 },
  { id: "custom-cells", title: "Custom Cells", level: 3 },
  { id: "advanced", title: "Advanced", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const DATATABLE_PROPS: PropDefinition[] = [
  { name: "aria-label", type: "string", description: "Accessible label for the table element (recommended for screen readers)" },
  { name: "data", type: "T[]", required: true, description: "Array of row data" },
  { name: "columns", type: "DataTableColumn<T>[]", required: true, description: "Column definitions" },
  { name: "rowKey", type: "keyof T", required: true, description: "Unique key field for rows" },
  { name: "striped", type: "boolean", defaultValue: "false", description: "Alternating row background colors" },
  { name: "compact", type: "boolean", defaultValue: "false", description: "Reduced cell padding" },
  { name: "bordered", type: "boolean", defaultValue: "false", description: "Show cell borders" },
  { name: "loading", type: "boolean", defaultValue: "false", description: "Show loading overlay" },
  { name: "emptyMessage", type: "ReactNode", description: "Message when data array is empty" },
  { name: "caption", type: "string", description: "Accessible table caption" },
  { name: "onSort", type: "(state: SortState) => void", description: "Callback when sort changes" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const COLUMN_PROPS: PropDefinition[] = [
  { name: "id", type: "string", required: true, description: "Unique column identifier" },
  { name: "header", type: "string | ReactNode", required: true, description: "Column header content" },
  { name: "accessorKey", type: "keyof T", description: "Key to access row data" },
  { name: "cell", type: "(row: T) => ReactNode", description: "Custom cell renderer" },
  { name: "sortable", type: "boolean", defaultValue: "false", description: "Whether the column is sortable" },
];

const USAGE = `import { DataTable } from "@ninna-ui/data-display";

const columns = [
  { id: "name", header: "Name", accessorKey: "name", sortable: true },
  { id: "email", header: "Email", accessorKey: "email" },
];

export default function Example() {
  return <DataTable data={users} columns={columns} rowKey="id" />;
}`;

export function DataTableView() {
  return (
    <div>
      <ComponentHeader meta={dataTableMeta} />

      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the DataTable component in your application.">
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A sortable data table with column headers." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/data-display/data-table/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="striped" title="Striped" description="Alternating row colors for readability." level={3}>
          <CodePreview component={<Striped />} filePath="app/views/data-display/data-table/demos/striped.tsx" />
        </ComponentSection>

        <ComponentSection id="compact" title="Compact" description="Reduced padding for dense data." level={3}>
          <CodePreview component={<Compact />} filePath="app/views/data-display/data-table/demos/compact.tsx" />
        </ComponentSection>

        <ComponentSection id="custom-cells" title="Custom Cells" description="Custom cell renderers for rich content like badges." level={3}>
          <CodePreview component={<CustomCells />} filePath="app/views/data-display/data-table/demos/customCells.tsx" />
        </ComponentSection>

        <ComponentSection id="advanced" title="Advanced" description="Search, pagination, row actions, and status badges." level={3}>
          <CodePreview component={<Advanced />} filePath="app/views/data-display/data-table/demos/advanced.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Complete list of props for the DataTable component.">
          <div className="space-y-8">
            <PropsTable title="DataTable" data={DATATABLE_PROPS} />
            <PropsTable title="DataTableColumn" data={COLUMN_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Renders a native <Code>&lt;table&gt;</Code> for full semantic support</li>
              <li>Supports <Code>aria-label</Code> prop for labeling the table</li>
              <li>Sortable columns use <Code>aria-sort</Code> to announce sort state</li>
              <li>Sort buttons are keyboard accessible</li>
              <li>Loading and empty states provide accessible feedback</li>
              <li>Caption is rendered via <Code>&lt;caption&gt;</Code> for screen reader context when provided</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
