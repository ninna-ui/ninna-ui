import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '@ninna-ui/code-block';

const meta: Meta<typeof CodeBlock> = {
  title: 'Code Block/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
      description: 'The code string to display',
    },
    language: {
      control: 'select',
      options: ['tsx', 'jsx', 'typescript', 'javascript', 'css', 'html', 'json', 'bash', 'text'],
      description: 'Language for syntax highlighting',
      table: { defaultValue: { summary: 'tsx' } },
    },
    colorScheme: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description: 'Force a specific syntax color scheme independent of the page theme',
      table: { defaultValue: { summary: 'auto' } },
    },
    showLineNumbers: {
      control: 'boolean',
      description: 'Show line numbers',
      table: { defaultValue: { summary: 'false' } },
    },
    showCopyButton: {
      control: 'boolean',
      description: 'Show copy button on hover',
      table: { defaultValue: { summary: 'true' } },
    },
    copyButtonAlwaysVisible: {
      control: 'boolean',
      description: 'Always show the copy button instead of only on hover',
      table: { defaultValue: { summary: 'false' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const tsxCode = `import { Button } from "@ninna-ui/primitives";

export default function App() {
  return (
    <Button color="primary" variant="solid">
      Click me
    </Button>
  );
}`;

const multiLineCode = `import { useState } from "react";
import { Button, Heading, Text } from "@ninna-ui/primitives";
import { Alert } from "@ninna-ui/feedback";
import { VStack } from "@ninna-ui/layout";

export default function Counter() {
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

const cssCode = `/* Custom theme */
[data-theme="my-brand"] {
  color-scheme: light;

  --color-primary: oklch(0.55 0.20 250);
  --color-primary-content: oklch(0.97 0.01 250);
  --color-base-100: oklch(1.0 0 0);
  --color-base-content: oklch(0.21 0.021 260);
}`;

const shortCode = `pnpm add @ninna-ui/primitives @ninna-ui/code`;

export const Default: Story = {
  args: {
    code: tsxCode,
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: multiLineCode,
    showLineNumbers: true,
  },
};

export const WithoutCopyButton: Story = {
  args: {
    code: shortCode,
    showCopyButton: false,
  },
};

export const CSSHighlighting: Story = {
  args: {
    code: cssCode,
    showLineNumbers: true,
  },
};

export const CustomClassName: Story = {
  args: {
    code: tsxCode,
    className: 'rounded-2xl shadow-lg',
  },
};

export const AllFeatures: Story = {
  args: {
    code: multiLineCode,
    showLineNumbers: true,
    showCopyButton: true,
  },
};

export const ForcedLightScheme: Story = {
  name: 'Color Scheme: Light',
  args: {
    code: tsxCode,
    colorScheme: 'light',
  },
};

export const ForcedDarkScheme: Story = {
  name: 'Color Scheme: Dark',
  args: {
    code: tsxCode,
    colorScheme: 'dark',
  },
};
