import { useState } from "react";
import { Button, Heading, Text, Badge } from "@ninna-ui/primitives";
import { Alert } from "@ninna-ui/feedback";
import { VStack, HStack } from "@ninna-ui/layout";
import { Input, Field } from "@ninna-ui/forms";
import { Card } from "@ninna-ui/data-display";
import { Tabs } from "@ninna-ui/navigation";
import { Modal } from "@ninna-ui/overlays";
import { CodeBlock } from "@ninna-ui/code-block";

const COLORS = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "success",
  "danger",
  "warning",
  "info",
] as const;
const EXAMPLE = [
  'import { Button } from "@ninna-ui/primitives";',
  "",
  "export function Example() {",
  '  return <Button color="primary">Click me</Button>;',
  "}",
].join("\n");

export function Showcase() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center p-6 sm:p-10">
      <VStack gap="8" className="w-full max-w-xl">
        <VStack gap="3" align="center" className="text-center">
          <Badge variant="soft" color="primary">
            Ninna UI starter
          </Badge>
          <Heading as="h1" size="3xl" weight="semibold">
            Welcome to Ninna UI
          </Heading>
          <Text className="text-base-content/70">
            Accessible React components. CSS-first themes. Ready for your next
            idea.
          </Text>
        </VStack>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (name.trim()) setSubmitted(true);
          }}
          className="rounded-lg border border-base-200 bg-base-100 p-6"
        >
          <VStack gap="4">
            <Field label="Your name">
              <Input
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Field>
            <HStack gap="3" className="flex-wrap">
              <Button type="submit" color="primary" disabled={!name.trim()}>
                Say Hello
              </Button>
              <Button
                type="button"
                variant="outline"
                color="neutral"
                onClick={() => {
                  setName("");
                  setSubmitted(false);
                }}
              >
                Reset
              </Button>
            </HStack>
          </VStack>
        </form>

        {submitted && name.trim() && (
          <Alert
            variant="soft"
            color="success"
            title={"Hello, " + name.trim() + "!"}
            description="Your Ninna UI starter is working."
            dismissible
            onDismiss={() => setSubmitted(false)}
          />
        )}

        <Card className="w-full border border-base-200 bg-base-100 p-5">
          <Tabs defaultValue="colors">
            <Tabs.List aria-label="Component examples">
              <Tabs.Trigger value="colors">Colors</Tabs.Trigger>
              <Tabs.Trigger value="code">Code</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="colors">
              <HStack gap="2" className="flex-wrap pt-4">
                {COLORS.map((color) => (
                  <Button
                    key={color}
                    type="button"
                    variant="soft"
                    color={color}
                    size="sm"
                  >
                    {color}
                  </Button>
                ))}
              </HStack>
            </Tabs.Content>
            <Tabs.Content value="code">
              <CodeBlock
                className="starter-code mt-4"
                code={EXAMPLE}
                language="tsx"
              />
            </Tabs.Content>
          </Tabs>
        </Card>

        <HStack gap="3" className="flex-wrap items-center justify-between">
          <Modal>
            <Modal.Trigger asChild>
              <Button type="button" variant="outline" color="neutral">
                Open dialog
              </Button>
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header>Your components are ready</Modal.Header>
              <Modal.Body>
                <Text>
                  Keyboard navigation, focus management, and your selected theme
                  work together.
                </Text>
              </Modal.Body>
              <Modal.Footer>
                <Modal.Close asChild aria-label="Close dialog">
                  <Button type="button" color="primary">
                    Close dialog
                  </Button>
                </Modal.Close>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
          <a
            href="https://ninna-ui.dev/getting-started/installation"
            className="text-sm text-primary-text underline underline-offset-4"
          >
            Read the documentation
          </a>
        </HStack>
      </VStack>
    </main>
  );
}
