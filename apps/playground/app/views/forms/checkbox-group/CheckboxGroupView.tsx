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
import { checkboxGroupMeta } from './meta';

import Basic from './demos/basic';
import Horizontal from './demos/horizontal';
import Colors from './demos/colors';

export const checkboxGroupSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'basic', title: 'Basic', level: 3 },
  { id: 'horizontal', title: 'Horizontal', level: 3 },
  { id: 'colors', title: 'Colors', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const CHECKBOX_GROUP_PROPS: PropDefinition[] = [
  {
    name: 'value',
    type: 'string[]',
    description: 'Controlled selected values',
  },
  {
    name: 'defaultValue',
    type: 'string[]',
    defaultValue: '[]',
    description: 'Default selected values (uncontrolled)',
  },
  {
    name: 'onValueChange',
    type: '(value: string[]) => void',
    description: 'Callback when selection changes',
  },
  {
    name: 'orientation',
    type: "'vertical' | 'horizontal'",
    defaultValue: "'vertical'",
    description: 'Layout orientation',
  },
  {
    name: 'gap',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Gap between items',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'Size of all checkboxes in the group',
  },
  {
    name: 'color',
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: 'Color theme for all checkboxes',
  },
  {
    name: 'variant',
    type: "'outline' | 'soft' | 'solid'",
    defaultValue: "'outline'",
    description: 'Visual variant for all checkboxes',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Disable all checkboxes in the group',
  },
  {
    name: 'aria-label',
    type: 'string',
    description: 'Accessible label for the checkbox group',
  },
];

const BASIC_USAGE = `import { CheckboxGroup, CheckboxGroupItem } from "@ninna-ui/forms";

<CheckboxGroup defaultValue={["option1"]} onValueChange={setSelected}>
  <CheckboxGroupItem value="option1" label="Option 1" />
  <CheckboxGroupItem value="option2" label="Option 2" />
  <CheckboxGroupItem value="option3" label="Option 3" />
</CheckboxGroup>`;

export function CheckboxGroupView() {
  return (
    <div className="">
      <ComponentHeader meta={checkboxGroupMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="CheckboxGroup manages multiple checkbox selections with shared state."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic checkbox group with vertical layout."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/checkbox-group/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="horizontal"
          title="Horizontal"
          description="Horizontal layout for inline checkbox groups."
          level={3}
        >
          <CodePreview
            component={<Horizontal />}
            filePath="app/views/forms/checkbox-group/demos/horizontal.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="CheckboxGroup supports all color themes."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/forms/checkbox-group/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for CheckboxGroup."
        >
          <PropsTable data={CHECKBOX_GROUP_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="group"</Code> for proper grouping semantics</li>
              <li>Supports <Code>aria-label</Code> and other ARIA attributes via props spread</li>
              <li>Each checkbox is keyboard accessible (Space to toggle)</li>
              <li>Supports disabled state for entire group</li>
              <li>Labels are properly associated with checkboxes</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
