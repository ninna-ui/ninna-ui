import { CodeBlock } from "@ninna-ui/code-block";

const code = `pnpm add @ninna-ui/primitives @ninna-ui/code-block`;

export default function CopyAlways() {
  return <CodeBlock code={code} copyButtonAlwaysVisible />;
}
