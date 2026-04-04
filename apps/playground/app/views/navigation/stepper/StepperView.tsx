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
import { stepperMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import Vertical from "./demos/vertical";
import Colors from "./demos/colors";
import AllComplete from "./demos/allComplete";

export const stepperSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "vertical", title: "Vertical", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "all-complete", title: "All Complete", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const STEPPER_PROPS: PropDefinition[] = [
  { name: "activeStep", type: "number", required: true, description: "Current active step index (0-based)" },
  { name: "orientation", type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: "Orientation of the stepper" },
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Size of the stepper" },
  { name: "color", type: "'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'danger' | 'warning' | 'info'", defaultValue: "'primary'", description: "Color theme of the stepper" },
  { name: "aria-label", type: "string", defaultValue: "'Progress'", description: "Accessible label for the stepper list" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const STEP_PROPS: PropDefinition[] = [
  { name: "label", type: "string", required: true, description: "Step label text" },
  { name: "description", type: "string", description: "Optional step description" },
  { name: "icon", type: "ReactNode", description: "Optional custom icon" },
  { name: "optional", type: "boolean", defaultValue: "false", description: "Whether the step is optional" },
];

const USAGE = `import { Stepper } from "@ninna-ui/navigation";

export default function Example() {
  return (
    <Stepper activeStep={1}>
      <Stepper.Step label="Account" description="Create account" />
      <Stepper.Step label="Profile" description="Set up profile" />
      <Stepper.Step label="Review" description="Review & submit" />
    </Stepper>
  );
}`;

export function StepperView() {
  return (
    <div>
      <ComponentHeader meta={stepperMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Stepper component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A horizontal stepper with three steps." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/navigation/stepper/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="sizes" title="Sizes" description="Stepper comes in sm, md, and lg sizes." level={3}>
          <CodePreview component={<Sizes />} filePath="app/views/navigation/stepper/demos/sizes.tsx" />
        </ComponentSection>

        <ComponentSection id="vertical" title="Vertical" description="Vertical stepper layout for sidebar-style flows." level={3}>
          <CodePreview component={<Vertical />} filePath="app/views/navigation/stepper/demos/vertical.tsx" />
        </ComponentSection>
        
        <ComponentSection id="colors" title="Colors" description="Stepper supports multiple brand color themes." level={3}>
          <CodePreview component={<Colors />} filePath="app/views/navigation/stepper/demos/colors.tsx" />
        </ComponentSection>

        <ComponentSection id="all-complete" title="All Complete" description="Show a completed stepper when all steps are done." level={3}>
          <CodePreview component={<AllComplete />} filePath="app/views/navigation/stepper/demos/allComplete.tsx" />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Stepper component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Stepper (Root)" data={STEPPER_PROPS} />
            <PropsTable title="Stepper.Step" data={STEP_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Root renders as <Code>role="list"</Code> with a customizable <Code>aria-label</Code> (default: "Progress")</li>
              <li>Each step renders as <Code>role="listitem"</Code> with an <Code>aria-label</Code> describing step number, label, and status</li>
              <li>Step status (complete, current, upcoming) is conveyed via <Code>data-status</Code> and the listitem aria-label</li>
              <li>Separators are hidden from assistive technology via <Code>aria-hidden="true"</Code></li>
              <li>Step index is computed via React context - no cloneElement or prop injection required</li>
              <li>Optional steps include "(optional)" in the aria-label</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
