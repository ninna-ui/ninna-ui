import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tree } from '@ninna-ui/data-display';
import type { TreeNode } from '@ninna-ui/data-display';

const fileTree: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          { id: 'button', label: 'Button.tsx' },
          { id: 'input', label: 'Input.tsx' },
          { id: 'modal', label: 'Modal.tsx' },
        ],
      },
      {
        id: 'hooks',
        label: 'hooks',
        children: [
          { id: 'use-state', label: 'useState.ts' },
          { id: 'use-effect', label: 'useEffect.ts' },
        ],
      },
      { id: 'app', label: 'App.tsx' },
      { id: 'index', label: 'index.ts' },
    ],
  },
  {
    id: 'public',
    label: 'public',
    children: [
      { id: 'favicon', label: 'favicon.ico' },
      { id: 'index-html', label: 'index.html' },
    ],
  },
  { id: 'package', label: 'package.json' },
  { id: 'tsconfig', label: 'tsconfig.json' },
];

const meta: Meta = {
  title: 'Data Display/Tree',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showLines: {
      control: 'boolean',
      description: 'Show connecting lines between nodes',
      table: { defaultValue: { summary: 'true' } },
    },
    showIcons: {
      control: 'boolean',
      description: 'Show folder/file icons',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Tree data={fileTree} />
    </div>
  ),
};

export const WithSelection: Story = {
  render: function WithSelectionTree() {
    const [selected, setSelected] = useState('button');
    return (
      <div className="w-[300px]">
        <Tree data={fileTree} selectedId={selected} onSelect={setSelected} />
        <p className="mt-4 text-sm text-base-content/70">Selected: {selected}</p>
      </div>
    );
  },
};

export const WithoutLines: Story = {
  render: () => (
    <div className="w-[300px]">
      <Tree data={fileTree} showLines={false} />
    </div>
  ),
};

export const CollapsedByDefault: Story = {
  render: () => (
    <div className="w-[300px]">
      <Tree data={fileTree} defaultExpandedIds={[]} />
    </div>
  ),
};

export const DisabledNodes: Story = {
  render: () => {
    const dataWithDisabled: TreeNode[] = [
      {
        id: 'root',
        label: 'Project',
        children: [
          { id: 'readme', label: 'README.md' },
          { id: 'locked', label: 'config.lock', disabled: true },
          {
            id: 'src',
            label: 'src',
            children: [
              { id: 'main', label: 'main.ts' },
              { id: 'deprecated', label: 'old-utils.ts', disabled: true },
            ],
          },
        ],
      },
    ];
    return (
      <div className="w-[300px]">
        <Tree data={dataWithDisabled} />
      </div>
    );
  },
};

export const DeepNesting: Story = {
  render: () => {
    const deepData: TreeNode[] = [
      {
        id: '1',
        label: 'Level 1',
        children: [
          {
            id: '1-1',
            label: 'Level 2',
            children: [
              {
                id: '1-1-1',
                label: 'Level 3',
                children: [
                  {
                    id: '1-1-1-1',
                    label: 'Level 4',
                    children: [
                      { id: '1-1-1-1-1', label: 'Level 5 - Leaf' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
    return (
      <div className="w-[300px]">
        <Tree data={deepData} />
      </div>
    );
  },
};
