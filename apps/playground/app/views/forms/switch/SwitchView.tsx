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
import { switchMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import TrackLabels from "./demos/trackLabels";
import ThumbIcon from "./demos/thumbIcon";
import WithDescription from "./demos/withDescription";
import Loading from "./demos/loading";
import States from "./demos/states";
import WithReactHookForm from "./demos/withReactHookForm";

export const switchSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "track-labels", title: "Track Labels", level: 3 },
  { id: "thumb-icon", title: "Thumb Icon", level: 3 },
  { id: "with-description", title: "With Description", level: 3 },
  { id: "loading", title: "Loading", level: 3 },
  { id: "states", title: "States", level: 3 },
  { id: "react-hook-form", title: "React Hook Form", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const SWITCH_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Size of the switch",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the switch",
  },
  {
    name: "variant",
    type: "'solid' | 'outline'",
    defaultValue: "'solid'",
    description: "Visual variant of the switch",
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
    description: "Label text for the switch",
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
    description: "Position of the label relative to switch",
  },
  {
    name: "invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the switch is in an invalid state",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the switch is in a loading state",
  },
  {
    name: "trackLabels",
    type: "{ on?: string; off?: string }",
    description: "Track labels for on/off states",
  },
  {
    name: "thumbIcon",
    type: "ReactNode",
    description: "Custom icon for the thumb",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the switch is disabled",
  },
];

const BASIC_USAGE = `import { Switch } from "@ninna-ui/forms";

export default function Example() {
  return (
    <Switch label="Enable notifications" />
  );
}`;

export function SwitchView() {
  return (
    <div className="">
      <ComponentHeader meta={switchMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Switch component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic switch with label."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/switch/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Switch supports solid and outline variants."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/forms/switch/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Switch comes in 3 sizes: sm, md, and lg."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/switch/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Switch supports multiple color themes."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/forms/switch/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="track-labels"
          title="Track Labels"
          description="Switch with on/off labels inside the track."
          level={3}
        >
          <CodePreview
            component={<TrackLabels />}
            filePath="app/views/forms/switch/demos/trackLabels.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="thumb-icon"
          title="Thumb Icon"
          description="Switch with custom icon inside the thumb."
          level={3}
        >
          <CodePreview
            component={<ThumbIcon />}
            filePath="app/views/forms/switch/demos/thumbIcon.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-description"
          title="With Description"
          description="Switch with label and description text."
          level={3}
        >
          <CodePreview
            component={<WithDescription />}
            filePath="app/views/forms/switch/demos/withDescription.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="loading"
          title="Loading"
          description="Switch with loading state."
          level={3}
        >
          <CodePreview
            component={<Loading />}
            filePath="app/views/forms/switch/demos/loading.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="Switch in different states."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/switch/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="Switch works with React Hook Form using the Controller pattern."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/switch/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Switch component."
        >
          <PropsTable data={SWITCH_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Built on Radix UI Switch for full accessibility</li>
              <li>Proper focus states with visible outlines</li>
              <li>Supports keyboard navigation (<Code>Space</Code> to toggle)</li>
              <li>Labels are properly associated with switches via <Code>htmlFor</Code></li>
              <li>Uses <Code>role="switch"</Code> with <Code>aria-checked</Code> state announced to screen readers</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
