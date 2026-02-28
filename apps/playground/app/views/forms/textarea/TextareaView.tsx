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
import { textareaMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import Resize from "./demos/resize";
import AutoResize from "./demos/autoResize";
import CharacterCounter from "./demos/characterCounter";
import States from "./demos/states";
import WithReactHookForm from "./demos/withReactHookForm";

export const textareaSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "resize", title: "Resize", level: 3 },
  { id: "auto-resize", title: "Auto Resize", level: 3 },
  { id: "character-counter", title: "Character Counter", level: 3 },
  { id: "states", title: "States", level: 3 },
  { id: "react-hook-form", title: "React Hook Form", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const TEXTAREA_PROPS: PropDefinition[] = [
  {
    name: "variant",
    type: "'outline' | 'filled' | 'flushed' | 'unstyled'",
    defaultValue: "'outline'",
    description: "Visual style variant of the textarea",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the textarea focus state",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: "Size of the textarea",
  },
  {
    name: "resize",
    type: "'none' | 'vertical' | 'horizontal' | 'both'",
    defaultValue: "'vertical'",
    description: "Resize behavior of the textarea",
  },
  {
    name: "rows",
    type: "number",
    defaultValue: "3",
    description: "Number of visible text rows",
  },
  {
    name: "autoResize",
    type: "boolean",
    defaultValue: "false",
    description: "Auto-resize based on content",
  },
  {
    name: "minRows",
    type: "number",
    defaultValue: "3",
    description: "Minimum rows when autoResize is enabled",
  },
  {
    name: "maxRows",
    type: "number",
    description: "Maximum rows when autoResize is enabled",
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
    name: "invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the textarea is in an invalid state",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the textarea is disabled",
  },
];

const BASIC_USAGE = `import { Textarea } from "@ninna-ui/forms";

export default function Example() {
  return (
    <Textarea placeholder="Enter your message..." />
  );
}`;

export function TextareaView() {
  return (
    <div className="">
      <ComponentHeader meta={textareaMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Textarea component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic textarea with placeholder."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/textarea/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Textarea supports outline, filled, flushed, and unstyled variants."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/forms/textarea/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Textarea comes in 5 sizes: xs, sm, md, lg, and xl."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/textarea/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Textarea supports multiple color themes for focus states."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/forms/textarea/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="resize"
          title="Resize"
          description="Textarea with different resize options."
          level={3}
        >
          <CodePreview
            component={<Resize />}
            filePath="app/views/forms/textarea/demos/resize.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="auto-resize"
          title="Auto Resize"
          description="Textarea that automatically grows with content."
          level={3}
        >
          <CodePreview
            component={<AutoResize />}
            filePath="app/views/forms/textarea/demos/autoResize.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="character-counter"
          title="Character Counter"
          description="Textarea with character count display."
          level={3}
        >
          <CodePreview
            component={<CharacterCounter />}
            filePath="app/views/forms/textarea/demos/characterCounter.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="Textarea in different states: disabled, invalid, read-only."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/textarea/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="Textarea works seamlessly with React Hook Form using the register() pattern."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/textarea/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Textarea component."
        >
          <PropsTable data={TEXTAREA_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Textarea has proper focus states with visible outlines</li>
              <li>Disabled textareas have <Code>aria-disabled</Code> attribute</li>
              <li>Invalid textareas have <Code>aria-invalid</Code> attribute</li>
              <li>Works with <Code>FormControl</Code> for automatic label association via <Code>htmlFor</Code></li>
              <li>Keyboard navigation is fully supported</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
