import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { statMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import Trends from "./demos/trends";

export const statSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "trends", title: "Trends", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const VALUE_PROPS: PropDefinition[] = [
  { name: "size", type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: "Size of the value text" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const TREND_PROPS: PropDefinition[] = [
  { name: "direction", type: "'up' | 'down' | 'neutral'", required: true, description: "Trend direction" },
  { name: "positiveIsGood", type: "boolean", defaultValue: "true", description: "Whether up direction uses positive (green) color" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const ICON_PROPS: PropDefinition[] = [
  { name: "color", type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'danger' | 'warning' | 'info'", defaultValue: "'primary'", description: "Color theme for the icon background" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const USAGE = `import { Stat } from "@ninna-ui/data-display";

export default function Example() {
  return (
    <Stat>
      <Stat.Label>Revenue</Stat.Label>
      <Stat.Value>$45,231</Stat.Value>
      <Stat.Trend direction="up">+20.1%</Stat.Trend>
    </Stat>
  );
}`;

export function StatView() {
  return (
    <div>
      <ComponentHeader meta={statMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Stat component in your application."
        >
          <UsageExample code={USAGE} />
        </ComponentSection>

        <ComponentSection id="basic" title="Basic" description="A basic stat with label, value, and trend." level={3}>
          <CodePreview component={<Basic />} filePath="app/views/data-display/stat/demos/basic.tsx" />
        </ComponentSection>

        <ComponentSection id="sizes" title="Sizes" description="Stat value comes in sm, md, and lg sizes." level={3}>
          <CodePreview component={<Sizes />} filePath="app/views/data-display/stat/demos/sizes.tsx" />
        </ComponentSection>

        <ComponentSection id="colors" title="Colors" description="Stat icons support all color themes." level={3}>
          <CodePreview component={<Colors />} filePath="app/views/data-display/stat/demos/colors.tsx" />
        </ComponentSection>

        <ComponentSection id="trends" title="Trends" description="Show trend direction with automatic color coding." level={3}>
          <CodePreview component={<Trends />} filePath="app/views/data-display/stat/demos/trends.tsx" />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Stat component and its sub-components."
        >
          <div className="space-y-8">
            <PropsTable title="Stat.Value" data={VALUE_PROPS} />
            <PropsTable title="Stat.Trend" data={TREND_PROPS} />
            <PropsTable title="Stat.Icon" data={ICON_PROPS} />
          </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility">
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Stat uses semantic HTML for label-value association</li>
              <li>Trend direction is communicated both visually and through accessible text</li>
              <li>Color is not the only indicator - arrow icons convey direction</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
