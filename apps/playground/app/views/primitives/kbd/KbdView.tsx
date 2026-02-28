import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { kbdMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import UseCases from "./demos/useCases";

export const kbdSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const KBD_PROPS: PropDefinition[] = [
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Color variant",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg'",
    defaultValue: "'sm'",
    description: "Size variant",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Kbd } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>C</Kbd>
    </div>
  );
}`;

export function KbdView() {
  return (
    <div className="">
      <ComponentHeader meta={kbdMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Kbd component to display keyboard keys."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Default keyboard key rendering."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/kbd/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Different size variants for keyboard keys."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/primitives/kbd/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Different color variants for keyboard keys."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/kbd/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of Kbd component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/kbd/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Kbd component."
        >
          <PropsTable data={KBD_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Semantic HTML: Uses native kbd element for proper semantics</li>
              <li>Screen readers: Content is read as keyboard key indicator</li>
              <li>Visual distinction: Clear visual styling differentiates from regular text</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
