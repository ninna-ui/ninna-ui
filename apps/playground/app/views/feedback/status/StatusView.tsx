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
import { statusMeta } from "./meta";

import Basic from "./demos/basic";
import WithLabel from "./demos/withLabel";
import Sizes from "./demos/sizes";
import Values from "./demos/values";
import UseCases from "./demos/useCases";

export const statusSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "with-label", title: "With Label", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "values", title: "Status Values", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const STATUS_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: "'success' | 'danger' | 'warning' | 'info'",
    defaultValue: "'info'",
    description: "Status value that determines the indicator color",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Size of the status indicator and label",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Optional label text to display next to the indicator",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Status } from "@ninna-ui/feedback";

export default function Example() {
  return (
    <Status value="success">Completed</Status>
  );
}`;

export function StatusView() {
  return (
    <div className="">
      <ComponentHeader meta={statusMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Status component to display status indicators."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Status indicators without labels."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/feedback/status/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-label"
          title="With Label"
          description="Status indicators with descriptive labels."
          level={3}
        >
          <CodePreview
            component={<WithLabel />}
            filePath="app/views/feedback/status/demos/withLabel.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Different size variants for status indicators."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/feedback/status/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="values"
          title="Status Values"
          description="Different status values and their semantic meanings."
          level={3}
        >
          <CodePreview
            component={<Values />}
            filePath="app/views/feedback/status/demos/values.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of Status component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/feedback/status/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Status component."
        >
          <PropsTable data={STATUS_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="status"</Code> for proper semantics</li>
              <li>Provides <Code>aria-label</Code> when no visible label is present</li>
              <li>Status colors meet WCAG contrast requirements</li>
              <li>The colored dot is marked as <Code>aria-hidden="true"</Code> since the label conveys the meaning</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
