import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from '~/components/docs';
import { Code } from '@ninna-ui/primitives';
import { numberInputMeta } from './meta';

import Basic from './demos/basic';
import Sizes from './demos/sizes';
import MinMax from './demos/minMax';
import MinMaxStep from './demos/minMaxStep';
import StepperPositions from './demos/stepperPositions';
import Precision from './demos/precision';
import Formatting from './demos/formatting';
import States from './demos/states';
import WithReactHookForm from './demos/withReactHookForm';

export const numberInputSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'sizes', title: 'Sizes', level: 3 },
  { id: 'min-max', title: 'Min/Max', level: 3 },
  { id: 'min-max-step', title: 'Min/Max/Step', level: 3 },
  { id: 'stepper-positions', title: 'Stepper Positions', level: 3 },
  { id: 'precision', title: 'Precision', level: 3 },
  { id: 'formatting', title: 'Formatting', level: 3 },
  { id: 'states', title: 'States', level: 3 },
  { id: 'react-hook-form', title: 'React Hook Form', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const NUMBER_INPUT_PROPS: PropDefinition[] = [
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Size of the input',
  },
  {
    name: 'value',
    type: 'number',
    description: 'Controlled value',
  },
  {
    name: 'defaultValue',
    type: 'number',
    description: 'Default value (uncontrolled)',
  },
  {
    name: 'onChange',
    type: '(value: number) => void',
    description: 'Callback when value changes',
  },
  {
    name: 'min',
    type: 'number',
    description: 'Minimum value',
  },
  {
    name: 'max',
    type: 'number',
    description: 'Maximum value',
  },
  {
    name: 'step',
    type: 'number',
    defaultValue: '1',
    description: 'Step increment',
  },
  {
    name: 'precision',
    type: 'number',
    description: 'Decimal places',
  },
  {
    name: 'showStepper',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Show stepper buttons',
  },
  {
    name: 'stepperPosition',
    type: "'right' | 'sides'",
    defaultValue: "'right'",
    description: 'Stepper position',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disabled state',
  },
  {
    name: 'invalid',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Invalid state',
  },
  {
    name: 'readOnly',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Read-only state',
  },
  {
    name: 'required',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the input is required',
  },
  {
    name: 'allowKeyboardInput',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Allow typing values directly',
  },
  {
    name: 'format',
    type: '(value: number) => string',
    description: 'Custom format function for display value',
  },
  {
    name: 'parse',
    type: '(value: string) => number',
    description: 'Custom parse function for input value',
  },
  {
    name: 'name',
    type: 'string',
    description: 'Name for form submission',
  },
  {
    name: 'id',
    type: 'string',
    description: 'ID for the input element',
  },
  {
    name: 'incrementLabel',
    type: 'string',
    defaultValue: "'Increase value'",
    description: 'Accessible label for the increment button',
  },
  {
    name: 'decrementLabel',
    type: 'string',
    defaultValue: "'Decrease value'",
    description: 'Accessible label for the decrement button',
  },
];

const BASIC_USAGE = `import { NumberInput } from "@ninna-ui/forms";

export default function Example() {
  return (
    <NumberInput
      min={0}
      max={100}
      step={1}
      defaultValue={50}
    />
  );
}`;

export function NumberInputView() {
  return (
    <div className="">
      <ComponentHeader meta={numberInputMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the NumberInput component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic number input with stepper controls."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/number-input/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="NumberInput in different sizes."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/number-input/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="min-max"
          title="Min/Max"
          description="Constrain values within a range."
          level={3}
        >
          <CodePreview
            component={<MinMax />}
            filePath="app/views/forms/number-input/demos/minMax.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="min-max-step"
          title="Min/Max/Step"
          description="Constrain values with custom step increments."
          level={3}
        >
          <CodePreview
            component={<MinMaxStep />}
            filePath="app/views/forms/number-input/demos/minMaxStep.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="stepper-positions"
          title="Stepper Positions"
          description="Different stepper button layouts."
          level={3}
        >
          <CodePreview
            component={<StepperPositions />}
            filePath="app/views/forms/number-input/demos/stepperPositions.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="precision"
          title="Precision"
          description="Decimal precision for floating point numbers."
          level={3}
        >
          <CodePreview
            component={<Precision />}
            filePath="app/views/forms/number-input/demos/precision.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="formatting"
          title="Formatting"
          description="Custom format and parse functions for display."
          level={3}
        >
          <CodePreview
            component={<Formatting />}
            filePath="app/views/forms/number-input/demos/formatting.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="NumberInput in different states: disabled, invalid, read-only."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/number-input/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="NumberInput works with React Hook Form using the Controller pattern."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/number-input/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the NumberInput component."
        >
          <PropsTable data={NUMBER_INPUT_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="spinbutton"</Code> with <Code>aria-valuemin</Code>, <Code>aria-valuemax</Code>, and <Code>aria-valuenow</Code></li>
              <li>Stepper buttons have customizable labels via <Code>incrementLabel</Code> and <Code>decrementLabel</Code> props</li>
              <li>Arrow Up/Down keys increment/decrement the value</li>
              <li>Proper <Code>aria-invalid</Code>, <Code>aria-disabled</Code>, and <Code>aria-required</Code> states</li>
              <li>Supports all native input ARIA attributes via props spread</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
