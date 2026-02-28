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
import { progressMeta } from "./meta";

import Basic from "./demos/basic";
import Colors from "./demos/colors";
import Sizes from "./demos/sizes";
import Variants from "./demos/variants";
import WithLabel from "./demos/withLabel";
import CustomLabel from "./demos/customLabel";
import Indeterminate from "./demos/indeterminate";
import UseCases from "./demos/useCases";

export const progressSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "with-label", title: "With Label", level: 3 },
  { id: "custom-label", title: "Custom Label", level: 3 },
  { id: "indeterminate", title: "Indeterminate", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const PROGRESS_PROPS: PropDefinition[] = [
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
    description: "Size of the progress bar",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the progress bar",
  },
  {
    name: "variant",
    type: "'default' | 'striped' | 'animated'",
    defaultValue: "'default'",
    description: "Visual style variant",
  },
  {
    name: "showValue",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to show the value label",
  },
  {
    name: "labelPosition",
    type: "'left' | 'right' | 'top' | 'inside' | 'none'",
    defaultValue: "'right'",
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
    name: "className",
    type: "string",
    description: "Additional CSS classes for the container",
  },
  {
    name: "trackClassName",
    type: "string",
    description: "Additional CSS classes for the track (background)",
  },
  {
    name: "indicatorClassName",
    type: "string",
    description: "Additional CSS classes for the indicator (filled part)",
  },
];

const BASIC_USAGE = `import { Progress } from "@ninna-ui/feedback";

export default function Example() {
  return (
    <div>
      <Progress value={50} />
      <Progress value={75} color="success" showValue labelPosition="right" />
      <Progress indeterminate color="primary" />
    </div>
  );
}`;

export function ProgressView() {
  return (
    <div className="">
      <ComponentHeader meta={progressMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Progress component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Simple progress bars with different values."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/feedback/progress/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Progress bars in different color themes."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/feedback/progress/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Progress bars in different sizes from xs to xl."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/feedback/progress/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Different visual styles including striped and animated."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/feedback/progress/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-label"
          title="With Label"
          description="Progress bars with value labels in different positions."
          level={3}
        >
          <CodePreview
            component={<WithLabel />}
            filePath="app/views/feedback/progress/demos/withLabel.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="custom-label"
          title="Custom Label"
          description="Progress bars with custom label formatting."
          level={3}
        >
          <CodePreview
            component={<CustomLabel />}
            filePath="app/views/feedback/progress/demos/customLabel.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="indeterminate"
          title="Indeterminate"
          description="Indeterminate progress for unknown duration tasks."
          level={3}
        >
          <CodePreview
            component={<Indeterminate />}
            filePath="app/views/feedback/progress/demos/indeterminate.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world progress bar usage examples."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/feedback/progress/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Progress component."
        >
          <PropsTable data={PROGRESS_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>
                Uses <Code>role="progressbar"</Code> for screen reader support
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
              <li>
                Color contrast meets WCAG AA standards for all color variants
              </li>
              <li>
                Animations respect <Code>prefers-reduced-motion</Code> media query
              </li>
              <li>
                Label positions provide visual context without affecting accessibility
              </li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
