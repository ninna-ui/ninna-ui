import { ComponentHeader, ComponentSection, UsageExample, type ComponentSectionType } from "~/components/docs";
import { Heading, Text , Code } from "@ninna-ui/primitives";
import { stylingMeta } from "./meta";

export const stylingSections: ComponentSectionType[] = [
  { id: "classname", title: "className Prop", level: 2 },
  { id: "data-slot", title: "data-slot API", level: 2 },
  { id: "tailwind", title: "Tailwind Integration", level: 2 },
  { id: "custom-variants", title: "Custom Variants", level: 2 },
];

const CLASSNAME_CODE = `import { Button , Code } from "@ninna-ui/primitives";

// Override or extend styles with className
<Button className="rounded-full shadow-lg">Rounded Button</Button>

// Compose with Tailwind utilities
<Button className="w-full sm:w-auto">Responsive Width</Button>`;

const DATA_SLOT_CODE = `/* Target component internals with data-slot */

/* Style the alert close button */
[data-slot="close"] {
  opacity: 0.5;
  transition: opacity 0.2s;
}
[data-slot="close"]:hover {
  opacity: 1;
}

/* Style the checkbox indicator */
[data-slot="indicator"] {
  border-radius: var(--radius-sm);
}

/* Style all button icons */
[data-slot="icon"] {
  width: 1.25rem;
  height: 1.25rem;
}`;

const DATA_SLOT_LIST_CODE = `<!-- Available data-slot values per component -->

<!-- Button -->
<button data-slot="button">
  <span data-slot="icon">...</span>
  Click me
</button>

<!-- Alert -->
<div data-slot="alert">
  <div data-slot="icon">...</div>
  <div data-slot="content">
    <div data-slot="title">Title</div>
    <div data-slot="description">Description</div>
  </div>
  <button data-slot="close">×</button>
</div>

<!-- Checkbox -->
<label data-slot="checkbox">
  <input class="sr-only peer" />
  <div data-slot="control">
    <svg data-slot="indicator">...</svg>
  </div>
</label>`;

const TAILWIND_CODE = `/* Your app's CSS file */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

/* Use Ninna UI CSS variables in custom Tailwind utilities */
.my-card {
  background: var(--color-base-100);
  border: 1px solid var(--color-base-300);
  border-radius: 0.5rem;
  color: var(--color-base-content);
}

/* Or use the semantic Tailwind classes directly */
.my-card {
  @apply bg-base-100 border border-base-300 rounded-lg text-base-content;
}`;

const CUSTOM_VARIANT_CODE = `/* Create custom component styles using data-slot + data-* */

/* Custom "pill" button variant */
[data-slot="button"][data-variant="pill"] {
  border-radius: 9999px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Custom alert with left accent bar */
[data-slot="alert"] {
  border-left: 4px solid var(--color-primary);
  border-radius: 0 0.5rem 0.5rem 0;
}

/* Style disabled state across all form inputs */
[data-slot="input"]:disabled,
[data-slot="textarea"]:disabled {
  background: var(--color-base-50);
  cursor: not-allowed;
}`;

export function StylingView() {
  return (
    <div className="">
      <ComponentHeader meta={stylingMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="classname"
          title="className Prop"
          description="Every Ninna UI component accepts a className prop for direct Tailwind CSS customization."
        >
          <div className="space-y-4">
            <Text className="text-base-content/70 leading-relaxed">
              All components spread <Code>...props</Code> on their root element, 
              so any standard HTML attribute works - including <Code>className</Code>, 
              <Code>style</Code>, 
              <Code>id</Code>, and event handlers.
            </Text>
            <UsageExample code={CLASSNAME_CODE} />
          </div>
        </ComponentSection>

        <ComponentSection
          id="data-slot"
          title="data-slot API"
          description="Target component internals with CSS using data-slot attributes - no component code modification needed."
        >
          <div className="space-y-6">
            <Text className="text-base-content/70 leading-relaxed">
              Every Ninna UI component renders <Code>data-slot</Code> attributes 
              on its root and meaningful sub-elements. There are <strong>98 data-slot attributes</strong> across all components. 
              This gives you deep CSS customization without modifying component internals.
            </Text>

            <div>
              <Heading as="h3" size="base" weight="semibold" className="mb-2">CSS Targeting</Heading>
              <UsageExample
                title="Style inner elements with data-slot selectors"
                code={DATA_SLOT_CODE}
              />
            </div>

            <div>
              <Heading as="h4" size="base" weight="semibold" className="mb-2">Slot Structure Examples</Heading>
              <UsageExample
                title="data-slot attribute structure"
                code={DATA_SLOT_LIST_CODE}
              />
            </div>

            <div className="bg-info/10 border border-info/20 rounded-lg p-4">
              <Text size="sm" className="text-info">
                <strong>Common slots:</strong>{" "}
                <Code>icon</Code>,{" "}
                <Code>content</Code>,{" "}
                <Code>title</Code>,{" "}
                <Code>description</Code>,{" "}
                <Code>indicator</Code>,{" "}
                <Code>track</Code>,{" "}
                <Code>thumb</Code>,{" "}
                <Code>close</Code>,{" "}
                <Code>label</Code>
              </Text>
            </div>
          </div>
        </ComponentSection>

        <ComponentSection
          id="tailwind"
          title="Tailwind Integration"
          description="Ninna UI's CSS variables work seamlessly with Tailwind CSS v4."
        >
          <div className="space-y-4">
            <Text className="text-base-content/70 leading-relaxed">
              The <Code>@theme inline</Code> block in each theme 
              exposes all 31 CSS variables as Tailwind utilities. Use them anywhere in your Tailwind classes.
            </Text>
            <UsageExample
              title="Use Ninna UI variables in your own styles"
              code={TAILWIND_CODE}
            />
          </div>
        </ComponentSection>

        <ComponentSection
          id="custom-variants"
          title="Custom Variants"
          description="Create custom component variants using data-slot and CSS."
        >
          <div className="space-y-4">
            <Text className="text-base-content/70 leading-relaxed">
              Combine <Code>data-slot</Code> with other data attributes 
              to create custom variants without modifying component source code.
            </Text>
            <UsageExample
              title="Custom variant examples"
              code={CUSTOM_VARIANT_CODE}
            />
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
