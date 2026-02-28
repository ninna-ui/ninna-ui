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
import { popoverMeta } from "./meta";

import Basic from "./demos/basic";
import Placements from "./demos/placements";
import Alignment from "./demos/alignment";
import WithArrow from "./demos/withArrow";
import RichContent from "./demos/richContent";

export const popoverSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "placements", title: "Placements", level: 3 },
  { id: "alignment", title: "Alignment", level: 3 },
  { id: "with-arrow", title: "With Arrow", level: 3 },
  { id: "rich-content", title: "Rich Content", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const POPOVER_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", required: true, description: "Popover content (Trigger, Content, etc.)" },
  { name: "open", type: "boolean", description: "Controlled open state" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false", description: "Default open state (uncontrolled)" },
  { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
  { name: "modal", type: "boolean", defaultValue: "false", description: "Whether the popover is modal" },
];

const CONTENT_PROPS: PropDefinition[] = [
  { name: "side", type: "'top' | 'right' | 'bottom' | 'left'", defaultValue: "'bottom'", description: "Which side to place the popover" },
  { name: "sideOffset", type: "number", defaultValue: "4", description: "Distance from trigger in pixels" },
  { name: "align", type: "'start' | 'center' | 'end'", defaultValue: "'center'", description: "Alignment along the side" },
  { name: "avoidCollisions", type: "boolean", defaultValue: "true", description: "Whether to avoid collisions with viewport boundary" },
  { name: "onEscapeKeyDown", type: "(event: KeyboardEvent) => void", description: "Callback when Escape key is pressed" },
  { name: "onPointerDownOutside", type: "(event: Event) => void", description: "Callback when pointer clicks outside content" },
  { name: "onFocusOutside", type: "(event: Event) => void", description: "Callback when focus moves outside content" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const TRIGGER_PROPS: PropDefinition[] = [
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Render as child element instead of wrapping button" },
];

const ARROW_PROPS: PropDefinition[] = [
  { name: "width", type: "number", defaultValue: "10", description: "Width of the arrow in pixels" },
  { name: "height", type: "number", defaultValue: "5", description: "Height of the arrow in pixels" },
];

const CLOSE_PROPS: PropDefinition[] = [
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Render as child element instead of default close button" },
];

const USAGE = `import { Popover } from "@ninna-ui/overlays";
import { Button , Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <p>Popover content here</p>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}`;

export function PopoverView() {
  return (
    <div>
      <ComponentHeader meta={popoverMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Popover component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A basic popover with title and description."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/overlays/popover/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="placements"
          title="Placements"
          description="Position the popover on any side of the trigger element."
          level={3}
        >
          <CodePreview
            component={<Placements />}
            filePath="app/views/overlays/popover/demos/placements.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="alignment"
          title="Alignment"
          description="Align the popover to the start, center, or end of the trigger."
          level={3}
        >
          <CodePreview
            component={<Alignment />}
            filePath="app/views/overlays/popover/demos/alignment.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-arrow"
          title="With Arrow"
          description="Add an arrow pointer to visually connect the popover to its trigger."
          level={3}
        >
          <CodePreview
            component={<WithArrow />}
            filePath="app/views/overlays/popover/demos/withArrow.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="rich-content"
          title="Rich Content"
          description="Popovers can contain rich layouts like user profiles and cards."
          level={3}
        >
          <CodePreview
            component={<RichContent />}
            filePath="app/views/overlays/popover/demos/richContent.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Popover component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Popover (Root)" data={POPOVER_PROPS} />
            <PropsTable title="Popover.Content" data={CONTENT_PROPS} />
            <PropsTable title="Popover.Trigger" data={TRIGGER_PROPS} />
            <PropsTable title="Popover.Arrow" data={ARROW_PROPS} />
            <PropsTable title="Popover.Close" data={CLOSE_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Popover content is associated with trigger via <Code>aria-controls</Code></li>
              <li>Focus moves to content when opened and returns to trigger when closed</li>
              <li>Escape key dismisses the popover</li>
              <li>Clicking outside the popover dismisses it</li>
              <li>Arrow keys navigate focusable elements within the popover</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
