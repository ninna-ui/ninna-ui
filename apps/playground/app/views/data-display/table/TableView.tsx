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
import { tableMeta } from "./meta";

import Basic from "./demos/basic";
import WithCaption from "./demos/withCaption";
import WithFooter from "./demos/withFooter";

export const tableSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "with-caption", title: "With Caption", level: 3 },
  { id: "with-footer", title: "With Footer", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const TABLE_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", required: true, description: "Table sub-components (Header, Body, Footer, Caption)" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const ROW_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", required: true, description: "Row cells (Head or Cell)" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const HEAD_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", description: "Header cell content" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const CELL_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", description: "Cell content" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const CAPTION_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", required: true, description: "Caption text" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const USAGE = `import { Table } from "@ninna-ui/data-display";

export default function Example() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice</Table.Cell>
          <Table.Cell>alice@example.com</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}`;

export function TableView() {
  return (
    <div>
      <ComponentHeader meta={tableMeta} />

      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Table component in your application.">
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A basic table with header and body rows." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/data-display/table/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="with-caption" title="With Caption" description="Add a caption to describe the table content." level={3}>
          <CodePreview component={<WithCaption />} filePath="app/views/data-display/table/demos/withCaption.tsx" />
        </ComponentSection>

        <ComponentSection id="with-footer" title="With Footer" description="Add a footer row for totals or summaries." level={3}>
          <CodePreview component={<WithFooter />} filePath="app/views/data-display/table/demos/withFooter.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Props for the Table component and its sub-components.">
          <div className="space-y-8">
            <PropsTable title="Table (Root)" data={TABLE_PROPS} />
            <PropsTable title="Table.Row" data={ROW_PROPS} />
            <PropsTable title="Table.Head" data={HEAD_PROPS} />
            <PropsTable title="Table.Cell" data={CELL_PROPS} />
            <PropsTable title="Table.Caption" data={CAPTION_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Table uses native HTML <Code>&lt;table&gt;</Code> for full semantic support</li>
              <li>Caption provides an accessible table description</li>
              <li>Header cells use <Code>&lt;th&gt;</Code> with proper scope</li>
              <li>Screen readers announce cell positions and header associations</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
