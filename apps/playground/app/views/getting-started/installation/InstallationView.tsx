import { ComponentHeader, ComponentSection, UsageExample, type ComponentSectionType } from "~/components/docs";
import { Heading, Text, Code } from "@ninna-ui/primitives";
import { Tabs } from "@ninna-ui/navigation";
import { CodeBlock } from "@ninna-ui/code-block";
import { NINNA_UI_VERSION } from "~/constants/version";

const installationMeta = {
  title: "Installation",
  description: "Step-by-step installation guides for Vite, Next.js, and React Router. Set up Ninna UI in under 2 minutes.",
  category: "Getting Started",
  version: NINNA_UI_VERSION,
  status: "stable" as const,
};

export const installationSections: ComponentSectionType[] = [
  { id: "cli", title: "CLI (Recommended)", level: 2 },
  { id: "manual", title: "Manual Setup", level: 2 },
  { id: "packages", title: "Available Packages", level: 2 },
];

const VERIFY_CODE = `import { Button, Heading, Text } from "@ninna-ui/primitives";

export default function App() {
  return (
    <div className="p-8">
      <Heading as="h1" size="3xl">Hello Ninna UI</Heading>
      <Text className="text-base-content/70 mt-2">It works!</Text>
      <Button color="primary" className="mt-4">Click me</Button>
    </div>
  );
}`;

const CSS_CODE = (entryFile: string) => `/* ${entryFile} */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

/* Optional: only needed if you use @ninna-ui/code-block */
/* @import "@ninna-ui/code-block/styles"; */

@variant dark (&:is(.dark *));`;

const VITE_HTML_CODE = `<!-- index.html -->
<html lang="en" data-theme="default">`;

const NEXTJS_LAYOUT_CODE = `// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="default">
      <body>
        <div className="min-h-screen bg-base-50 text-base-content antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}`;

const REACT_ROUTER_ROOT_CODE = `// app/root.tsx
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="default">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="min-h-screen bg-base-50 text-base-content antialiased">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}`;

