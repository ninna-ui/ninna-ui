import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '@ninna-ui/navigation';

const meta: Meta = {
  title: 'Navigation/Breadcrumbs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
      description: 'Custom separator between items',
      table: { defaultValue: { summary: '/' } },
    },
    maxItems: {
      control: 'number',
      description: 'Maximum number of visible items before collapsing',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the breadcrumbs',
      table: { defaultValue: { summary: 'md' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Products</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#" current>Shoes</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const Sizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return (
      <div className="flex flex-col gap-6">
        {sizes.map((size) => (
          <div key={size}>
            <h4 className="text-sm font-semibold mb-2 text-base-content/70 uppercase tracking-wide">Size: {size}</h4>
            <Breadcrumbs size={size}>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#">Library</Breadcrumbs.Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#" current>Data</Breadcrumbs.Link>
              </Breadcrumbs.Item>
            </Breadcrumbs>
          </div>
        ))}
      </div>
    );
  },
};

export const CustomSeparator: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Breadcrumbs separator="›">
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Category</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#" current>Page</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs separator="→">
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Category</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#" current>Page</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <Breadcrumbs separator="|">
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#">Category</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#" current>Page</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  ),
};

export const MaxItems: Story = {
  render: () => (
    <Breadcrumbs maxItems={3}>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Category</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Subcategory</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Section</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#" current>Current Page</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const LongPath: Story = {
  render: () => (
    <Breadcrumbs>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Documentation</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Navigation</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#" current>Breadcrumbs</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};
