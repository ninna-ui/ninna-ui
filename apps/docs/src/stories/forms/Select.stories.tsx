import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectItem, SelectGroup, SelectSeparator, FormControl, FormLabel, FormMessage } from '@ninna-ui/forms';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the select',
      table: { defaultValue: { summary: 'md' } },
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'flushed'],
      description: 'Visual variant',
      table: { defaultValue: { summary: 'outline' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the select has an error state',
      table: { defaultValue: { summary: 'false' } },
    },
    clearable: {
      control: 'boolean',
      description: 'Whether the select can be cleared',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the select takes full width',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <div className="max-w-xs">
      <Select placeholder="Select an option">
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </Select>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-xs">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <p className="text-sm text-base-content/70 mb-1">size="{size}"</p>
          <Select size={size} placeholder={`Size ${size}`}>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </Select>
        </div>
      ))}
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <div className="max-w-xs">
      <Select placeholder="Select a fruit">
        <SelectGroup label="Fruits">
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup label="Vegetables">
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </Select>
    </div>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <div className="max-w-xs">
      <Select placeholder="Select an option">
        <SelectItem value="option1">Available option</SelectItem>
        <SelectItem value="option2" disabled>Disabled option</SelectItem>
        <SelectItem value="option3">Another available option</SelectItem>
      </Select>
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="max-w-xs">
      <Select placeholder="Select an option" invalid>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="max-w-xs">
      <Select placeholder="Select an option" disabled>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </Select>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState('');
    return (
      <div className="space-y-4 max-w-xs">
        <Select value={value} onValueChange={setValue} placeholder="Select a country">
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </Select>
        <p className="text-sm text-base-content/70">
          Selected: {value || 'None'}
        </p>
      </div>
    );
  },
};

export const WithFormControl: Story = {
  render: () => (
    <div className="space-y-6 max-w-xs">
      <FormControl>
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select a country">
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
        </Select>
        <FormMessage type="hint">Choose your country of residence.</FormMessage>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Language</FormLabel>
        <Select placeholder="Select a language">
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Spanish</SelectItem>
          <SelectItem value="fr">French</SelectItem>
        </Select>
      </FormControl>

      <FormControl isInvalid>
        <FormLabel>Category</FormLabel>
        <Select placeholder="Select a category" invalid>
          <SelectItem value="tech">Technology</SelectItem>
          <SelectItem value="health">Health</SelectItem>
        </Select>
        <FormMessage>Please select a category.</FormMessage>
      </FormControl>
    </div>
  ),
};

export const LongList: Story = {
  render: () => {
    const countries = [
      'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
      'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
      'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
      'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    ];

    return (
      <div className="max-w-xs">
        <Select placeholder="Select a country">
          {countries.map((country) => (
            <SelectItem key={country} value={country.toLowerCase()}>
              {country}
            </SelectItem>
          ))}
        </Select>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-xs">
      {(['outline', 'filled', 'flushed'] as const).map((variant) => (
        <div key={variant}>
          <p className="text-sm text-base-content/70 mb-1">variant="{variant}"</p>
          <Select variant={variant} placeholder={`Variant ${variant}`}>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </Select>
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="max-w-xs">
      <Select placeholder="Select a status">
        <SelectItem value="active">🟢 Active</SelectItem>
        <SelectItem value="pending">🟡 Pending</SelectItem>
        <SelectItem value="inactive">🔴 Inactive</SelectItem>
      </Select>
    </div>
  ),
};
