import { ComponentHeader, ComponentSection, UsageExample, type ComponentSectionType } from "~/components/docs";
import { Text, Code } from "@ninna-ui/primitives";
import { colorsMeta } from "./meta";

export const colorsSections: ComponentSectionType[] = [
  { id: "semantic", title: "Semantic Colors", level: 2 },
  { id: "base-scale", title: "Base Surface Scale", level: 2 },
  { id: "border-tokens", title: "Border Tokens", level: 2 },
  { id: "usage-patterns", title: "Usage Patterns", level: 2 },
  { id: "custom-colors", title: "Custom Colors", level: 2 },
];

const SEMANTIC_COLORS = [
  {
    name: "primary",
    label: "Primary",
    desc: "Main brand color. Used for primary actions, links, and key UI elements.",
    classes: { bg: "bg-primary", text: "text-primary", content: "text-primary-content" },
  },
  {
    name: "secondary",
    label: "Secondary",
    desc: "Supporting brand color. Used for secondary actions and accents.",
    classes: { bg: "bg-secondary", text: "text-secondary", content: "text-secondary-content" },
  },
  {
    name: "accent",
    label: "Accent",
    desc: "Highlight color for special elements, tags, and decorative UI.",
    classes: { bg: "bg-accent", text: "text-accent", content: "text-accent-content" },
  },
  {
    name: "neutral",
    label: "Neutral",
    desc: "Muted color for subtle backgrounds, disabled states, and secondary text.",
    classes: { bg: "bg-neutral", text: "text-neutral", content: "text-neutral-content" },
  },
  {
    name: "success",
    label: "Success",
    desc: "Positive states — confirmations, completed actions, valid inputs.",
    classes: { bg: "bg-success", text: "text-success", content: "text-success-content" },
  },
  {
    name: "danger",
    label: "Danger",
    desc: "Error and destructive states — validation errors, delete confirmations.",
    classes: { bg: "bg-danger", text: "text-danger", content: "text-danger-content" },
  },
  {
    name: "warning",
    label: "Warning",
    desc: "Caution states — non-blocking alerts, expiration notices.",
    classes: { bg: "bg-warning", text: "text-warning", content: "text-warning-content" },
  },
  {
    name: "info",
    label: "Info",
    desc: "Informational states — tips, help text, neutral notifications.",
    classes: { bg: "bg-info", text: "text-info", content: "text-info-content" },
  },
];

const BASE_SCALE = [
  { name: "base-50", class: "bg-base-50", desc: "Lightest surface — page background" },
  { name: "base-100", class: "bg-base-100", desc: "Card / panel backgrounds" },
  { name: "base-200", class: "bg-base-200", desc: "Subtle backgrounds, code blocks" },
  { name: "base-300", class: "bg-base-300", desc: "Borders, dividers" },
  { name: "base-400", class: "bg-base-400", desc: "Disabled borders" },
  { name: "base-500", class: "bg-base-500", desc: "Placeholder text" },
  { name: "base-600", class: "bg-base-600", desc: "Secondary text" },
  { name: "base-700", class: "bg-base-700", desc: "Heading text" },
  { name: "base-800", class: "bg-base-800", desc: "Primary text" },
  { name: "base-900", class: "bg-base-900", desc: "Darkest surface" },
];

const CUSTOM_COLORS_CODE = `/* In your main CSS file — override after the theme import */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

/* Override primary to your brand color */
[data-theme="default"] {
  --color-primary: oklch(0.52 0.28 220);         /* brand blue */
  --color-primary-content: oklch(0.98 0.005 220); /* white text on primary */

  /* Override secondary */
  --color-secondary: oklch(0.48 0.22 160);        /* brand teal */
  --color-secondary-content: oklch(0.98 0.005 160);

  /* Override base surfaces for a warmer feel */
  --color-base-50:  oklch(0.985 0.005 80);
  --color-base-100: oklch(0.970 0.008 80);
  --color-base-200: oklch(0.940 0.010 80);
}

/* Dark mode overrides — both selector forms required */
.dark [data-theme="default"],
[data-theme="default"].dark {
  --color-primary: oklch(0.72 0.22 220);
  --color-primary-content: oklch(0.12 0.02 220);
}`;

