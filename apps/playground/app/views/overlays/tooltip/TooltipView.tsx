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
import { tooltipMeta } from "./meta";

import Basic from "./demos/basic";
import Placements from "./demos/placements";
import WithArrow from "./demos/withArrow";
import CustomDelay from "./demos/customDelay";
import OnElements from "./demos/onElements";

export const tooltipSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "placements", title: "Placements", level: 3 },
  { id: "with-arrow", title: "With Arrow", level: 3 },
  { id: "custom-delay", title: "Custom Delay", level: 3 },
  { id: "on-elements", title: "On Various Elements", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const TOOLTIP_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", required: true, description: "Tooltip content (Trigger, Content)" },
  { name: "open", type: "boolean", description: "Controlled open state" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false", description: "Default open state (uncontrolled)" },
  { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
  { name: "delayDuration", type: "number", defaultValue: "200", description: "Delay in ms before showing the tooltip" },
  { name: "disableHoverableContent", type: "boolean", defaultValue: "false", description: "Whether to disable hoverable content" },
];

const CONTENT_PROPS: PropDefinition[] = [
  { name: "side", type: "'top' | 'right' | 'bottom' | 'left'", defaultValue: "'top'", description: "Which side to place the tooltip" },
  { name: "sideOffset", type: "number", defaultValue: "4", description: "Distance from trigger in pixels" },
  { name: "align", type: "'start' | 'center' | 'end'", defaultValue: "'center'", description: "Alignment along the side" },
  { name: "color", type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'danger' | 'warning' | 'info'", defaultValue: "'neutral'", description: "Color theme of the tooltip" },
  { name: "hasArrow", type: "boolean", defaultValue: "false", description: "Whether to show an arrow pointer" },
  { name: "avoidCollisions", type: "boolean", defaultValue: "true", description: "Whether to avoid collisions with viewport boundary" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const TRIGGER_PROPS: PropDefinition[] = [
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Render as child element instead of wrapping button" },
];

const USAGE = `import { Tooltip } from "@ninna-ui/overlays";
import { Button , Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="outline">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Tooltip text</Tooltip.Content>
    </Tooltip>
  );
}`;

export function TooltipView() {
  return (
    <div>
      <ComponentHeader meta={tooltipMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Tooltip component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A simple tooltip that appears on hover."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/overlays/tooltip/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="placements"
          title="Placements"
          description="Position the tooltip on any side of the trigger element."
          level={3}
        >
          <CodePreview
            component={<Placements />}
            filePath="app/views/overlays/tooltip/demos/placements.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-arrow"
          title="With Arrow"
          description="Add an arrow pointer to visually connect the tooltip to its trigger."
          level={3}
        >
          <CodePreview
            component={<WithArrow />}
            filePath="app/views/overlays/tooltip/demos/withArrow.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="custom-delay"
          title="Custom Delay"
          description="Configure the delay before the tooltip appears."
          level={3}
        >
          <CodePreview
            component={<CustomDelay />}
            filePath="app/views/overlays/tooltip/demos/customDelay.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="on-elements"
          title="On Various Elements"
          description="Tooltips can be attached to buttons, text, icons, and any other element."
          level={3}
        >
          <CodePreview
            component={<OnElements />}
            filePath="app/views/overlays/tooltip/demos/onElements.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Tooltip component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Tooltip (Root)" data={TOOLTIP_PROPS} />
            <PropsTable title="Tooltip.Content" data={CONTENT_PROPS} />
            <PropsTable title="Tooltip.Trigger" data={TRIGGER_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="tooltip"</Code> for screen reader compatibility</li>
              <li>Trigger is associated with content via <Code>aria-describedby</Code></li>
              <li>Tooltip appears on hover and focus for keyboard users</li>
              <li>Escape key dismisses the tooltip</li>
              <li>Configurable delay prevents accidental tooltip display</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
