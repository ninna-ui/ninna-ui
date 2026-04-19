import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import {
  Box,
  Container,
  Stack,
  HStack,
  VStack,
  Flex,
  Grid,
  Center,
  Wrap,
  SimpleGrid,
  AspectRatio,
  Separator,
} from '../src';

// ─── Box ────────────────────────────────────────────────────────────────────

describe('Box', () => {
  it('renders children', () => {
    render(<Box>content</Box>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('has data-slot="box"', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'box');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Box ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('merges className', () => {
    const { container } = render(<Box className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('has displayName', () => {
    expect(Box.displayName).toBe('Box');
  });
});

// ─── Container ──────────────────────────────────────────────────────────────

describe('Container', () => {
  it('renders children', () => {
    render(<Container>content</Container>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('has data-slot="container"', () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'container');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Container ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Container.displayName).toBe('Container');
  });
});

// ─── Stack / HStack / VStack ─────────────────────────────────────────────────

describe('Stack', () => {
  it('renders children', () => {
    render(<Stack><span>a</span><span>b</span></Stack>);
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('b')).toBeInTheDocument();
  });

  it('has data-slot="stack"', () => {
    const { container } = render(<Stack />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'stack');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Stack ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Stack.displayName).toBe('Stack');
  });
});

describe('HStack', () => {
  it('renders with data-slot="stack"', () => {
    const { container } = render(<HStack />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'stack');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<HStack ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(HStack.displayName).toBe('HStack');
  });
});

describe('VStack', () => {
  it('renders with data-slot="stack"', () => {
    const { container } = render(<VStack />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'stack');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<VStack ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(VStack.displayName).toBe('VStack');
  });
});

// ─── Flex ────────────────────────────────────────────────────────────────────

describe('Flex', () => {
  it('renders children', () => {
    render(<Flex>content</Flex>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('has data-slot="flex"', () => {
    const { container } = render(<Flex />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'flex');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Flex ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Flex.displayName).toBe('Flex');
  });
});

// ─── Grid ────────────────────────────────────────────────────────────────────

describe('Grid', () => {
  it('renders children', () => {
    render(<Grid><div>cell</div></Grid>);
    expect(screen.getByText('cell')).toBeInTheDocument();
  });

  it('has data-slot="grid"', () => {
    const { container } = render(<Grid />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'grid');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Grid ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Grid.displayName).toBe('Grid');
  });
});

// ─── Center ──────────────────────────────────────────────────────────────────

describe('Center', () => {
  it('renders children', () => {
    render(<Center>content</Center>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('has data-slot="center"', () => {
    const { container } = render(<Center />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'center');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Center ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Center.displayName).toBe('Center');
  });
});

// ─── Wrap ────────────────────────────────────────────────────────────────────

describe('Wrap', () => {
  it('renders children', () => {
    render(<Wrap><span>tag</span></Wrap>);
    expect(screen.getByText('tag')).toBeInTheDocument();
  });

  it('has data-slot="wrap"', () => {
    const { container } = render(<Wrap />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'wrap');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Wrap ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(Wrap.displayName).toBe('Wrap');
  });
});

// ─── SimpleGrid ───────────────────────────────────────────────────────────────

describe('SimpleGrid', () => {
  it('renders children', () => {
    render(<SimpleGrid><div>item</div></SimpleGrid>);
    expect(screen.getByText('item')).toBeInTheDocument();
  });

  it('has data-slot="simple-grid"', () => {
    const { container } = render(<SimpleGrid />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'simple-grid');
  });

  it('applies fixed columns via inline style', () => {
    const { container } = render(<SimpleGrid columns={3} />);
    expect((container.firstChild as HTMLElement).style.gridTemplateColumns).toBe(
      'repeat(3, minmax(0, 1fr))'
    );
  });

  it('applies minChildWidth via inline style', () => {
    const { container } = render(<SimpleGrid minChildWidth="200px" />);
    expect((container.firstChild as HTMLElement).style.gridTemplateColumns).toBe(
      'repeat(auto-fit, minmax(200px, 1fr))'
    );
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<SimpleGrid ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(SimpleGrid.displayName).toBe('SimpleGrid');
  });
});

// ─── AspectRatio ─────────────────────────────────────────────────────────────

describe('AspectRatio', () => {
  it('renders children', () => {
    render(<AspectRatio><img alt="test" /></AspectRatio>);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('has data-slot="aspect-ratio"', () => {
    const { container } = render(<AspectRatio />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'aspect-ratio');
  });

  it('renders without error with numeric ratio', () => {
    const { container } = render(<AspectRatio ratio={16 / 9} />);
    expect(container.querySelector('[data-slot="aspect-ratio"]')).toBeInTheDocument();
  });

  it('renders without error with preset ratio "square"', () => {
    const { container } = render(<AspectRatio ratio="square" />);
    expect(container.querySelector('[data-slot="aspect-ratio"]')).toBeInTheDocument();
  });

  it('renders without error with preset ratio "video"', () => {
    const { container } = render(<AspectRatio ratio="video" />);
    expect(container.querySelector('[data-slot="aspect-ratio"]')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<AspectRatio ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has displayName', () => {
    expect(AspectRatio.displayName).toBe('AspectRatio');
  });
});

// ─── Separator ───────────────────────────────────────────────────────────────

describe('Separator', () => {
  it('has data-slot="separator"', () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toHaveAttribute('data-slot', 'separator');
  });

  it('is decorative by default (role="none")', () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toHaveAttribute('role', 'none');
  });

  it('has role="separator" when decorative=false', () => {
    render(<Separator decorative={false} />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('sets aria-orientation when not decorative', () => {
    render(<Separator decorative={false} orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLHRElement>();
    render(<Separator ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLHRElement);
  });

  it('has displayName', () => {
    expect(Separator.displayName).toBe('Separator');
  });
});
