import type { Meta, StoryObj } from '@storybook/react';
import { FormControl, FormLabel, FormMessage, Input, Textarea, Checkbox, Select, SelectItem } from '@ninna-ui/forms';

const meta: Meta<typeof FormControl> = {
  title: 'Forms/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isRequired: {
      control: 'boolean',
      description: 'Whether the field is required',
      table: { defaultValue: { summary: 'false' } },
    },
    isInvalid: {
      control: 'boolean',
      description: 'Whether the field is in an invalid state',
      table: { defaultValue: { summary: 'false' } },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    isReadOnly: {
      control: 'boolean',
      description: 'Whether the field is read-only',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input placeholder="you@example.com" />
        <FormMessage type="hint">We'll never share your email.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="w-80">
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input placeholder="johndoe" />
        <FormMessage type="hint">Choose a unique username.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="w-80">
      <FormControl isInvalid>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="••••••••" />
        <FormMessage>Password must be at least 8 characters.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <FormControl isDisabled>
        <FormLabel>Email</FormLabel>
        <Input placeholder="disabled@example.com" />
        <FormMessage type="hint">This field is disabled.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div className="w-80">
      <FormControl isReadOnly>
        <FormLabel>Account ID</FormLabel>
        <Input defaultValue="ACC-12345-XYZ" />
        <FormMessage type="hint">This value cannot be changed.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div className="w-80">
      <FormControl>
        <FormLabel>Bio</FormLabel>
        <Textarea placeholder="Tell us about yourself..." />
        <FormMessage type="hint">Max 500 characters.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="w-80">
      <FormControl isRequired>
        <Checkbox label="I agree to the terms and conditions" />
        <FormMessage type="hint">You must accept to continue.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <div className="w-80">
      <FormControl>
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select a country">
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </Select>
        <FormMessage type="hint">Select your country of residence.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const MessageTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <FormControl>
        <FormLabel>Hint Message</FormLabel>
        <Input placeholder="Enter value" />
        <FormMessage type="hint">This is a hint message.</FormMessage>
      </FormControl>
      <FormControl isInvalid>
        <FormLabel>Error Message</FormLabel>
        <Input placeholder="Enter value" />
        <FormMessage type="error">This is an error message.</FormMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Success Message</FormLabel>
        <Input placeholder="Enter value" defaultValue="Valid input" />
        <FormMessage type="success">This is a success message.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder="John Doe" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="john@example.com" />
      </FormControl>
      <FormControl>
        <FormLabel>Phone</FormLabel>
        <Input type="tel" placeholder="+1 (555) 000-0000" />
        <FormMessage type="hint">Optional</FormMessage>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Your message..." />
      </FormControl>
      <FormControl isRequired>
        <Checkbox label="I agree to the privacy policy" />
      </FormControl>
    </div>
  ),
};
