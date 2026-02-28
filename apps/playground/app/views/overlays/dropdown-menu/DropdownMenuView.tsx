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
import { dropdownMenuMeta } from "./meta";

import Basic from "./demos/basic";
import Groups from "./demos/groups";
import Checkbox from "./demos/checkbox";
import Radio from "./demos/radio";
import Submenu from "./demos/submenu";
import Disabled from "./demos/disabled";

export const dropdownMenuSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "groups", title: "Groups & Labels", level: 3 },
  { id: "checkbox", title: "Checkbox Items", level: 3 },
  { id: "radio", title: "Radio Items", level: 3 },
  { id: "submenu", title: "Sub Menu", level: 3 },
  { id: "disabled", title: "Disabled Items", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const ROOT_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", required: true, description: "DropdownMenu content (Trigger, Content, etc.)" },
  { name: "open", type: "boolean", description: "Controlled open state" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false", description: "Default open state (uncontrolled)" },
  { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
  { name: "modal", type: "boolean", defaultValue: "true", description: "Whether the dropdown is modal" },
  { name: "dir", type: "'ltr' | 'rtl'", defaultValue: "'ltr'", description: "Reading direction" },
];

const CONTENT_PROPS: PropDefinition[] = [
  { name: "side", type: "'top' | 'right' | 'bottom' | 'left'", defaultValue: "'bottom'", description: "Which side to place the menu" },
  { name: "sideOffset", type: "number", defaultValue: "4", description: "Distance from trigger in pixels" },
  { name: "align", type: "'start' | 'center' | 'end'", defaultValue: "'start'", description: "Alignment along the side" },
  { name: "loop", type: "boolean", defaultValue: "true", description: "Whether to loop keyboard navigation" },
  { name: "avoidCollisions", type: "boolean", defaultValue: "true", description: "Whether to avoid collisions with viewport boundary" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const ITEM_PROPS: PropDefinition[] = [
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Whether the item is disabled" },
  { name: "destructive", type: "boolean", defaultValue: "false", description: "Whether the item uses danger styling" },
  { name: "onSelect", type: "(event: Event) => void", description: "Callback when the item is selected" },
  { name: "textValue", type: "string", description: "Text value for typeahead search" },
];

const CHECKBOX_ITEM_PROPS: PropDefinition[] = [
  { name: "checked", type: "boolean | 'indeterminate'", description: "Whether the item is checked" },
  { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback when checked state changes" },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Whether the item is disabled" },
  { name: "onSelect", type: "(event: Event) => void", description: "Callback when the item is selected" },
  { name: "textValue", type: "string", description: "Text value for typeahead search" },
];

const RADIO_GROUP_PROPS: PropDefinition[] = [
  { name: "value", type: "string", description: "Current selected value" },
  { name: "onValueChange", type: "(value: string) => void", description: "Callback when value changes" },
];

const RADIO_ITEM_PROPS: PropDefinition[] = [
  { name: "value", type: "string", required: true, description: "Value of the radio item" },
  { name: "disabled", type: "boolean", defaultValue: "false", description: "Whether the item is disabled" },
  { name: "onSelect", type: "(event: Event) => void", description: "Callback when the item is selected" },
  { name: "textValue", type: "string", description: "Text value for typeahead search" },
];

const TRIGGER_PROPS: PropDefinition[] = [
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Render as child element instead of wrapping button" },
];

const LABEL_PROPS: PropDefinition[] = [
  { name: "inset", type: "boolean", defaultValue: "false", description: "Whether the label is inset (indented to align with items)" },
];

const USAGE = `import { DropdownMenu } from "@ninna-ui/overlays";
import { Button , Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Sign out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}`;

export function DropdownMenuView() {
  return (
    <div>
      <ComponentHeader meta={dropdownMenuMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the DropdownMenu component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A simple dropdown menu with items and a separator."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/overlays/dropdown-menu/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="groups"
          title="Groups & Labels"
          description="Organize menu items with groups, labels, and separators."
          level={3}
        >
          <CodePreview
            component={<Groups />}
            filePath="app/views/overlays/dropdown-menu/demos/groups.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="checkbox"
          title="Checkbox Items"
          description="Menu items that can be toggled on and off."
          level={3}
        >
          <CodePreview
            component={<Checkbox />}
            filePath="app/views/overlays/dropdown-menu/demos/checkbox.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="radio"
          title="Radio Items"
          description="Mutually exclusive selection within a radio group."
          level={3}
        >
          <CodePreview
            component={<Radio />}
            filePath="app/views/overlays/dropdown-menu/demos/radio.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="submenu"
          title="Sub Menu"
          description="Nested menus with sub-triggers for complex hierarchies."
          level={3}
        >
          <CodePreview
            component={<Submenu />}
            filePath="app/views/overlays/dropdown-menu/demos/submenu.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="disabled"
          title="Disabled Items"
          description="Items can be disabled to prevent interaction."
          level={3}
        >
          <CodePreview
            component={<Disabled />}
            filePath="app/views/overlays/dropdown-menu/demos/disabled.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the DropdownMenu component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="DropdownMenu (Root)" data={ROOT_PROPS} />
            <PropsTable title="DropdownMenu.Content" data={CONTENT_PROPS} />
            <PropsTable title="DropdownMenu.Trigger" data={TRIGGER_PROPS} />
            <PropsTable title="DropdownMenu.Item" data={ITEM_PROPS} />
            <PropsTable title="DropdownMenu.CheckboxItem" data={CHECKBOX_ITEM_PROPS} />
            <PropsTable title="DropdownMenu.RadioGroup" data={RADIO_GROUP_PROPS} />
            <PropsTable title="DropdownMenu.RadioItem" data={RADIO_ITEM_PROPS} />
            <PropsTable title="DropdownMenu.Label" data={LABEL_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="menu"</Code> with proper ARIA attributes</li>
              <li>Arrow keys navigate between items, Enter/Space selects</li>
              <li>Typeahead support — type to jump to matching items</li>
              <li>Escape key closes the menu</li>
              <li>Sub menus open with Arrow Right and close with Arrow Left</li>
              <li>Disabled items are skipped during keyboard navigation</li>
              <li>Checkbox and radio items announce their state to screen readers</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
