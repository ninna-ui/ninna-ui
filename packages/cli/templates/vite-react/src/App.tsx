import { useState } from "react";
import { Button, Heading, Text, Badge } from "@ninna-ui/primitives";
import { Alert } from "@ninna-ui/feedback";
import { VStack, HStack } from "@ninna-ui/layout";
import { Input, Field } from "@ninna-ui/forms";
import { Card } from "@ninna-ui/data-display";
import { Tabs } from "@ninna-ui/navigation";
import { CodeBlock } from "@ninna-ui/code-block";

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <VStack gap="8" className="max-w-lg w-full">
        <VStack gap="2" align="center">
          <Badge variant="soft" color="primary" size="sm">
            Ninna UI + Vite
          </Badge>
          <Heading as="h1" size="3xl" weight="bold" className="text-center">
            Welcome to Ninna UI
          </Heading>
          <Text className="text-base-content/70 text-center">
            A modern React component library with Tailwind CSS v4.
          </Text>
        </VStack>

        <VStack
          gap="4"
          className="w-full p-6 bg-base-100 border border-base-200 rounded-xl"
        >
          <Field label="Your name">
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
          </Field>

          <HStack gap="3">
            <Button
              color="primary"
              onClick={() => setSubmitted(true)}
              disabled={!name}
            >
              Say Hello
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setName("");
                setSubmitted(false);
              }}
            >
              Reset
            </Button>
          </HStack>
        </VStack>

        {submitted && name && (
          <Alert
            variant="soft"
            color="success"
            title={`Hello, ${name}!`}
            description="Your Ninna UI setup is working perfectly."
            dismissible
            onDismiss={() => setSubmitted(false)}
          />
        )}

        <Card className="w-full p-4 bg-base-100 border border-base-200">
          <Tabs defaultValue="colors">
            <Tabs.List>
              <Tabs.Trigger value="colors">Colors</Tabs.Trigger>
              <Tabs.Trigger value="code">Code</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="colors">
              <HStack gap="2" justify="center" className="flex-wrap">
                {["primary", "secondary", "success", "danger", "warning", "info"].map(
                  (color) => (
                    <Button
                      key={color}
                      variant="soft"
                      color={color as any}
                      size="sm"
                    >
                      {color}
                    </Button>
                  )
                )}
              </HStack>
            </Tabs.Content>
            <Tabs.Content value="code">
              <CodeBlock
                code={`import { Button } from "@ninna-ui/primitives";

function Example() {
  return <Button color="primary">Click me</Button>;
}`}
                language="tsx"
              />
            </Tabs.Content>
          </Tabs>
        </Card>
      </VStack>
    </div>
  );
}

export default App;
