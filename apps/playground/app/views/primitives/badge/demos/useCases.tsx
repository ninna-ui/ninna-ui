import { Badge } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-6">
      {/* Status Indicators */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">Status Indicators</h4>
        <div className="flex flex-wrap gap-2">
          <Badge color="success">Active</Badge>
          <Badge color="warning">Pending</Badge>
          <Badge color="danger">Inactive</Badge>
          <Badge color="info">Draft</Badge>
          <Badge color="neutral">Archived</Badge>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">Categories</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="soft" color="primary">Technology</Badge>
          <Badge variant="soft" color="secondary">Design</Badge>
          <Badge variant="soft" color="secondary">Marketing</Badge>
          <Badge variant="soft" color="info">Business</Badge>
        </div>
      </div>

      {/* Notification Counts */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">Notification Counts</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="solid" color="danger" radius="full">3</Badge>
          <Badge variant="solid" color="primary" radius="full">12</Badge>
          <Badge variant="solid" color="success" radius="full">99+</Badge>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">Tags</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" color="neutral" radius="full">React</Badge>
          <Badge variant="outline" color="neutral" radius="full">TypeScript</Badge>
          <Badge variant="outline" color="neutral" radius="full">Tailwind</Badge>
          <Badge variant="outline" color="neutral" radius="full">Remix</Badge>
        </div>
      </div>
    </div>
  );
}
