import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@ninna-ui/layout';

const meta: Meta<typeof AspectRatio> = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: ['square', 'video', 'portrait', 'wide', 1, 16/9, 4/3],
      description: 'Aspect ratio (preset or number)',
      table: { defaultValue: { summary: '1' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Square: Story = {
  args: {
    ratio: 'square',
    className: 'max-w-xs',
    children: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
        1:1
      </div>
    ),
  },
};

export const Video: Story = {
  args: {
    ratio: 'video',
    className: 'max-w-md',
    children: (
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
        16:9
      </div>
    ),
  },
};

export const Portrait: Story = {
  args: {
    ratio: 'portrait',
    className: 'max-w-xs',
    children: (
      <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white font-bold">
        3:4
      </div>
    ),
  },
};

export const WithImage: Story = {
  args: {
    ratio: 'video',
    className: 'max-w-md',
    children: (
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
        alt="Mountain landscape"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
  },
};
