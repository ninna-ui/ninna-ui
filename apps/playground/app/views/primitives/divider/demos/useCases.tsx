import { Divider, Button  } from "@ninna-ui/primitives";


export default function UseCases() {
  return (
    <div className="space-y-8 w-full">
      {/* Content Sections */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">Content Sections</h4>
        <div className="border border-base-300 rounded-lg p-6 bg-base-100 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Section 1</h3>
            <p className="text-sm text-base-content/70">
              This is the first section of content with some descriptive text.
            </p>
          </div>
          <Divider variant="horizontal" weight="soft" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Section 2</h3>
            <p className="text-sm text-base-content/70">
              This is the second section separated by a horizontal divider.
            </p>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">Login Form</h4>
        <div className="border border-base-300 rounded-lg p-6 bg-base-100 max-w-sm">
          <Button variant="solid" color="primary" fullWidth className="mb-4">
            Sign in with Email
          </Button>
          <Divider variant="with-text" text="OR" color="primary" weight="soft" />
          <div className="space-y-2 mt-4">
            <Button variant="outline" color="secondary" fullWidth>
              Sign in with Google
            </Button>
            <Button variant="outline" color="secondary" fullWidth>
              Sign in with GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar Layout */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">Sidebar Layout</h4>
        <div className="border border-base-300 rounded-lg p-6 bg-base-100 flex gap-6 h-40">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Main Content</h3>
            <p className="text-sm text-base-content/70">
              This is the main content area.
            </p>
          </div>
          <Divider variant="vertical" weight="soft" className="h-full" />
          <div className="w-48">
            <h3 className="text-lg font-semibold mb-2">Sidebar</h3>
            <p className="text-sm text-base-content/70">
              This is the sidebar content.
            </p>
          </div>
        </div>
      </div>

      {/* List Items */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">List Items</h4>
        <div className="border border-base-300 rounded-lg bg-base-100 divide-y divide-base-300">
          <div className="p-4">
            <h3 className="font-medium">Item 1</h3>
            <p className="text-sm text-base-content/70">Description for item 1</p>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Item 2</h3>
            <p className="text-sm text-base-content/70">Description for item 2</p>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Item 3</h3>
            <p className="text-sm text-base-content/70">Description for item 3</p>
          </div>
        </div>
      </div>

      {/* Section Headers */}
      <div>
        <h4 className="text-sm font-semibold mb-3 text-base-content/70">Section Headers</h4>
        <div className="space-y-6">
          <div>
            <Divider variant="with-text" text="Personal Information" color="primary" weight="solid" />
            <p className="text-sm text-base-content/70 mt-3">
              Content related to personal information goes here.
            </p>
          </div>
          <div>
            <Divider variant="with-text" text="Account Settings" color="secondary" weight="solid" />
            <p className="text-sm text-base-content/70 mt-3">
              Content related to account settings goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
