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
import { paginationMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import WithEllipsis from "./demos/withEllipsis";

export const paginationSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "with-ellipsis", title: "With Ellipsis", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const PAGINATION_PROPS: PropDefinition[] = [
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Size of the pagination" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const LINK_PROPS: PropDefinition[] = [
  { name: "isActive", type: "boolean", defaultValue: "false", description: "Whether this is the active/current page" },
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Size variant" },
];

const USAGE = `import { Pagination } from "@ninna-ui/navigation";

export default function Example() {
  return (
    <Pagination>
      <Pagination.Content>
        <Pagination.Item><Pagination.Previous /></Pagination.Item>
        <Pagination.Item><Pagination.Link isActive>1</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link>2</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link>3</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Next /></Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}`;

export function PaginationView() {
  return (
    <div>
      <ComponentHeader meta={paginationMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Pagination component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A basic pagination with previous, pages, and next." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/navigation/pagination/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="sizes" title="Sizes" description="Pagination comes in sm, md, and lg sizes." level={3}>
          <CodePreview component={<Sizes />} filePath="app/views/navigation/pagination/demos/sizes.tsx" />
        </ComponentSection>

        <ComponentSection id="with-ellipsis" title="With Ellipsis" description="Use ellipsis to indicate truncated page ranges." level={3}>
          <CodePreview component={<WithEllipsis />} filePath="app/views/navigation/pagination/demos/withEllipsis.tsx" />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Pagination component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Pagination (Root)" data={PAGINATION_PROPS} />
            <PropsTable title="Pagination.Link" data={LINK_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>nav</Code> with <Code>aria-label="Pagination"</Code></li>
              <li>Active page uses <Code>aria-current="page"</Code></li>
              <li>Previous/Next buttons have customizable <Code>aria-label</Code> (overridable via props spread)</li>
              <li>All page links are keyboard focusable</li>
              <li>Ellipsis is decorative and hidden from screen readers</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
