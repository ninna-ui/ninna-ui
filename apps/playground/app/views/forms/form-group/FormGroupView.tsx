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
import { formGroupMeta } from './meta';

import Basic from './demos/basic';
import Direction from './demos/direction';
import Spacing from './demos/spacing';
import States from './demos/states';
import WithCheckboxes from './demos/withCheckboxes';

export const formGroupSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'basic', title: 'Basic', level: 3 },
  { id: 'direction', title: 'Direction', level: 3 },
  { id: 'spacing', title: 'Spacing', level: 3 },
  { id: 'states', title: 'States', level: 3 },
  { id: 'with-checkboxes', title: 'With Checkboxes & Radio', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const FORM_GROUP_PROPS: PropDefinition[] = [
  {
    name: 'legend',
    type: 'string',
    description: 'Legend/title rendered inside the fieldset legend element',
  },
  {
    name: 'description',
    type: 'string',
    description: 'Optional description text below the legend; linked via aria-describedby',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disables all form controls inside the fieldset',
  },
  {
    name: 'required',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Marks the group as required (shows * indicator in legend)',
  },
  {
    name: 'spacing',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Gap between child fields',
  },
  {
    name: 'direction',
    type: "'vertical' | 'horizontal'",
    defaultValue: "'vertical'",
    description: 'Layout direction of child fields',
  },
  {
    name: 'id',
    type: 'string',
    description: 'ID for the fieldset element (auto-generated if not provided)',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes',
  },
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Form fields to group together',
  },
];

const BASIC_USAGE = `import { FormGroup, Field, Input } from "@ninna-ui/forms";

<FormGroup legend="Personal Information">
  <Field label="First Name">
    <Input placeholder="John" />
  </Field>
  <Field label="Last Name">
    <Input placeholder="Doe" />
  </Field>
</FormGroup>

<FormGroup
  legend="Contact Details"
  description="Please provide your contact information."
  required
>
  <Field label="Email" required>
    <Input type="email" placeholder="john@example.com" />
  </Field>
</FormGroup>`;

export function FormGroupView() {
  return (
    <div className="">
      <ComponentHeader meta={formGroupMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use FormGroup to semantically group related form fields inside a fieldset."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="FormGroup with a legend and optional description."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/form-group/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="direction"
          title="Direction"
          description="Lay out fields vertically (default) or horizontally."
          level={3}
        >
          <CodePreview
            component={<Direction />}
            filePath="app/views/forms/form-group/demos/direction.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="spacing"
          title="Spacing"
          description="Control the gap between fields with sm, md, or lg spacing."
          level={3}
        >
          <CodePreview
            component={<Spacing />}
            filePath="app/views/forms/form-group/demos/spacing.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="states"
          title="States"
          description="Required and disabled states propagate to all child fields."
          level={3}
        >
          <CodePreview
            component={<States />}
            filePath="app/views/forms/form-group/demos/states.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-checkboxes"
          title="With Checkboxes & Radio"
          description="FormGroup works with any form control — checkboxes, radio groups, and more."
          level={3}
        >
          <CodePreview
            component={<WithCheckboxes />}
            filePath="app/views/forms/form-group/demos/withCheckboxes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the FormGroup component."
        >
          <PropsTable data={FORM_GROUP_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Renders a native <Code>fieldset</Code> element for semantic grouping of related controls</li>
              <li>The <Code>legend</Code> prop renders a <Code>&lt;legend&gt;</Code> element — the primary accessible label for the group</li>
              <li>The <Code>description</Code> prop is linked via <Code>aria-describedby</Code> for additional context</li>
              <li>Setting <Code>disabled</Code> on the fieldset disables all child controls natively — no JavaScript needed</li>
              <li>Setting <Code>required</Code> shows a visual indicator; pair with <Code>required</Code> on individual <Code>Field</Code> components for full a11y</li>
              <li>All HTML attributes are forwarded via <Code>...props</Code> spread — <Code>aria-label</Code>, <Code>role</Code>, etc. are fully overridable</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
