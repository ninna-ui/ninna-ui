import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slider } from '@ninna-ui/forms';

const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the slider',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'danger'],
      description: 'Color theme of the slider',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    min: {
      control: 'number',
      description: 'Minimum value',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: {
        defaultValue: { summary: '100' },
      },
    },
    step: {
      control: 'number',
      description: 'Step increment',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the slider',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft'],
      description: 'Visual variant of the slider',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    showValue: {
      control: 'boolean',
      description: 'Show current value',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show tooltip on hover/drag',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the slider is in an invalid state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Label for the slider',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below slider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-64">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Small</p>
        <Slider size="sm" defaultValue={[30]} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Medium</p>
        <Slider size="md" defaultValue={[50]} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Large</p>
        <Slider size="lg" defaultValue={[70]} />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-64">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Solid</p>
        <Slider variant="solid" defaultValue={[50]} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Soft</p>
        <Slider variant="soft" defaultValue={[70]} />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-64">
      <Slider color="neutral" defaultValue={[50]} />
      <Slider color="primary" defaultValue={[50]} />
      <Slider color="secondary" defaultValue={[50]} />
      <Slider color="accent" defaultValue={[50]} />
      <Slider color="info" defaultValue={[50]} />
      <Slider color="success" defaultValue={[50]} />
      <Slider color="warning" defaultValue={[50]} />
      <Slider color="danger" defaultValue={[50]} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-64">
      <Slider label="Volume" defaultValue={[75]} showValue />
    </div>
  ),
};

export const RangeSlider: Story = {
  render: () => (
    <div className="w-64">
      <Slider label="Price Range" defaultValue={[25, 75]} showValue />
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-64">
      <Slider label="Rating" min={0} max={5} step={1} defaultValue={[3]} showValue />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};
const ControlledExample = () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="w-64 space-y-4">
        <Slider value={value} onValueChange={setValue} showValue />
        <p className="text-sm text-base-content/70">
          Current value: {value[0]}
        </p>
      </div>
    );
  };

export const Controlled: Story = {
  render: ControlledExample,
};
const VolumeControlExample = () => {
    const [volume, setVolume] = useState([50]);
    return (
      <div className="w-64 p-4 bg-base-200 rounded-lg">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-base-content/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
          <Slider
            value={volume}
            onValueChange={setVolume}
            color="primary"
            className="flex-1"
          />
          <span className="text-sm text-base-content/70 w-8 text-right">
            {volume[0]}%
          </span>
        </div>
      </div>
    );
  };

export const VolumeControl: Story = {
  render: VolumeControlExample,
};

export const WithMarks: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-64">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Auto marks (step intervals)</p>
        <Slider defaultValue={[50]} marks step={25} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Custom marks</p>
        <Slider 
          defaultValue={[50]} 
          marks={[
            { value: 0, label: '0%' },
            { value: 50, label: '50%' },
            { value: 100, label: '100%' },
          ]} 
        />
      </div>
    </div>
  ),
};

export const Orientation: Story = {
  render: () => (
    <div className="flex gap-12 items-start">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Horizontal</p>
        <div className="w-48">
          <Slider defaultValue={[50]} orientation="horizontal" />
        </div>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Vertical</p>
        <div className="h-48">
          <Slider defaultValue={[50]} orientation="vertical" />
        </div>
      </div>
    </div>
  ),
};

export const Inverted: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-64">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Normal</p>
        <Slider defaultValue={[30]} />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Inverted</p>
        <Slider defaultValue={[30]} inverted />
      </div>
    </div>
  ),
};

export const MinStepsBetweenThumbs: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm text-base-content/70 mb-2">Min 20 steps between thumbs</p>
      <Slider 
        defaultValue={[25, 75]} 
        minStepsBetweenThumbs={20}
        showValue
        label="Price Range"
      />
    </div>
  ),
};

export const ShowValue: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-64">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Single value</p>
        <Slider defaultValue={[50]} showValue />
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">Range values</p>
        <Slider defaultValue={[25, 75]} showValue />
      </div>
    </div>
  ),
};
