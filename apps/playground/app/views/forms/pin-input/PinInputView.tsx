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
import { pinInputMeta } from './meta';

import Basic from './demos/basic';
import Length from './demos/length';
import Types from './demos/types';
import Sizes from './demos/sizes';
import Otp from './demos/otp';
import Masked from './demos/masked';
import States from './demos/states';
import WithReactHookForm from './demos/withReactHookForm';

export const pinInputSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'length', title: 'Length', level: 3 },
  { id: 'types', title: 'Input Types', level: 3 },
  { id: 'sizes', title: 'Sizes', level: 3 },
  { id: 'otp', title: 'OTP Mode', level: 3 },
  { id: 'masked', title: 'Masked', level: 3 },
  { id: 'states', title: 'States', level: 3 },
  { id: 'react-hook-form', title: 'React Hook Form', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const PIN_INPUT_PROPS: PropDefinition[] = [
  {
    name: 'length',
    type: 'number',
    defaultValue: '4',
    description: 'Number of input fields',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Size of the inputs',
  },
  {
    name: 'type',
    type: "'text' | 'password' | 'number'",
    defaultValue: "'text'",
    description: 'Input type',
  },
  {
    name: 'mask',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Mask input value',
  },
  {
    name: 'otp',
    type: 'boolean',
    defaultValue: 'false',
    description: 'One-time password mode (enables autocomplete)',
  },
  {
    name: 'value',
    type: 'string',
    description: 'Controlled value',
  },
  {
    name: 'defaultValue',
    type: 'string',
    description: 'Default value (uncontrolled)',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    description: 'Callback when value changes',
  },
  {
    name: 'onComplete',
    type: '(value: string) => void',
    description: 'Callback when all fields are filled',
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
    name: 'placeholder',
    type: 'string',
    defaultValue: "'○'",
    description: 'Placeholder for each field',
  },
  {
    name: 'autoFocus',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Auto focus the first input on mount',
  },
  {
    name: 'name',
    type: 'string',
    description: 'Name for hidden form submission input',
  },
  {
    name: 'aria-label',
    type: 'string',
    defaultValue: "'PIN input'",
    description: 'Accessible label for the input group',
  },
];

const BASIC_USAGE = `import { PinInput } from "@ninna-ui/forms";

export default function Example() {
  return (
    <PinInput
      length={6}
      onComplete={(pin) => console.log('PIN:', pin)}
    />
  );
}`;

export function PinInputView() {
  return (
    <div className="">
      <ComponentHeader meta={pinInputMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the PinInput component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic 4-digit PIN input."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/pin-input/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="length"
          title="Length"
          description="PinInput with different number of fields."
          level={3}
        >
          <CodePreview
            component={<Length />}
            filePath="app/views/forms/pin-input/demos/length.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="types"
          title="Input Types"
          description="Text, number, and password input types."
          level={3}
        >
          <CodePreview
            component={<Types />}
            filePath="app/views/forms/pin-input/demos/types.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="PinInput in different sizes."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/pin-input/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="otp"
          title="OTP Mode"
          description="6-digit OTP input with number-only mode."
          level={3}
        >
          <CodePreview
            component={<Otp />}
            filePath="app/views/forms/pin-input/demos/otp.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="masked"
          title="Masked"
          description="PIN input with masked/hidden values."
          level={3}
        >
          <CodePreview
            component={<Masked />}
            filePath="app/views/forms/pin-input/demos/masked.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="Different states of the PIN input."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/pin-input/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="react-hook-form"
          title="React Hook Form"
          description="PinInput works with React Hook Form using the Controller pattern."
          level={3}
        >
          <CodePreview
            component={<WithReactHookForm />}
            filePath="app/views/forms/pin-input/demos/withReactHookForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the PinInput component."
        >
          <PropsTable data={PIN_INPUT_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="group"</Code> with a customizable <Code>aria-label</Code> (default: "PIN input")</li>
              <li>Each input has an <Code>aria-label</Code> indicating its position (e.g. "Pin digit 1 of 6")</li>
              <li>Arrow keys navigate between inputs</li>
              <li>Backspace moves to previous input when empty</li>
              <li>Paste support for filling multiple inputs at once</li>
              <li>Proper <Code>aria-invalid</Code> and <Code>aria-disabled</Code> states</li>
              <li>OTP mode enables <Code>autocomplete="one-time-code"</Code></li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