const OVERRIDABLE_VARS = [
  { name: "--color-primary", desc: "Main brand color" },
  { name: "--color-primary-content", desc: "Text on primary bg" },
  { name: "--color-secondary", desc: "Supporting brand color" },
  { name: "--color-secondary-content", desc: "Text on secondary bg" },
  { name: "--color-accent", desc: "Highlight color" },
  { name: "--color-accent-content", desc: "Text on accent bg" },
  { name: "--color-neutral", desc: "Muted/neutral color" },
  { name: "--color-neutral-content", desc: "Text on neutral bg" },
  { name: "--color-success", desc: "Positive state color" },
  { name: "--color-success-content", desc: "Text on success bg" },
  { name: "--color-danger", desc: "Error/destructive color" },
  { name: "--color-danger-content", desc: "Text on danger bg" },
  { name: "--color-warning", desc: "Caution state color" },
  { name: "--color-warning-content", desc: "Text on warning bg" },
  { name: "--color-info", desc: "Informational color" },
  { name: "--color-info-content", desc: "Text on info bg" },
  { name: "--color-base-50", desc: "Lightest surface" },
  { name: "--color-base-100", desc: "Card background" },
  { name: "--color-base-200", desc: "Subtle background" },
  { name: "--color-base-300", desc: "Borders, dividers" },
  { name: "--color-base-content", desc: "Default text color" },
  { name: "--color-border", desc: "Default border" },
  { name: "--color-border-hover", desc: "Hover border" },
  { name: "--color-border-active", desc: "Active/focus border" },
];

 

const USAGE_CODE = `/* Semantic colors as Tailwind utilities */
<Button color="primary">Primary Action</Button>
<Badge color="success">Active</Badge>
<Alert color="danger">Error occurred</Alert>

/* Background + content pairs (auto-contrast) */
<div className="bg-primary text-primary-content">
  White text on primary background
</div>

/* Text colors for inline use */
<Text className="text-base-content">Default text</Text>
<Text className="text-base-content/70">Secondary text (70% opacity)</Text>
<Text className="text-base-content/70">Muted text (40% opacity)</Text>

/* Base surface scale */
<div className="bg-base-50">Page background</div>
<div className="bg-base-100">Card background</div>
<div className="bg-base-200">Subtle background</div>
<div className="border border-base-300">Border</div>`;

