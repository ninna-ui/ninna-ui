import {
  ComponentHeader,
  ComponentSection,
  type ComponentSectionType,
} from "~/components/docs";
import { PackageManagerTabs } from "~/components/docs/PackageManagerTabs";
import { Heading, Text, Code } from "@ninna-ui/primitives";
import { CodeBlock } from "@ninna-ui/code-block";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { NINNA_UI_VERSION } from "~/constants/version";

const installationMeta = {
  title: "Installation",
  description:
    "Install Ninna UI in under 2 minutes. Use the CLI to scaffold a production-ready project or pick your framework for a step-by-step manual setup guide.",
  category: "Getting Started",
  version: NINNA_UI_VERSION,
  status: "stable" as const,
};

export const installationSections: ComponentSectionType[] = [
  { id: "cli", title: "CLI (Recommended)", level: 2 },
  { id: "frameworks", title: "Pick Your Framework", level: 2 },
  { id: "css-setup", title: "Import a theme", level: 2 },
  { id: "first-component", title: "First component", level: 2 },
  { id: "verify-setup", title: "Verify your setup", level: 2 },
  { id: "packages", title: "Available Packages", level: 2 },
];

const FRAMEWORKS = [
  {
    name: "Vite",
    description:
      "Best choice for single-page applications. Uses @tailwindcss/vite plugin.",
    href: "/getting-started/vite",
    badge: "Recommended",
  },
  {
    name: "Next.js",
    description:
      "Best choice for server-rendered applications. Uses @tailwindcss/postcss.",
    href: "/getting-started/nextjs",
    badge: "SSR",
  },
  {
    name: "React Router",
    description:
      "Full-stack React framework with SSR. Uses @tailwindcss/vite plugin.",
    href: "/getting-started/react-router",
    badge: null,
  },
  {
    name: "Astro",
    description:
      "Static-first with island architecture. React components via @astrojs/react.",
    href: "/getting-started/astro",
    badge: "New",
  },
];

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
              code={`npx @ninna-ui/cli@latest init my-app\ncd my-app\nnpm run dev`}
              language="bash"
              copyButtonAlwaysVisible
            />
            <Text size="sm" className="text-base-content/70">
              Use Node.js 24 LTS for a common runtime across all four starters.
              Choose Vite React, Next.js, React Router, or Astro and one of five
              theme presets. TypeScript and Tailwind CSS v4 are configured for
              you. For a specific framework and theme, pass both flags:
            </Text>
            <CodeBlock
              code="npx @ninna-ui/cli@latest init my-app --template nextjs --preset ocean"
              language="bash"
              copyButtonAlwaysVisible
            />
            <Text size="sm" className="text-base-content/70">
              CLI 0.7 includes Vite 8, Next.js 16, React Router 8, and Astro 7
              starters with type-check and production scripts. Check your
              installed CLI with <Code>npx @ninna-ui/cli@latest --version</Code>
              . The generated <Code>package.json</Code> lists the exact
              framework versions and commands. The manual guides below also work
              with existing applications.
            </Text>
            <div className="bg-base-50 border border-base-200 rounded-lg p-5 space-y-2">
              <Text
                size="xs"
                weight="semibold"
                className="uppercase tracking-widest text-base-content/70"
              >
                Options
              </Text>
              <div className="space-y-3 sm:space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                  <Code className="w-fit max-w-full whitespace-normal break-all sm:shrink-0">
                    -t vite-react|nextjs|react-router|astro
                  </Code>
                  <Text size="sm" className="text-base-content/70">
                    Choose framework without prompt
                  </Text>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                  <Code className="w-fit max-w-full whitespace-normal break-all sm:shrink-0">
                    --preset default|ocean|sunset|forest|minimal
                  </Code>
                  <Text size="sm" className="text-base-content/70">
                    Choose theme preset
                  </Text>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                  <Code className="w-fit max-w-full whitespace-normal break-all sm:shrink-0">
                    --skip-install
                  </Code>
                  <Text size="sm" className="text-base-content/70">
                    Skip dependency installation. Supply framework and preset
                    flags too when running without prompts.
                  </Text>
                </div>
              </div>
            </div>
            <Text size="sm" className="text-base-content/70">
              For CI or a manual install, specify every choice, then install
              dependencies before starting the app:
            </Text>
            <CodeBlock
              code={`npx @ninna-ui/cli@latest init my-app --template vite-react --preset default --skip-install\ncd my-app\nnpm install\nnpm run dev`}
              language="bash"
              copyButtonAlwaysVisible
            />
            <Text size="sm" className="text-base-content/70">
              You can use <Code>pnpm dlx @ninna-ui/cli@latest</Code> or{" "}
              <Code>yarn dlx @ninna-ui/cli@latest</Code> instead of npx. After
              generation, use one package manager consistently: npm install /
              npm run dev, pnpm install / pnpm dev, or yarn install / yarn dev.
              If automatic installation fails, run that manager's install
              command inside the generated project and retry.
            </Text>
          </div>
        </ComponentSection>

        <ComponentSection
          id="frameworks"
          title="Pick Your Framework"
          description="Follow a step-by-step manual setup guide for your framework of choice."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FRAMEWORKS.map((fw) => (
              <Link
                key={fw.name}
                to={fw.href}
                className="group relative flex flex-col gap-2 rounded-lg border border-base-200 bg-base-100 p-6 transition-colors hover:border-primary/30 hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-between">
                  <Heading
                    as="h3"
                    size="lg"
                    weight="semibold"
                    className="group-hover:text-primary-text transition-colors"
                  >
                    {fw.name}
                  </Heading>
                  {fw.badge && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary-text">
                      {fw.badge}
                    </span>
                  )}
                </div>
                <Text size="sm" className="text-base-content/70">
                  {fw.description}
                </Text>
                <div className="mt-auto pt-3 flex items-center gap-1 text-sm font-medium text-primary-text  transition-opacity">
                  View guide <ArrowRight className="size-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </ComponentSection>

        <ComponentSection
          id="css-setup"
          title="Import a theme"
          description="After configuring Tailwind CSS v4 for your framework, add these imports to your main stylesheet. Without the theme import, components will be unstyled."
        >
          <CodeBlock
            language="css"
            copyButtonAlwaysVisible
            code={
              '@import "tailwindcss";\n@import "@ninna-ui/core/theme/presets/default.css";\n@variant dark (&:is(.dark *));'
            }
          />
          <Text size="sm" className="text-base-content/70">
            Set <Code>data-theme="default"</Code> on your root HTML element.
            Change the preset import and attribute together to use Ocean,
            Sunset, Forest, or Minimal.
          </Text>
          <Text size="sm" className="text-base-content/70">
            If you install <Code>@ninna-ui/code-block</Code>, also import{" "}
            <Code>@ninna-ui/code-block/styles</Code> after the preset. Leave
            light and dark mode classes unset to follow the system preference.
          </Text>
          <Link
            to="/getting-started/theming"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-text hover:underline underline-offset-4"
          >
            Theme configuration{" "}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </ComponentSection>

        <ComponentSection id="first-component" title="Add your first component">
          <CodeBlock
            copyButtonAlwaysVisible
            code={
              'import { Button } from "@ninna-ui/primitives";\n\nexport default function App() {\n  return <Button color="primary">Get started</Button>;\n}'
            }
          />
          <Link
            to="/primitives"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-text hover:underline underline-offset-4"
          >
            Browse components{" "}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </ComponentSection>

        <ComponentSection
          id="verify-setup"
          title="Verify your setup"
          description="Check the running app and its production build before adding your own features."
        >
          <div className="space-y-4">
            <Text className="text-base-content/70">
              The CLI 0.7 starters include <Code>npm run typecheck</Code> and{" "}
              <Code>npm run build</Code>. Read the scripts in your generated{" "}
              <Code>package.json</Code> when using an earlier CLI release. After
              building, Vite and Astro use <Code>npm run preview</Code>; Next.js
              and React Router use <Code>npm start</Code>.
            </Text>
            <Text className="text-base-content/70">
              In development and production, submit and reset the form, switch
              tabs with the keyboard, and open a dialog. Escape should close it
              and return focus to its trigger. Check your browser console for
              errors and hydration warnings.
            </Text>
            <Text className="text-base-content/70">
              Vite's starter uses client rendering. Next.js and React Router
              hydrate server-rendered content. Astro hydrates interactive React
              islands with <Code>client:load</Code>. Keep initial state and
              document attributes identical between server and client; CSS
              handles system color mode without blanket warning suppression.
            </Text>
          </div>
        </ComponentSection>
        <ComponentSection
          id="packages"
          title="Available Packages"
          description="Install only the packages you need. All component packages auto-install @ninna-ui/core."
        >
          <div className="space-y-6">
            <div>
              <Heading as="h3" size="base" weight="semibold" className="mb-3">
                Component Packages
              </Heading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-base-300">
                      <th
                        scope="col"
                        className="text-left py-2.5 pr-4 font-semibold text-base-content"
                      >
                        Package
                      </th>
                      <th
                        scope="col"
                        className="text-left py-2.5 pr-4 font-semibold text-base-content"
                      >
                        Components
                      </th>
                      <th
                        scope="col"
                        className="text-left py-2.5 font-semibold text-base-content"
                      >
                        Install
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base-content/70">
                    {COMPONENT_PACKAGES.map((pkg, i) => (
                      <tr
                        key={pkg.name}
                        className={
                          i < COMPONENT_PACKAGES.length - 1
                            ? "border-b border-base-200"
                            : ""
                        }
                      >
                        <td className="py-2.5 pr-4">
                          <Code color="primary">{pkg.name}</Code>
                        </td>
                        <td className="py-2.5 pr-4">{pkg.exports}</td>
                        <td className="py-2.5">
                          <Code>pnpm add {pkg.name}@latest</Code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <Heading as="h3" size="sm" weight="semibold" className="mb-2">
                Install all component packages at once:
              </Heading>
              <PackageManagerTabs
                packages={COMPONENT_PACKAGES.map((p) => p.name)}
              />
            </div>

            <div>
              <Heading as="h4" size="base" weight="semibold" className="mb-3">
                Utility Packages
              </Heading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-base-300">
                      <th
                        scope="col"
                        className="text-left py-2.5 pr-4 font-semibold text-base-content"
                      >
                        Package
                      </th>
                      <th
                        scope="col"
                        className="text-left py-2.5 pr-4 font-semibold text-base-content"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="text-left py-2.5 font-semibold text-base-content"
                      >
                        Install
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base-content/70">
                    <tr className="border-b border-base-200">
                      <td className="py-2.5 pr-4">
                        <Code>@ninna-ui/core</Code>
                      </td>
                      <td className="py-2.5 pr-4">
                        Design tokens, class mappings, 5 CSS theme presets
                      </td>
                      <td className="py-2.5">
                        <Text size="sm" className="text-base-content/70 italic">
                          auto-installed
                        </Text>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4">
                        <Code color="primary">@ninna-ui/cli</Code>
                      </td>
                      <td className="py-2.5 pr-4">Project scaffolding CLI</td>
                      <td className="py-2.5">
                        <Code>npx @ninna-ui/cli@latest init my-app</Code>
                      </td>
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

const COMPONENT_PACKAGES = [
  {
    name: "@ninna-ui/primitives",
    exports:
      "Button, Badge, Avatar, IconButton, Heading, Text, Link, Divider, Code, Blockquote, List, Kbd, Mark",
  },
  {
    name: "@ninna-ui/feedback",
    exports:
      "Alert, Toast, Toaster, Progress, CircularProgress, Loading, Skeleton, Status, EmptyState",
  },
  {
    name: "@ninna-ui/forms",
    exports:
      "Input, Textarea, Checkbox, Switch, RadioGroup, Select, Slider, NumberInput, PinInput, FileUpload, Field, FormControl, FormGroup, InputGroup",
  },
  {
    name: "@ninna-ui/layout",
    exports:
      "Box, Container, Stack, Flex, Grid, SimpleGrid, Center, Wrap, AspectRatio, Separator",
  },
  {
    name: "@ninna-ui/overlays",
    exports: "Modal, Drawer, Popover, Tooltip, DropdownMenu",
  },
  {
    name: "@ninna-ui/navigation",
    exports: "Tabs, Accordion, Breadcrumbs, Pagination, Stepper",
  },
  {
    name: "@ninna-ui/data-display",
    exports: "Card, Stat, Table, DataTable, Timeline, Tree, Calendar",
  },
  {
    name: "@ninna-ui/code-block",
    exports: "CodeBlock (syntax-highlighted code display)",
  },
];
