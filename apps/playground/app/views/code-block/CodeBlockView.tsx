import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { Code } from "@ninna-ui/primitives";
import { CodeBlock } from "@ninna-ui/code-block";
import { codeBlockMeta } from "./meta";

import Basic from "./demos/basic";
import LineNumbers from "./demos/lineNumbers";
import NoCopy from "./demos/noCopy";
import CssHighlight from "./demos/cssHighlight";
import CustomStyle from "./demos/customStyle";
import CopyAlways from "./demos/copyAlways";
import PlainText from "./demos/plainText";
import ColorScheme from "./demos/colorScheme";

export const codeBlockSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "basic", title: "Basic", level: 3 },
  { id: "line-numbers", title: "Line Numbers", level: 3 },
  { id: "no-copy", title: "Without Copy Button", level: 3 },
  { id: "css-highlight", title: "CSS / Multi-language", level: 3 },
  { id: "copy-always", title: "Always Visible Copy", level: 3 },
  { id: "plain-text", title: "Plain Text (No Highlight)", level: 3 },
  { id: "color-scheme", title: "Color Scheme", level: 3 },
  { id: "custom-style", title: "Custom Styles", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const CODEBLOCK_PROPS: PropDefinition[] = [
  {
    name: "code",
    type: "string",
    required: true,
    description: "The code string to display with syntax highlighting",
  },
  {
    name: "language",
    type: "'tsx' | 'jsx' | 'typescript' | 'javascript' | 'css' | 'html' | 'json' | 'bash' | 'text'",
    defaultValue: "'tsx'",
    description: "Language for syntax highlighting. Use 'text' or 'bash' for no highlighting.",
  },
  {
    name: "colorScheme",
    type: "'light' | 'dark' | 'auto'",
    defaultValue: "'auto'",
    description: "Force a specific syntax color scheme. 'auto' follows the page theme, 'light' always uses light colors, 'dark' always uses dark colors.",
  },
  {
    name: "showLineNumbers",
    type: "boolean",
    defaultValue: "false",
    description: "Show line numbers in the gutter",
  },
  {
    name: "showCopyButton",
    type: "boolean",
    defaultValue: "true",
    description: "Show a copy-to-clipboard button (visible on hover by default)",
  },
  {
    name: "copyButtonAlwaysVisible",
    type: "boolean",
    defaultValue: "false",
    description: "Always show the copy button instead of only on hover",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the root container",
  },
  {
    name: "aria-label",
    type: "string",
    description: "Accessible label for the code block container",
  },
];

const INSTALL_CODE = `pnpm add @ninna-ui/code-block`;

const CSS_SETUP_CODE = `/* your CSS entry point (e.g. src/index.css) */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

/* Code block syntax token colors */
@import "@ninna-ui/code-block/styles";`;

const BASIC_USAGE = `import { CodeBlock } from "@ninna-ui/code-block";

const code = \`import { Button } from "@ninna-ui/primitives";

export default function App() {
  return <Button color="primary">Click me</Button>;
}\`;

export default function Example() {
  return <CodeBlock code={code} />;
}`;

export function CodeBlockView() {
  return (
    <div className="">
      <ComponentHeader meta={codeBlockMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the CodeBlock component to display syntax-highlighted code."
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-base-content mb-2">1. Install</p>
              <CodeBlock code={INSTALL_CODE} language="bash" copyButtonAlwaysVisible />
            </div>
            <div>
              <p className="text-sm font-semibold text-base-content mb-2">2. Add CSS import</p>
              <CodeBlock code={CSS_SETUP_CODE} language="css" copyButtonAlwaysVisible />
              <p className="text-sm text-base-content/60 mt-2">
                The <Code>@import "@ninna-ui/code-block/styles"</Code> line loads the syntax token CSS custom properties.
                Without it the code block renders but syntax colors will be missing.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-base-content mb-2">3. Use</p>
              <UsageExample code={BASIC_USAGE} />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="A simple code block with TSX syntax highlighting and copy button."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/code-block/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="line-numbers"
          title="Line Numbers"
          description="Enable line numbers for longer code snippets."
          level={3}
        >
          <CodePreview
            component={<LineNumbers />}
            filePath="app/views/code-block/demos/lineNumbers.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="no-copy"
          title="Without Copy Button"
          description="Hide the copy button for read-only display."
          level={3}
        >
          <CodePreview
            component={<NoCopy />}
            filePath="app/views/code-block/demos/noCopy.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="css-highlight"
          title="CSS / Multi-language"
          description="The highlighter handles CSS, HTML, and mixed content alongside TSX."
          level={3}
        >
          <CodePreview
            component={<CssHighlight />}
            filePath="app/views/code-block/demos/cssHighlight.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="copy-always"
          title="Always Visible Copy"
          description="Keep the copy button visible at all times instead of only on hover."
          level={3}
        >
          <CodePreview
            component={<CopyAlways />}
            filePath="app/views/code-block/demos/copyAlways.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="plain-text"
          title="Plain Text (No Highlight)"
          description='Use language="bash" or language="text" to disable syntax highlighting.'
          level={3}
        >
          <CodePreview
            component={<PlainText />}
            filePath="app/views/code-block/demos/plainText.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="color-scheme"
          title="Color Scheme"
          description="Force light or dark syntax colors regardless of the current page theme. Useful when embedding a CodeBlock inside a section that has a different background."
          level={3}
        >
          <CodePreview
            component={<ColorScheme />}
            filePath="app/views/code-block/demos/colorScheme.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="custom-style"
          title="Custom Styles"
          description="Customize the appearance with className."
          level={3}
        >
          <CodePreview
            component={<CustomStyle />}
            filePath="app/views/code-block/demos/customStyle.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the CodeBlock component."
        >
          <PropsTable data={CODEBLOCK_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>Uses semantic <Code>pre</Code> and <Code>code</Code> elements for proper screen reader announcement</li>
              <li>Supports <Code>aria-label</Code> and other ARIA attributes via props spread</li>
              <li>Copy button has descriptive <Code>aria-label</Code> that updates on copy ("Copy code to clipboard" / "Code copied")</li>
              <li>Decorative SVG icons use <Code>aria-hidden="true"</Code></li>
              <li>Syntax colors meet WCAG AA contrast requirements against both light and dark backgrounds</li>
              <li>Line numbers use <Code>select-none</Code> to prevent accidental copying</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
