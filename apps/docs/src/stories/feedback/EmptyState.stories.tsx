import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function InboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
    </svg>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

const meta: Meta<typeof EmptyState> = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "EmptyState component is used to indicate when a resource is empty or unavailable. It provides a clear message and optional actions to guide users.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Title text to display",
    },
    description: {
      control: "text",
      description: "Description text below the title",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the empty state",
      table: { defaultValue: { summary: "md" } },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No results found",
    description: "Try adjusting your search or filters to find what you're looking for.",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <SearchIcon />,
    title: "No search results",
    description: "We couldn't find anything matching your search. Try different keywords.",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    icon: <FolderIcon />,
    title: "No files",
    description: "Upload files to get started",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    icon: <FolderIcon />,
    title: "No files",
    description: "Upload files to get started",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    icon: <FolderIcon />,
    title: "No files",
    description: "Upload files to get started",
  },
};

export const WithAction: Story = {
  render: () => (
    <EmptyState
      icon={<PlusIcon />}
      title="No projects yet"
      description="Create your first project to get started."
      action={
        <Button color="primary" leftIcon={<PlusIcon className="w-4 h-4" />}>
          Create Project
        </Button>
      }
    />
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <EmptyState
      icon={<ShoppingCartIcon />}
      title="Your cart is empty"
      description="Explore our products and add items to your cart."
      action={
        <div className="flex gap-2">
          <Button variant="outline">Continue Shopping</Button>
          <Button color="primary">View Deals</Button>
        </div>
      }
    />
  ),
};

export const InboxEmpty: Story = {
  render: () => (
    <EmptyState
      icon={<InboxIcon />}
      title="Your inbox is empty"
      description="You don't have any messages yet. Start a conversation!"
    />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="p-4 border border-base-300 rounded-lg">
        <p className="text-sm text-base-content/70 mb-4">Small</p>
        <EmptyState
          size="sm"
          icon={<FolderIcon />}
          title="No files"
          description="Upload files to get started"
        />
      </div>
      
      <div className="p-4 border border-base-300 rounded-lg">
        <p className="text-sm text-base-content/70 mb-4">Medium (default)</p>
        <EmptyState
          size="md"
          icon={<FolderIcon />}
          title="No files"
          description="Upload files to get started"
        />
      </div>
      
      <div className="p-4 border border-base-300 rounded-lg">
        <p className="text-sm text-base-content/70 mb-4">Large</p>
        <EmptyState
          size="lg"
          icon={<FolderIcon />}
          title="No files"
          description="Upload files to get started"
        />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic</h3>
        <EmptyState
          title="No results found"
          description="Try adjusting your search or filters."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Icon</h3>
        <EmptyState
          icon={<SearchIcon />}
          title="No search results"
          description="We couldn't find anything matching your search."
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Action</h3>
        <EmptyState
          icon={<PlusIcon />}
          title="No projects yet"
          description="Create your first project to get started."
          action={<Button color="primary">Create Project</Button>}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Multiple Actions</h3>
        <EmptyState
          icon={<ShoppingCartIcon />}
          title="Your cart is empty"
          description="Explore our products and add items to your cart."
          action={
            <div className="flex gap-2">
              <Button variant="outline">Continue Shopping</Button>
              <Button color="primary">View Deals</Button>
            </div>
          }
        />
      </div>
    </div>
  ),
};
