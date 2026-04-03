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
import { selectMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import Clearable from "./demos/clearable";
import Controlled from "./demos/controlled";
import WithGroups from "./demos/withGroups";
import States from "./demos/states";
import WithIcons from "./demos/withIcons";
import WithReactHookForm from "./demos/withReactHookForm";

export const selectSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "clearable", title: "Clearable", level: 3 },
  { id: "controlled", title: "Controlled", level: 3 },
  { id: "with-groups", title: "With Groups", level: 3 },
  { id: "states", title: "States", level: 3 },
  { id: "with-icons", title: "With Icons (Recipe)", level: 3 },
  { id: "react-hook-form", title: "React Hook Form", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const SELECT_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: "Size of the select",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the select",
  },
  {
    name: "variant",
    type: "'outline' | 'filled' | 'flushed'",
    defaultValue: "'outline'",
    description: "Visual variant of the select",
  },
  {
    name: "value",
    type: "string",
    description: "Controlled value",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "Default value for uncontrolled usage",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Callback when value changes",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Placeholder text when no value is selected",
  },
  {
    name: "invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the select is in an invalid state",
  },
  {
    name: "clearable",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the select can be cleared",
  },
  {
    name: "onClear",
    type: "() => void",
    description: "Callback when clear button is clicked",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the select is disabled",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the select is required",
  },
  {
    name: "fullWidth",
    type: "boolean",
    defaultValue: "true",
    description: "Whether the select takes full width",
  },
  {
    name: "name",
    type: "string",
    description: "Name for form submission",
  },
  {
    name: "open",
    type: "boolean",
    description: "Whether the select dropdown is open (controlled)",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    description: "Default open state (uncontrolled)",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback when open state changes",
  },
  {
    name: "aria-label",
    type: "string",
    description: "Accessible label for the select trigger",
  },
  {
    name: "aria-labelledby",
    type: "string",
    description: "ID of the element that labels the select",
  },
];

const BASIC_USAGE = `import { Select, SelectItem } from "@ninna-ui/forms";

export default function Example() {
  return (
    <Select placeholder="Select an option">
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
    </Select>
  );
}`;

export function SelectView() {
  return (
    <div className="">
      <ComponentHeader meta={selectMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Select component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic select with options."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/select/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Select supports three visual variants: outline, filled, and flushed."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/forms/select/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Select comes in 5 sizes: xs, sm, md, lg, and xl."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/select/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Select supports multiple color themes. Each color affects the border, focus ring, and text color of the trigger."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/forms/select/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="clearable"
          title="Clearable"
          description="Select with a clear button to reset the selection."
          level={3}
        >
          <CodePreview
            component={<Clearable />}
            filePath="app/views/forms/select/demos/clearable.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="controlled"
          title="Controlled"
          description="Fully controlled select with open/onOpenChange props."
          level={3}
        >
          <CodePreview
            component={<Controlled />}
            filePath="app/views/forms/select/demos/controlled.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-groups"
          title="With Groups"
          description="Select with grouped options and separators."
          level={3}
        >
          <CodePreview
            component={<WithGroups />}
            filePath="app/views/forms/select/demos/withGroups.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="Select in different states."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/select/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-icons"
          title="With Icons (Recipe)"
          description="Composition recipe showing how to add icons to select items using custom content."
          level={3}
        >
          <CodePreview
            component={<WithIcons />}
            filePath="app/views/forms/select/demos/withIcons.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="Select works with React Hook Form using the Controller pattern."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/select/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Select component."
        >
          <PropsTable data={SELECT_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Built on Radix UI Select for full <Code>WAI-ARIA</Code> compliance</li>
              <li>Supports <Code>aria-label</Code> and <Code>aria-labelledby</Code> props for labeling</li>
              <li>Keyboard navigation: Arrow keys, Enter, Escape, and type-ahead search</li>
              <li>Uses <Code>role="listbox"</Code> announced to screen readers</li>
              <li>Proper focus states with visible outlines</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
