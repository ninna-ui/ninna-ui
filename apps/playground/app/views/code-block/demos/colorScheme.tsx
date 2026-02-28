import { CodeBlock } from "@ninna-ui/code-block";

const code = `import { useState } from "react";
import { Button } from "@ninna-ui/primitives";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </Button>
  );
}`;

export default function ColorSchemeDemo() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-base-content/50 mb-2">colorScheme="light" (always light)</p>
        <CodeBlock code={code} colorScheme="light" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-base-content/50 mb-2">colorScheme="dark" (always dark)</p>
        <CodeBlock code={code} colorScheme="dark"/>
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-base-content/50 mb-2">colorScheme="auto" (follows page theme)</p>
        <CodeBlock code={code} colorScheme="auto" />
      </div>
    </div>
  );
}
