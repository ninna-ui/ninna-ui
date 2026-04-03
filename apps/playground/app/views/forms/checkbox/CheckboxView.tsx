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
import { checkboxMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import LabelPosition from "./demos/labelPosition";
import CustomIcon from "./demos/customIcon";
import Indeterminate from "./demos/indeterminate";
import States from "./demos/states";
import WithDescription from "./demos/withDescription";
import WithReactHookForm from "./demos/withReactHookForm";

export const checkboxSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "label-position", title: "Label Position", level: 3 },
  { id: "custom-icon", title: "Custom Icon", level: 3 },
  { id: "indeterminate", title: "Indeterminate", level: 3 },
  { id: "states", title: "States", level: 3 },
  { id: "with-description", title: "With Description", level: 3 },
  { id: "react-hook-form", title: "React Hook Form", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const CHECKBOX_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Size of the checkbox",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the checkbox",
  },
  {
    name: "variant",
    type: "'outline' | 'soft' | 'solid'",
    defaultValue: "'outline'",
    description: "Visual variant of the checkbox",
  },
  {
    name: "checked",
    type: "boolean",
    description: "Controlled checked state",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    description: "Default checked state for uncontrolled usage",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Callback when checked state changes",
  },
  {
    name: "label",
    type: "ReactNode",
    description: "Label text for the checkbox",
  },
  {
    name: "description",
    type: "ReactNode",
    description: "Description text below the label",
  },
  {
    name: "labelPosition",
    type: "'start' | 'end'",
    defaultValue: "'end'",
    description: "Position of the label relative to checkbox",
  },
  {
    name: "invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the checkbox is in an invalid state",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Custom icon for checked state",
  },
  {
    name: "indeterminateIcon",
    type: "ReactNode",
    description: "Custom icon for indeterminate state",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the checkbox is disabled",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the checkbox is required",
  },
];

const BASIC_USAGE = `import { Checkbox } from "@ninna-ui/forms";

export default function Example() {
  return (
    <Checkbox label="Accept terms and conditions" />
  );
}`;

export function CheckboxView() {
  return (
    <div className="">
      <ComponentHeader meta={checkboxMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Checkbox component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic checkbox with label."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/checkbox/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Checkbox supports outline, soft, and solid variants."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/forms/checkbox/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Checkbox comes in 3 sizes: sm, md, and lg."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/checkbox/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Checkbox supports multiple color themes."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/forms/checkbox/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="label-position"
          title="Label Position"
          description="Position the label on either side of the checkbox."
          level={3}
        >
          <CodePreview
            component={<LabelPosition />}
            filePath="app/views/forms/checkbox/demos/labelPosition.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="custom-icon"
          title="Custom Icon"
          description="Use custom icons for the checked state."
          level={3}
        >
          <CodePreview
            component={<CustomIcon />}
            filePath="app/views/forms/checkbox/demos/customIcon.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="indeterminate"
          title="Indeterminate"
          description="Checkbox with indeterminate state for partial selection."
          level={3}
        >
          <CodePreview
            component={<Indeterminate />}
            filePath="app/views/forms/checkbox/demos/indeterminate.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="Checkbox in different states: unchecked, checked, indeterminate, and disabled."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/checkbox/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-description"
          title="With Description"
          description="Checkbox with label and description text."
          level={3}
        >
          <CodePreview
            component={<WithDescription />}
            filePath="app/views/forms/checkbox/demos/withDescription.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="Checkbox works with React Hook Form using the Controller pattern. Use Field wrapper for error messages."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/checkbox/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Checkbox component."
        >
          <div id="checkbox-props" className="scroll-mt-20">
            <PropsTable data={CHECKBOX_PROPS} title="Checkbox Props" />
          </div>
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Built on a native <Code>&lt;input type="checkbox"&gt;</Code> for full browser accessibility</li>
              <li>Proper focus states with visible outlines</li>
              <li>Supports keyboard navigation (<Code>Space</Code> to toggle)</li>
              <li>Labels are properly associated with checkboxes via <Code>htmlFor</Code></li>
              <li>Indeterminate state uses <Code>aria-checked="mixed"</Code> for screen readers</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
