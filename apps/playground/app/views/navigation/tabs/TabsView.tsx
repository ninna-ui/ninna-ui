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
import { tabsMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Sizes from "./demos/sizes";
import Disabled from "./demos/disabled";
import Vertical from "./demos/vertical";

export const tabsSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "disabled", title: "Disabled", level: 3 },
  { id: "vertical", title: "Vertical", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const TABS_PROPS: PropDefinition[] = [
  { name: "value", type: "string", description: "Controlled active tab value" },
  { name: "defaultValue", type: "string", description: "Default active tab value (uncontrolled)" },
  { name: "onValueChange", type: "(value: string) => void", description: "Callback when active tab changes" },
  { name: "orientation", type: "'horizontal' | 'vertical'", defaultValue: "'horizontal'", description: "Orientation of the tabs" },
  { name: "activationMode", type: "'automatic' | 'manual'", defaultValue: "'automatic'", description: "Whether keyboard activation is automatic" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const LIST_PROPS: PropDefinition[] = [
  { name: "variant", type: "'line' | 'enclosed' | 'soft' | 'outline'", defaultValue: "'line'", description: "Visual style variant" },
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Size of the tab triggers" },
  { name: "loop", type: "boolean", defaultValue: "true", description: "Whether to loop keyboard navigation" },
];

const TRIGGER_PROPS: PropDefinition[] = [
  { name: "value", type: "string", required: true, description: "Value that associates the trigger with a content panel" },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Whether the trigger is disabled" },
];

const CONTENT_PROPS: PropDefinition[] = [
  { name: "value", type: "string", required: true, description: "Value that associates the content with a trigger" },
  { name: "forceMount", type: "true", description: "Whether to force mount the content (keeps DOM alive)" },
];

const USAGE = `import { Tabs } from "@ninna-ui/navigation";

export default function Example() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Account content</Tabs.Content>
      <Tabs.Content value="tab2">Settings content</Tabs.Content>
    </Tabs>
  );
}`;

export function TabsView() {
  return (
    <div>
      <ComponentHeader meta={tabsMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Tabs component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A basic tab group with content panels."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/navigation/tabs/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Tabs supports line, enclosed, soft, and outline visual styles."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/navigation/tabs/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Tabs come in sm, md, and lg sizes."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/navigation/tabs/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="disabled"
          title="Disabled"
          description="Individual tabs can be disabled to prevent interaction."
          level={3}
        >
          <CodePreview
            component={<Disabled />}
            filePath="app/views/navigation/tabs/demos/disabled.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="vertical"
          title="Vertical"
          description="Tabs can be oriented vertically for sidebar-style navigation."
          level={3}
        >
          <CodePreview
            component={<Vertical />}
            filePath="app/views/navigation/tabs/demos/vertical.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Tabs component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Tabs (Root)" data={TABS_PROPS} />
            <PropsTable title="Tabs.List" data={LIST_PROPS} />
            <PropsTable title="Tabs.Trigger" data={TRIGGER_PROPS} />
            <PropsTable title="Tabs.Content" data={CONTENT_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="tablist"</Code>, <Code>role="tab"</Code>, and <Code>role="tabpanel"</Code></li>
              <li>Arrow keys navigate between tabs</li>
              <li>Home and End keys jump to first/last tab</li>
              <li>Disabled tabs are skipped during keyboard navigation</li>
              <li>Each tab panel is associated with its trigger via <Code>aria-controls</Code></li>
              <li>Supports both automatic and manual activation modes</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
