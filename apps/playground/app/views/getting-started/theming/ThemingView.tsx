import { ComponentHeader, ComponentSection, UsageExample, type ComponentSectionType } from "~/components/docs";
import { Heading, Text, Badge , Code } from "@ninna-ui/primitives";
import { themingMeta } from "./meta";

export const themingSections: ComponentSectionType[] = [
  { id: "themes", title: "Built-in Themes", level: 2 },
  { id: "switching", title: "Switching Themes", level: 2 },
  { id: "dark-mode", title: "Dark Mode", level: 2 },
  { id: "css-variables", title: "CSS Variables", level: 2 },
  { id: "data-theme", title: "Per-Section Theming", level: 2 },
  { id: "custom-theme", title: "Custom Themes", level: 2 },
  { id: "code-block-theming", title: "CodeBlock Theming", level: 2 },
];

const THEME_SWITCH_CODE = `/* 1. Change the CSS import */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/ocean.css";

@variant dark (&:is(.dark *));`;

const THEME_HTML_CODE = `<!-- 2. Set data-theme on your root element -->
<html data-theme="ocean">

<!-- Or import all presets and switch at runtime -->
<html data-theme="ocean">  <!-- change this attribute to switch theme -->`;

const DARK_MODE_CLASS_CODE = `<!-- Forced dark mode -->
<html data-theme="default" class="dark">

<!-- Forced light mode (blocks OS preference) -->
<html data-theme="default" class="light">

<!-- System preference (auto) — no class, follows OS -->
<html data-theme="default">

<!-- Note: data-theme is always required -->
<!-- Multiple presets can be imported; data-theme selects which applies -->`;

const DARK_MODE_JS_CODE = `// Three modes: 'dark', 'light', 'system'
function setTheme(mode) {
  const root = document.documentElement;
  root.classList.remove('dark', 'light');

  if (mode === 'dark') {
    root.classList.add('dark');      // forces dark via CSS selector
  } else if (mode === 'light') {
    root.classList.add('light');     // forces light, blocks @media query
  }
  // 'system': no class — @media (prefers-color-scheme: dark) handles it

  localStorage.setItem('theme', mode);
}

// Restore on page load (run before React hydrates to avoid flash)
const saved = localStorage.getItem('theme') || 'system';
setTheme(saved);`;

const DATA_THEME_CODE = `<!-- Per-section theming with data-theme attribute -->
<div data-theme="default">
  <Button color="primary">Default Theme Button</Button>
</div>

<div data-theme="ocean">
  <Button color="primary">Ocean Theme Button</Button>
</div>

<div data-theme="sunset">
  <Button color="primary">Sunset Theme Button</Button>
</div>`;

const CODEBLOCK_TOKEN_OVERRIDE_CODE = `/* Override individual token colors globally */
[data-slot="code-block"] {
  --ninna-cb-keyword:   oklch(0.50 0.22 250); /* blue keywords  */
  --ninna-cb-string:    oklch(0.50 0.18 145); /* green strings  */
  --ninna-cb-comment:   oklch(0.55 0.04 264); /* muted comments */
  --ninna-cb-component: oklch(0.52 0.20 300); /* purple components */
  --ninna-cb-tag:       oklch(0.50 0.20 20);  /* red/orange tags */
  --ninna-cb-attr:      oklch(0.52 0.16 55);  /* amber attributes */
  --ninna-cb-boolean:   oklch(0.50 0.18 25);  /* orange booleans */
  --ninna-cb-number:    oklch(0.52 0.18 80);  /* yellow numbers  */
  --ninna-cb-punctuation: oklch(0.50 0.04 264); /* muted punctuation */
}

/* Scope overrides to a specific wrapper — leave other blocks unchanged */
.my-docs-section [data-slot="code-block"] {
  --ninna-cb-keyword: oklch(0.55 0.28 160); /* green theme for this section */
}`;

const CODEBLOCK_SCHEME_CODE = `import { CodeBlock } from "@ninna-ui/code-block";

{/* Always dark, even inside a light-mode page */}
<CodeBlock code={myCode} colorScheme="dark" />

{/* Always light, even inside a dark-mode page */}
<CodeBlock code={myCode} colorScheme="light" />

{/* Follows the nearest .dark ancestor (default) */}
<CodeBlock code={myCode} colorScheme="auto" />`;

