import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select, SelectItem } from './select';

describe('Select', () => {
  const originalScrollIntoView = Element.prototype.scrollIntoView;

  beforeAll(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  afterAll(() => {
    Element.prototype.scrollIntoView = originalScrollIntoView;
  });

  it('renders trigger with placeholder', () => {
    render(
      <Select placeholder="Pick one">
        <SelectItem value="a">A</SelectItem>
      </Select>
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('applies invalid data attribute', () => {
    render(
      <Select invalid placeholder="Pick one">
        <SelectItem value="a">A</SelectItem>
      </Select>
    );
    expect(screen.getByRole('combobox')).toHaveAttribute('data-invalid', 'true');
  });

  it('uses combobox trigger semantics', () => {
    render(
      <Select placeholder="Pick one">
        <SelectItem value="a">Option A</SelectItem>
      </Select>
    );
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-autocomplete', 'none');
  });

  it('applies default primary focus ring color', () => {
    render(
      <Select placeholder="Pick one">
        <SelectItem value="a">A</SelectItem>
      </Select>
    );
    const trigger = screen.getByRole('combobox');
    expect(trigger.className).toContain('focus:ring-primary/30');
    expect(trigger.className).toContain('focus:border-primary');
  });

  it('applies custom color focus ring', () => {
    render(
      <Select color="accent" placeholder="Pick one">
        <SelectItem value="a">A</SelectItem>
      </Select>
    );
    const trigger = screen.getByRole('combobox');
    expect(trigger.className).toContain('focus:ring-accent/30');
    expect(trigger.className).toContain('focus:border-accent');
  });

  it('passes axe accessibility audit', async () => {
    const { container } = render(
      <label htmlFor="test-select">
        Choose an option
        <Select id="test-select" placeholder="Pick one">
          <SelectItem value="a">A</SelectItem>
        </Select>
      </label>
    );
    await expect(container).toBeAccessible();
  });
});
