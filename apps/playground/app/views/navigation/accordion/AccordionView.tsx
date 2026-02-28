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
import { accordionMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Multiple from "./demos/multiple";
import Disabled from "./demos/disabled";

export const accordionSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "multiple", title: "Multiple Open", level: 3 },
  { id: "disabled", title: "Disabled", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const ACCORDION_PROPS: PropDefinition[] = [
  { name: "type", type: "'single' | 'multiple'", required: true, description: "Whether one or many items can be open at once" },
  { name: "variant", type: "'outline' | 'soft' | 'ghost'", defaultValue: "'outline'", description: "Visual style variant" },
  { name: "value", type: "string | string[]", description: "Controlled open item(s)" },
  { name: "defaultValue", type: "string | string[]", description: "Default open item(s) (uncontrolled)" },
  { name: "onValueChange", type: "(value: string | string[]) => void", description: "Callback when open items change" },
  { name: "collapsible", type: "boolean", defaultValue: "false", description: "Allow all items to close (single mode only)" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const ITEM_PROPS: PropDefinition[] = [
  { name: "value", type: "string", required: true, description: "Unique value for this item" },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Whether the item is disabled" },
];

const CONTENT_PROPS: PropDefinition[] = [
  { name: "forceMount", type: "true", description: "Whether to force mount the content (keeps DOM alive)" },
];

const USAGE = `import { Accordion } from "@ninna-ui/navigation";

export default function Example() {
  return (
    <Accordion type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Question 1</Accordion.Trigger>
        <Accordion.Content>Answer 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Question 2</Accordion.Trigger>
        <Accordion.Content>Answer 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}`;

export function AccordionView() {
  return (
    <div>
      <ComponentHeader meta={accordionMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Accordion component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A collapsible accordion with single-open behavior."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/navigation/accordion/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Accordion supports outline, soft, and ghost visual styles."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/navigation/accordion/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="multiple"
          title="Multiple Open"
          description="Allow multiple items to be expanded simultaneously."
          level={3}
        >
          <CodePreview
            component={<Multiple />}
            filePath="app/views/navigation/accordion/demos/multiple.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="disabled"
          title="Disabled"
          description="Individual accordion items can be disabled."
          level={3}
        >
          <CodePreview
            component={<Disabled />}
            filePath="app/views/navigation/accordion/demos/disabled.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Accordion component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Accordion (Root)" data={ACCORDION_PROPS} />
            <PropsTable title="Accordion.Item" data={ITEM_PROPS} />
            <PropsTable title="Accordion.Content" data={CONTENT_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Follows the <Code>WAI-ARIA</Code> Accordion pattern</li>
              <li>Arrow keys navigate between triggers</li>
              <li>Home and End keys jump to first/last trigger</li>
              <li>Enter/Space toggles the focused item</li>
              <li>Disabled items are skipped during keyboard navigation</li>
              <li>Triggers use <Code>aria-expanded</Code> and <Code>aria-controls</Code></li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
