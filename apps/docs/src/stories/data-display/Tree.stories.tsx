import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tree } from '@ninna-ui/data-display';
import type { TreeNode } from '@ninna-ui/data-display';
import { 
  FileCode, 
  FileJson, 
  Folder, 
  Github, 
  Image as ImageIcon, 
  Settings, 
  Terminal 
} from 'lucide-react';

const fileTree: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          { id: 'button', label: 'Button.tsx', icon: <FileCode size={14} className="text-blue-400" /> },
          { id: 'input', label: 'Input.tsx', icon: <FileCode size={14} className="text-blue-400" /> },
          { id: 'modal', label: 'Modal.tsx', icon: <FileCode size={14} className="text-blue-400" /> },
        ],
      },
      {
        id: 'hooks',
        label: 'hooks',
        children: [
          { id: 'use-state', label: 'useState.ts', icon: <FileCode size={14} className="text-blue-400" /> },
          { id: 'use-effect', label: 'useEffect.ts', icon: <FileCode size={14} className="text-blue-400" /> },
        ],
      },
      { id: 'app', label: 'App.tsx', icon: <FileCode size={14} className="text-blue-400" /> },
      { id: 'index', label: 'index.ts', icon: <FileCode size={14} className="text-blue-400" /> },
    ],
  },
  {
    id: 'public',
    label: 'public',
    children: [
      { id: 'favicon', label: 'favicon.ico', icon: <ImageIcon size={14} className="text-yellow-400" /> },
      { id: 'index-html', label: 'index.html', icon: <FileCode size={14} className="text-orange-400" /> },
    ],
  },
  { id: 'package', label: 'package.json', icon: <FileJson size={14} className="text-green-400" /> },
  { id: 'tsconfig', label: 'tsconfig.json', icon: <FileJson size={14} className="text-white/40" /> },
];

const meta: Meta = {
  title: 'Data Display/Tree',
  component: Tree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the tree widget',
    },
    data: {
      control: 'object',
      description: 'Tree data structure (TreeNode[])',
    },
    selectedId: {
      control: 'text',
      description: 'Currently selected node id',
    },
    onSelect: {
      action: 'onSelect',
      description: 'Callback when a node is selected',
    },
    defaultExpandedIds: {
      control: 'object',
      description: 'Initially expanded node ids',
    },
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
    <div className="w-[350px] p-4 bg-base-100 rounded-xl border border-base-200">
      <Tree data={fileTree} />
    </div>
  ),
};
const WithSelectionExample = () => {
    const [selected, setSelected] = useState('button');
    return (
      <div className="w-[350px] flex flex-col gap-4">
        <div className="p-4 bg-base-100 rounded-xl border border-base-200">
          <Tree data={fileTree} selectedId={selected} onSelect={setSelected} />
        </div>
        <div className="px-4 py-2 bg-base-200/50 rounded-lg border border-base-200 text-xs font-mono">
          <span className="text-base-content/50">Selected ID:</span> {selected}
        </div>
      </div>
    );
  };

export const WithSelection: Story = {
  render: WithSelectionExample,
};

export const ExplorerMode: Story = {
  render: () => {
    const explorerData: TreeNode[] = [
      {
        id: 'workspace',
        label: 'Workspace',
        children: [
          {
            id: 'apps',
            label: 'apps',
            children: [
              { id: 'docs', label: 'docs', icon: <Folder size={14} /> },
              { id: 'playground', label: 'playground', icon: <Folder size={14} /> },
            ],
          },
          {
            id: 'packages',
            label: 'packages',
            children: [
              { id: 'core', label: 'core', icon: <Folder size={14} /> },
              { id: 'primitives', label: 'primitives', icon: <Folder size={14} /> },
              { id: 'utils', label: 'utils', icon: <Folder size={14} /> },
            ],
          },
          { id: 'gitignore', label: '.gitignore', icon: <Github size={14} /> },
          { id: 'config', label: 'turbo.json', icon: <Settings size={14} /> },
          { id: 'pnpm-workspace', label: 'pnpm-workspace.yaml', icon: <Terminal size={14} /> },
        ],
      },
    ];
    return (
      <div className="w-[350px] p-4 bg-base-100 rounded-xl border border-base-200 shadow-sm">
        <Tree 
          data={explorerData} 
          defaultExpandedIds={['workspace', 'packages']}
          showLines={true}
        />
      </div>
    );
  },
};

export const Plain: Story = {
  render: () => (
    <div className="w-[300px]">
      <Tree data={fileTree} showLines={false} showIcons={false} />
    </div>
  ),
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
      <div className="w-[350px] p-4 bg-base-100 rounded-xl border border-base-200">
        <Tree data={deepData} />
      </div>
    );
  },
};
