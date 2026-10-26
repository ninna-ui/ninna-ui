import { CodeBlock } from "@ninna-ui/code-block";
import { Code, Text } from "@ninna-ui/primitives";
import { Link } from "react-router";
import { ComponentSection } from "./ComponentSection";

type Template = "vite-react" | "nextjs" | "react-router" | "astro";

export function CliStarterSection({ template }: { template: Template }) {
  return (
    <ComponentSection
      id="cli-starter"
      title="Start with the CLI"
      description="Create a configured Ninna UI project, or follow the manual setup below for an existing application."
    >
      <CodeBlock
        code={`npx @ninna-ui/cli@latest init my-app --template ${template} --preset ocean\ncd my-app\nnpm run dev`}
        language="bash"
        copyButtonAlwaysVisible
      />
      <Text size="sm" className="text-base-content/70 mt-3">
        Use Node.js 24 LTS. Omit <Code>--template</Code> for the framework
        prompt, or change <Code>--preset</Code> to select another theme. This
        command installs the published CLI; see the{" "}
        <Link
          to="/getting-started/installation#cli"
          className="text-primary underline underline-offset-4"
        >
          installation guide
        </Link>{" "}
        for release status, flags, and package-manager instructions.
      </Text>
    </ComponentSection>
  );
}
