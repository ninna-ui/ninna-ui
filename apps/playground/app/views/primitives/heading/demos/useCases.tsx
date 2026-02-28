import { Heading, Text  } from "@ninna-ui/primitives";


export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="p-6 border border-base-300 rounded-lg">
        <Heading as="h1" className="mb-2">Welcome to Ninna UI</Heading>
        <Text muted size="lg">
          A modern, accessible component library for building beautiful interfaces.
        </Text>
      </div>

      {/* Section with Subheadings */}
      <div className="p-6 border border-base-300 rounded-lg space-y-4">
        <Heading as="h2">Getting Started</Heading>
        <Text muted>Learn how to install and configure Ninna UI in your project.</Text>
        
        <Heading as="h3" size="xl" className="mt-6">Installation</Heading>
        <Text muted>Install the package using npm or yarn.</Text>
        
        <Heading as="h3" size="xl" className="mt-6">Configuration</Heading>
        <Text muted>Configure Tailwind CSS to work with Ninna UI.</Text>
      </div>

      {/* Card Header */}
      <div className="p-6 border border-base-300 rounded-lg">
        <Heading as="h3" size="lg" className="mb-1">Card Title</Heading>
        <Text size="sm" muted>Card subtitle or description</Text>
      </div>

      {/* Feature Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border border-base-300 rounded-lg text-center">
          <Heading as="h4" color="primary" className="mb-2">Fast</Heading>
          <Text size="sm" muted>Optimized for performance</Text>
        </div>
        <div className="p-4 border border-base-300 rounded-lg text-center">
          <Heading as="h4" color="success" className="mb-2">Accessible</Heading>
          <Text size="sm" muted>WCAG 2.1 compliant</Text>
        </div>
        <div className="p-4 border border-base-300 rounded-lg text-center">
          <Heading as="h4" color="secondary" className="mb-2">Flexible</Heading>
          <Text size="sm" muted>Highly customizable</Text>
        </div>
      </div>

      {/* Hero Section */}
      <div className="p-8 bg-linear-to-r from-indigo-500 to-purple-600 rounded-lg text-center">
        <Heading as="h1" size="5xl" weight="bold" className="text-white mb-4">
          Build Faster
        </Heading>
        <Text size="xl" className="text-white/80">
          Ship beautiful products with confidence
        </Text>
      </div>

      {/* Error/Status Headings */}
      <div className="space-y-2">
        <Heading as="h4" color="success">✓ Operation Successful</Heading>
        <Heading as="h4" color="danger">✗ Error Occurred</Heading>
        <Heading as="h4" color="warning">⚠ Warning: Action Required</Heading>
        <Heading as="h4" color="info">ℹ Information Notice</Heading>
      </div>
    </div>
  );
}
