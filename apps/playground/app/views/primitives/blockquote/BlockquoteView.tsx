import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { blockquoteMeta } from "./meta";

import Basic from "./demos/basic";
import Variants from "./demos/variants";
import Colors from "./demos/colors";
import Citation from "./demos/citation";
import WithIcon from "./demos/withIcon";
import UseCases from "./demos/useCases";

export const blockquoteSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "variants", title: "Variants", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "citation", title: "Citation", level: 3 },
  { id: "with-icon", title: "With Icon", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const BLOCKQUOTE_PROPS: PropDefinition[] = [
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color variant of the blockquote",
  },
  {
    name: "variant",
    type: "'outline' | 'solid' | 'soft'",
    defaultValue: "'outline'",
    description: "Visual style variant",
  },
  {
    name: "cite",
    type: "string",
    description: "URL of the citation source (for the cite attribute)",
  },
  {
    name: "citeSource",
    type: "ReactNode",
    description: "Citation author/source to display",
  },
  {
    name: "showIcon",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to show a quote icon",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Custom quote icon",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Blockquote } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Blockquote citeSource="Steve Jobs">
      The only way to do great work is to love what you do.
    </Blockquote>
  );
}`;

export function BlockquoteView() {
  return (
    <div className="">
      <ComponentHeader meta={blockquoteMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Blockquote component to display quotations."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Default blockquote rendering."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/blockquote/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Different visual styles for blockquotes."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/primitives/blockquote/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Blockquotes with different color variants."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/blockquote/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="citation"
          title="Citation"
          description="Blockquotes with citation source."
          level={3}
        >
          <CodePreview
            component={<Citation />}
            filePath="app/views/primitives/blockquote/demos/citation.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-icon"
          title="With Icon"
          description="Blockquotes with decorative quote icon."
          level={3}
        >
          <CodePreview
            component={<WithIcon />}
            filePath="app/views/primitives/blockquote/demos/withIcon.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of Blockquote component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/blockquote/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Blockquote component."
        >
          <PropsTable data={BLOCKQUOTE_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Semantic HTML: Uses native blockquote element for proper semantics</li>
              <li>Citation support: Supports cite attribute for source URL</li>
              <li>Footer element: Uses footer for citation display</li>
              <li>Color contrast: All color variants meet WCAG AA contrast requirements</li>
              <li>Screen readers: Quote content is properly announced by screen readers</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
