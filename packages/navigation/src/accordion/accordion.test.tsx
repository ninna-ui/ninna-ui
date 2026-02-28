import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Accordion } from './accordion';

describe('Accordion', () => {
  it('renders trigger and toggles content', async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Body 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    await user.click(screen.getByRole('button', { name: /section 1/i }));
    await waitFor(() => {
      expect(screen.getByText('Body 1')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Body 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
