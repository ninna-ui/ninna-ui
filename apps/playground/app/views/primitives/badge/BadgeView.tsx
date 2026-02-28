import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { badgeMeta } from "./meta";

import Solid from "./demos/solid";
import Soft from "./demos/soft";
import Outline from "./demos/outline";
import Size from "./demos/size";
import Radius from "./demos/radius";
import WithIcon from "./demos/withIcon";
import UseCases from "./demos/useCases";
import Custom from "./demos/custom";

export const badgeSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "solid", title: "Solid", level: 3 },
  { id: "soft", title: "Soft", level: 3 },
  { id: "outline", title: "Outline", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "radius", title: "Radius", level: 3 },
  { id: "with-icons", title: "With Icons", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "custom", title: "Custom", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const BADGE_PROPS: PropDefinition[] = [
  {
    name: "variant",
    type: "'solid' | 'soft' | 'outline'",
    defaultValue: "'soft'",
    description: "Visual style variant of the badge",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the badge",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    defaultValue: "'md'",
    description: "Size of the badge",
  },
  {
    name: "radius",
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",
    defaultValue: "'md'",
    description: "Border radius style",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Content to display inside the badge",
  },
];

const BASIC_USAGE = `import { Badge } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Badge color="primary">
      New
    </Badge>
  );
}`;

export function BadgeView() {
  return (
    <div className="">
      <ComponentHeader meta={badgeMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Badge component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="solid"
          title="Solid"
          description="Filled badges with solid background colors."
          level={3}
        >
          <CodePreview
            component={<Solid />}
            filePath="app/views/primitives/badge/demos/solid.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="soft"
          title="Soft"
          description="Badges with light tinted backgrounds and colored text (default variant)."
          level={3}
        >
          <CodePreview
            component={<Soft />}
            filePath="app/views/primitives/badge/demos/soft.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="outline"
          title="Outline"
          description="Badges with transparent background and colored border."
          level={3}
        >
          <CodePreview
            component={<Outline />}
            filePath="app/views/primitives/badge/demos/outline.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Badges in different sizes from small to large."
          level={3}
        >
          <CodePreview
            component={<Size />}
            filePath="app/views/primitives/badge/demos/size.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="radius"
          title="Radius"
          description="Different border radius options."
          level={3}
        >
          <CodePreview
            component={<Radius />}
            filePath="app/views/primitives/badge/demos/radius.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-icons"
          title="With Icons"
          description="Badges combined with icons for enhanced visual communication."
          level={3}
        >
          <CodePreview
            component={<WithIcon />}
            filePath="app/views/primitives/badge/demos/withIcon.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Common use cases and patterns for badges."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/badge/demos/useCases.tsx"
          />
        </ComponentSection>
        
        <ComponentSection
          id="custom"
          title="Custom"
          description="Custom colored badges with dark mode support."
          level={3}
        >
          <CodePreview
            component={<Custom />}
            filePath="app/views/primitives/badge/demos/custom.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Badge component."
        >
          <PropsTable data={BADGE_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Badges are semantic HTML elements (span) for inline content</li>
              <li>Use appropriate color contrast for text readability</li>
              <li>For interactive badges, wrap in a button element with proper ARIA labels</li>
              <li>Avoid relying solely on color to convey meaning - use text or icons</li>
              <li>Keep badge text concise and descriptive</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
