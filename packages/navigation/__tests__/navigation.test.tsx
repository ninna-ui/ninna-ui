import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { Tabs, Accordion, Breadcrumbs, Pagination, Stepper } from '../src';

// ─── Tabs ─────────────────────────────────────────────────────────────────────

describe('Tabs', () => {
  const renderTabs = (defaultValue = 'a') => render(
    <Tabs defaultValue={defaultValue}>
      <Tabs.List>
        <Tabs.Trigger value="a">Tab A</Tabs.Trigger>
        <Tabs.Trigger value="b">Tab B</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="a">Content A</Tabs.Content>
      <Tabs.Content value="b">Content B</Tabs.Content>
    </Tabs>
  );

  it('renders tabs with correct data-slots', () => {
    const { container } = renderTabs();
    expect(container.querySelector('[data-slot="tabs"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="tabs-list"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="tabs-trigger"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="tabs-content"]')).toBeInTheDocument();
  });

  it('shows active tab content by default', () => {
    renderTabs('a');
    expect(screen.getByText('Content A')).toBeInTheDocument();
  });

  it('switches content on trigger click', async () => {
    const user = userEvent.setup();
    renderTabs('a');
    await user.click(screen.getByText('Tab B'));
    expect(screen.getByText('Content B')).toBeInTheDocument();
  });

  it('Tabs.List forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Tabs defaultValue="a">
        <Tabs.List ref={ref}><Tabs.Trigger value="a">A</Tabs.Trigger></Tabs.List>
        <Tabs.Content value="a">A</Tabs.Content>
      </Tabs>
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('has displayNames', () => {
    expect(Tabs.displayName).toBe('Tabs');
    expect(Tabs.List.displayName).toBe('Tabs.List');
    expect(Tabs.Trigger.displayName).toBe('Tabs.Trigger');
    expect(Tabs.Content.displayName).toBe('Tabs.Content');
  });
});

// ─── Accordion ───────────────────────────────────────────────────────────────

describe('Accordion', () => {
  const renderAccordion = () => render(
    <Accordion type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Section 2</Accordion.Trigger>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );

  it('renders with data-slot="accordion"', () => {
    const { container } = renderAccordion();
    expect(container.querySelector('[data-slot="accordion"]')).toBeInTheDocument();
  });

  it('renders accordion items', () => {
    const { container } = renderAccordion();
    expect(container.querySelectorAll('[data-slot="accordion-item"]')).toHaveLength(2);
  });

  it('renders triggers', () => {
    renderAccordion();
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
  });

  it('opens item on trigger click', async () => {
    const user = userEvent.setup();
    renderAccordion();
    await user.click(screen.getByText('Section 1'));
    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('has displayNames', () => {
    expect(Accordion.displayName).toBe('Accordion');
    expect(Accordion.Item.displayName).toBe('Accordion.Item');
    expect(Accordion.Trigger.displayName).toBe('Accordion.Trigger');
    expect(Accordion.Content.displayName).toBe('Accordion.Content');
  });
});

// ─── Breadcrumbs ─────────────────────────────────────────────────────────────

describe('Breadcrumbs', () => {
  const renderBreadcrumbs = () => render(
    <Breadcrumbs>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="/products">Products</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link current>Widget</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  );

  it('renders as nav with aria-label="Breadcrumb"', () => {
    renderBreadcrumbs();
    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
  });

  it('has data-slot="breadcrumbs"', () => {
    const { container } = renderBreadcrumbs();
    expect(container.querySelector('[data-slot="breadcrumbs"]')).toBeInTheDocument();
  });

  it('renders items and links', () => {
    renderBreadcrumbs();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Widget')).toBeInTheDocument();
  });

  it('marks current page with aria-current="page"', () => {
    renderBreadcrumbs();
    expect(screen.getByText('Widget').closest('a')).toHaveAttribute('aria-current', 'page');
  });

  it('forwards ref on root', () => {
    const ref = createRef<HTMLElement>();
    render(<Breadcrumbs ref={ref}><Breadcrumbs.Item><Breadcrumbs.Link>x</Breadcrumbs.Link></Breadcrumbs.Item></Breadcrumbs>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('has displayNames', () => {
    expect(Breadcrumbs.displayName).toBe('Breadcrumbs');
    expect(Breadcrumbs.Item.displayName).toBe('Breadcrumbs.Item');
    expect(Breadcrumbs.Link.displayName).toBe('Breadcrumbs.Link');
    expect(Breadcrumbs.Separator.displayName).toBe('Breadcrumbs.Separator');
    expect(Breadcrumbs.Ellipsis.displayName).toBe('Breadcrumbs.Ellipsis');
  });

  it('truncates with ellipsis when maxItems is set', () => {
    const { container } = render(
      <Breadcrumbs maxItems={3}>
        <Breadcrumbs.Item><Breadcrumbs.Link>A</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link>B</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link>C</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link>D</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link>E</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    expect(container.querySelector('[data-slot="breadcrumbs-ellipsis"]')).toBeInTheDocument();
  });
});

// ─── Pagination ───────────────────────────────────────────────────────────────

describe('Pagination', () => {
  const renderPagination = () => render(
    <Pagination>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link isActive>1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );

  it('renders nav with aria-label="Pagination"', () => {
    renderPagination();
    expect(screen.getByRole('navigation', { name: /pagination/i })).toBeInTheDocument();
  });

  it('has data-slot="pagination"', () => {
    const { container } = renderPagination();
    expect(container.querySelector('[data-slot="pagination"]')).toBeInTheDocument();
  });

  it('renders previous and next buttons', () => {
    renderPagination();
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
  });

  it('marks active page with aria-current="page"', () => {
    renderPagination();
    const activeLink = screen.getByRole('button', { name: '1' });
    expect(activeLink).toHaveAttribute('aria-current', 'page');
  });

  it('renders ellipsis', () => {
    const { container } = renderPagination();
    expect(container.querySelector('[data-slot="pagination-ellipsis"]')).toBeInTheDocument();
  });

  it('forwards ref on root', () => {
    const ref = createRef<HTMLElement>();
    render(<Pagination ref={ref}><Pagination.Content /></Pagination>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('has displayNames', () => {
    expect(Pagination.displayName).toBe('Pagination');
    expect(Pagination.Content.displayName).toBe('Pagination.Content');
    expect(Pagination.Item.displayName).toBe('Pagination.Item');
    expect(Pagination.Link.displayName).toBe('Pagination.Link');
    expect(Pagination.Previous.displayName).toBe('Pagination.Previous');
    expect(Pagination.Next.displayName).toBe('Pagination.Next');
    expect(Pagination.Ellipsis.displayName).toBe('Pagination.Ellipsis');
  });
});

// ─── Stepper ──────────────────────────────────────────────────────────────────

describe('Stepper', () => {
  const renderStepper = (activeStep = 1) => render(
    <Stepper activeStep={activeStep}>
      <Stepper.Step label="Account" description="Create account" />
      <Stepper.Step label="Profile" description="Set up profile" />
      <Stepper.Step label="Review" description="Review & submit" />
    </Stepper>
  );

  it('renders with data-slot="stepper"', () => {
    const { container } = renderStepper();
    expect(container.querySelector('[data-slot="stepper"]')).toBeInTheDocument();
  });

  it('renders all step labels', () => {
    renderStepper();
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    renderStepper();
    expect(screen.getByText('Create account')).toBeInTheDocument();
  });

  it('assigns correct data-status to steps', () => {
    const { container } = renderStepper(1);
    const steps = container.querySelectorAll('[data-slot="step"]');
    expect(steps[0]).toHaveAttribute('data-status', 'complete');
    expect(steps[1]).toHaveAttribute('data-status', 'current');
    expect(steps[2]).toHaveAttribute('data-status', 'upcoming');
  });

  it('all steps complete when activeStep >= total', () => {
    const { container } = renderStepper(3);
    const steps = container.querySelectorAll('[data-slot="step"]');
    steps.forEach((step) => expect(step).toHaveAttribute('data-status', 'complete'));
  });

  it('renders with role="list" on root and role="listitem" on steps', () => {
    renderStepper();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('renders separators between steps', () => {
    const { container } = renderStepper();
    expect(container.querySelectorAll('[data-slot="step-separator"]')).toHaveLength(2);
  });

  it('renders optional badge when optional=true', () => {
    render(
      <Stepper activeStep={0}>
        <Stepper.Step label="Required" />
        <Stepper.Step label="Optional Step" optional />
      </Stepper>
    );
    expect(screen.getByText('Optional')).toBeInTheDocument();
  });

  it('renders vertical orientation', () => {
    const { container } = renderStepper();
    render(
      <Stepper activeStep={0} orientation="vertical">
        <Stepper.Step label="A" />
        <Stepper.Step label="B" />
      </Stepper>
    );
    expect(container.querySelector('[data-orientation="vertical"]') ?? document.querySelector('[data-orientation="vertical"]')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Stepper activeStep={0} ref={ref}>
        <Stepper.Step label="A" />
      </Stepper>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayNames', () => {
    expect(Stepper.displayName).toBe('Stepper');
    expect(Stepper.Step.displayName).toBe('Stepper.Step');
    expect(Stepper.Indicator.displayName).toBe('Stepper.Indicator');
    expect(Stepper.Separator.displayName).toBe('Stepper.Separator');
  });
});
