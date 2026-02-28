import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from '~/components/docs';
import { Code, Heading } from '@ninna-ui/primitives';
import { formControlMeta } from './meta';

import Basic from './demos/basic';
import Sizes from './demos/sizes';

export const formControlSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'basic', title: 'Basic', level: 3 },
  { id: 'sizes', title: 'With Different Sizes', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'formcontrol-props', title: 'FormControl Props', level: 3 },
  { id: 'formlabel-props', title: 'FormLabel Props', level: 3 },
  { id: 'formmessage-props', title: 'FormMessage Props', level: 3 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const FORM_CONTROL_PROPS: PropDefinition[] = [
  {
    name: 'id',
    type: 'string',
    description: 'Unique ID for the form field (auto-generated if not provided)',
  },
  {
    name: 'isRequired',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field is required',
  },
  {
    name: 'isInvalid',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field is in an invalid state',
  },
  {
    name: 'isDisabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field is disabled',
  },
  {
    name: 'isReadOnly',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field is read-only',
  },
];

const FORM_LABEL_PROPS: PropDefinition[] = [
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Label text content',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes',
  },
];

const FORM_MESSAGE_PROPS: PropDefinition[] = [
  {
    name: 'type',
    type: "'error' | 'success' | 'warning' | 'hint'",
    defaultValue: "'error'",
    description: 'Message type determines styling',
  },
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Message content',
  },
];

const BASIC_USAGE = `import { FormControl, FormLabel, FormMessage, Input } from "@ninna-ui/forms";

<FormControl isRequired>
  <FormLabel>Email</FormLabel>
  <Input type="email" placeholder="you@example.com" />
  <FormMessage type="hint">We'll never share your email.</FormMessage>
</FormControl>

<FormControl isInvalid>
  <FormLabel>Password</FormLabel>
  <Input type="password" />
  <FormMessage>Password must be at least 8 characters.</FormMessage>
</FormControl>`;

export function FormControlView() {
  return (
    <div className="">
      <ComponentHeader meta={formControlMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="FormControl provides context for form fields, managing required, invalid, and disabled states."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="FormControl with FormLabel and FormMessage for validation feedback."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/form-control/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="With Different Sizes"
          description="FormControl works with inputs of any size."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/form-control/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for FormControl, FormLabel, and FormMessage."
        >
          <div className="space-y-8">
            <div id="formcontrol-props">
              <Heading as="h4" size="lg" weight="semibold" className="mb-4">FormControl Props</Heading>
              <PropsTable data={FORM_CONTROL_PROPS} />
            </div>
            <div id="formlabel-props">
              <Heading as="h4" size="lg" weight="semibold" className="mb-4">FormLabel Props</Heading>
              <PropsTable data={FORM_LABEL_PROPS} />
            </div>
            <div id="formmessage-props">
              <Heading as="h4" size="lg" weight="semibold" className="mb-4">FormMessage Props</Heading>
              <PropsTable data={FORM_MESSAGE_PROPS} />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li><Code>FormLabel</Code> is automatically associated with the input via <Code>htmlFor</Code></li>
              <li><Code>aria-required</Code> is set when <Code>isRequired</Code> is true</li>
              <li><Code>aria-invalid</Code> is set when <Code>isInvalid</Code> is true</li>
              <li><Code>aria-disabled</Code> is set when <Code>isDisabled</Code> is true</li>
              <li><Code>FormMessage</Code> is linked via <Code>aria-describedby</Code></li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
