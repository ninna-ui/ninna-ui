import { Text } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Article Preview */}
      <div className="p-6 border border-base-300 rounded-lg">
        <Text size="xs" uppercase weight="semibold" color="primary" className="mb-2">
          Technology
        </Text>
        <Text size="xl" weight="bold" className="mb-2">
          The Future of Web Development
        </Text>
        <Text muted lineClamp={2} className="mb-4">
          Exploring the latest trends and technologies that are shaping the future of web development.
          From AI-powered tools to new frameworks, discover what&apos;s next in the world of web development.
        </Text>
        <Text size="sm" muted>
          5 min read • Jan 25, 2026
        </Text>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4 p-4 border border-base-300 rounded-lg">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Text weight="bold" color="primary">JD</Text>
        </div>
        <div>
          <Text weight="semibold">John Doe</Text>
          <Text size="sm" muted>Software Engineer at Acme Inc.</Text>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="p-6 border border-base-300 rounded-lg text-center">
        <Text size="sm" uppercase weight="semibold" muted className="mb-2">
          Pro Plan
        </Text>
        <div className="flex items-baseline justify-center gap-1 mb-4">
          <Text size="4xl" weight="bold">$29</Text>
          <Text muted>/month</Text>
        </div>
        <Text muted className="mb-4">
          Perfect for growing teams and businesses
        </Text>
      </div>

      {/* Status Messages */}
      <div className="space-y-2">
        <Text color="success" weight="medium">✓ Payment successful</Text>
        <Text color="danger" weight="medium">✗ Error: Invalid credentials</Text>
        <Text color="warning" weight="medium">⚠ Warning: Low disk space</Text>
        <Text color="info" weight="medium">ℹ Info: New update available</Text>
      </div>

      {/* Code Reference */}
      <div className="p-4 bg-base-200 rounded-lg">
        <Text as="span" muted>Install the package using </Text>
        <Text as="span" weight="semibold" className="font-mono bg-base-300 px-1 rounded">
          npm install @ninna-ui/primitives
        </Text>
      </div>

      {/* Legal/Fine Print */}
      <div>
        <Text size="xs" muted>
          By using this service, you agree to our Terms of Service and Privacy Policy.
          All rights reserved © 2026 Ninna UI.
        </Text>
      </div>
    </div>
  );
}
