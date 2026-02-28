import { Link, Text, Heading } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Navigation Links */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Navigation</Heading>
        <nav className="flex gap-6">
          <Link href="#" underline="none">Home</Link>
          <Link href="#" underline="none">Products</Link>
          <Link href="#" underline="none">About</Link>
          <Link href="#" underline="none">Contact</Link>
        </nav>
      </div>

      {/* Footer Links */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Footer Links</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Text weight="semibold" size="sm">Company</Text>
            <div className="flex flex-col gap-1">
              <Link href="#" color="neutral" underline="hover">About</Link>
              <Link href="#" color="neutral" underline="hover">Careers</Link>
              <Link href="#" color="neutral" underline="hover">Press</Link>
            </div>
          </div>
          <div className="space-y-2">
            <Text weight="semibold" size="sm">Resources</Text>
            <div className="flex flex-col gap-1">
              <Link href="#" color="neutral" underline="hover">Documentation</Link>
              <Link href="#" color="neutral" underline="hover">API Reference</Link>
              <Link href="#" color="neutral" underline="hover">Guides</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Social Links</Heading>
        <div className="flex gap-4">
          <Link href="https://twitter.com" external color="neutral">Twitter</Link>
          <Link href="https://github.com" external color="neutral">GitHub</Link>
          <Link href="https://linkedin.com" external color="neutral">LinkedIn</Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Breadcrumb</Heading>
        <nav className="flex items-center gap-2 text-sm">
          <Link href="#" color="neutral" underline="hover">Home</Link>
          <span className="text-base-content/70">/</span>
          <Link href="#" color="neutral" underline="hover">Products</Link>
          <span className="text-base-content/70">/</span>
          <Text color="neutral">Current Page</Text>
        </nav>
      </div>

      {/* Call to Action */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Call to Action</Heading>
        <Text className="mb-2">
          Ready to get started? <Link href="#" color="primary" underline="always">Sign up now</Link> or <Link href="#" color="secondary" underline="hover">learn more</Link>.
        </Text>
      </div>
    </div>
  );
}
