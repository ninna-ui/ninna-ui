import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { stackMeta } from "./meta";

import Basic from "./demos/basic";
import Direction from "./demos/direction";
import Gap from "./demos/gap";
import Alignment from "./demos/alignment";
import Justify from "./demos/justify";
import Divider from "./demos/divider";
import Responsive from "./demos/responsive";
import UseCases from "./demos/useCases";

export const stackSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "direction", title: "Direction", level: 3 },
  { id: "gap", title: "Gap Spacing", level: 3 },
  { id: "alignment", title: "Alignment", level: 3 },
  { id: "justify", title: "Justify", level: 3 },
  { id: "divider", title: "With Divider", level: 3 },
  { id: "responsive", title: "Responsive", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const STACK_PROPS: PropDefinition[] = [
  {
    name: "as",
    type: "ElementType",
    description: "Semantic HTML element to render",
  },
  {
    name: "direction",
    type: "'row' | 'column' | 'row-reverse' | 'column-reverse'",
    defaultValue: "'column'",
    description: "Direction of the stack layout",
  },
  {
    name: "gap",
    type: "'0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'",
    defaultValue: "'4'",
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
    type: "boolean",
    defaultValue: "false",
    description: "Whether items should wrap",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
  {
    name: "children",
    type: "React.ReactNode",
    required: true,
    description: "Stack content",
  },
];

const BASIC_USAGE = `import { Stack, HStack, VStack } from "@ninna-ui/layout";

export default function Example() {
  return (
    <Stack gap="4">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}`;

export function StackView() {
  return (
    <div className="">
      <ComponentHeader meta={stackMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Stack component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic stack layout with default column direction."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/layout/stack/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="direction"
          title="Direction"
          description="Stack supports row and column directions. Use HStack and VStack as shortcuts."
          level={3}
        >
          <CodePreview
            component={<Direction />}
            filePath="app/views/layout/stack/demos/direction.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="gap"
          title="Gap Spacing"
          description="Control the spacing between items with the gap prop."
          level={3}
        >
          <CodePreview
            component={<Gap />}
            filePath="app/views/layout/stack/demos/gap.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="alignment"
          title="Alignment"
          description="Align items on the cross axis using the align prop."
          level={3}
        >
          <CodePreview
            component={<Alignment />}
            filePath="app/views/layout/stack/demos/alignment.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="justify"
          title="Justify"
          description="Distribute items along the main axis using the justify prop."
          level={3}
        >
          <CodePreview
            component={<Justify />}
            filePath="app/views/layout/stack/demos/justify.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="divider"
          title="With Divider"
          description="Stack items separated by dividers."
          level={3}
        >
          <CodePreview
            component={<Divider />}
            filePath="app/views/layout/stack/demos/divider.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="responsive"
          title="Responsive"
          description="Combine with responsive classes for adaptive layouts."
          level={3}
        >
          <CodePreview
            component={<Responsive />}
            filePath="app/views/layout/stack/demos/responsive.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Common patterns using Stack for layouts."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/layout/stack/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Stack component."
        >
          <PropsTable data={STACK_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Stack is a pure layout component with no semantic meaning</li>
              <li>Use appropriate semantic HTML elements as children</li>
              <li>For navigation, wrap in a nav element</li>
              <li>For lists, consider using List component instead</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
