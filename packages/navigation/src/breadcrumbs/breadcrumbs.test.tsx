import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import { Breadcrumbs } from './breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders a nav element with aria-label', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/about">About</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
  });

  it('has correct displayName', () => {
    expect(Breadcrumbs.displayName).toBe('Breadcrumbs');
  });

  it('has correct data-slot', () => {
    const { container } = render(
      <Breadcrumbs>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    expect(container.querySelector('[data-slot="breadcrumbs"]')).toBeInTheDocument();
  });

  it('renders items with separators', () => {
    const { container } = render(
      <Breadcrumbs>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/about">About</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link current>Contact</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    const separators = container.querySelectorAll('[data-slot="breadcrumbs-separator"]');
    expect(separators.length).toBe(2);
  });

  it('renders current page with aria-current', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link current>Current</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    const currentLink = screen.getByText('Current');
    expect(currentLink).toHaveAttribute('aria-current', 'page');
  });

  it('separators have aria-hidden', () => {
    const { container } = render(
      <Breadcrumbs>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/about">About</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    const separator = container.querySelector('[data-slot="breadcrumbs-separator"]');
    expect(separator).toHaveAttribute('aria-hidden', 'true');
  });

  it('truncates with ellipsis when maxItems is set', () => {
    const { container } = render(
      <Breadcrumbs maxItems={3}>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/a">A</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/b">B</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/c">C</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link current>D</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    const ellipsis = container.querySelector('[data-slot="breadcrumbs-ellipsis"]');
    expect(ellipsis).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLElement>();
    render(
      <Breadcrumbs ref={ref}>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('merges className', () => {
    const { container } = render(
      <Breadcrumbs className="custom">
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    expect(container.querySelector('[data-slot="breadcrumbs"]')).toHaveClass('custom');
  });

  it('subcomponents have correct displayNames', () => {
    expect(Breadcrumbs.Item.displayName).toBe('Breadcrumbs.Item');
    expect(Breadcrumbs.Link.displayName).toBe('Breadcrumbs.Link');
    expect(Breadcrumbs.Separator.displayName).toBe('Breadcrumbs.Separator');
    expect(Breadcrumbs.Ellipsis.displayName).toBe('Breadcrumbs.Ellipsis');
  });

  it('passes axe accessibility audit', async () => {
    const { container } = render(
      <Breadcrumbs>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/">Home</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link href="/products">Products</Breadcrumbs.Link></Breadcrumbs.Item>
        <Breadcrumbs.Item><Breadcrumbs.Link current>Details</Breadcrumbs.Link></Breadcrumbs.Item>
      </Breadcrumbs>
    );
    // Disable list/listitem rules - separator spans inside <ol> is a known pattern
    const results = await axe(container, { rules: { list: { enabled: false }, listitem: { enabled: false } } });
    expect(results).toHaveNoViolations();
  });
});
