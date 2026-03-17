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
import { alertMeta } from "./meta";

import Solid from "./demos/solid";
import Soft from "./demos/soft";
import Outline from "./demos/outline";
import Dismissible from "./demos/dismissible";
import WithIcon from "./demos/withIcon";
import WithAction from "./demos/withAction";
import UseCases from "./demos/useCases";

export const alertSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "solid", title: "Solid", level: 3 },
  { id: "soft", title: "Soft", level: 3 },
  { id: "outline", title: "Outline", level: 3 },
  { id: "dismissible", title: "Dismissible", level: 3 },
  { id: "with-icon", title: "With Icon", level: 3 },
  { id: "with-action", title: "With Action", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const ALERT_PROPS: PropDefinition[] = [
  {
    name: "variant",
    type: "'solid' | 'soft' | 'outline'",
    defaultValue: "'soft'",
    description: "Visual style variant of the alert",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Color theme of the alert",
  },
  {
    name: "title",
    type: "ReactNode",
    description: "Alert title text",
  },
  {
    name: "description",
    type: "ReactNode",
    description: "Alert description/message text",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Custom icon to display",
  },
  {
    name: "showIcon",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to show the default icon based on color",
  },
  {
    name: "dismissible",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the alert can be dismissed",
  },
  {
    name: "onDismiss",
    type: "() => void",
    description: "Callback when alert is dismissed",
  },
  {
    name: "action",
    type: "ReactNode",
    description: "Action element (button, link, etc.)",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: "Size of the alert",
  },
  {
    name: "role",
    type: "string",
    defaultValue: "'alert'",
    description: "ARIA role - use 'status' for non-critical messages",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Alert content (alternative to description)",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Alert } from "@ninna-ui/feedback";

export default function Example() {
  return (
    <Alert
      color="success"
      title="Success!"
      description="Your changes have been saved."
    />
  );
}`;

export function AlertView() {
  return (
    <div className="">
      <ComponentHeader meta={alertMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Alert component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="solid"
          title="Solid"
          description="Alerts with solid background colors for high emphasis."
          level={3}
        >
          <CodePreview
            component={<Solid />}
            filePath="app/views/feedback/alert/demos/solid.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="soft"
          title="Soft"
          description="Alerts with light tinted backgrounds for subtle emphasis."
          level={3}
        >
          <CodePreview
            component={<Soft />}
            filePath="app/views/feedback/alert/demos/soft.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="outline"
          title="Outline"
          description="Alerts with transparent background and colored border."
          level={3}
        >
          <CodePreview
            component={<Outline />}
            filePath="app/views/feedback/alert/demos/outline.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="dismissible"
          title="Dismissible"
          description="Alerts that can be dismissed by the user."
          level={3}
        >
          <CodePreview
            component={<Dismissible />}
            filePath="app/views/feedback/alert/demos/dismissible.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-icon"
          title="With Icon"
          description="Alerts with custom icons or without icons."
          level={3}
        >
          <CodePreview
            component={<WithIcon />}
            filePath="app/views/feedback/alert/demos/withIcon.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-action"
          title="With Action"
          description="Alerts with action buttons for user interaction."
          level={3}
        >
          <CodePreview
            component={<WithAction />}
            filePath="app/views/feedback/alert/demos/withAction.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world alert usage examples."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/feedback/alert/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Alert component."
        >
          <PropsTable data={ALERT_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>
                Uses <Code>role="alert"</Code> by default for important messages
              </li>
              <li>
                Includes <Code>aria-live="assertive"</Code> for screen reader announcements
              </li>
              <li>
                Dismiss button has <Code>aria-label="Dismiss alert"</Code> for accessibility
              </li>
              <li>
                Icons are hidden from screen readers with <Code>aria-hidden="true"</Code>
              </li>
              <li>
                Color contrast meets WCAG AA standards for all variants
              </li>
              <li>
                Keyboard accessible - dismiss button can be focused and activated
              </li>
              <li>
                Supports custom <Code>role</Code> prop for different use cases (e.g., <Code>role="status"</Code>)
              </li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
