import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '@ninna-ui/forms';

const meta: Meta<typeof FileUpload> = {
  title: 'Forms/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the file upload component',
      table: { defaultValue: { summary: 'md' } },
    },
    accept: {
      control: 'text',
      description: 'Accepted file types',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Required state',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid state',
      table: { defaultValue: { summary: 'false' } },
    },
    showFileList: {
      control: 'boolean',
      description: 'Show file list',
      table: { defaultValue: { summary: 'true' } },
    },
    allowDrag: {
      control: 'boolean',
      description: 'Allow drag and drop',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: 'Upload files',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const ImageOnly: Story = {
  args: {
    label: 'Upload images',
    accept: 'image/*',
    helperText: 'Only image files are accepted',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const MultipleFiles: Story = {
  args: {
    label: 'Upload documents',
    multiple: true,
    accept: '.pdf,.doc,.docx',
    maxFiles: 5,
    helperText: 'Upload up to 5 documents',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const WithSizeLimit: Story = {
  args: {
    label: 'Upload file',
    maxFileSize: 5 * 1024 * 1024,
    helperText: 'Maximum file size: 5MB',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <FileUpload size="xs" label="Extra Small" />
      <FileUpload size="sm" label="Small" />
      <FileUpload size="md" label="Medium" />
      <FileUpload size="lg" label="Large" />
      <FileUpload size="xl" label="Extra Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled upload',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const Invalid: Story = {
  args: {
    label: 'Invalid upload',
    invalid: true,
    required: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[500px]">
      <div>
        <h4 className="text-lg font-semibold mb-3">Default</h4>
        <FileUpload label="Upload files" />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">With Accept Filter</h4>
        <FileUpload label="Images only" accept="image/*" />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Multiple Files</h4>
        <FileUpload label="Multiple files" multiple maxFiles={3} />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Disabled</h4>
        <FileUpload label="Disabled" disabled />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Invalid State</h4>
        <FileUpload label="Required field" invalid required />
      </div>
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <div className="w-96">
      <FileUpload 
        label="Upload with validation"
        maxFileSize={2 * 1024 * 1024}
        maxFiles={3}
        accept="image/*,.pdf"
        helperText="Max 3 files, 2MB each. Images and PDFs only."
        onFilesRejected={(rejections) => {
          rejections.forEach(r => console.log(`Rejected: ${r.file.name} - ${r.message}`));
        }}
      />
    </div>
  ),
};

export const ShowFileListDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <div>
        <p className="text-sm text-base-content/70 mb-2">showFileList=true (default)</p>
        <FileUpload label="With file list" showFileList />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">showFileList=false</p>
        <FileUpload label="Without file list" showFileList={false} />
      </div>
    </div>
  ),
};

export const AllowDragDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <div>
        <p className="text-sm text-base-content/70 mb-2">allowDrag=true (default)</p>
        <FileUpload label="Drag enabled" allowDrag />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">allowDrag=false</p>
        <FileUpload label="Click only" allowDrag={false} />
      </div>
    </div>
  ),
};
