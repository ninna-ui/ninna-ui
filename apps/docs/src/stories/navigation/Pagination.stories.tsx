import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@ninna-ui/navigation';

const meta: Meta = {
  title: 'Navigation/Pagination',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the pagination',
      table: { defaultValue: { summary: 'md' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Pagination>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link isActive>2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>10</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
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
            <Pagination size={size}>
              <Pagination.Content>
                <Pagination.Item>
                  <Pagination.Previous />
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link>1</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link isActive>2</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Link>3</Pagination.Link>
                </Pagination.Item>
                <Pagination.Item>
                  <Pagination.Next />
                </Pagination.Item>
              </Pagination.Content>
            </Pagination>
          </div>
        ))}
      </div>
    );
  },
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>4</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link isActive>5</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>6</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>20</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  ),
};

export const Simple: Story = {
  render: () => (
    <Pagination>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  ),
};

export const ManyPages: Story = {
  render: () => (
    <Pagination>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous />
        </Pagination.Item>
        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <Pagination.Item key={page}>
            <Pagination.Link isActive={page === 4}>{page}</Pagination.Link>
          </Pagination.Item>
        ))}
        <Pagination.Item>
          <Pagination.Next />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  ),
};
