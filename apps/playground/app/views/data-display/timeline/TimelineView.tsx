import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { timelineMeta } from "./meta";

import Basic from "./demos/basic";
import WithStatus from "./demos/withStatus";

export const timelineSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "with-status", title: "With Status", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const INDICATOR_PROPS: PropDefinition[] = [
  { name: "status", type: "'primary' | 'success' | 'danger' | 'warning'", description: "Color variant for the indicator dot" },
  { name: "icon", type: "ReactNode", description: "Custom icon to replace the default dot" },
];

const USAGE = `import { Timeline } from "@ninna-ui/data-display";

export default function Example() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Indicator />
        <Timeline.Connector />
        <Timeline.Content>
          <Timeline.Heading>Event Title</Timeline.Heading>
          <Timeline.Description>Details here</Timeline.Description>
          <Timeline.Time>Jan 1, 2024</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}`;

export function TimelineView() {
  return (
    <div>
      <ComponentHeader meta={timelineMeta} />

      <div className="space-y-12">
        <ComponentSection id="usage" title="Usage" description="Import and use the Timeline component in your application.">
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A basic vertical timeline with events." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/data-display/timeline/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="with-status" title="With Status" description="Color-coded indicators for different event types." level={3}>
          <CodePreview component={<WithStatus />} filePath="app/views/data-display/timeline/demos/withStatus.tsx" />
        </ComponentSection>

        <ComponentSection id="api" title="API Reference" description="Props for the Timeline component and its sub-components.">
          <PropsTable title="Timeline.Indicator" data={INDICATOR_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility">
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Timeline uses semantic list structure for screen reader navigation</li>
              <li>Indicator colors are supplemented with status context in surrounding text</li>
              <li>Connectors are decorative and hidden from screen readers</li>
              <li>Time elements use semantic markup for temporal data</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
