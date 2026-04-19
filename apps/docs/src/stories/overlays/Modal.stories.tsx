import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '@ninna-ui/overlays';
import { Button } from '@ninna-ui/primitives';

const meta: Meta = {
  title: 'Overlays/Modal',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state',
      table: { defaultValue: { summary: 'undefined' } },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Default open state (uncontrolled)',
      table: { defaultValue: { summary: 'false' } },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
    modal: {
      control: 'boolean',
      description: 'Whether the modal blocks interaction with the rest of the page',
      table: { defaultValue: { summary: 'true' } },
    },
    title: {
      control: 'text',
      description: 'Accessible title for the modal (sr-only if no header)',
    },
    description: {
      control: 'text',
      description: 'Accessible description for the modal (sr-only)',
    },
  },
};

export default meta;
type Story = StoryObj;
const DefaultExample = () => {
    const [open, setOpen] = useState(false);
    return (
      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild>
          <Button>Open Modal</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            <p className="text-base-content/70">This is a basic modal dialog with default settings.</p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild>
              <Button variant="ghost">Cancel</Button>
            </Modal.Close>
            <Button>Confirm</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
  };

export const Default: Story = {
  render: DefaultExample,
};

export const Sizes: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'] as const;
    return (
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Modal key={`modal-${size}`}>
            <Modal.Trigger asChild>
              <Button variant="outline">{size.toUpperCase()}</Button>
            </Modal.Trigger>
            <Modal.Content size={size}>
              <Modal.Header>Size: {size}</Modal.Header>
              <Modal.Body>
                <p className="text-base-content/70">
                  This modal uses <code className="text-primary font-mono">size=&quot;{size}&quot;</code>.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Modal.Close asChild>
                  <Button variant="ghost">Close</Button>
                </Modal.Close>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        ))}
      </div>
    );
  },
};

export const Centered: Story = {
  render: () => (
    <div className="flex gap-2">
      <Modal>
        <Modal.Trigger asChild>
          <Button>Centered (default)</Button>
        </Modal.Trigger>
        <Modal.Content centered>
          <Modal.Header>Centered Modal</Modal.Header>
          <Modal.Body>
            <p className="text-base-content/70">This modal is vertically centered.</p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild><Button variant="ghost">Close</Button></Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal>
        <Modal.Trigger asChild>
          <Button variant="outline">Top Aligned</Button>
        </Modal.Trigger>
        <Modal.Content centered={false}>
          <Modal.Header>Top Aligned Modal</Modal.Header>
          <Modal.Body>
            <p className="text-base-content/70">This modal is aligned to the top.</p>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close asChild><Button variant="ghost">Close</Button></Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  ),
};
const ControlledExample = () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setOpen(true)}>Open Controlled Modal</Button>
        <p className="text-sm text-base-content/70">Modal is {open ? 'open' : 'closed'}</p>
        <Modal open={open} onOpenChange={setOpen}>
          <Modal.Content>
            <Modal.Header>Controlled Modal</Modal.Header>
            <Modal.Body>
              <p className="text-base-content/70">This modal is controlled via state.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Done</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </div>
    );
  };

export const Controlled: Story = {
  render: ControlledExample,
};

export const PreventClose: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Cannot Dismiss</Button>
      </Modal.Trigger>
      <Modal.Content closeOnOverlayClick={false} closeOnEscape={false}>
        <Modal.Header>Persistent Modal</Modal.Header>
        <Modal.Body>
          <p className="text-base-content/70">
            This modal cannot be closed by clicking the overlay or pressing Escape.
            You must use the close button.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button>Acknowledge</Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Open with Close Button</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Close />
        <Modal.Header>With Close Icon</Modal.Header>
        <Modal.Body>
          <p className="text-base-content/70">This modal has a close icon button in the corner.</p>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Scrollable Content</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>Long Content</Modal.Header>
        <Modal.Body>
          {[
            <p key="modal-paragraph-1" className="text-base-content/70 mb-4">
              Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-2" className="text-base-content/70 mb-4">
              Paragraph 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-3" className="text-base-content/70 mb-4">
              Paragraph 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-4" className="text-base-content/70 mb-4">
              Paragraph 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-5" className="text-base-content/70 mb-4">
              Paragraph 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-6" className="text-base-content/70 mb-4">
              Paragraph 6: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-7" className="text-base-content/70 mb-4">
              Paragraph 7: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-8" className="text-base-content/70 mb-4">
              Paragraph 8: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-9" className="text-base-content/70 mb-4">
              Paragraph 9: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-10" className="text-base-content/70 mb-4">
              Paragraph 10: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-11" className="text-base-content/70 mb-4">
              Paragraph 11: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-12" className="text-base-content/70 mb-4">
              Paragraph 12: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-13" className="text-base-content/70 mb-4">
              Paragraph 13: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-14" className="text-base-content/70 mb-4">
              Paragraph 14: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-15" className="text-base-content/70 mb-4">
              Paragraph 15: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-16" className="text-base-content/70 mb-4">
              Paragraph 16: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-17" className="text-base-content/70 mb-4">
              Paragraph 17: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-18" className="text-base-content/70 mb-4">
              Paragraph 18: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-19" className="text-base-content/70 mb-4">
              Paragraph 19: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
            <p key="modal-paragraph-20" className="text-base-content/70 mb-4">
              Paragraph 20: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>,
          ]}
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild><Button variant="ghost">Close</Button></Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};
export const Headless: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger asChild>
        <Button>Open Headless Modal</Button>
      </Modal.Trigger>
      <Modal.Content title="Accessible Title" description="This modal uses the title prop for accessibility instead of Modal.Header.">
        <Modal.Body>
          <p className="text-base-content/70">
            This modal has no header but remains accessible via the <code className="text-primary font-mono">title</code> prop.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild><Button>Dismiss</Button></Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  ),
};
