import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { textMeta } from "./meta";

import Basic from "./demos/basic";
import Sizes from "./demos/sizes";
import Weights from "./demos/weights";
import Colors from "./demos/colors";
import Alignment from "./demos/alignment";
import Truncate from "./demos/truncate";
import Transform from "./demos/transform";
import AsElement from "./demos/asElement";
import UseCases from "./demos/useCases";

export const textSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "weights", title: "Weights", level: 3 },
  { id: "colors", title: "Colors", level: 3 },
  { id: "alignment", title: "Alignment", level: 3 },
  { id: "truncate", title: "Truncation", level: 3 },
  { id: "transform", title: "Transform & Decoration", level: 3 },
  { id: "as-element", title: "As Element", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const TEXT_PROPS: PropDefinition[] = [
  {
    name: "as",
    type: "'p' | 'span' | 'div' | 'label' | 'strong' | 'em' | 'small' | 'mark' | 'del' | 'ins' | 'sub' | 'sup'",
    defaultValue: "'p'",
    description: "The HTML element to render",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'",
    defaultValue: "'md'",
    description: "Text size",
  },
  {
    name: "weight",
    type: "'light' | 'normal' | 'medium' | 'semibold' | 'bold'",
    description: "Font weight",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'neutral'",
    description: "Text color",
  },
  {
    name: "align",
    type: "'left' | 'center' | 'right' | 'justify'",
    description: "Text alignment",
  },
  {
    name: "truncate",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to truncate text with ellipsis",
  },
  {
    name: "lineClamp",
    type: "1 | 2 | 3 | 4 | 5 | 6",
    description: "Maximum number of lines before truncating",
  },
  {
    name: "muted",
    type: "boolean",
    defaultValue: "false",
    description: "Whether to use muted/secondary text color",
  },
  {
    name: "noWrap",
    type: "boolean",
    defaultValue: "false",
    description: "Whether text should not wrap",
  },
  {
    name: "uppercase",
    type: "boolean",
    defaultValue: "false",
    description: "Transform text to uppercase",
  },
  {
    name: "lowercase",
    type: "boolean",
    defaultValue: "false",
    description: "Transform text to lowercase",
  },
  {
    name: "capitalize",
    type: "boolean",
    defaultValue: "false",
    description: "Capitalize text",
  },
  {
    name: "italic",
    type: "boolean",
    defaultValue: "false",
    description: "Apply italic style",
  },
  {
    name: "underline",
    type: "boolean",
    defaultValue: "false",
    description: "Apply underline decoration",
  },
  {
    name: "strikethrough",
    type: "boolean",
    defaultValue: "false",
    description: "Apply line-through decoration",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const BASIC_USAGE = `import { Text } from "@ninna-ui/primitives";

export default function Example() {
  return (
    <Text size="lg" weight="semibold" color="primary">
      Hello, World!
    </Text>
  );
}`;

export function TextView() {
  return (
    <div className="">
      <ComponentHeader meta={textMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Text component to render typography with various styles."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Default text rendering as a paragraph element."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/primitives/text/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Text in different sizes from xs to 6xl."
          level={3}
        >
          <CodePreview
            component={<Sizes />}
            filePath="app/views/primitives/text/demos/sizes.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="weights"
          title="Weights"
          description="Different font weights from light to bold."
          level={3}
        >
          <CodePreview
            component={<Weights />}
            filePath="app/views/primitives/text/demos/weights.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Text with different color variants and muted option."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/primitives/text/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="alignment"
          title="Alignment"
          description="Text alignment options: left, center, right, and justify."
          level={3}
        >
          <CodePreview
            component={<Alignment />}
            filePath="app/views/primitives/text/demos/alignment.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="truncate"
          title="Truncation"
          description="Truncate text with ellipsis or limit to specific number of lines."
          level={3}
        >
          <CodePreview
            component={<Truncate />}
            filePath="app/views/primitives/text/demos/truncate.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="transform"
          title="Transform & Decoration"
          description="Text transformations (uppercase, lowercase, capitalize) and decorations (italic, underline, strikethrough)."
          level={3}
        >
          <CodePreview
            component={<Transform />}
            filePath="app/views/primitives/text/demos/transform.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="as-element"
          title="As Element"
          description="Render text as different HTML elements using the 'as' prop."
          level={3}
        >
          <CodePreview
            component={<AsElement />}
            filePath="app/views/primitives/text/demos/asElement.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of Text component usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/primitives/text/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Text component."
        >
          <PropsTable data={TEXT_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Semantic HTML: Use the appropriate &apos;as&apos; prop to render semantic elements (strong, em, etc.)</li>
              <li>Color contrast: All color variants meet WCAG AA contrast requirements</li>
              <li>Truncation: When using truncate or lineClamp, consider providing the full text via title attribute or tooltip</li>
              <li>Text size: Avoid using very small text sizes (xs) for important content</li>
              <li>Line length: For readability, keep line lengths between 45-75 characters</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
