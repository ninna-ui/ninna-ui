import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from "~/components/docs";
import { aspectRatioMeta } from "./meta";
import Presets from "./demos/presets";
import CustomRatio from "./demos/customRatio";
import WithImage from "./demos/withImage";
import WithVideo from "./demos/withVideo";
import UseCases from "./demos/useCases";

export const aspectRatioSections: ComponentSectionType[] = [
  { id: "usage", title: "Usage", level: 2 },
  { id: "presets", title: "Presets", level: 3 },
  { id: "custom-ratio", title: "Custom Ratio", level: 3 },
  { id: "with-image", title: "With Image", level: 3 },
  { id: "with-video", title: "With Video", level: 3 },
  { id: "use-cases", title: "Use Cases", level: 3 },
  { id: "api", title: "API Reference", level: 2 },
  { id: "accessibility", title: "Accessibility", level: 2 },
];

const ASPECT_RATIO_PROPS: PropDefinition[] = [
  {
    name: "ratio",
    type: "number | 'square' | 'video' | 'portrait' | 'wide'",
    defaultValue: "1",
    description: "Aspect ratio as width/height number or preset name",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to apply",
  },
  {
    name: "style",
    type: "React.CSSProperties",
    description: "Inline styles to apply",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "Content to render inside the aspect ratio container",
  },
];

const BASIC_USAGE = `import { AspectRatio } from "@ninna-ui/layout";

export default function Example() {
  return (
    <AspectRatio ratio="video">
      <img src="/image.jpg" className="object-cover w-full h-full" />
    </AspectRatio>
  );
}`;

export function AspectRatioView() {
  return (
    <div className="">
      <ComponentHeader meta={aspectRatioMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Import and use the AspectRatio component in your application."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="presets"
          title="Presets"
          description="Built-in aspect ratio presets: square (1:1), video (16:9), portrait (3:4), wide (21:9)."
          level={3}
        >
          <CodePreview
            component={<Presets />}
            filePath="app/views/layout/aspect-ratio/demos/presets.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="custom-ratio"
          title="Custom Ratio"
          description="Use any numeric ratio value (width/height)."
          level={3}
        >
          <CodePreview
            component={<CustomRatio />}
            filePath="app/views/layout/aspect-ratio/demos/customRatio.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-image"
          title="With Image"
          description="Common use case with responsive images."
          level={3}
        >
          <CodePreview
            component={<WithImage />}
            filePath="app/views/layout/aspect-ratio/demos/withImage.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-video"
          title="With Video"
          description="Embed videos with consistent aspect ratio."
          level={3}
        >
          <CodePreview
            component={<WithVideo />}
            filePath="app/views/layout/aspect-ratio/demos/withVideo.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="use-cases"
          title="Use Cases"
          description="Real-world examples of AspectRatio usage."
          level={3}
        >
          <CodePreview
            component={<UseCases />}
            filePath="app/views/layout/aspect-ratio/demos/useCases.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete list of props for the AspectRatio component."
        >
          <PropsTable data={ASPECT_RATIO_PROPS} />
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={3}>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-base-content/70">
              <li>AspectRatio is a layout utility and does not add semantic meaning</li>
              <li>Ensure images inside have proper alt text</li>
              <li>Videos should have captions or transcripts available</li>
              <li>Content remains accessible at all viewport sizes</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
