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
import { loadingMeta } from "./meta";

import Spin from "./demos/spin";
import Dots from "./demos/dots";
import Pulse from "./demos/pulse";
import Ping from "./demos/ping";
import Size from "./demos/size";
import UseCases from "./demos/useCases";

export const loadingSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "spin", title: "Spin Variant", level: 3 },
  { id: "dots", title: "Dots Variant", level: 3 },
  { id: "pulse", title: "Pulse Variant", level: 3 },
  { id: "ping", title: "Ping Variant", level: 3 },
  { id: "sizes", title: "Sizes", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const LOADING_PROPS: PropDefinition[] = [
  {
    name: "variant",
    type: "'spin' | 'ping' | 'pulse' | 'dots'",
    defaultValue: "'spin'",
    description: "Animation style of the loading indicator",
  },
  {
    name: "color",
    type: "'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger'",
    defaultValue: "'primary'",
    description: "Color theme of the loading indicator",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'",
    defaultValue: "'md'",
    description: "Size of the loading indicator",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
  {
    name: "label",
    type: "string",
    defaultValue: "'Loading...'",
    description: "Accessible label for screen readers",
  },
];

const BASIC_USAGE = `import { Loading } from "@ninna-ui/feedback";

export default function Example() {
  return (
    <div>
      <Loading variant="spin" color="primary" size="md" />
      <Loading variant="dots" color="success" size="lg" />
      <Loading variant="pulse" color="info" size="xl" />
    </div>
  );
}`;

export function LoadingView() {
  return (
    <div className="">
      <ComponentHeader meta={loadingMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the Loading component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="spin"
          title="Spin Variant"
          description="Classic spinning circle loader."
          level={3}
        >
          <CodePreview
            component={<Spin />}
            filePath="app/views/feedback/loading/demos/spin.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="dots"
          title="Dots Variant"
          description="Bouncing dots animation."
          level={3}
        >
          <CodePreview
            component={<Dots />}
            filePath="app/views/feedback/loading/demos/dots.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="pulse"
          title="Pulse Variant"
          description="Pulsing circle animation."
          level={3}
        >
          <CodePreview
            component={<Pulse />}
            filePath="app/views/feedback/loading/demos/pulse.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="ping"
          title="Ping Variant"
          description="Expanding ping animation."
          level={3}
        >
          <CodePreview
            component={<Ping />}
            filePath="app/views/feedback/loading/demos/ping.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="sizes"
          title="Sizes"
          description="Loading indicators in different sizes from xs to 3xl."
          level={3}
        >
          <CodePreview
            component={<Size />}
            filePath="app/views/feedback/loading/demos/size.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world loading indicator usage examples."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/feedback/loading/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the Loading component."
        >
          <PropsTable data={LOADING_PROPS} />
        </ComponentSection>

        <ComponentSection
          id="accessibility"
          title="Accessibility"
          level={3}
        >
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>
                Uses <Code>role="status"</Code> to indicate loading state
              </li>
              <li>
                Includes <Code>aria-label</Code> for screen reader announcement
              </li>
              <li>
                Hidden text with <Code>sr-only</Code> class provides context
              </li>
              <li>
                Default label is "Loading..." but can be customized via <Code>label</Code> prop
              </li>
              <li>
                Animations respect <Code>prefers-reduced-motion</Code> media query
              </li>
              <li>
                Color contrast meets WCAG AA standards for all color variants
              </li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
