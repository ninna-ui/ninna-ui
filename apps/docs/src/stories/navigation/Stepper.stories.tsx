import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper } from '@ninna-ui/navigation';
import { Button } from '@ninna-ui/primitives';

const meta: Meta = {
  title: 'Navigation/Stepper',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeStep: {
      control: 'number',
      description: 'Current active step index (0-based)',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the stepper',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the stepper',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'],
      description: 'Color theme of the stepper',
      table: { defaultValue: { summary: 'primary' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <Stepper activeStep={1}>
        <Stepper.Step label="Account" description="Create your account" />
        <Stepper.Step label="Profile" description="Set up your profile" />
        <Stepper.Step label="Review" description="Review and submit" />
      </Stepper>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return (
      <div className="flex flex-col gap-8 w-[500px]">
        {sizes.map((size) => (
          <div key={size}>
            <h4 className="text-sm font-semibold mb-3 text-base-content/70 uppercase tracking-wide">Size: {size}</h4>
            <Stepper activeStep={1} size={size}>
              <Stepper.Step label="Step 1" description="First step" />
              <Stepper.Step label="Step 2" description="Second step" />
              <Stepper.Step label="Step 3" description="Third step" />
            </Stepper>
          </div>
        ))}
      </div>
    );
  },
};

export const AllComplete: Story = {
  render: () => (
    <div className="w-[500px]">
      <Stepper activeStep={3}>
        <Stepper.Step label="Account" description="Create your account" />
        <Stepper.Step label="Profile" description="Set up your profile" />
        <Stepper.Step label="Review" description="Review and submit" />
      </Stepper>
    </div>
  ),
};

export const FirstStep: Story = {
  render: () => (
    <div className="w-[500px]">
      <Stepper activeStep={0}>
        <Stepper.Step label="Account" description="Create your account" />
        <Stepper.Step label="Profile" description="Set up your profile" />
        <Stepper.Step label="Review" description="Review and submit" />
      </Stepper>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="w-[300px]">
      <Stepper activeStep={1} orientation="vertical">
        <Stepper.Step label="Create Account" description="Enter your email and password" />
        <Stepper.Step label="Verify Email" description="Check your inbox for verification" />
        <Stepper.Step label="Complete Profile" description="Add your personal details" />
        <Stepper.Step label="Get Started" description="Start using the platform" />
      </Stepper>
    </div>
  ),
};
const InteractiveExample = () => {
    const [step, setStep] = useState(0);
    const steps = ['Account', 'Profile', 'Preferences', 'Review'];
    return (
      <div className="w-[500px] flex flex-col gap-6">
        <Stepper activeStep={step}>
          {steps.map((label) => (
            <Stepper.Step key={label} label={label} />
          ))}
        </Stepper>
        <div className="flex justify-between">
          <Button
            variant="outline"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Previous
          </Button>
          <Button
            onClick={() => setStep((s) => Math.min(steps.length, s + 1))}
            disabled={step === steps.length}
          >
            {step === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
        <p className="text-sm text-base-content/70 text-center">
          {step < steps.length ? `Step ${step + 1} of ${steps.length}: ${steps[step]}` : 'All steps complete!'}
        </p>
      </div>
    );
  };

export const Interactive: Story = {
  render: InteractiveExample,
};

export const WithOptionalStep: Story = {
  render: () => (
    <div className="w-[500px]">
      <Stepper activeStep={1}>
        <Stepper.Step label="Account" description="Required" />
        <Stepper.Step label="Avatar" description="Optional" optional />
        <Stepper.Step label="Confirm" description="Required" />
      </Stepper>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[600px]">
      {(['neutral', 'primary', 'secondary', 'accent', 'success', 'danger', 'warning', 'info'] as const).map((color) => (
        <div key={color} className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase text-base-content/50 px-1 tracking-wider">{color}</h4>
          <Stepper activeStep={1} color={color}>
            <Stepper.Step label="Step One" />
            <Stepper.Step label="Step Two" />
            <Stepper.Step label="Step Three" />
          </Stepper>
        </div>
      ))}
    </div>
  ),
};
