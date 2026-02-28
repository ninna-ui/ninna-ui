import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from '@ninna-ui/primitives';

const meta: Meta<typeof List> = {
  title: 'Primitives/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['unordered', 'ordered'],
      description: 'List type',
      table: { defaultValue: { summary: 'unordered' } },
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Spacing between items',
      table: { defaultValue: { summary: 'sm' } },
    },
    marker: {
      control: 'select',
      options: ['disc', 'circle', 'square', 'decimal', 'alpha', 'roman', 'none', 'check', 'arrow'],
      description: 'Marker style',
    },
    markerColor: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Marker color',
      table: { defaultValue: { summary: 'neutral' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

export const Ordered: Story = {
  render: () => (
    <List type="ordered">
      <ListItem>First step</ListItem>
      <ListItem>Second step</ListItem>
      <ListItem>Third step</ListItem>
    </List>
  ),
};

export const CheckMarkers: Story = {
  render: () => (
    <List marker="check" markerColor="success">
      <ListItem>Completed task</ListItem>
      <ListItem>Another done</ListItem>
      <ListItem>All finished</ListItem>
    </List>
  ),
};

export const ArrowMarkers: Story = {
  render: () => (
    <List marker="arrow" markerColor="primary">
      <ListItem>Navigate here</ListItem>
      <ListItem>Then go here</ListItem>
      <ListItem>Finally here</ListItem>
    </List>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Unordered</p>
        <List type="unordered">
          <ListItem>Apple</ListItem>
          <ListItem>Banana</ListItem>
          <ListItem>Cherry</ListItem>
        </List>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Ordered</p>
        <List type="ordered">
          <ListItem>First</ListItem>
          <ListItem>Second</ListItem>
          <ListItem>Third</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const Markers: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Disc</p>
        <List marker="disc">
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
        </List>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Circle</p>
        <List marker="circle">
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
        </List>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Square</p>
        <List marker="square">
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">None</p>
        <List spacing="none">
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
        </List>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Small</p>
        <List spacing="sm">
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
        </List>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Medium</p>
        <List spacing="md">
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
        </List>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Large</p>
        <List spacing="lg">
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
          <ListItem>Item</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const FeatureList: Story = {
  render: () => (
    <List marker="check" markerColor="success" spacing="md">
      <ListItem>Unlimited projects</ListItem>
      <ListItem>Priority support</ListItem>
      <ListItem>Advanced analytics</ListItem>
      <ListItem>Custom integrations</ListItem>
      <ListItem>Team collaboration</ListItem>
    </List>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-lg font-semibold mb-3">Types</h4>
        <div className="grid grid-cols-2 gap-8">
          <List type="unordered">
            <ListItem>Unordered item</ListItem>
            <ListItem>Another item</ListItem>
          </List>
          <List type="ordered">
            <ListItem>Ordered item</ListItem>
            <ListItem>Another item</ListItem>
          </List>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Icon Markers</h4>
        <div className="grid grid-cols-2 gap-8">
          <List marker="check" markerColor="success">
            <ListItem>Check marker</ListItem>
            <ListItem>Another item</ListItem>
          </List>
          <List marker="arrow" markerColor="primary">
            <ListItem>Arrow marker</ListItem>
            <ListItem>Another item</ListItem>
          </List>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Colors</h4>
        <div className="grid grid-cols-4 gap-4">
          <List markerColor="neutral">
            <ListItem>Neutral</ListItem>
          </List>
          <List markerColor="primary">
            <ListItem>Primary</ListItem>
          </List>
          <List markerColor="secondary">
            <ListItem>Secondary</ListItem>
          </List>
          <List markerColor="accent">
            <ListItem>Accent</ListItem>
          </List>
          <List markerColor="info">
            <ListItem>Info</ListItem>
          </List>
          <List markerColor="success">
            <ListItem>Success</ListItem>
          </List>
          <List markerColor="warning">
            <ListItem>Warning</ListItem>
          </List>
          <List markerColor="danger">
            <ListItem>Danger</ListItem>
          </List>
        </div>
      </div>
    </div>
  ),
};
