import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Stat } from './stat';

describe('Stat', () => {
  it('renders with children', () => {
    render(
      <Stat data-testid="stat">
        <Stat.Label>Users</Stat.Label>
        <Stat.Value>1,024</Stat.Value>
      </Stat>
    );
    expect(screen.getByTestId('stat')).toBeInTheDocument();
  });

  it('has correct data-slot on Stat root', () => {
    render(
      <Stat data-testid="stat">
        <Stat.Label>Revenue</Stat.Label>
      </Stat>
    );
    expect(screen.getByTestId('stat')).toHaveAttribute('data-slot', 'stat');
  });

  it('renders label text', () => {
    render(
      <Stat>
        <Stat.Label>Total Orders</Stat.Label>
      </Stat>
    );
    expect(screen.getByText('Total Orders')).toBeInTheDocument();
  });

  it('renders value text', () => {
    render(
      <Stat>
        <Stat.Value>$4,200</Stat.Value>
      </Stat>
    );
    expect(screen.getByText('$4,200')).toBeInTheDocument();
  });

  it('renders help text', () => {
    render(
      <Stat>
        <Stat.HelpText>Since last month</Stat.HelpText>
      </Stat>
    );
    expect(screen.getByText('Since last month')).toBeInTheDocument();
  });

  it('renders trend up', () => {
    render(
      <Stat>
        <Stat.Trend direction="up">+12%</Stat.Trend>
      </Stat>
    );
    expect(screen.getByText('+12%')).toBeInTheDocument();
  });

  it('renders trend down', () => {
    render(
      <Stat>
        <Stat.Trend direction="down">-5%</Stat.Trend>
      </Stat>
    );
    expect(screen.getByText('-5%')).toBeInTheDocument();
  });

  it('icon defaults to primary color', () => {
    render(
      <Stat>
        <Stat.Icon data-testid="icon">📈</Stat.Icon>
      </Stat>
    );
    const icon = screen.getByTestId('icon');
    expect(icon.className).toContain('bg-primary/10');
    expect(icon.className).toContain('text-primary');
  });

  it('icon accepts custom color', () => {
    render(
      <Stat>
        <Stat.Icon color="success" data-testid="icon">✅</Stat.Icon>
      </Stat>
    );
    const icon = screen.getByTestId('icon');
    expect(icon.className).toContain('bg-success/10');
    expect(icon.className).toContain('text-success');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Stat>
        <Stat.Label>Monthly Revenue</Stat.Label>
        <Stat.Value>$12,000</Stat.Value>
      </Stat>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
