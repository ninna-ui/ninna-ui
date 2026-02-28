import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Tabs } from './tabs';

describe('Tabs', () => {
  it('renders tablist and triggers', () => {
    render(
      <Tabs defaultValue="one">
        <Tabs.List>
          <Tabs.Trigger value="one">One</Tabs.Trigger>
          <Tabs.Trigger value="two">Two</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one">Panel One</Tabs.Content>
        <Tabs.Content value="two">Panel Two</Tabs.Content>
      </Tabs>
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(2);
  });

  it('renders active panel from defaultValue', () => {
    render(
      <Tabs defaultValue="two">
        <Tabs.List>
          <Tabs.Trigger value="one">One</Tabs.Trigger>
          <Tabs.Trigger value="two">Two</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one">Panel One</Tabs.Content>
        <Tabs.Content value="two">Panel Two</Tabs.Content>
      </Tabs>
    );

    expect(screen.getByText('Panel Two')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Tabs defaultValue="one">
        <Tabs.List>
          <Tabs.Trigger value="one">One</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one">Panel One</Tabs.Content>
      </Tabs>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
