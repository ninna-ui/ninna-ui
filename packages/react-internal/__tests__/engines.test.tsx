/// <reference types="@ninna-ui/test-config/vitest.d.ts" />
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  AccordionEngine,
  CheckboxEngine,
  DialogEngine,
  DropdownEngine,
  PopoverEngine,
  RadioEngine,
  SelectEngine,
  SliderEngine,
  SwitchEngine,
  TabsEngine,
  TooltipEngine,
} from '../src/index';

/**
 * Contract tests for the Radix engine adapters.
 * Every engine must expose its expected parts and each part must be
 * a renderable React component (function or forwardRef/memo object).
 */

const ENGINE_SHAPES: Record<string, { engine: Record<string, unknown>; parts: string[] }> = {
  AccordionEngine: {
    engine: AccordionEngine,
    parts: ['Root', 'Item', 'Header', 'Trigger', 'Content'],
  },
  CheckboxEngine: {
    engine: CheckboxEngine,
    parts: ['Root', 'Indicator'],
  },
  DialogEngine: {
    engine: DialogEngine,
    parts: ['Root', 'Trigger', 'Portal', 'Overlay', 'Content', 'Title', 'Description', 'Close'],
  },
  DropdownEngine: {
    engine: DropdownEngine,
    parts: [
      'Root', 'Trigger', 'Portal', 'Content', 'Item', 'CheckboxItem', 'RadioGroup',
      'RadioItem', 'ItemIndicator', 'Label', 'Separator', 'Sub', 'SubTrigger', 'SubContent', 'Arrow',
    ],
  },
  PopoverEngine: {
    engine: PopoverEngine,
    parts: ['Root', 'Trigger', 'Anchor', 'Portal', 'Content', 'Close', 'Arrow'],
  },
  RadioEngine: {
    engine: RadioEngine,
    parts: ['Root', 'Item', 'Indicator'],
  },
  SelectEngine: {
    engine: SelectEngine,
    parts: [
      'Root', 'Trigger', 'Value', 'Icon', 'Portal', 'Content', 'Viewport', 'Item',
      'ItemText', 'ItemIndicator', 'Group', 'Label', 'Separator', 'ScrollUpButton', 'ScrollDownButton',
    ],
  },
  SliderEngine: {
    engine: SliderEngine,
    parts: ['Root', 'Track', 'Range', 'Thumb'],
  },
  SwitchEngine: {
    engine: SwitchEngine,
    parts: ['Root', 'Thumb'],
  },
  TabsEngine: {
    engine: TabsEngine,
    parts: ['Root', 'List', 'Trigger', 'Content'],
  },
  TooltipEngine: {
    engine: TooltipEngine,
    parts: ['Provider', 'Root', 'Trigger', 'Portal', 'Content', 'Arrow'],
  },
};

function isRenderable(part: unknown): boolean {
  if (typeof part === 'function') return true;
  // forwardRef / memo components are objects with $$typeof
  return typeof part === 'object' && part !== null && '$$typeof' in part;
}

describe('engine shapes', () => {
  describe.each(Object.entries(ENGINE_SHAPES))('%s', (_name, { engine, parts }) => {
    it('exposes all expected parts', () => {
      for (const part of parts) {
        expect(engine[part], `missing part "${part}"`).toBeDefined();
      }
      expect(Object.keys(engine).sort()).toEqual([...parts].sort());
    });

    it('every part is a renderable React component', () => {
      for (const part of parts) {
        expect(isRenderable(engine[part]), `part "${part}" is not renderable`).toBe(true);
      }
    });
  });
});

describe('engine rendering (smoke)', () => {
  it('renders CheckboxEngine.Root with Indicator', () => {
    render(
      <CheckboxEngine.Root defaultChecked aria-label="agree">
        <CheckboxEngine.Indicator>x</CheckboxEngine.Indicator>
      </CheckboxEngine.Root>
    );
    const checkbox = screen.getByRole('checkbox', { name: 'agree' });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('renders SwitchEngine.Root with Thumb', () => {
    render(
      <SwitchEngine.Root defaultChecked aria-label="toggle">
        <SwitchEngine.Thumb />
      </SwitchEngine.Root>
    );
    expect(screen.getByRole('switch', { name: 'toggle' })).toBeInTheDocument();
  });

  it('renders TabsEngine with active content', () => {
    render(
      <TabsEngine.Root defaultValue="one">
        <TabsEngine.List>
          <TabsEngine.Trigger value="one">One</TabsEngine.Trigger>
          <TabsEngine.Trigger value="two">Two</TabsEngine.Trigger>
        </TabsEngine.List>
        <TabsEngine.Content value="one">First panel</TabsEngine.Content>
        <TabsEngine.Content value="two">Second panel</TabsEngine.Content>
      </TabsEngine.Root>
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByText('First panel')).toBeInTheDocument();
    expect(screen.queryByText('Second panel')).not.toBeInTheDocument();
  });

  it('renders AccordionEngine with collapsed content', () => {
    render(
      <AccordionEngine.Root type="single" defaultValue="a">
        <AccordionEngine.Item value="a">
          <AccordionEngine.Header>
            <AccordionEngine.Trigger>Section A</AccordionEngine.Trigger>
          </AccordionEngine.Header>
          <AccordionEngine.Content>Content A</AccordionEngine.Content>
        </AccordionEngine.Item>
      </AccordionEngine.Root>
    );
    expect(screen.getByRole('button', { name: 'Section A' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(screen.getByText('Content A')).toBeInTheDocument();
  });

  it('renders RadioEngine group with items', () => {
    render(
      <RadioEngine.Root defaultValue="a" aria-label="choices">
        <RadioEngine.Item value="a" aria-label="option a">
          <RadioEngine.Indicator />
        </RadioEngine.Item>
        <RadioEngine.Item value="b" aria-label="option b">
          <RadioEngine.Indicator />
        </RadioEngine.Item>
      </RadioEngine.Root>
    );
    expect(screen.getByRole('radiogroup', { name: 'choices' })).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  it('renders SliderEngine with correct aria values', () => {
    render(
      <SliderEngine.Root defaultValue={[40]} min={0} max={100}>
        <SliderEngine.Track>
          <SliderEngine.Range />
        </SliderEngine.Track>
        <SliderEngine.Thumb aria-label="volume" />
      </SliderEngine.Root>
    );
    const slider = screen.getByRole('slider', { name: 'volume' });
    expect(slider).toHaveAttribute('aria-valuenow', '40');
    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '100');
  });

  it('renders DialogEngine trigger (closed by default)', () => {
    render(
      <DialogEngine.Root>
        <DialogEngine.Trigger>Open dialog</DialogEngine.Trigger>
        <DialogEngine.Portal>
          <DialogEngine.Overlay />
          <DialogEngine.Content>
            <DialogEngine.Title>Title</DialogEngine.Title>
            <DialogEngine.Description>Description</DialogEngine.Description>
            <DialogEngine.Close>Close</DialogEngine.Close>
          </DialogEngine.Content>
        </DialogEngine.Portal>
      </DialogEngine.Root>
    );
    expect(screen.getByRole('button', { name: 'Open dialog' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

