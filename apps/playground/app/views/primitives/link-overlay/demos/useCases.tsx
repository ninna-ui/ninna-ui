import { LinkOverlay, LinkBox, Link, Heading, Text, Badge } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-6">
      {/* Blog Post Card */}
      <LinkBox as="article" className="p-5 border border-base-300 rounded-lg hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-2 mb-2">
          <Badge color="primary" size="sm">Technology</Badge>
          <Text size="sm" muted>5 min read</Text>
        </div>
        <Heading as="h3" size="xl">
          <LinkOverlay href="#">
            Building Accessible UI Components
          </LinkOverlay>
        </Heading>
        <Text muted className="mt-2">
          Learn how to create accessible and reusable UI components using modern React patterns.
        </Text>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-base-300" />
          <Link href="#" className="relative z-10 text-sm" color="primary">
            Jane Smith
          </Link>
          <Text size="sm" muted>• Jan 15, 2024</Text>
        </div>
      </LinkBox>

      {/* Product Card */}
      <LinkBox className="overflow-hidden border border-base-300 rounded-lg hover:shadow-lg transition-shadow">
        <div className="h-32 bg-linear-to-r from-indigo-500 to-purple-600" />
        <div className="p-5">
          <Heading as="h3" size="lg">
            <LinkOverlay href="#">
              Premium Subscription
            </LinkOverlay>
          </Heading>
          <Text muted className="mt-2">
            Get access to all premium features and priority support.
          </Text>
          <div className="mt-4 flex items-center justify-between">
            <Text weight="bold" size="xl">$29/mo</Text>
            <Link href="#" className="relative z-10" color="secondary">
              Learn more
            </Link>
          </div>
        </div>
      </LinkBox>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Documentation", "API Reference", "Examples"].map((title) => (
          <LinkBox
            key={title}
            className="p-4 border border-base-300 rounded-lg hover:border-primary transition-colors"
          >
            <Heading as="h4" size="base">
              <LinkOverlay href="#">
                {title}
              </LinkOverlay>
            </Heading>
            <Text size="sm" muted className="mt-1">
              Click to explore
            </Text>
          </LinkBox>
        ))}
      </div>
    </div>
  );
}
