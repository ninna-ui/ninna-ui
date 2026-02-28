import { Status } from "@ninna-ui/feedback";
import { Heading, Text } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Server Status */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Server Status</Heading>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Text>API Server</Text>
            <Status value="success">Online</Status>
          </div>
          <div className="flex items-center justify-between">
            <Text>Database</Text>
            <Status value="success">Connected</Status>
          </div>
          <div className="flex items-center justify-between">
            <Text>Cache Server</Text>
            <Status value="warning">Degraded</Status>
          </div>
          <div className="flex items-center justify-between">
            <Text>Email Service</Text>
            <Status value="danger">Offline</Status>
          </div>
        </div>
      </div>

      {/* Task Status */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Task Status</Heading>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Text>Design Review</Text>
            <Status value="success">Completed</Status>
          </div>
          <div className="flex items-center justify-between">
            <Text>Code Review</Text>
            <Status value="info">In Progress</Status>
          </div>
          <div className="flex items-center justify-between">
            <Text>Testing</Text>
            <Status value="warning">Pending</Status>
          </div>
          <div className="flex items-center justify-between">
            <Text>Deployment</Text>
            <Status value="danger">Blocked</Status>
          </div>
        </div>
      </div>

      {/* User Status */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">User Status</Heading>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-base-200 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content text-sm font-medium">JD</div>
            <div>
              <Text size="sm" weight="medium">John Doe</Text>
              <Status value="success" size="sm">Active</Status>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-base-200 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-content text-sm font-medium">JS</div>
            <div>
              <Text size="sm" weight="medium">Jane Smith</Text>
              <Status value="warning" size="sm">Away</Status>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-base-200 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-success-content text-sm font-medium">BW</div>
            <div>
              <Text size="sm" weight="medium">Bob Wilson</Text>
              <Status value="danger" size="sm">Offline</Status>
            </div>
          </div>
        </div>
      </div>

      {/* Build Status */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Build Status</Heading>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 bg-success/10 rounded">
            <Status value="success" />
            <Text size="sm">Build #1234 passed</Text>
          </div>
          <div className="flex items-center gap-3 p-2 bg-danger/10 rounded">
            <Status value="danger" />
            <Text size="sm">Build #1233 failed</Text>
          </div>
          <div className="flex items-center gap-3 p-2 bg-info/10 rounded">
            <Status value="info" />
            <Text size="sm">Build #1235 running</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
