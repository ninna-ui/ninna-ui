import { CodeBlock } from "@ninna-ui/code-block";

const code = `import { Button } from "@ninna-ui/primitives";

export default function App() {
  return <Button color="primary">Click me</Button>;
}`;

export default function Basic() {
  return <CodeBlock code={code} />;
}
