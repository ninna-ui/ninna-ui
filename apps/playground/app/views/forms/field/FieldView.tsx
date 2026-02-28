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
import { fieldMeta } from './meta';

import Basic from './demos/basic';
import HelperText from './demos/helperText';
import ErrorText from './demos/errorText';
import Required from './demos/required';
import Optional from './demos/optional';
import AllProps from './demos/allProps';
import UsageGuide from './demos/usageGuide';

export const fieldSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'helper-text', title: 'Helper Text', level: 3 },
  { id: 'error-text', title: 'Error Text', level: 3 },
  { id: 'required', title: 'Required', level: 3 },
  { id: 'optional', title: 'Optional Text', level: 3 },
  { id: 'all-props', title: 'All Props', level: 3 },
  { id: 'usage-guide', title: 'Field as Primary Wrapper', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const FIELD_PROPS: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text',
  },
  {
    name: 'helperText',
    type: 'string',
    description: 'Helper text displayed below the input',
  },
  {
    name: 'errorText',
    type: 'string',
    description: 'Error text displayed when invalid',
  },
  {
    name: 'required',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field is required',
  },
  {
    name: 'invalid',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field is invalid',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Whether the field is disabled',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Size of the field elements',
  },
  {
    name: 'optionalText',
    type: 'string',
    description: 'Text displayed on the right side of the label',
  },
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'Input component to wrap',
  },
  {
    name: 'id',
    type: 'string',
    description: 'ID for the field (used to link label with input)',
  },
];

const BASIC_USAGE = `import { Field, Input } from "@ninna-ui/forms";

export default function Example() {
  return (
    <Field label="Email" helperText="We'll never share your email">
      <Input placeholder="Enter your email" />
    </Field>
  );
}`;

export function FieldView() {
  return (
    <div className="">
      <ComponentHeader meta={fieldMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Field component to wrap inputs with labels and helper text."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic field with a label."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/field/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="helper-text"
          title="Helper Text"
          description="Field with helper text below the input."
          level={3}
        >
          <CodePreview
            component={<HelperText />}
            filePath="app/views/forms/field/demos/helperText.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="error-text"
          title="Error Text"
          description="Field in an invalid state with error message."
          level={3}
        >
          <CodePreview
            component={<ErrorText />}
            filePath="app/views/forms/field/demos/errorText.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="required"
          title="Required"
          description="Field marked as required."
          level={3}
        >
          <CodePreview
            component={<Required />}
            filePath="app/views/forms/field/demos/required.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="optional"
          title="Optional Text"
          description="Field with optional indicator."
          level={3}
        >
          <CodePreview
            component={<Optional />}
            filePath="app/views/forms/field/demos/optional.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="all-props"
          title="All Props"
          description="Field with various prop combinations: disabled, sizes, optionalText."
          level={3}
        >
          <CodePreview
            component={<AllProps />}
            filePath="app/views/forms/field/demos/allProps.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="usage-guide"
          title="Field as Primary Wrapper"
          description="Comprehensive guide showing Field as the recommended pattern for wrapping form inputs with React Hook Form integration."
          level={3}
        >
          <CodePreview
            component={<UsageGuide />}
            filePath="app/views/forms/field/demos/usageGuide.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Field component."
        >
          <PropsTable data={FIELD_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Label is properly associated with input via <Code>htmlFor</Code></li>
              <li>Helper/error text linked via <Code>aria-describedby</Code></li>
              <li>Required fields have <Code>aria-required</Code> attribute</li>
              <li>Invalid fields have <Code>aria-invalid</Code> attribute</li>
              <li>Error messages use <Code>role="alert"</Code> for screen readers</li>
              <li>Supports all native div ARIA attributes via props spread</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
