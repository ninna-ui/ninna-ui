import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { CodeBlock } from '../src';

// ─── Clipboard mock ──────────────────────────────────────────────────────────

const writeText = vi.fn().mockResolvedValue(undefined);

beforeEach(() => {
  writeText.mockClear();
  Object.defineProperty(window, 'navigator', {
    value: new Proxy(window.navigator, {
      get(target, prop) {
        if (prop === 'clipboard') return { writeText };
        return Reflect.get(target, prop);
      },
    }),
    configurable: true,
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ─── Rendering ───────────────────────────────────────────────────────────────

describe('CodeBlock', () => {
  it('renders code content', () => {
    render(<CodeBlock code="const x = 1;" />);
    expect(screen.getByText('x', { exact: false })).toBeInTheDocument();
  });

  it('has data-slot="code-block"', () => {
    const { container } = render(<CodeBlock code="hello" />);
    expect(container.querySelector('[data-slot="code-block"]')).toBeInTheDocument();
  });

  it('has data-slot="code-block-pre"', () => {
    const { container } = render(<CodeBlock code="hello" />);
    expect(container.querySelector('[data-slot="code-block-pre"]')).toBeInTheDocument();
  });

  it('has data-slot="code-block-code"', () => {
    const { container } = render(<CodeBlock code="hello" />);
    expect(container.querySelector('[data-slot="code-block-code"]')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<CodeBlock code="hello" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges className', () => {
    const { container } = render(<CodeBlock code="hello" className="custom" />);
    expect(container.querySelector('[data-slot="code-block"]')).toHaveClass('custom');
  });

  it('has displayName', () => {
    expect(CodeBlock.displayName).toBe('CodeBlock');
  });
});

// ─── Line numbers ─────────────────────────────────────────────────────────────

describe('CodeBlock showLineNumbers', () => {
  it('does not show line numbers by default', () => {
    const { container } = render(<CodeBlock code="line one" />);
    expect(container.querySelector('[data-slot="code-block-line-number"]')).not.toBeInTheDocument();
  });

  it('shows line numbers when showLineNumbers=true', () => {
    const { container } = render(<CodeBlock code={'line one\nline two'} showLineNumbers />);
    const lineNumbers = container.querySelectorAll('[data-slot="code-block-line-number"]');
    expect(lineNumbers).toHaveLength(2);
    expect(lineNumbers[0]!.textContent).toBe('1');
    expect(lineNumbers[1]!.textContent).toBe('2');
  });
});

// ─── Copy button ─────────────────────────────────────────────────────────────

describe('CodeBlock copy button', () => {
  it('renders copy button by default', () => {
    render(<CodeBlock code="hello" />);
    expect(screen.getByRole('button', { name: /copy code/i })).toBeInTheDocument();
  });

  it('has data-slot="code-block-copy"', () => {
    const { container } = render(<CodeBlock code="hello" />);
    expect(container.querySelector('[data-slot="code-block-copy"]')).toBeInTheDocument();
  });

  it('hides copy button when showCopyButton=false', () => {
    render(<CodeBlock code="hello" showCopyButton={false} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls clipboard.writeText with the code on click', async () => {
    const user = userEvent.setup();
    render(<CodeBlock code="const x = 42;" copyButtonAlwaysVisible />);
    await user.click(screen.getByRole('button', { name: /copy code/i }));
    expect(writeText).toHaveBeenCalledWith('const x = 42;');
  });

  it('shows "Code copied" aria-label after click', async () => {
    const user = userEvent.setup();
    render(<CodeBlock code="hello" copyButtonAlwaysVisible />);
    await user.click(screen.getByRole('button', { name: /copy code/i }));
    expect(screen.getByRole('button', { name: /code copied/i })).toBeInTheDocument();
  });
});

// ─── Language modes ───────────────────────────────────────────────────────────

describe('CodeBlock language', () => {
  it('renders bash code without syntax spans', () => {
    const { container } = render(<CodeBlock code="npm install" language="bash" />);
    const code = container.querySelector('[data-slot="code-block-code"]');
    expect(code).toBeInTheDocument();
    expect(code!.querySelectorAll('span[style]')).toHaveLength(0);
  });

  it('renders text code without syntax spans', () => {
    const { container } = render(<CodeBlock code="plain text" language="text" />);
    const code = container.querySelector('[data-slot="code-block-code"]');
    expect(code!.querySelectorAll('span[style]')).toHaveLength(0);
  });

  it('renders tsx code with syntax-highlighted spans', () => {
    const { container } = render(<CodeBlock code="const x = 1;" language="tsx" />);
    const code = container.querySelector('[data-slot="code-block-code"]');
    expect(code!.querySelectorAll('span[style]').length).toBeGreaterThan(0);
  });
});
