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
import { inputMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import WithIcons from "./demos/withIcons";
import Clearable from "./demos/clearable";
import CharacterCounter from "./demos/characterCounter";
import FloatingLabel from "./demos/floatingLabel";
import ReadOnly from "./demos/readOnly";
import FullWidth from "./demos/fullWidth";
import States from "./demos/states";
import WithReactHookForm from "./demos/withReactHookForm";

export const inputSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "with-icons", title: "With Icons", level: 3 },
  { id: "clearable", title: "Clearable", level: 3 },
  { id: "character-counter", title: "Character Counter", level: 3 },
  { id: "floating-label", title: "Floating Label", level: 3 },
  { id: "read-only", title: "Read Only", level: 3 },
  { id: "full-width", title: "Full Width", level: 3 },
  { id: "states", title: "States", level: 3 },
  { id: "react-hook-form", title: "React Hook Form", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const INPUT_PROPS: PropDefinition[] = [
  {
    name: "variant",
    type: "'outline' | 'filled' | 'flushed' | 'unstyled'",
    defaultValue: "'outline'",
    description: "Visual style variant of the input",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the input focus state",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: "Size of the input",
  },
  {
    name: "clearable",
    type: "boolean",
    defaultValue: "false",
    description: "Show clear button when input has value",
  },
  {
    name: "onClear",
    type: "() => void",
    description: "Callback when clear button is clicked",
  },
  {
    name: "showCounter",
    type: "boolean",
    defaultValue: "false",
    description: "Show character counter (requires maxLength)",
  },
  {
    name: "maxLength",
    type: "number",
    description: "Maximum character length",
  },
  {
    name: "floatingLabel",
    type: "string",
    description: "Floating label text",
  },
  {
    name: "fullWidth",
    type: "boolean",
    defaultValue: "true",
    description: "Whether the input takes full width of its container",
  },
  {
    name: "invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the input is in an invalid state",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the input is disabled",
  },
  {
    name: "readOnly",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the input is read-only",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Input } from "@ninna-ui/forms";

export default function Example() {
  return (
    <Input placeholder="Enter your name" />
  );
}`;

export function InputView() {
  return (
    <div className="">
      <ComponentHeader meta={inputMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Input component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic input with placeholder."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/input/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Input supports outline, filled, flushed, and unstyled variants."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/forms/input/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Input comes in 5 sizes: xs, sm, md, lg, and xl."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/input/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Input supports multiple color themes for focus states."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/forms/input/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-icons"
          title="With Icons"
          description="Input with left and right icons."
          level={3}
        >
          <CodePreview
            component={<WithIcons />}
            filePath="app/views/forms/input/demos/withIcons.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="clearable"
          title="Clearable"
          description="Input with a clear button that appears when there's a value."
          level={3}
        >
          <CodePreview
            component={<Clearable />}
            filePath="app/views/forms/input/demos/clearable.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="character-counter"
          title="Character Counter"
          description="Input with character count display when maxLength is set."
          level={3}
        >
          <CodePreview
            component={<CharacterCounter />}
            filePath="app/views/forms/input/demos/characterCounter.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="floating-label"
          title="Floating Label"
          description="Input with a floating label that animates on focus."
          level={3}
        >
          <CodePreview
            component={<FloatingLabel />}
            filePath="app/views/forms/input/demos/floatingLabel.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="read-only"
          title="Read Only"
          description="Input in read-only mode."
          level={3}
        >
          <CodePreview
            component={<ReadOnly />}
            filePath="app/views/forms/input/demos/readOnly.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="full-width"
          title="Full Width"
          description="Control whether input takes full container width."
          level={3}
        >
          <CodePreview
            component={<FullWidth />}
            filePath="app/views/forms/input/demos/fullWidth.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="Input in different states: normal, disabled, read-only, and invalid."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/input/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="Input works seamlessly with React Hook Form using the register() pattern. Wrap with Field for labels and error messages."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/input/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Input component."
        >
          <PropsTable data={INPUT_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Input has proper focus states with visible outlines</li>
              <li>Disabled inputs have <Code>aria-disabled</Code> attribute</li>
              <li>Invalid inputs have <Code>aria-invalid</Code> attribute</li>
              <li>Works with <Code>FormControl</Code> for automatic label association via <Code>htmlFor</Code></li>
              <li>Keyboard navigation is fully supported</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
