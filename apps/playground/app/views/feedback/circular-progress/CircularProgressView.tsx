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
import { circularProgressMeta } from "./meta";

import Basic from "./demos/basic";
import Colors from "./demos/colors";
import Sizes from "./demos/sizes";
import WithLabel from "./demos/withLabel";
import CustomLabel from "./demos/customLabel";
import Indeterminate from "./demos/indeterminate";
import UseCases from "./demos/useCases";

export const circularProgressSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "with-label", title: "With Label", level: 3 },
  { id: "custom-label", title: "Custom Label", level: 3 },
  { id: "indeterminate", title: "Indeterminate", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const CIRCULAR_PROGRESS_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: "number",
    defaultValue: "0",
    description: "Current progress value (0 to max)",
  },
  {
    name: "max",
    type: "number",
    defaultValue: "100",
    description: "Maximum value for the progress",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: "Size of the circular progress",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the progress indicator",
  },
  {
    name: "strokeWidth",
    type: "number",
    description: "Custom stroke width (overrides size default)",
  },
  {
    name: "showValue",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to show the value label",
  },
  {
    name: "labelPosition",
    type: "'center' | 'bottom' | 'none'",
    defaultValue: "'center'",
    description: "Position of the value label",
  },
  {
    name: "formatLabel",
    type: "(value: number, max: number) => ReactNode",
    description: "Custom format function for the value label",
  },
  {
    name: "indeterminate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the progress is indeterminate (loading state)",
  },
  {
    name: "label",
    type: "string",
    description: "Accessible label for screen readers",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Custom content to render inside the circle",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the container",
  },
];

const BASIC_USAGE = `import { CircularProgress } from "@ninna-ui/feedback";

export default function Example() {
  return (
    <div>
      <CircularProgress value={50} />
      <CircularProgress value={75} color="success" showValue />
      <CircularProgress indeterminate color="primary" />
    </div>
  );
}`;

export function CircularProgressView() {
  return (
    <div className="">
      <ComponentHeader meta={circularProgressMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the CircularProgress component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Simple circular progress indicators with different values."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/feedback/circular-progress/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Circular progress in different color themes."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/feedback/circular-progress/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Circular progress in different sizes from xs to xl."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/feedback/circular-progress/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-label"
          title="With Label"
          description="Circular progress with value labels in different positions."
          level={3}
        >
          <CodePreview
            component={<WithLabel />}
            filePath="app/views/feedback/circular-progress/demos/withLabel.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="custom-label"
          title="Custom Label"
          description="Circular progress with custom label formatting and content."
          level={3}
        >
          <CodePreview
            component={<CustomLabel />}
            filePath="app/views/feedback/circular-progress/demos/customLabel.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="indeterminate"
          title="Indeterminate"
          description="Indeterminate circular progress for unknown duration tasks."
          level={3}
        >
          <CodePreview
            component={<Indeterminate />}
            filePath="app/views/feedback/circular-progress/demos/indeterminate.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world circular progress usage examples."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/feedback/circular-progress/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the CircularProgress component."
        >
          <PropsTable data={CIRCULAR_PROGRESS_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>
                Uses <Code>role="progressbar"</Code> on the SVG element for screen reader support
              </li>
              <li>
                Includes <Code>aria-valuenow</Code>, <Code>aria-valuemin</Code>, and <Code>aria-valuemax</Code> attributes
              </li>
              <li>
                Supports <Code>aria-label</Code> for custom accessible labels
              </li>
              <li>
                Indeterminate state uses <Code>aria-busy="true"</Code> to indicate loading
              </li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