export function InstallationView() {
  return (
    <div className="">
      <ComponentHeader meta={installationMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="cli"
          title="CLI (Recommended)"
          description="The fastest way to get started. Scaffolds a complete project with your preferred framework and theme preset."
        >
          <div className="space-y-4">
            <CodeBlock
              code="npx @ninna-ui/cli init my-app"
              language="bash"
              copyButtonAlwaysVisible
            />
            <Text size="sm" className="text-base-content/70">
              The CLI prompts you to choose a framework (Vite, Next.js, or React Router) and a theme preset,
              then creates a ready-to-run project with all dependencies configured.
            </Text>
            <div className="bg-base-200 border border-base-300 rounded-lg p-4 space-y-2">
              <Text size="xs" weight="semibold" className="uppercase tracking-widest text-base-content/50">Options</Text>
              <div className="space-y-1">
                <div className="flex items-start gap-3 text-sm">
                  <Code className="shrink-0">-t vite-react|nextjs|react-router</Code>
                  <Text size="sm" className="text-base-content/70">Choose framework without prompt</Text>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Code className="shrink-0">--preset default|ocean|sunset|forest|minimal</Code>
                  <Text size="sm" className="text-base-content/70">Choose theme preset</Text>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Code className="shrink-0">--skip-install</Code>
                  <Text size="sm" className="text-base-content/70">Scaffold only, skip npm install</Text>
                </div>
              </div>
            </div>
          </div>
        </ComponentSection>

        <ComponentSection
          id="manual"
          title="Manual Setup"
          description="Follow the steps below for your framework. All frameworks use Tailwind CSS v4."
        >
          <Tabs defaultValue="vite">
            <Tabs.List>
              <Tabs.Trigger value="vite">Vite + React</Tabs.Trigger>
              <Tabs.Trigger value="nextjs">Next.js</Tabs.Trigger>
              <Tabs.Trigger value="react-router">React Router</Tabs.Trigger>
            </Tabs.List>
              {/* ── Vite ── */}
              <Tabs.Content value="vite">
                <div className="space-y-6 pt-4">
                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">1. Install packages</Heading>
                    <div className="space-y-2">
                      <CodeBlock code="pnpm add @ninna-ui/primitives @ninna-ui/feedback @ninna-ui/forms @ninna-ui/layout" language="bash" copyButtonAlwaysVisible />
                      <CodeBlock code="pnpm add -D tailwindcss @tailwindcss/vite" language="bash" copyButtonAlwaysVisible />
                    </div>
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">2. Configure vite.config.ts</Heading>
                    <UsageExample code={`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`} />
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">3. Configure src/index.css</Heading>
                    <UsageExample code={CSS_CODE("src/index.css")} />
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">4. Add data-theme to index.html</Heading>
                    <CodeBlock code={VITE_HTML_CODE} language="html" copyButtonAlwaysVisible />
                    <Text size="sm" className="text-base-content/60 mt-2">Required — theme CSS variables only activate when <Code>data-theme</Code> matches the preset name.</Text>
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">5. Verify it works</Heading>
                    <UsageExample code={VERIFY_CODE} />
                  </div>
                </div>
              </Tabs.Content>

              {/* ── Next.js ── */}
              <Tabs.Content value="nextjs">
                <div className="space-y-6 pt-4">
                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">1. Install packages</Heading>
                    <div className="space-y-2">
                      <CodeBlock code="pnpm add @ninna-ui/primitives @ninna-ui/feedback @ninna-ui/forms @ninna-ui/layout" language="bash" copyButtonAlwaysVisible />
                      <CodeBlock code="pnpm add -D tailwindcss @tailwindcss/postcss" language="bash" copyButtonAlwaysVisible />
                    </div>
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">2. Configure PostCSS</Heading>
                    <UsageExample code={`// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};`} />
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">3. Configure app/globals.css</Heading>
                    <UsageExample code={CSS_CODE("app/globals.css")} />
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">4. Set up app/layout.tsx</Heading>
                    <UsageExample code={NEXTJS_LAYOUT_CODE} />
                    <div className="mt-2 bg-warning/10 border border-warning/20 rounded-lg p-3">
                      <Text size="sm" className="text-warning"><strong>Hydration tip:</strong> Keep Tailwind classes on a wrapper <Code>{`<div>`}</Code> inside <Code>{`<body>`}</Code>, not on <Code>{`<body>`}</Code> itself — <Code>@tailwindcss/postcss</Code> adds internal attributes to <Code>{`<body>`}</Code> during SSR causing hydration mismatches.</Text>
                    </div>
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">5. Verify it works</Heading>
                    <UsageExample code={VERIFY_CODE} />
                  </div>
                </div>
              </Tabs.Content>

              {/* ── React Router ── */}
              <Tabs.Content value="react-router">
                <div className="space-y-6 pt-4">
                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">1. Install packages</Heading>
                    <div className="space-y-2">
                      <CodeBlock code="pnpm add @ninna-ui/primitives @ninna-ui/feedback @ninna-ui/forms @ninna-ui/layout" language="bash" copyButtonAlwaysVisible />
                      <CodeBlock code="pnpm add -D tailwindcss @tailwindcss/vite" language="bash" copyButtonAlwaysVisible />
                    </div>
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">2. Configure vite.config.ts</Heading>
                    <UsageExample code={`import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
});`} />
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">3. Configure app/index.css</Heading>
                    <UsageExample code={CSS_CODE("app/index.css")} />
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">4. Set up app/root.tsx</Heading>
                    <UsageExample code={REACT_ROUTER_ROOT_CODE} />
                    <Text size="sm" className="text-base-content/60 mt-2">The <Code>Layout</Code> export is required for React Router v7 SSR. Tailwind classes on a wrapper <Code>{`<div>`}</Code> avoids body hydration mismatches.</Text>
                  </div>

                  <div>
                    <Heading as="h3" size="sm" weight="semibold" className="mb-3 text-base-content/70 uppercase tracking-widest text-xs">5. Verify it works</Heading>
                    <UsageExample code={VERIFY_CODE} />
                  </div>
                </div>
              </Tabs.Content>
          </Tabs>
        </ComponentSection>

        <ComponentSection
          id="packages"
          title="Available Packages"
          description="Install only the packages you need. All component packages auto-install @ninna-ui/core."
        >
          <div className="space-y-6">
            <div>
              <Heading as="h3" size="base" weight="semibold" className="mb-3">Component Packages</Heading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-base-300">
                      <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-base-content">Package</th>
                      <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-base-content">Exports</th>
                      <th scope="col" className="text-left py-2.5 font-semibold text-base-content">Install</th>
                    </tr>
                  </thead>
                  <tbody className="text-base-content/70">
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/primitives</Code></td>
                      <td className="py-2.5 pr-4">Button, Badge, Avatar, AvatarGroup, IconButton, Heading, Text, Link, LinkOverlay, LinkBox, Divider, Code, Blockquote, List, Kbd, Mark</td>
                      <td className="py-2.5"><Code>pnpm add @ninna-ui/primitives</Code></td>
                    </tr>
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/feedback</Code></td>
                      <td className="py-2.5 pr-4">Alert, Toast, Toaster, Progress, CircularProgress, Loading, Skeleton, SkeletonCircle, SkeletonText, Status, EmptyState</td>
                      <td className="py-2.5"><Code>pnpm add @ninna-ui/feedback</Code></td>
                    </tr>
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/forms</Code></td>
                      <td className="py-2.5 pr-4">Input, Textarea, Checkbox, CheckboxGroup, Switch, RadioGroup, RadioCard, Select, Slider, NumberInput, PinInput, FileUpload, Field, FormControl, FormLabel, FormMessage, FormGroup, InputGroup, HiddenField</td>
                      <td className="py-2.5"><Code>pnpm add @ninna-ui/forms</Code></td>
                    </tr>
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/layout</Code></td>
                      <td className="py-2.5 pr-4">Box, Container, Stack, HStack, VStack, Flex, Grid, SimpleGrid, Center, Wrap, AspectRatio, Separator</td>
                      <td className="py-2.5"><Code>pnpm add @ninna-ui/layout</Code></td>
                    </tr>
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/overlays</Code></td>
                      <td className="py-2.5 pr-4">Modal, Drawer, Popover, Tooltip, DropdownMenu</td>
                      <td className="py-2.5"><Code>pnpm add @ninna-ui/overlays</Code></td>
                    </tr>
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/navigation</Code></td>
                      <td className="py-2.5 pr-4">Tabs, Accordion, Breadcrumbs, Pagination, Stepper</td>
                      <td className="py-2.5"><Code>pnpm add @ninna-ui/navigation</Code></td>
                    </tr>
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/data-display</Code></td>
                      <td className="py-2.5 pr-4">Card, Stat, Table, DataTable, Timeline, Tree, Calendar</td>
                      <td className="py-2.5"><Code>pnpm add @ninna-ui/data-display</Code></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/code-block</Code></td>
                      <td className="py-2.5 pr-4">CodeBlock (syntax-highlighted code display)</td>
                      <td className="py-2.5"><Code>pnpm add @ninna-ui/code-block</Code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <Heading as="h4" size="base" weight="semibold" className="mb-3">Utility Packages</Heading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-base-300">
                      <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-base-content">Package</th>
                      <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-base-content">Exports</th>
                      <th scope="col" className="text-left py-2.5 font-semibold text-base-content">Install</th>
                    </tr>
                  </thead>
                  <tbody className="text-base-content/70">
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4"><Code>@ninna-ui/core</Code></td>
                      <td className="py-2.5 pr-4">Design tokens, class mappings, 5 CSS theme presets (default, ocean, sunset, forest, minimal)</td>
                      <td className="py-2.5"><Text size="sm" className="text-base-content/70 italic">auto-installed with any component package</Text></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4"><Code color="primary">@ninna-ui/cli</Code></td>
                      <td className="py-2.5 pr-4">Project scaffolding CLI — <Code>npx @ninna-ui/cli init</Code></td>
                      <td className="py-2.5"><Code >npx @ninna-ui/cli init my-app</Code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
