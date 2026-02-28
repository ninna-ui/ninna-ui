import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from '@ninna-ui/data-display';

const meta: Meta = {
  title: 'Data Display/Calendar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days outside the current month',
      table: { defaultValue: { summary: 'true' } },
    },
    weekStartsOn: {
      control: 'select',
      options: [0, 1],
      description: 'First day of week (0=Sunday, 1=Monday)',
      table: { defaultValue: { summary: '0' } },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Calendar className="w-[280px] rounded-lg border border-base-200" />
  ),
};

export const Controlled: Story = {
  render: function ControlledCalendar() {
    const [date, setDate] = useState<Date>(new Date(2024, 5, 15));
    return (
      <div className="flex flex-col items-center gap-4">
        <Calendar
          value={date}
          onValueChange={setDate}
          className="w-[280px] rounded-lg border border-base-200"
        />
        <p className="text-sm text-base-content/70">
          Selected: {date.toLocaleDateString()}
        </p>
      </div>
    );
  },
};

export const WithMinMax: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10);
    return (
      <div className="flex flex-col items-center gap-4">
        <Calendar
          minDate={minDate}
          maxDate={maxDate}
          className="w-[280px] rounded-lg border border-base-200"
        />
        <p className="text-xs text-base-content/70">Only dates within ±5/+10 days from today are selectable.</p>
      </div>
    );
  },
};

export const DisabledDates: Story = {
  render: () => {
    const today = new Date();
    const disabled = [
      new Date(today.getFullYear(), today.getMonth(), 5),
      new Date(today.getFullYear(), today.getMonth(), 12),
      new Date(today.getFullYear(), today.getMonth(), 19),
      new Date(today.getFullYear(), today.getMonth(), 26),
    ];
    return (
      <Calendar
        disabledDates={disabled}
        className="w-[280px] rounded-lg border border-base-200"
      />
    );
  },
};

export const MondayStart: Story = {
  render: () => (
    <Calendar
      weekStartsOn={1}
      className="w-[280px] rounded-lg border border-base-200"
    />
  ),
};

export const HideOutsideDays: Story = {
  render: () => (
    <Calendar
      showOutsideDays={false}
      className="w-[280px] rounded-lg border border-base-200"
    />
  ),
};
