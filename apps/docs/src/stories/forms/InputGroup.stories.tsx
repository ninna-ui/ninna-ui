import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup, InputAddon, Input } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

const meta: Meta<typeof InputGroup> = {
  title: 'Forms/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the input group',
      table: { defaultValue: { summary: 'md' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const WithStartIcon: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup
        startElement={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      >
        <Input placeholder="Search..." />
      </InputGroup>
    </div>
  ),
};

export const WithEndIcon: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup
        endElement={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        }
      >
        <Input type="password" placeholder="Password" />
      </InputGroup>
    </div>
  ),
};

export const WithBothElements: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup
        startElement={<span className="text-base-content/70">$</span>}
        endElement={<span className="text-base-content/70">USD</span>}
      >
        <Input type="number" placeholder="0.00" />
      </InputGroup>
    </div>
  ),
};

export const StartAddon: Story = {
  render: () => (
    <div className="w-96 flex">
      <InputAddon placement="start">https://</InputAddon>
      <Input placeholder="example.com" className="rounded-l-none" />
    </div>
  ),
};

export const EndAddon: Story = {
  render: () => (
    <div className="w-80 flex">
      <Input placeholder="username" className="rounded-r-none" />
      <InputAddon placement="end">@gmail.com</InputAddon>
    </div>
  ),
};

export const BothAddons: Story = {
  render: () => (
    <div className="w-96 flex">
      <InputAddon placement="start">https://</InputAddon>
      <Input placeholder="mysite" className="rounded-none" />
      <InputAddon placement="end">.com</InputAddon>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <InputGroup
        size="xs"
        startElement={
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      >
        <Input placeholder="Extra small" />
      </InputGroup>
      <InputGroup
        size="sm"
        startElement={
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      >
        <Input placeholder="Small" />
      </InputGroup>
      <InputGroup
        size="md"
        startElement={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      >
        <Input placeholder="Medium" />
      </InputGroup>
      <InputGroup
        size="lg"
        startElement={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      >
        <Input placeholder="Large" />
      </InputGroup>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="flex w-96">
      <Input placeholder="Enter email" className="rounded-r-none" />
      <Button className="rounded-l-none">Subscribe</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <div>
        <h4 className="text-lg font-semibold mb-3">With Icons</h4>
        <div className="space-y-3">
          <InputGroup
            startElement={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          >
            <Input placeholder="Email address" />
          </InputGroup>
          <InputGroup
            startElement={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          >
            <Input placeholder="Username" />
          </InputGroup>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">With Addons</h4>
        <div className="space-y-3">
          <div className="flex">
            <InputAddon placement="start">https://</InputAddon>
            <Input placeholder="website.com" className="rounded-l-none" />
          </div>
          <div className="flex">
            <Input placeholder="amount" className="rounded-r-none" />
            <InputAddon placement="end">.00</InputAddon>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">With Text Elements</h4>
        <InputGroup
          startElement={<span>$</span>}
          endElement={<span>per month</span>}
        >
          <Input type="number" placeholder="99" />
        </InputGroup>
      </div>
    </div>
  ),
};
