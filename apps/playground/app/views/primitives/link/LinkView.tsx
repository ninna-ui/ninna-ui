import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { linkMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import Colors from "./demos/colors";
import Underline from "./demos/underline";
import External from "./demos/external";
import Inline from "./demos/inline";
import UseCases from "./demos/useCases";

export const linkSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "underline", title: "Underline", level: 3 },
  { id: "external", title: "External Links", level: 3 },
  { id: "inline", title: "Inline Links", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const LINK_PROPS: PropDefinition[] = [
  {
    name: "href",
    type: "string",
    description: "The URL the link points to",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    description: "Text size - matches Text component sizes. Inherits from parent when not set.",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Color variant of the link",
  },
  {
    name: "underline",
    type: "'always' | 'hover' | 'none'",
    defaultValue: "'hover'",
    description: "Underline behavior",
  },
  {
    name: "external",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the link opens in a new tab (adds target=\"_blank\" and rel=\"noopener noreferrer\")",
  },
  {
    name: "showExternalIcon",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to show an external link icon for external links",
  },
  {
    name: "externalIcon",
    type: "ReactNode",
    description: "Custom external icon to display",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Link } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Link href="/about">About Us</Link>
  );
}`;

export function LinkView() {
  return (
    <div className="">
      <ComponentHeader meta={linkMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Link component to render accessible anchor elements."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Default link rendering."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/link/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Use the size prop to control text size, matching the Text component's size scale."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/primitives/link/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Links with different color variants."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/link/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="underline"
          title="Underline"
          description="Control the underline behavior with the underline prop."
          level={3}
        >
          <CodePreview
            component={<Underline />}
            filePath="app/views/primitives/link/demos/underline.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="external"
          title="External Links"
          description="External links automatically add security attributes and can show an icon."
          level={3}
        >
          <CodePreview
            component={<External />}
            filePath="app/views/primitives/link/demos/external.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="inline"
          title="Inline Links"
          description="Links can be used inline within text content."
          level={3}
        >
          <CodePreview
            component={<Inline />}
            filePath="app/views/primitives/link/demos/inline.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of Link component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/link/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Link component."
        >
          <PropsTable data={LINK_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Semantic HTML: Uses native anchor element for proper accessibility</li>
              <li>Focus visible: Clear focus ring for keyboard navigation</li>
              <li>External links: Automatically adds rel=&quot;noopener noreferrer&quot; for security</li>
              <li>Color contrast: All color variants meet WCAG AA contrast requirements</li>
              <li>Descriptive text: Always use descriptive link text, avoid &quot;click here&quot;</li>
              <li>External indicator: Visual icon indicates links that open in new tabs</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
