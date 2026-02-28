import { CodeBlock } from "@ninna-ui/code-block";

const code = `import { useState } from "react";
import { Button, Heading, Text } from "@ninna-ui/primitives";
import { Alert } from "@ninna-ui/feedback";
import { VStack } from "@ninna-ui/layout";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <VStack gap={4} className="p-8">
      <Heading as="h1" size="3xl">Counter: {count}</Heading>
      <Text className="text-base-content/70">Click to increment.</Text>
      <Button color="primary" onClick={() => setCount(c => c + 1)}>
        Increment
      </Button>
      {count > 5 && (
        <Alert color="success" variant="soft">
          You clicked more than 5 times!
        </Alert>
      )}
    </VStack>
  );
}`;

export default function LineNumbers() {
  return <CodeBlock code={code} showLineNumbers />;
}