export function ColorsView() {
  return (
    <div className="">
      <ComponentHeader meta={colorsMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="semantic"
          title="Semantic Colors"
          description="8 semantic colors available in every theme. Each color has a matching -content color for guaranteed text contrast."
        >
          <div className="grid grid-cols-1 gap-4">
            {SEMANTIC_COLORS.map((color) => (
              <div key={color.name} className="border border-base-200 rounded-lg overflow-hidden">
                <div className="flex items-stretch">
                  <div className={`${color.classes.bg} w-24 sm:w-32 flex items-center justify-center shrink-0`}>
                    <span className={`${color.classes.content} text-sm font-semibold`}>Aa</span>
                  </div>
                  <div className="p-4 flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Text size="sm" weight="semibold">{color.label}</Text> 
                      <Code color="primary">--color-{color.name}</Code> 
                    </div>
                    <Text size="sm" className="text-base-content/70 mb-2">{color.desc}</Text>
                    <div className="flex flex-wrap gap-2">
                      <Code>{color.classes.bg}</Code>
                      <Code>{color.classes.text}</Code>
                      <Code>{color.classes.content}</Code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-info/10 border border-info/20 rounded-lg p-4">
            <Text size="sm" className="text-base-content/70">
              <strong className="text-base-content">Content colors</strong> are automatically set per theme.
              Use <Code>text-primary-content</Code> on <Code>bg-primary</Code> for guaranteed WCAG AA contrast.
            </Text>
          </div>
        </ComponentSection>

        <ComponentSection
          id="base-scale"
          title="Base Surface Scale"
          description="10-step neutral surface scale from lightest to darkest. Automatically inverts in dark mode."
        >
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {BASE_SCALE.map((step) => (
              <div key={step.name} className="text-center">
                <div className={`${step.class} h-16 rounded-lg border border-base-300 mb-2`} />
                <Code>{step.name}</Code>
                <Text size="sm" className="text-base-content/70 text-[11px] mt-0.5">{step.desc}</Text>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-3 p-4 border border-base-200 rounded-lg">
              <div className="flex-1">
                <Text size="sm" weight="semibold">base-content</Text>
                <Text size="sm" className="text-base-content/70">Default text color — adapts per theme and mode.</Text>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-base-content text-sm font-semibold">Aa</span>
                <span className="text-base-content/70 text-sm">Aa</span>
                <span className="text-base-content/70 text-sm">Aa</span>
              </div>
            </div>
          </div>
        </ComponentSection>

        <ComponentSection
          id="border-tokens"
          title="Border Tokens"
          description="4 border color tokens for consistent border styling across states."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "border", class: "border-border", desc: "Default borders", width: "border-2" },
              { name: "border-hover", class: "border-border-hover", desc: "Hover state borders", width: "border-2" },
              { name: "border-active", class: "border-border-active", desc: "Active/focus borders", width: "border-2" },
              { name: "border-disabled", class: "border-border-disabled", desc: "Disabled state borders", width: "border-2" },
            ].map((token) => (
              <div key={token.name} className={`p-4 rounded-lg ${token.width} ${token.class} bg-base-100`}>
                <Code color="primary">{token.class}</Code>
                <Text size="sm" className="text-base-content/70 mt-1">{token.desc}</Text>
              </div>
            ))}
          </div>
        </ComponentSection>

        <ComponentSection
          id="usage-patterns"
          title="Usage Patterns"
          description="Common patterns for using colors in your components."
        >
          <UsageExample
            title="Color usage examples"
            code={USAGE_CODE}
          />
          <div className="mt-4 bg-warning/10 border border-warning/20 rounded-lg p-4">
            <Text size="sm" className="text-base-content/70">
              <strong className="text-base-content">Opacity modifiers:</strong> Use Tailwind opacity syntax like
              <Code>text-base-content/70</Code> for secondary text. This works with all semantic colors too:
              <Code>bg-primary/10</Code> for subtle tinted backgrounds.
            </Text>
          </div>
        </ComponentSection>

        <ComponentSection
          id="custom-colors"
          title="Custom Colors"
          description="Override any CSS variable to create your own theme or brand colors. All 31 variables are customizable."
        >
          <UsageExample
            title="Override primary color in your CSS"
            code={CUSTOM_COLORS_CODE}
          />
          <div className="mt-4 space-y-3">
            <div className="bg-base-100 border border-base-200 rounded-lg p-4">
              <Text size="sm" weight="semibold" className="mb-2">All overridable variables</Text>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {OVERRIDABLE_VARS.map((v) => (
                  <div key={v.name} className="flex items-center gap-2 py-0.5">
                    <Code size="sm">{v.name}</Code>
                    <Text size="sm" className="text-base-content/70">{v.desc}</Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <Text size="sm" className="text-base-content/70">
                <strong className="text-base-content">Content colors:</strong> When you change a semantic color,
                also update its <Code>-content</Code> counterpart to maintain WCAG AA contrast
                (minimum 4.5:1 ratio for normal text).
              </Text>
            </div>
          </div>
        </ComponentSection>

        
      </div>
    </div>
  );
}
