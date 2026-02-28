import { Code, Text, Heading } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Documentation Example */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Documentation</Heading>
        <Text className="mb-2">
          Use the <Code color="primary">useState</Code> hook to manage local state in your components.
        </Text>
        <Text>
          Import it from React: <Code>{"import { useState } from 'react'"}</Code>
        </Text>
      </div>

      {/* CLI Commands */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">CLI Commands</Heading>
        <div className="space-y-2">
          <Text>Install dependencies: <Code>npm install</Code></Text>
          <Text>Start development server: <Code>npm run dev</Code></Text>
          <Text>Build for production: <Code>npm run build</Code></Text>
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">File Paths</Heading>
        <Text className="mb-2">
          Configuration file is located at <Code color="info">./config/settings.json</Code>
        </Text>
        <Text>
          Components are in <Code color="info">./src/components/</Code>
        </Text>
      </div>

      {/* Error Messages */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Error Messages</Heading>
        <Text>
          Error: <Code color="danger">TypeError: Cannot read property &apos;map&apos; of undefined</Code>
        </Text>
      </div>

      {/* Success Messages */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Success Messages</Heading>
        <Text>
          Build completed: <Code color="success">✓ 42 modules transformed</Code>
        </Text>
      </div>
    </div>
  );
}