const CUSTOM_THEME_CODE = `/* ===== Light Theme (default) ===== */
[data-theme="my-brand"] {
  color-scheme: light;

  /* Primary — your brand color */
  --color-primary: oklch(0.49 0.27 250);
  --color-primary-content: oklch(0.93 0.04 250);

  /* Secondary */
  --color-secondary: oklch(0.50 0.24 300);
  --color-secondary-content: oklch(0.93 0.04 300);

  /* Accent */
  --color-accent: oklch(0.75 0.18 183);
  --color-accent-content: oklch(0.16 0.04 183);

  /* Neutral */
  --color-neutral: oklch(0.21 0.03 265);
  --color-neutral-content: oklch(0.93 0.01 265);

  /* Base surfaces — light (L: 0.98 → 0.20) */
  --color-base-50:  oklch(0.985 0.006 260);
  --color-base-100: oklch(0.970 0.008 260);
  --color-base-200: oklch(0.940 0.010 260);
  --color-base-300: oklch(0.900 0.014 260);
  --color-base-content: oklch(0.200 0.014 260);
  /* ... base-400 through base-900, border colors */
}

/* ===== Dark Theme (explicit class) ===== */
/* Applies when <html class="dark" data-theme="my-brand"> */
.dark [data-theme="my-brand"],
[data-theme="my-brand"].dark {
  color-scheme: dark;

  /* Colors lighten in dark mode for contrast */
  --color-primary: oklch(0.74 0.24 250);
  --color-primary-content: oklch(0.15 0.03 250);

  --color-neutral: oklch(0.70 0.03 265);
  --color-neutral-content: oklch(0.15 0.01 265);

  /* Base surfaces — dark (L: 0.14 → 0.93) */
  --color-base-50:  oklch(0.140 0.012 260);
  --color-base-100: oklch(0.180 0.014 260);
  --color-base-200: oklch(0.230 0.016 260);
  --color-base-300: oklch(0.310 0.018 260);
  --color-base-content: oklch(0.930 0.012 260);
  /* ... rest of dark overrides */
}

/* ===== Dark Theme (system preference) ===== */
/* Applies when no .dark/.light class and OS prefers dark */
@media (prefers-color-scheme: dark) {
  [data-theme="my-brand"]:not(.light):not(.dark) {
    color-scheme: dark;
    /* ... same dark overrides as above ... */
  }
}`;

