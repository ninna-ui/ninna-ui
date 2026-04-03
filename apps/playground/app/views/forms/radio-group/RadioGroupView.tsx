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
import { radioGroupMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import Horizontal from "./demos/horizontal";
import RadioCardDemo from "./demos/radioCard";
import WithReactHookForm from "./demos/withReactHookForm";

export const radioGroupSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "horizontal", title: "Horizontal", level: 3 },
  { id: "radio-card", title: "RadioCard", level: 3 },
  { id: "react-hook-form", title: "React Hook Form", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const RADIO_GROUP_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Size of the radio buttons",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the radio buttons",
  },
  {
    name: "variant",
    type: "'outline' | 'soft' | 'solid'",
    defaultValue: "'outline'",
    description: "Visual variant of the radio buttons",
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
    name: "orientation",
    type: "'horizontal' | 'vertical'",
    defaultValue: "'vertical'",
    description: "Layout orientation",
  },
  {
    name: "gap",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Gap between radio items",
  },
  {
    name: "invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the radio group is in an invalid state",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the radio group is disabled",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "Whether a selection is required",
  },
  {
    name: "name",
    type: "string",
    description: "Name for form submission",
  },
  {
    name: "loop",
    type: "boolean",
    description: "Whether to loop keyboard navigation",
  },
  {
    name: "aria-label",
    type: "string",
    description: "Accessible label for the radio group",
  },
  {
    name: "aria-labelledby",
    type: "string",
    description: "ID of the element that labels the radio group",
  },
];

const RADIO_CARD_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    description: "Value of this radio card (required)",
  },
  {
    name: "title",
    type: "ReactNode",
    description: "Card title",
  },
  {
    name: "description",
    type: "ReactNode",
    description: "Card description text",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Icon to display in the card",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Whether this card is disabled",
  },
  {
    name: "aria-label",
    type: "string",
    description: "Accessible label for the radio card",
  },
  {
    name: "aria-describedby",
    type: "string",
    description: "ID of element that describes this radio card",
  },
];

const BASIC_USAGE = `import { RadioGroup, RadioGroupItem } from "@ninna-ui/forms";

export default function Example() {
  return (
    <RadioGroup defaultValue="option1">
      <RadioGroupItem value="option1" label="Option 1" />
      <RadioGroupItem value="option2" label="Option 2" />
    </RadioGroup>
  );
}`;

export function RadioGroupView() {
  return (
    <div className="">
      <ComponentHeader meta={radioGroupMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the RadioGroup component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic radio group with options."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/radio-group/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="RadioGroup supports outline, soft, and solid variants."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/forms/radio-group/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="RadioGroup comes in 3 sizes: sm, md, and lg."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/radio-group/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="RadioGroup supports multiple color themes."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/forms/radio-group/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="horizontal"
          title="Horizontal"
          description="RadioGroup with horizontal orientation."
          level={3}
        >
          <CodePreview
            component={<Horizontal />}
            filePath="app/views/forms/radio-group/demos/horizontal.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="radio-card"
          title="RadioCard"
          description="Card-style radio buttons with icons and descriptions."
          level={3}
        >
          <CodePreview
            component={<RadioCardDemo />}
            filePath="app/views/forms/radio-group/demos/radioCard.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="RadioGroup works with React Hook Form using the Controller pattern."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/radio-group/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for RadioGroup and RadioCard components."
        >
          <div className="space-y-8">
            <div id="radiogroup-props" className="scroll-mt-20">
              <PropsTable data={RADIO_GROUP_PROPS} title="RadioGroup Props" />
            </div>
            <div id="radiocard-props" className="scroll-mt-20">
              <PropsTable data={RADIO_CARD_PROPS} title="RadioCard Props" />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Built on Radix UI RadioGroup for full <Code>WAI-ARIA</Code> compliance</li>
              <li>Uses <Code>role="radiogroup"</Code> announced to screen readers</li>
              <li>Supports <Code>aria-label</Code> and <Code>aria-labelledby</Code> for labeling</li>
              <li>Keyboard navigation: Arrow keys to navigate, Space to select</li>
              <li>Labels are properly associated with radio buttons</li>
              <li>Proper focus states with visible outlines</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
