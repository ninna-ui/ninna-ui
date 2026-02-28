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
import { breadcrumbsMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import Separators from "./demos/separators";
import WithIcons from "./demos/withIcons";

export const breadcrumbsSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "separators", title: "Custom Separators", level: 3 },
  { id: "with-icons", title: "With Icons", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const BREADCRUMBS_PROPS: PropDefinition[] = [
  { name: "separator", type: "ReactNode", defaultValue: "'/'", description: "Custom separator between items" },
  { name: "maxItems", type: "number", description: "Maximum number of visible items before collapsing" },
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Size of the breadcrumbs" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const LINK_PROPS: PropDefinition[] = [
  { name: "current", type: "boolean", defaultValue: "false", description: "Whether this is the current/active page" },
  { name: "icon", type: "ReactNode", description: "Icon element to render before the link text" },
  { name: "href", type: "string", description: "Link destination URL" },
];

const USAGE = `import { Breadcrumbs } from "@ninna-ui/navigation";

export default function Example() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#" current>Page</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  );
}`;

export function BreadcrumbsView() {
  return (
    <div>
      <ComponentHeader meta={breadcrumbsMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Breadcrumbs component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A basic breadcrumb trail." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/navigation/breadcrumbs/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="sizes" title="Sizes" description="Breadcrumbs come in sm, md, and lg sizes." level={3}>
          <CodePreview component={<Sizes />} filePath="app/views/navigation/breadcrumbs/demos/sizes.tsx" />
        </ComponentSection>

        <ComponentSection id="separators" title="Custom Separators" description="Use different separator characters between items." level={3}>
          <CodePreview component={<Separators />} filePath="app/views/navigation/breadcrumbs/demos/separators.tsx" />
        </ComponentSection>

        <ComponentSection id="with-icons" title="With Icons" description="Add icons to breadcrumb links for better visual context." level={3}>
          <CodePreview component={<WithIcons />} filePath="app/views/navigation/breadcrumbs/demos/withIcons.tsx" />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Breadcrumbs component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Breadcrumbs (Root)" data={BREADCRUMBS_PROPS} />
            <PropsTable title="Breadcrumbs.Link" data={LINK_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>nav</Code> with <Code>aria-label="Breadcrumb"</Code></li>
              <li>Current page uses <Code>aria-current="page"</Code></li>
              <li>Separators are decorative and hidden from screen readers</li>
              <li>Links are properly focusable and navigable via keyboard</li>
              <li>Icons are decorative (<Code>aria-hidden</Code>) — text labels provide the accessible name</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
