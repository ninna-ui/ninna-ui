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
  { id: "configure-postcss", title: "Configure PostCSS", level: 2 },
  { id: "css-setup", title: "CSS Setup", level: 2 },
  { id: "first-component", title: "Your First Component", level: 2 },
  { id: "use-client", title: '"use client" Directive', level: 2 },
  { id: "theme-presets", title: "Theme Presets", level: 2 },
];

export { sections as nextjsGuideSections };

export default function NextjsGuideView() {
  return (
    <div className="space-y-12">
      <ComponentHeader
        meta={{
          title: "Next.js Setup",
          category: "Getting Started",
          description:
            "Set up Ninna UI with the Next.js App Router and Tailwind CSS v4, including server layouts, client interactions, and theme configuration.",
        }}
      />

      <CliStarterSection template="nextjs" />

      <ComponentSection id="prerequisites" title="Prerequisites">
        <ul className="list-disc pl-6 space-y-2 text-base-content/70">
          <li>Node.js 24 LTS recommended</li>
          <li>Next.js 16 with App Router</li>
          <li>Tailwind CSS v4</li>
        </ul>
      </ComponentSection>

      <ComponentSection
        id="create-project"
        title="Create Project"
        description="Skip this step if you already have a Next.js project."
      >
        <CodeBlock
          code={`npx create-next-app@latest my-app --typescript --tailwind --app
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
        description="Next.js uses the @tailwindcss/postcss plugin for Tailwind integration."
      >
        <PackageManagerTabs
          packages={[]}
          devPackages={["tailwindcss", "@tailwindcss/postcss"]}
        />
      </ComponentSection>

      <ComponentSection
        id="configure-postcss"
        title="Configure PostCSS"
        description="Create or update your PostCSS config at the project root."
      >
        <CodeBlock
          code={`// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};`}
          language="javascript"
          copyButtonAlwaysVisible
        />
      </ComponentSection>

      <ComponentSection
        id="css-setup"
        title="CSS Setup"
        description="Replace the contents of your global CSS file."
      >
        <Text className="text-base-content/70 mb-3">
          In <Code>app/globals.css</Code>:
        </Text>
        <CodeBlock
          code={`@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));`}
          language="css"
          copyButtonAlwaysVisible
        />
        <Text className="text-base-content/70 mt-4 mb-3">
          Then add <Code>data-theme</Code> to your root layout:
        </Text>
        <CodeBlock
          code={`// app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="default">
      <body className="min-h-screen bg-base-50 text-base-content antialiased">
        {children}
      </body>
    </html>
  );
}`}
          language="tsx"
          copyButtonAlwaysVisible
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          The theme preset automatically includes all utility classes used by
          Ninna UI components - no <Code>@source</Code> directive needed. Keep
          the root layout on the server and the initial HTML identical on the
          client. CSS handles system color mode without reading localStorage or
          matchMedia during render. Theme setup does not require suppressing
          hydration warnings.
        </Text>
      </ComponentSection>

      <ComponentSection
        id="first-component"
        title="Your First Component"
        description="Verify the setup by rendering a Ninna UI component."
      >
        <CodeBlock
          code={`// app/components/welcome.tsx
"use client";

import { Button, Heading, Text } from "@ninna-ui/primitives";

export default function Welcome() {
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
        <CodeBlock
          code={`// app/page.tsx — remains a Server Component
import Welcome from "./components/welcome";

export default function Page() {
  return <Welcome />;
}`}
          language="tsx"
          copyButtonAlwaysVisible
        />
      </ComponentSection>

      <ComponentSection
        id="use-client"
        title={`"use client" Directive`}
        description="Keep layouts and pages on the server; put state and event handlers in focused client components."
      >
        <div className="space-y-3">
          <Text className="text-base-content/70">
            <strong>
              Import Ninna UI components inside a client boundary.
            </strong>{" "}
            Put <Code>{`"use client"`}</Code> at the top of a wrapper when it
            uses hooks, event handlers or browser APIs. Keeping Ninna UI imports
            there also works with the published 0.7 packages and the CLI
            starter. A client component can still be rendered on the server and
            hydrated.
          </Text>
          <Text className="text-base-content/70">
            Keep the root layout and page on the server, then render your client
            wrapper from them. The CSS theme import remains in the root layout;
            palette resolution does not require a React provider.
          </Text>
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <Text size="sm" className="text-success">
              <strong>SSR Ready:</strong> All Ninna UI components are fully SSR
              compatible. A client component can still be server-rendered and
              hydrated; its initial output must match the server output.
            </Text>
          </div>
          <CodeBlock
            code={`// app/components/my-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@ninna-ui/primitives";
import { Input, Field } from "@ninna-ui/forms";

export function MyForm() {
  const [value, setValue] = useState("");

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Field label="Name">
        <Input value={value} onChange={(event) => setValue(event.target.value)} />
      </Field>
      <Button type="submit" disabled={!value.trim()}>Submit</Button>
    </form>
  );
}`}
            language="tsx"
            copyButtonAlwaysVisible
          />
        </div>
      </ComponentSection>

      <ComponentSection
        id="theme-presets"
        title="Theme Presets"
        description="Switch themes by changing the CSS import and the data-theme attribute."
      >
        <CodeBlock
          code={`/* 1. Change the CSS import in globals.css */
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

/* 2. Update data-theme in app/layout.tsx */
/* <html lang="en" data-theme="ocean"> */`}
          language="css"
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          Dark mode works automatically via <Code>prefers-color-scheme</Code> or
          by adding the <Code>.dark</Code> class to <Code>{`<html>`}</Code>. The{" "}
          <Code>data-theme</Code> attribute must match the imported preset.
          Leave both mode classes unset to follow the system preference.
        </Text>
      </ComponentSection>
    </div>
  );
}
