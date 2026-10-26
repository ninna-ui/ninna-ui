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
  { id: "configure-astro", title: "Configure Astro", level: 2 },
  { id: "css-setup", title: "CSS Setup", level: 2 },
  { id: "layout-setup", title: "Layout Setup", level: 2 },
  { id: "first-component", title: "Your First Component", level: 2 },
  { id: "hydration", title: "Hydration and dependencies", level: 2 },
  { id: "theme-presets", title: "Theme Presets", level: 2 },
];

export { sections as astroGuideSections };

export default function AstroGuideView() {
  return (
    <div className="space-y-12">
      <ComponentHeader
        meta={{
          title: "Astro Setup",
          category: "Getting Started",
          description:
            "Set up Ninna UI in Astro with React integration and Tailwind CSS v4. Hydrate interactive React islands while keeping static content server-rendered.",
        }}
      />

      <CliStarterSection template="astro" />

      <ComponentSection id="prerequisites" title="Prerequisites">
        <ul className="list-disc pl-6 space-y-2 text-base-content/70">
          <li>Node.js 24 LTS recommended</li>
          <li>Astro 7 with React 19</li>
          <li>
            <Code>@astrojs/react</Code> integration
          </li>
          <li>
            Tailwind CSS v4 via <Code>@tailwindcss/vite</Code>
          </li>
        </ul>
      </ComponentSection>

      <ComponentSection
        id="create-project"
        title="Create Project"
        description="Skip this step if you already have an Astro project."
      >
        <CodeBlock
          code={`npm create astro@latest my-app
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
            "@astrojs/react",
            "react@^19",
            "react-dom@^19",
          ]}
          devPackages={["@types/react@^19", "@types/react-dom@^19"]}
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          You can also install additional packages later - e.g.{" "}
          <Code>@ninna-ui/overlays</Code>, <Code>@ninna-ui/navigation</Code>,{" "}
          <Code>@ninna-ui/data-display</Code>.
        </Text>
      </ComponentSection>

      <ComponentSection
        id="install-tailwind"
        title="Install Tailwind CSS"
        description="Astro uses Vite under the hood - use the @tailwindcss/vite plugin for the fastest builds."
      >
        <PackageManagerTabs
          packages={[]}
          devPackages={["tailwindcss", "@tailwindcss/vite"]}
        />
      </ComponentSection>

      <ComponentSection
        id="configure-astro"
        title="Configure Astro"
        description="Add the React integration and Tailwind CSS plugin to your Astro config."
      >
        <CodeBlock
          code={`// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});`}
          language="javascript"
          copyButtonAlwaysVisible
        />
      </ComponentSection>

      <ComponentSection
        id="css-setup"
        title="CSS Setup"
        description="Create your global styles file."
      >
        <Text className="text-base-content/70 mb-3">
          Create <Code>src/styles/globals.css</Code>:
        </Text>
        <CodeBlock
          code={`@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

/* Enable dark mode support */
@variant dark (&:is(.dark *));`}
          language="css"
          copyButtonAlwaysVisible
        />
      </ComponentSection>

      <ComponentSection
        id="layout-setup"
        title="Layout Setup"
        description="Create a base layout that imports your styles and sets the data-theme attribute."
      >
        <CodeBlock
          code={`---
// src/layouts/Layout.astro
import "../styles/globals.css";

interface Props {
  title: string;
}
const { title } = Astro.props;
---
<!doctype html>
<html lang="en" data-theme="default">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="My Ninna UI + Astro app" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body class="min-h-screen bg-base-50 text-base-content antialiased">
    <slot />
  </body>
</html>`}
          language="jsx"
          copyButtonAlwaysVisible
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          The <Code>data-theme</Code> attribute must match the preset name from
          your CSS import.
        </Text>
      </ComponentSection>

      <ComponentSection
        id="first-component"
        title="Your First Component"
        description="Create a React component and use it in an Astro page."
      >
        <Text className="text-base-content/70 mb-3">
          React components must be rendered with a <Code>client:</Code>{" "}
          directive to be interactive:
        </Text>
        <CodeBlock
          code={`// src/components/Hero.tsx
import { useState } from "react";
import { Button, Heading, Text } from "@ninna-ui/primitives";

export function Hero() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-8 text-center">
      <Heading as="h1" size="3xl">Hello Ninna UI + Astro</Heading>
      <Text className="text-base-content/70 mt-2">It works!</Text>
      <Button color="primary" className="mt-4" onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </Button>
    </div>
  );
}`}
          language="tsx"
          copyButtonAlwaysVisible
        />
        <CodeBlock
          code={`---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import { Hero } from '../components/Hero';
---
<Layout title="My App">
  <Hero client:load />
</Layout>`}
          language="jsx"
          copyButtonAlwaysVisible
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          Use <Code>client:load</Code> for interactive components, or{" "}
          <Code>client:idle</Code> / <Code>client:visible</Code> for deferred
          hydration.
        </Text>
      </ComponentSection>

      <ComponentSection
        id="hydration"
        title="Hydration and dependencies"
        description="Use React islands for interactions and let Astro select its compatible Vite version."
      >
        <Text className="text-base-content/70 mb-3">
          Components without a <Code>client:</Code> directive render static
          HTML. Keep the interactive form, tabs, or dialog inside a hydrated
          React island so related components share their React context. The
          initial state must match the server-rendered HTML. Use browser APIs in
          effects or event handlers after hydration.
        </Text>
        <Text size="sm" className="text-base-content/70">
          Remove old Vite 7 overrides when upgrading to the CLI 0.7 starter.
          Install compatible Astro and <Code>@astrojs/react</Code> releases
          together; do not override Astro's bundler just to silence a peer
          dependency warning. Astro React components do not need Next.js's{" "}
          <Code>"use client"</Code> directive.
        </Text>
      </ComponentSection>

      <ComponentSection
        id="theme-presets"
        title="Theme Presets"
        description="Switch themes by changing the CSS import and the data-theme attribute."
      >
        <CodeBlock
          code={`/* 1. Change the CSS import in src/styles/globals.css */
@import "@ninna-ui/core/theme/presets/default.css";  /* Electric purple */
@import "@ninna-ui/core/theme/presets/ocean.css";    /* Blue + cyan */
@import "@ninna-ui/core/theme/presets/sunset.css";   /* Orange + rose */
@import "@ninna-ui/core/theme/presets/forest.css";   /* Green + amber */
@import "@ninna-ui/core/theme/presets/minimal.css";  /* Monochrome */

/* 2. Update data-theme in src/layouts/Layout.astro */
/* <html lang="en" data-theme="ocean"> */`}
          language="css"
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          Dark mode works automatically via <Code>prefers-color-scheme</Code> or
          by adding the <Code>.dark</Code> class to <Code>{`<html>`}</Code>.
        </Text>
      </ComponentSection>
    </div>
  );
}
