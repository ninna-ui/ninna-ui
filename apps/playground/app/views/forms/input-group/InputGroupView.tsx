import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from '~/components/docs';
import { Code, Heading } from "@ninna-ui/primitives";
import { inputGroupMeta } from './meta';

import Basic from './demos/basic';
import WithAddon from './demos/withAddon';
import Sizes from './demos/sizes';
import WithButton from './demos/withButton';

export const inputGroupSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'with-icons', title: 'With Icons', level: 3 },
  { id: 'with-addon', title: 'With Addon', level: 3 },
  { id: 'sizes', title: 'Sizes', level: 3 },
  { id: 'with-button', title: 'With Button', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'inputgroup-props', title: 'InputGroup Props', level: 3 },
  { id: 'inputaddon-props', title: 'InputAddon Props', level: 3 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const INPUT_GROUP_PROPS: PropDefinition[] = [
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Size of the input group (affects padding for elements)',
  },
  {
    name: 'startElement',
    type: 'ReactNode',
    description: 'Element to render at the start (inside the input border)',
  },
  {
    name: 'endElement',
    type: 'ReactNode',
    description: 'Element to render at the end (inside the input border)',
  },
  {
    name: 'startElementPointerEvents',
    type: "'none' | 'auto'",
    defaultValue: "'none'",
    description: 'Whether start element receives pointer events',
  },
  {
    name: 'endElementPointerEvents',
    type: "'none' | 'auto'",
    defaultValue: "'none'",
    description: 'Whether end element receives pointer events',
  },
];

const INPUT_ADDON_PROPS: PropDefinition[] = [
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: 'Size of the addon',
  },
  {
    name: 'placement',
    type: "'start' | 'end'",
    defaultValue: "'start'",
    description: 'Position of the addon relative to the input',
  },
];

const BASIC_USAGE = `import { Input, InputGroup, InputAddon } from "@ninna-ui/forms";
import { Search } from "lucide-react";

// With icon inside input
<InputGroup startElement={<Search className="w-4 h-4" />}>
  <Input placeholder="Search..." />
</InputGroup>

// With addon outside input
<div className="flex">
  <InputAddon placement="start">https://</InputAddon>
  <Input placeholder="example.com" className="rounded-l-none" />
</div>`;

export function InputGroupView() {
  return (
    <div className="">
      <ComponentHeader meta={inputGroupMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="InputGroup adds elements inside the input border (icons, text). InputAddon adds elements outside the input border."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="with-icons"
          title="With Icons"
          description="Use InputGroup to add icons inside the input field."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/forms/input-group/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-addon"
          title="With Addon"
          description="Use InputAddon for text or elements outside the input border."
          level={3}
        >
          <CodePreview
            component={<WithAddon />}
            filePath="app/views/forms/input-group/demos/withAddon.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="InputGroup supports all input sizes."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/forms/input-group/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-button"
          title="With Button"
          description="Add interactive elements with endElementPointerEvents='auto'."
          level={3}
        >
          <CodePreview
            component={<WithButton />}
            filePath="app/views/forms/input-group/demos/withButton.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for InputGroup and InputAddon components."
        >
          <div className="space-y-8">
            <div id="inputgroup-props">
              <Heading as="h4" size="lg" weight="semibold" className="mb-4">InputGroup Props</Heading>
              <PropsTable data={INPUT_GROUP_PROPS} />
            </div>
            <div id="inputaddon-props">
              <Heading as="h4" size="lg" weight="semibold" className="mb-4">InputAddon Props</Heading>
              <PropsTable data={INPUT_ADDON_PROPS} />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Icons are decorative and hidden from screen readers with <Code>aria-hidden="true"</Code></li>
              <li>Use <Code>aria-label</Code> on inputs when icons replace visible labels</li>
              <li>Interactive elements (buttons) maintain proper focus order</li>
              <li>All standard HTML attributes including <Code>aria-label</Code> and <Code>aria-describedby</Code> are forwarded via <Code>...props</Code></li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
