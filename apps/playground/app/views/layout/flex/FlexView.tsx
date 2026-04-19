import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { flexMeta } from "./meta";

import Basic from "./demos/basic";
import Direction from "./demos/direction";
import Gap from "./demos/gap";
import Alignment from "./demos/alignment";
import Justify from "./demos/justify";
import Wrap from "./demos/wrap";
import Inline from "./demos/inline";
import UseCases from "./demos/useCases";

export const flexSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "direction", title: "Direction", level: 3 },
  { id: "gap", title: "Gap Spacing", level: 3 },
  { id: "alignment", title: "Alignment", level: 3 },
  { id: "justify", title: "Justify", level: 3 },
  { id: "wrap", title: "Wrap", level: 3 },
  { id: "inline", title: "Inline", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const FLEX_PROPS: PropDefinition[] = [
  { name: "as", type: "ElementType", description: "Semantic HTML element to render" },
  {
    name: "direction",
    type: "'row' | 'column' | 'row-reverse' | 'column-reverse'",
    defaultValue: "'row'",
    description: "Flex direction",
  },
  {
    name: "gap",
    type: "'0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'",
    description: "Gap between items",
  },
  {
    name: "align",
    type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'",
    description: "Align items on cross axis",
  },
  {
    name: "justify",
    type: "'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",
    description: "Justify items on main axis",
  },
  {
    name: "wrap",
    type: "'wrap' | 'nowrap' | 'wrap-reverse'",
    description: "Flex wrap behavior",
  },
  {
    name: "inline",
    type: "boolean",
    defaultValue: "false",
    description: "Use inline-flex instead of flex",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Flex } from "@ninna-ui/layout";

export default function Example() {
  return (
    <Flex gap="4" align="center">
      <Avatar />
      <Text>Username</Text>
    </Flex>
  );
}`;

export function FlexView() {
  return (
    <div className="">
      <ComponentHeader meta={flexMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Flex component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic flex layout with row direction."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/layout/flex/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="direction"
          title="Direction"
          description="Control flex direction with row, column, and reverse variants."
          level={3}
        >
          <CodePreview
            component={<Direction />}
            filePath="app/views/layout/flex/demos/direction.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="gap"
          title="Gap Spacing"
          description="Control spacing between items with the gap prop."
          level={3}
        >
          <CodePreview
            component={<Gap />}
            filePath="app/views/layout/flex/demos/gap.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="alignment"
          title="Alignment"
          description="Align items on the cross axis."
          level={3}
        >
          <CodePreview
            component={<Alignment />}
            filePath="app/views/layout/flex/demos/alignment.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="justify"
          title="Justify"
          description="Distribute items along the main axis."
          level={3}
        >
          <CodePreview
            component={<Justify />}
            filePath="app/views/layout/flex/demos/justify.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="wrap"
          title="Wrap"
          description="Flex items can wrap to multiple lines."
          level={3}
        >
          <CodePreview
            component={<Wrap />}
            filePath="app/views/layout/flex/demos/wrap.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="inline"
          title="Inline"
          description="Use inline-flex for inline layout."
          level={3}
        >
          <CodePreview
            component={<Inline />}
            filePath="app/views/layout/flex/demos/inline.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Common patterns using Flex for layouts."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/layout/flex/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Flex component."
        >
          <PropsTable data={FLEX_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Flex is a pure layout component with no semantic meaning</li>
              <li>Use appropriate semantic HTML elements as children</li>
              <li>For navigation, wrap in a nav element</li>
              <li>Ensure proper focus order is maintained</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
