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
import { sliderMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import Range from "./demos/range";
import Marks from "./demos/marks";
import Orientation from "./demos/orientation";
import Inverted from "./demos/inverted";
import MinStepsBetween from "./demos/minStepsBetween";
import ShowValue from "./demos/showValue";
import WithLabel from "./demos/withLabel";
import WithTooltip from "./demos/withTooltip";
import WithReactHookForm from "./demos/withReactHookForm";

export const sliderSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "range", title: "Range Slider", level: 3 },
  { id: "marks", title: "Marks", level: 3 },
  { id: "orientation", title: "Orientation", level: 3 },
  { id: "inverted", title: "Inverted", level: 3 },
  { id: "min-steps-between", title: "Min Steps Between", level: 3 },
  { id: "show-value", title: "Show Value", level: 3 },
  { id: "with-label", title: "With Label", level: 3 },
  { id: "with-tooltip", title: "With Tooltip (Recipe)", level: 3 },
  { id: "react-hook-form", title: "React Hook Form", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const SLIDER_PROPS: PropDefinition[] = [
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Size of the slider",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the slider",
  },
  {
    name: "variant",
    type: "'solid' | 'soft'",
    defaultValue: "'solid'",
    description: "Visual variant of the slider",
  },
  {
    name: "value",
    type: "number[]",
    description: "Controlled value (array for range sliders)",
  },
  {
    name: "defaultValue",
    type: "number[]",
    defaultValue: "[50]",
    description: "Default value for uncontrolled usage",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    description: "Callback when value changes",
  },
  {
    name: "onValueCommit",
    type: "(value: number[]) => void",
    description: "Callback when value is committed (on mouse up)",
  },
  {
    name: "min",
    type: "number",
    defaultValue: "0",
    description: "Minimum value",
  },
  {
    name: "max",
    type: "number",
    defaultValue: "100",
    description: "Maximum value",
  },
  {
    name: "step",
    type: "number",
    defaultValue: "1",
    description: "Step increment",
  },
  {
    name: "label",
    type: "ReactNode",
    description: "Label for the slider",
  },
  {
    name: "helperText",
    type: "ReactNode",
    description: "Helper text below slider",
  },
  {
    name: "showValue",
    type: "boolean",
    defaultValue: "false",
    description: "Show current value",
  },
  {
    name: "showTooltip",
    type: "boolean",
    defaultValue: "false",
    description: "Show tooltip on hover/drag",
  },
  {
    name: "formatValue",
    type: "(value: number) => string",
    description: "Format function for value display",
  },
  {
    name: "marks",
    type: "SliderMark[] | boolean",
    description: "Marks to display on the slider track",
  },
  {
    name: "orientation",
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
    description: "Orientation of the slider",
  },
  {
    name: "inverted",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the slider is inverted",
  },
  {
    name: "minStepsBetweenThumbs",
    type: "number",
    description: "Minimum steps between thumbs for range sliders",
  },
  {
    name: "invalid",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the slider is in an invalid state",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the slider is disabled",
  },
  {
    name: "name",
    type: "string",
    description: "Name for form submission",
  },
];

const BASIC_USAGE = `import { Slider } from "@ninna-ui/forms";

export default function Example() {
  return (
    <Slider defaultValue={[50]} />
  );
}`;

export function SliderView() {
  return (
    <div className="">
      <ComponentHeader meta={sliderMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Slider component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic slider with default value."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/slider/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Slider with different display options including labels and marks."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/forms/slider/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Slider comes in 3 sizes: sm, md, and lg."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/slider/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Slider supports multiple color themes."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/forms/slider/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="range"
          title="Range Slider"
          description="Slider with two thumbs for selecting a range."
          level={3}
        >
          <CodePreview
            component={<Range />}
            filePath="app/views/forms/slider/demos/range.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="marks"
          title="Marks"
          description="Slider with marks on the track."
          level={3}
        >
          <CodePreview
            component={<Marks />}
            filePath="app/views/forms/slider/demos/marks.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="orientation"
          title="Orientation"
          description="Slider in horizontal and vertical orientations."
          level={3}
        >
          <CodePreview
            component={<Orientation />}
            filePath="app/views/forms/slider/demos/orientation.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="inverted"
          title="Inverted"
          description="Slider with inverted direction."
          level={3}
        >
          <CodePreview
            component={<Inverted />}
            filePath="app/views/forms/slider/demos/inverted.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="min-steps-between"
          title="Min Steps Between"
          description="Range slider with minimum steps between thumbs."
          level={3}
        >
          <CodePreview
            component={<MinStepsBetween />}
            filePath="app/views/forms/slider/demos/minStepsBetween.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="show-value"
          title="Show Value"
          description="Slider with value display and custom formatting."
          level={3}
        >
          <CodePreview
            component={<ShowValue />}
            filePath="app/views/forms/slider/demos/showValue.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-label"
          title="With Label"
          description="Slider with label and value display."
          level={3}
        >
          <CodePreview
            component={<WithLabel />}
            filePath="app/views/forms/slider/demos/withLabel.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-tooltip"
          title="With Tooltip (Recipe)"
          description="Composition recipe showing how to add a tooltip that follows the thumb during drag."
          level={3}
        >
          <CodePreview
            component={<WithTooltip />}
            filePath="app/views/forms/slider/demos/withTooltip.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="Slider works with React Hook Form using the Controller pattern."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/slider/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Slider component."
        >
          <div id="slider-props" className="scroll-mt-20">
            <PropsTable data={SLIDER_PROPS} title="Slider Props" />
          </div>
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Built on Radix UI Slider for full <Code>WAI-ARIA</Code> compliance</li>
              <li>Uses <Code>role="slider"</Code> with <Code>aria-valuemin</Code>, <Code>aria-valuemax</Code>, and <Code>aria-valuenow</Code></li>
              <li>Supports <Code>aria-label</Code> and <Code>aria-labelledby</Code> via props spread</li>
              <li>Keyboard navigation: Arrow keys to adjust value, Home/End for min/max</li>
              <li>Labels are properly associated via <Code>label</Code> prop</li>
              <li>Proper focus states with visible outlines</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
