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
  { id: "theme-presets", title: "Theme Presets", level: 2 },
];

export { sections as viteGuideSections };

export default function ViteGuideView() {
  return (
    <div className="space-y-12">
      <ComponentHeader
        meta={{
          title: "Vite + React Setup",
          category: "Getting Started",
          description:
            "Step-by-step guide to set up Ninna UI in a Vite + React project with Tailwind CSS v4. Best choice for single-page applications.",
        }}
      />

      <CliStarterSection template="vite-react" />

      <ComponentSection id="prerequisites" title="Prerequisites">
        <ul className="list-disc pl-6 space-y-2 text-base-content/70">
          <li>Node.js 24 LTS recommended</li>
          <li>
            Vite 8 with <Code>@vitejs/plugin-react</Code>
          </li>
          <li>Tailwind CSS v4</li>
        </ul>
      </ComponentSection>

      <ComponentSection
        id="create-project"
        title="Create Project"
        description="Skip this step if you already have a Vite + React project."
      >
        <CodeBlock
          code={`npm create vite@latest my-app -- --template react-ts
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
        description="Vite uses the @tailwindcss/vite plugin for zero-config Tailwind integration."
      >
        <PackageManagerTabs
          packages={[]}
          devPackages={["tailwindcss", "@tailwindcss/vite"]}
        />
      </ComponentSection>

      <ComponentSection
        id="configure-vite"
        title="Configure Vite"
        description="Add the Tailwind CSS plugin to your Vite config."
      >
        <CodeBlock
          code={`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`}
          language="typescript"
        />
      </ComponentSection>

      <ComponentSection
        id="css-setup"
        title="CSS Setup"
        description="Replace the contents of your global CSS file."
      >
        <Text className="text-base-content/70 mb-3">
          In <Code>src/index.css</Code>:
        </Text>
        <CodeBlock
          code={`@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));`}
          language="css"
          copyButtonAlwaysVisible
        />
        <Text className="text-base-content/70 mt-4 mb-3">
          Then add <Code>data-theme</Code> to your <Code>index.html</Code>:
        </Text>
        <CodeBlock
          code={`<html lang="en" data-theme="default">`}
          language="html"
          copyButtonAlwaysVisible
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          The theme preset automatically includes all utility classes used by
          Ninna UI components - no <Code>@source</Code> directive needed. Import
          this stylesheet from <Code>src/main.tsx</Code>. Vite's React starter
          renders on the client with <Code>createRoot</Code>; it does not
          hydrate a server-rendered document. Use HTML's <Code>class</Code>
          attribute when explicitly selecting light or dark mode in index.html.
        </Text>
      </ComponentSection>

      <ComponentSection
        id="first-component"
        title="Your First Component"
        description="Verify the setup by rendering a Ninna UI component."
      >
        <CodeBlock
          code={`import { Button, Heading, Text } from "@ninna-ui/primitives";

function App() {
  return (
    <div className="p-8">
      <Heading as="h1" size="3xl">Hello Ninna UI</Heading>
      <Text className="text-base-content/70 mt-2">It works!</Text>
      <Button color="primary" className="mt-4">Click me</Button>
    </div>
  );
}

export default App;`}
          language="tsx"
          copyButtonAlwaysVisible
        />
      </ComponentSection>

      <ComponentSection
        id="theme-presets"
        title="Theme Presets"
        description="Switch themes by changing the CSS import and the data-theme attribute."
      >
        <CodeBlock
          code={`/* 1. Change the CSS import */
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

/* 2. Update data-theme in index.html */
/* <html lang="en" data-theme="ocean"> */`}
          language="css"
        />
        <Text size="sm" className="text-base-content/70 mt-3">
          Dark mode works automatically via <Code>prefers-color-scheme</Code> or
          by adding the <Code>.dark</Code> class to <Code>{`<html>`}</Code>. The{" "}
          <Code>data-theme</Code> attribute must match the imported preset.
          Leave both <Code>light</Code> and <Code>dark</Code> classes unset to
          follow the system preference.
        </Text>
      </ComponentSection>
    </div>
  );
}
