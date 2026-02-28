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
import { modalMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import Centered from "./demos/centered";
import Controlled from "./demos/controlled";
import PreventClose from "./demos/preventClose";
import WithCloseButton from "./demos/withCloseButton";
import LongContent from "./demos/longContent";
import WithDescription from "./demos/withDescription";

export const modalSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "centered", title: "Centered", level: 3 },
  { id: "controlled", title: "Controlled", level: 3 },
  { id: "prevent-close", title: "Prevent Close", level: 3 },
  { id: "with-close-button", title: "With Close Button", level: 3 },
  { id: "long-content", title: "Long Content", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const MODAL_PROPS: PropDefinition[] = [
  { name: "children", type: "ReactNode", required: true, description: "Modal content (Trigger, Content, etc.)" },
  { name: "open", type: "boolean", description: "Controlled open state" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false", description: "Default open state (uncontrolled)" },
  { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
  { name: "modal", type: "boolean", defaultValue: "true", description: "Whether the modal blocks interaction with the rest of the page" },
];

const CONTENT_PROPS: PropDefinition[] = [
  { name: "size", type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'", defaultValue: "'md'", description: "Size of the modal content panel" },
  { name: "centered", type: "boolean", defaultValue: "true", description: "Whether the modal is vertically centered" },
  { name: "description", type: "string", description: "Accessible description for the modal. Rendered as sr-only when provided." },
  { name: "closeOnOverlayClick", type: "boolean", defaultValue: "true", description: "Whether clicking the overlay closes the modal" },
  { name: "closeOnEscape", type: "boolean", defaultValue: "true", description: "Whether pressing Escape closes the modal" },
  { name: "onEscapeKeyDown", type: "(event: KeyboardEvent) => void", description: "Callback when Escape key is pressed" },
  { name: "onPointerDownOutside", type: "(event: Event) => void", description: "Callback when pointer clicks outside content" },
  { name: "onInteractOutside", type: "(event: Event) => void", description: "Callback when focus moves outside content" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const TRIGGER_PROPS: PropDefinition[] = [
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Render as child element instead of wrapping button" },
];

const CLOSE_PROPS: PropDefinition[] = [
  { name: "asChild", type: "boolean", defaultValue: "false", description: "Render as child element instead of default close button" },
];

const BASIC_USAGE = `import { Modal } from "@ninna-ui/overlays";
import { Button , Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Open Modal</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>Title</Modal.Header>
        <Modal.Body>Content here</Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Modal.Close>
          <Button>Confirm</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}`;

export function ModalView() {
  return (
    <div>
      <ComponentHeader meta={modalMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Modal component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A basic modal dialog with header, body, and footer."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/overlays/modal/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Modal supports xs, sm, md, lg, xl, and full sizes."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/overlays/modal/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="centered"
          title="Centered"
          description="Toggle vertical centering of the modal dialog."
          level={3}
        >
          <CodePreview
            component={<Centered />}
            filePath="app/views/overlays/modal/demos/centered.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="controlled"
          title="Controlled"
          description="Control the modal open state via React state."
          level={3}
        >
          <CodePreview
            component={<Controlled />}
            filePath="app/views/overlays/modal/demos/controlled.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="prevent-close"
          title="Prevent Close"
          description="Disable overlay click and Escape key to create persistent dialogs."
          level={3}
        >
          <CodePreview
            component={<PreventClose />}
            filePath="app/views/overlays/modal/demos/preventClose.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-close-button"
          title="With Close Button"
          description="Add a close icon button in the corner using Modal.Close without asChild."
          level={3}
        >
          <CodePreview
            component={<WithCloseButton />}
            filePath="app/views/overlays/modal/demos/withCloseButton.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="long-content"
          title="Long Content"
          description="Modal body scrolls automatically when content overflows."
          level={3}
        >
          <CodePreview
            component={<LongContent />}
            filePath="app/views/overlays/modal/demos/longContent.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-description"
          title="With Description"
          description="Add an accessible description to the modal for better screen reader support."
          level={3}
        >
          <CodePreview
            component={<WithDescription />}
            filePath="app/views/overlays/modal/demos/withDescription.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Modal component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Modal (Root)" data={MODAL_PROPS} />
            <PropsTable title="Modal.Content" data={CONTENT_PROPS} />
            <PropsTable title="Modal.Trigger" data={TRIGGER_PROPS} />
            <PropsTable title="Modal.Close" data={CLOSE_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses <Code>role="dialog"</Code> with <Code>aria-modal="true"</Code></li>
              <li>Focus is trapped inside the modal when open</li>
              <li>Focus returns to the trigger element when the modal is closed</li>
              <li>Escape key closes the modal by default (configurable)</li>
              <li>Overlay click closes the modal by default (configurable)</li>
              <li>Header content is automatically used as the dialog label</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
