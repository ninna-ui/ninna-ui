import { CodeBlock } from "@ninna-ui/code-block";

const code = `$ pnpm add @ninna-ui/primitives
$ pnpm dev
  ➜ Local: http://localhost:5173/
  ➜ press h + enter to show help`;

export default function PlainText() {
  return <CodeBlock code={code} language="bash" showLineNumbers />;
}
