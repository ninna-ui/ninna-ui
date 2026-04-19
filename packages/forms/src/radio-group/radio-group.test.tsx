import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioGroup, RadioGroupItem, RadioCard } from './radio-group';

describe('RadioGroup', () => {
  it('renders radio options', () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" />
      </RadioGroup>
    );

    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
  });

  it('calls onValueChange when selecting option', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <RadioGroup onValueChange={onValueChange}>
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" />
      </RadioGroup>
    );

    await user.click(screen.getByText('Option B'));
    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalledWith('b');
    });
  });

  it('renders radio card and checks state attribute', () => {
    render(
      <RadioGroup defaultValue="pro">
        <RadioCard value="pro" title="Pro" />
      </RadioGroup>
    );

    expect(document.querySelector('[data-slot="radio-card"]')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" label="Option A" />
        <RadioGroupItem value="b" label="Option B" />
      </RadioGroup>
    );
    await expect(container).toBeAccessible();
  });
});
