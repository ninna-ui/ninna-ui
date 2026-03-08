import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Timeline } from './timeline';

describe('Timeline', () => {
  it('renders with children', () => {
    render(
      <Timeline data-testid="tl">
        <Timeline.Item>
          <Timeline.Content>
            <Timeline.Heading>Event one</Timeline.Heading>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    );
    expect(screen.getByTestId('tl')).toBeInTheDocument();
  });

  it('has correct data-slot on root', () => {
    render(
      <Timeline data-testid="tl">
        <Timeline.Item><Timeline.Content><Timeline.Heading>Event</Timeline.Heading></Timeline.Content></Timeline.Item>
      </Timeline>
    );
    expect(screen.getByTestId('tl')).toHaveAttribute('data-slot', 'timeline');
  });

  it('renders vertical orientation by default', () => {
    render(
      <Timeline data-testid="tl">
        <Timeline.Item><Timeline.Content><Timeline.Heading>Event</Timeline.Heading></Timeline.Content></Timeline.Item>
      </Timeline>
    );
    expect(screen.getByTestId('tl')).toHaveAttribute('data-orientation', 'vertical');
  });

  it('renders horizontal orientation', () => {
    render(
      <Timeline orientation="horizontal" data-testid="tl">
        <Timeline.Item><Timeline.Content><Timeline.Heading>Event</Timeline.Heading></Timeline.Content></Timeline.Item>
      </Timeline>
    );
    expect(screen.getByTestId('tl')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('renders heading and description text', () => {
    render(
      <Timeline>
        <Timeline.Item>
          <Timeline.Content>
            <Timeline.Heading>Project started</Timeline.Heading>
            <Timeline.Description>Initial setup complete</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Project started')).toBeInTheDocument();
    expect(screen.getByText('Initial setup complete')).toBeInTheDocument();
  });

  it('renders indicator with status', () => {
    render(
      <Timeline>
        <Timeline.Item>
          <Timeline.Indicator status="success" />
          <Timeline.Content><Timeline.Heading>Done</Timeline.Heading></Timeline.Content>
        </Timeline.Item>
      </Timeline>
    );
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('merges custom className on root', () => {
    render(
      <Timeline className="custom" data-testid="tl">
        <Timeline.Item><Timeline.Content><Timeline.Heading>Event</Timeline.Heading></Timeline.Content></Timeline.Item>
      </Timeline>
    );
    expect(screen.getByTestId('tl').className).toContain('custom');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Timeline>
        <Timeline.Item>
          <Timeline.Indicator />
          <Timeline.Content>
            <Timeline.Heading>Step one</Timeline.Heading>
            <Timeline.Description>Description of step one</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