export function ThemingView() {
  return (
    <div className="">
      <ComponentHeader meta={themingMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="themes"
          title="Built-in Themes"
          description="Ninna UI ships with 5 built-in themes. Each theme defines all 31 CSS variables for light and dark mode."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "default", colors: "Purple / Magenta", desc: "Vibrant electric purple with cool slate surfaces" },
              { name: "ocean", colors: "Blue / Cyan", desc: "Deep ocean blues with cool undertones" },
              { name: "sunset", colors: "Orange / Rose", desc: "Warm sunset tones for bold designs" },
              { name: "forest", colors: "Green / Amber", desc: "Natural greens with earthy accents" },
              { name: "minimal", colors: "Monochrome", desc: "Near-black primary, low chroma for minimal UIs" },
            ].map((theme) => (
              <div key={theme.name} className="border border-base-200 rounded-lg p-4 bg-base-100">
                <div className="flex items-center gap-2 mb-2">
                  <Code color="primary">{theme.name}</Code>
                  <Badge size="sm" variant="soft" color="neutral">{theme.colors}</Badge>
                </div>
                <Text size="sm" className="text-base-content/70">{theme.desc}</Text>
              </div>
            ))}
          </div>
        </ComponentSection>

        <ComponentSection
          id="switching"
          title="Switching Themes"
          description="Change your entire theme by swapping a single CSS import line."
        >
          <div className="space-y-4">
            <UsageExample
              title="1. Change the CSS import"
              code={THEME_SWITCH_CODE}
            />
            <UsageExample
              title="2. Set data-theme on your root element"
              code={THEME_HTML_CODE}
            />
          </div>
          <div className="mt-4 bg-info/10 border border-info/20 rounded-lg p-4">
            <Text size="sm" className="text-info">
              <strong>Available themes:</strong>{" "}
              <Code>default.css</Code>,{" "}
              <Code>ocean.css</Code>,{" "}
              <Code>sunset.css</Code>,{" "}
              <Code>forest.css</Code>,{" "}
              <Code>minimal.css</Code>{" "}
              — all can be imported together for per-section theming.
            </Text>
          </div>
        </ComponentSection>

        <ComponentSection
          id="dark-mode"
          title="Dark Mode"
          description="Dark mode works automatically via CSS variables. No dark: classes needed anywhere."
        >
          <div className="space-y-6">
            <div>
              <Heading as="h3" size="base" weight="semibold" className="mb-2">How Dark Mode Works</Heading>
              <Text size="sm" className="text-base-content/70 mb-3">
                Every built-in theme includes both light and dark color definitions. The dark mode
                CSS selector uses <Code>{'.dark [data-theme="default"]'}</Code> or <Code>{'[data-theme="default"].dark'}</Code> to
                redefine all CSS variables — no <Code>dark:</Code> utility classes needed anywhere.
                A <Code>data-theme</Code> attribute is always required on <Code>{'<html>'}</Code> (or any ancestor element).
              </Text>
            </div>

            <div>
              <Heading as="h4" size="base" weight="semibold" className="mb-2">System Preference (Auto)</Heading>
              <Text size="sm" className="text-base-content/70 mb-3">
                All themes include a <Code>@media (prefers-color-scheme: dark)</Code> block.
                When no <Code>class</Code> is set on <Code>{'<html>'}</Code>, dark mode activates automatically based on OS preference.
                Adding <Code>class="light"</Code> forces light mode and blocks the media query.
              </Text>
            </div>

            <div>
              <Heading as="h4" size="base" weight="semibold" className="mb-2">Class-Based Toggle</Heading>
              <Text size="sm" className="text-base-content/70 mb-3">
                Add the <Code color="primary">dark</Code> class to your root element for manual control.
              </Text>
              <UsageExample code={DARK_MODE_CLASS_CODE} />
            </div>

            <div>
              <Heading as="h4" size="base" weight="semibold" className="mb-2">JavaScript Toggle</Heading>
              <UsageExample code={DARK_MODE_JS_CODE} />
            </div>
          </div>
        </ComponentSection>

        <ComponentSection
          id="css-variables"
          title="CSS Variables"
          description="All 31 CSS variables that define a Ninna UI theme."
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-base-300">
                  <th scope="col" className="text-left py-2 pr-4 font-semibold text-base-content">Variable</th>
                  <th scope="col" className="text-left py-2 pr-4 font-semibold text-base-content">Tailwind Class</th>
                  <th scope="col" className="text-left py-2 font-semibold text-base-content">Usage</th>
                </tr>
              </thead>
              <tbody className="text-base-content/70">
                {[
                  ["--color-primary", "bg-primary, text-primary", "Main brand color"],
                  ["--color-primary-content", "text-primary-content", "Text on primary backgrounds"],
                  ["--color-secondary", "bg-secondary, text-secondary", "Secondary brand color"],
                  ["--color-accent", "bg-accent, text-accent", "Accent/highlight color"],
                  ["--color-neutral", "bg-neutral, text-neutral", "Neutral/muted color"],
                  ["--color-success", "bg-success, text-success", "Success states"],
                  ["--color-danger", "bg-danger, text-danger", "Error/danger states"],
                  ["--color-warning", "bg-warning, text-warning", "Warning states"],
                  ["--color-info", "bg-info, text-info", "Informational states"],
                  ["--color-base-50 to -900", "bg-base-50 to bg-base-900", "Surface scale (10 steps)"],
                  ["--color-base-content", "text-base-content", "Default text color"],
                  ["--color-border", "border-border", "Default border color"],
                ].map(([variable, tw, usage]) => (
                  <tr key={variable} className="border-b border-base-200">
                    <td className="py-2 pr-4"><Code color="primary">{variable}</Code></td>
                    <td className="py-2 pr-4"><Code>{tw}</Code></td>
                    <td className="py-2">{usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentSection>

        <ComponentSection
          id="data-theme"
          title="Per-Section Theming"
          description="Apply different themes to different sections of your page using the data-theme attribute."
        >
          <UsageExample
            title="Scope themes to specific sections"
            code={DATA_THEME_CODE}
          />
          <div className="mt-4 bg-warning/10 border border-warning/20 rounded-lg p-4">
            <Text size="sm" className="text-warning">
              <strong>Note:</strong> The theme CSS must be imported for each theme you want to use.
              Each theme defines styles for its own <Code>data-theme</Code> value.
            </Text>
          </div>
        </ComponentSection>

        <ComponentSection
          id="custom-theme"
          title="Custom Themes"
          description="Create your own theme by defining all 31 CSS variables."
        >
          <div className="space-y-4">
            <Text className="text-base-content/70 leading-relaxed">
              Copy any built-in theme and modify the oklch values to match your brand. Each color uses the 
              <Code>oklch(lightness chroma hue)</Code> format from the CSS Color Level 4 spec.
            </Text>
            <UsageExample
              title="Custom theme template"
              code={CUSTOM_THEME_CODE}
            />
            <div className="bg-info/10 border border-info/20 rounded-lg p-4">
              <Text size="sm" className="text-info">
                <strong>Tip:</strong> Use the Tailwind CSS oklch palette as a reference. 
                Light mode typically uses <Code>-600</Code> shades and dark mode uses <Code>-400</Code> shades for semantic colors.
              </Text>
            </div>
          </div>
        </ComponentSection>

        <ComponentSection
          id="code-block-theming"
          title="CodeBlock Theming"
          description="Customize syntax highlighting colors using CSS custom properties or control the color scheme per instance via prop."
        >
          <div className="space-y-6">
            <div>
              <Heading as="h3" size="base" weight="semibold" className="mb-2">Color Scheme Prop</Heading>
              <Text size="sm" className="text-base-content/70 mb-3">
                Each <Code>CodeBlock</Code> can independently control its light/dark syntax colors via the
                <Code>colorScheme</Code> prop — useful when embedding code inside a dark hero section on an
                otherwise light page, or vice versa.
              </Text>
              <UsageExample code={CODEBLOCK_SCHEME_CODE} />
            </div>

            <div>
              <Heading as="h3" size="base" weight="semibold" className="mb-2">Token Color Overrides</Heading>
              <Text size="sm" className="text-base-content/70 mb-3">
                All syntax token colors are exposed as CSS custom properties prefixed with <Code>--ninna-cb-</Code>.
                Override them globally in your CSS or scope overrides to a specific section.
              </Text>
              <UsageExample
                title="Override token colors in CSS"
                code={CODEBLOCK_TOKEN_OVERRIDE_CODE}
              />
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-base-300">
                      <th scope="col" className="text-left py-2 pr-4 font-semibold text-base-content">Variable</th>
                      <th scope="col" className="text-left py-2 font-semibold text-base-content">Token</th>
                    </tr>
                  </thead>
                  <tbody className="text-base-content/70">
                    {[
                      ["--ninna-cb-keyword", "Keywords (import, const, return, …)"],
                      ["--ninna-cb-string", "String and template literals"],
                      ["--ninna-cb-comment", "Line and block comments"],
                      ["--ninna-cb-component", "React component names (PascalCase)"],
                      ["--ninna-cb-tag", "HTML/JSX tag names (lowercase)"],
                      ["--ninna-cb-attr", "JSX / HTML attribute names"],
                      ["--ninna-cb-boolean", "true, false, null, undefined"],
                      ["--ninna-cb-number", "Numeric literals"],
                      ["--ninna-cb-punctuation", "Brackets, operators, punctuation"],
                    ].map(([variable, token]) => (
                      <tr key={variable} className="border-b border-base-200">
                        <td className="py-2 pr-4"><Code color="primary">{variable}</Code></td>
                        <td className="py-2">{token}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-info/10 border border-info/20 rounded-lg p-4">
              <Text size="sm" className="text-info">
                <strong>CSS Import:</strong> Add{" "}
                <Code>@import "@ninna-ui/code-block/styles";</Code>{" "}
                to your CSS entry point (or it is picked up automatically via{" "}
                <Code>@source</Code> scanning built into the theme preset).
              </Text>
            </div>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
