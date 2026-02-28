import { ComponentHeader, ComponentSection, PropsTable, UsageExample, CodePreview  } from "~/components/docs";
import { Code } from "@ninna-ui/primitives";

import { dividerMeta } from "./meta";
import Horizontal from "./demos/horizontal";
import Vertical from "./demos/vertical";
import WithText from "./demos/withText";
import Colors from "./demos/colors";
import UseCases from "./demos/useCases";

export const dividerSections = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "horizontal", title: "Horizontal", level: 3 },
  { id: "vertical", title: "Vertical", level: 3 },
  { id: "with-text", title: "With Text", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const USAGE_CODE = `import { Divider , Code } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <div> 
      <Divider variant="horizontal" />
       
      <Divider variant="vertical" className="h-20" />
       
      <Divider variant="with-text" text="OR" color="primary" />
    </div>
  );
}`;

const DIVIDER_PROPS = [
  {
    name: "variant",
    type: "'horizontal' | 'vertical' | 'with-text'",
    defaultValue: "'horizontal'",
    description: "Orientation and style variant of the divider",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme for the text (with-text variant only)",
  },
  {
    name: "weight",
    type: "'soft' | 'solid'",
    defaultValue: "'soft'",
    description: "Line weight/opacity - soft for subtle, solid for prominent",
  },
  {
    name: "text",
    type: "string",
    defaultValue: "undefined",
    description: "Text to display (only for with-text variant)",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "Additional CSS classes",
  },
];

export function DividerView() {
  return (
    <div className="max-w-7xl mx-auto">
      <ComponentHeader meta={dividerMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Divider component in your application."
        >
          <UsageExample code={USAGE_CODE} />
        </ComponentSection>

        <ComponentSection
          id="horizontal"
          title="Horizontal"
          description="Horizontal dividers for separating content vertically"
          level={3}
        >
          <CodePreview
            component={<Horizontal />}
            filePath="app/views/primitives/divider/demos/horizontal.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="vertical"
          title="Vertical"
          description="Vertical dividers for separating content horizontally"
          level={3}
        >
          <CodePreview
            component={<Vertical />}
            filePath="app/views/primitives/divider/demos/vertical.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-text"
          title="With Text"
          description="Dividers with centered text for labeled sections"
          level={3}
        >
          <CodePreview
            component={<WithText />}
            filePath="app/views/primitives/divider/demos/withText.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="All color variants for with-text dividers"
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/divider/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world divider usage examples"
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/divider/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Divider component."
        >
          <PropsTable data={DIVIDER_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>
                Uses semantic <Code>role="separator"</Code> for screen readers
              </li>
              <li>
                Includes <Code>aria-orientation</Code> attribute for horizontal and vertical
                variants
              </li>
              <li>
                For with-text variant, uses <Code>aria-label</Code> to announce the text content
              </li>
              <li>Dividers are non-interactive and purely presentational</li>
              <li>Color contrast meets WCAG AA standards for all weight variants</li>
              <li>Works correctly in both light and dark modes</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
