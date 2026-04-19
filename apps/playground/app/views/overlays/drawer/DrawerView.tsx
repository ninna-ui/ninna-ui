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
import { drawerMeta } from "./meta";

import Basic from "./demos/basic";
import Placements from "./demos/placements";
import Sizes from "./demos/sizes";
import PreventClose from "./demos/preventClose";
import WithForm from "./demos/withForm";
import WithDescription from "./demos/withDescription";

export const drawerSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "placements", title: "Placements", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "prevent-close", title: "Prevent Close", level: 3 },
  { id: "with-form", title: "With Form", level: 3 },
  { id: "with-description", title: "With Description", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const DRAWER_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", required: true, description: "Drawer content (Trigger, Content, etc.)" },
  { name: "open", type: "boolean", description: "Controlled open state" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false", description: "Default open state (uncontrolled)" },
  { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
  { name: "modal", type: "boolean", defaultValue: "true", description: "Whether the drawer blocks interaction with the rest of the page" },
];

const CONTENT_PROPS: PropDefinition[] = [
  { name: "placement", type: "'left' | 'right' | 'top' | 'bottom'", defaultValue: "'right'", description: "Which edge the drawer slides from" },
  { name: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'", defaultValue: "'md'", description: "Size of the drawer panel" },
  { name: "title", type: "string", description: "Accessible title for the drawer. Rendered as sr-only if Drawer.Header is not used." },
  { name: "description", type: "string", description: "Accessible description for the drawer. Rendered as sr-only when provided." },
  { name: "closeOnOverlayClick", type: "boolean", defaultValue: "true", description: "Whether clicking the overlay closes the drawer" },
  { name: "closeOnEscape", type: "boolean", defaultValue: "true", description: "Whether pressing Escape closes the drawer" },
  { name: "onEscapeKeyDown", type: "(event: KeyboardEvent) => void", description: "Callback when Escape key is pressed" },
  { name: "onPointerDownOutside", type: "(event: Event) => void", description: "Callback when pointer clicks outside content" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const TRIGGER_PROPS: PropDefinition[] = [
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Render as child element instead of wrapping button" },
];

const CLOSE_PROPS: PropDefinition[] = [
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Render as child element instead of default close button" },
];

const USAGE = `import { Drawer } from "@ninna-ui/overlays";
import { Button , Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>Title</Drawer.Header>
        <Drawer.Body>Content</Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Drawer.Close>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}`;

export function DrawerView() {
  return (
    <div>
      <ComponentHeader meta={drawerMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Drawer component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A basic right-side drawer with header, body, and footer."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/overlays/drawer/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="placements"
          title="Placements"
          description="Drawer can slide in from any edge: left, right, top, or bottom."
          level={3}
        >
          <CodePreview
            component={<Placements />}
            filePath="app/views/overlays/drawer/demos/placements.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Drawer supports xs, sm, md, lg, xl, and full sizes."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/overlays/drawer/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="prevent-close"
          title="Prevent Close"
          description="Disable overlay click and Escape key to create persistent drawers."
          level={3}
        >
          <CodePreview
            component={<PreventClose />}
            filePath="app/views/overlays/drawer/demos/preventClose.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-form"
          title="With Form"
          description="Drawer is ideal for side forms and settings panels."
          level={3}
        >
          <CodePreview
            component={<WithForm />}
            filePath="app/views/overlays/drawer/demos/withForm.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-description"
          title="With Description"
          description="Add an accessible description to the drawer for better screen reader support."
          level={3}
        >
          <CodePreview
            component={<WithDescription />}
            filePath="app/views/overlays/drawer/demos/withDescription.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Drawer component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Drawer (Root)" data={DRAWER_PROPS} />
            <PropsTable title="Drawer.Content" data={CONTENT_PROPS} />
            <PropsTable title="Drawer.Trigger" data={TRIGGER_PROPS} />
            <PropsTable title="Drawer.Close" data={CLOSE_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="dialog"</Code> with <Code>aria-modal="true"</Code></li>
              <li>Focus is trapped inside the drawer when open</li>
              <li>Focus returns to the trigger element when the drawer is closed</li>
              <li>Escape key closes the drawer by default (configurable)</li>
              <li>Overlay click closes the drawer by default (configurable)</li>
              <li>Supports all four placement directions with proper slide animations</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
