import { Text, Code } from "@ninna-ui/primitives";
import { CodeBlock } from "@ninna-ui/code-block";
import { PackageManagerTabs } from "~/components/docs/PackageManagerTabs";
import { CliStarterSection } from "~/components/docs/CliStarterSection";
import {
  ComponentHeader,
  ComponentSection,
  type ComponentSectionType,
} from "~/components/docs";

const sections: ComponentSectionType[] = [
  { id: "cli-starter", title: "Start with the CLI", level: 2 },
  { id: "prerequisites", title: "Prerequisites", level: 2 },
  { id: "create-project", title: "Create Project", level: 2 },
  { id: "install-ninna", title: "Install Ninna UI", level: 2 },
  { id: "install-tailwind", title: "Install Tailwind CSS", level: 2 },
  { id: "configure-vite", title: "Configure Vite", level: 2 },
  { id: "css-setup", title: "CSS Setup", level: 2 },
  { id: "first-component", title: "Your First Component", level: 2 },
  { id: "ssr-notes", title: "SSR Notes", level: 2 },
  { id: "theme-presets", title: "Theme Presets", level: 2 },
];

export { sections as reactRouterGuideSections };

export default function ReactRouterGuideView() {
  return (
    <div className="space-y-12">
      <ComponentHeader
        meta={{
          title: "React Router Setup",
          category: "Getting Started",
          description:
            "Set up Ninna UI in React Router framework mode with Tailwind CSS v4, server rendering, and matching client hydration.",
        }}
      />

      <CliStarterSection template="react-router" />

      <ComponentSection id="prerequisites" title="Prerequisites">
        <ul className="list-disc pl-6 space-y-2 text-base-content/70">
          <li>Node.js 24 LTS recommended</li>
          <li>React Router framework mode (the CLI starter uses v8)</li>
          <li>Tailwind CSS v4</li>
        </ul>
      </ComponentSection>

      <ComponentSection
        id="create-project"
        title="Create Project"
        description="Skip this step if you already have a React Router project."
      >
        <CodeBlock
          code={`npx create-react-router@latest my-app
cd my-app`}
          language="bash"
          copyButtonAlwaysVisible
        />
      </ComponentSection>

      <ComponentSection
        id="install-ninna"
        title="Install Ninna UI"
        description="Install the component packages you need. All packages auto-install @ninna-ui/core."
      >
        <PackageManagerTabs
          packages={[
            "@ninna-ui/primitives",
            "@ninna-ui/feedback",
            "@ninna-ui/forms",
            "@ninna-ui/layout",
          ]}
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          You can also install individual packages later - e.g.{" "}
          <Code>@ninna-ui/overlays</Code>, <Code>@ninna-ui/navigation</Code>,{" "}
          <Code>@ninna-ui/data-display</Code>.
        </Text>
      </ComponentSection>

      <ComponentSection
        id="install-tailwind"
        title="Install Tailwind CSS"
        description="React Router uses Vite under the hood, so use the @tailwindcss/vite plugin."
      >
        <PackageManagerTabs
          packages={[]}
          devPackages={["tailwindcss", "@tailwindcss/vite"]}
        />
      </ComponentSection>

      <ComponentSection
        id="configure-vite"
        title="Configure Vite"
        description="Add the Tailwind CSS plugin to your Vite config alongside the React Router plugin."
      >
        <CodeBlock
          code={`import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
});`}
          language="typescript"
          copyButtonAlwaysVisible
        />
      </ComponentSection>

      <ComponentSection
        id="css-setup"
        title="CSS Setup"
        description="Replace the contents of your global CSS file."
      >
        <Text className="text-base-content/70 mb-3">
          In <Code>app/index.css</Code> (or equivalent global CSS):
        </Text>
        <CodeBlock
          code={`@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));`}
          language="css"
          copyButtonAlwaysVisible
        />
        <Text className="text-base-content/70 mt-4 mb-3">
          Then add <Code>data-theme</Code> to the <Code>{`<html>`}</Code>{" "}
          element in your root layout:
        </Text>
        <CodeBlock
          code={`// app/root.tsx
import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./index.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="default">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-base-50 text-base-content antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}`}
          language="tsx"
          copyButtonAlwaysVisible
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          The theme preset automatically includes all utility classes used by
          Ninna UI components - no <Code>@source</Code> directive needed. Keep
          the server and first client render identical. The{" "}
          <Code>data-theme</Code> attribute is required — it must match the
          preset name from your CSS import for theme variables to activate. It
          also enables per-section theming by nesting different{" "}
          <Code>data-theme</Code> values.
        </Text>
      </ComponentSection>

      <ComponentSection
        id="first-component"
        title="Your First Component"
        description="Verify the setup by rendering a Ninna UI component."
      >
        <CodeBlock
          code={`import { Button, Heading, Text } from "@ninna-ui/primitives";

export default function Home() {
  return (
    <div className="p-8">
      <Heading as="h1" size="3xl">Hello Ninna UI</Heading>
      <Text className="text-base-content/70 mt-2">It works!</Text>
      <Button color="primary" className="mt-4">Click me</Button>
    </div>
  );
}`}
          language="tsx"
          copyButtonAlwaysVisible
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          This site (<Code>ninna-ui.dev</Code>) is itself built with React
          Router v7 + Ninna UI!
        </Text>
      </ComponentSection>

      <ComponentSection
        id="ssr-notes"
        title="SSR Notes"
        description="Framework mode supports server rendering, client rendering, and pre-rendering."
      >
        <div className="space-y-3">
          <Text className="text-base-content/70">
            Framework mode enables <strong>server rendering by default</strong>.
            Keep <Code>ssr: true</Code> for request-time rendering, or set{" "}
            <Code>ssr: false</Code> in <Code>react-router.config.ts</Code> for
            SPA mode. Ninna UI works in both modes.
          </Text>
          <Text className="text-base-content/70">
            Preserve <Code>Scripts</Code> in the root layout so the browser can
            hydrate the page. Use the same initial state on the server and
            client, and read browser APIs in effects or event handlers. Do not
            hide mismatches with a blanket hydration-warning suppression.
          </Text>
          <CodeBlock
            code={`// react-router.config.ts
import type { Config } from "@react-router/dev/config";

export default {
  ssr: true, // Enable SSR - Ninna UI works with both modes
} satisfies Config;`}
            language="typescript"
          />
        </div>
      </ComponentSection>

      <ComponentSection
        id="theme-presets"
        title="Theme Presets"
        description="Switch themes by changing the CSS import and the data-theme attribute."
      >
        <CodeBlock
          code={`/* 1. Change the CSS import in index.css */
/* Default - Electric purple + magenta */
@import "@ninna-ui/core/theme/presets/default.css";

/* Ocean - Blue + cyan */
@import "@ninna-ui/core/theme/presets/ocean.css";

/* Sunset - Orange + rose */
@import "@ninna-ui/core/theme/presets/sunset.css";

/* Forest - Green + amber */
@import "@ninna-ui/core/theme/presets/forest.css";

/* Minimal - Monochrome */
@import "@ninna-ui/core/theme/presets/minimal.css";

/* 2. Update data-theme in app/root.tsx */
/* <html lang="en" data-theme="ocean"> */`}
          language="css"
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          Dark mode works automatically via <Code>prefers-color-scheme</Code> or
          by adding the <Code>.dark</Code> class to <Code>{`<html>`}</Code>. The{" "}
          <Code>data-theme</Code> attribute is required for theme variables to
          activate.
        </Text>
      </ComponentSection>
    </div>
  );
}
