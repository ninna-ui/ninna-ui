import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { Toast } from './toast';
import { Toaster, toast } from './toaster';

describe('Toast', () => {
  afterEach(() => {
    toast.dismissAll();
  });

  it('renders danger toast as alert role', () => {
    render(
      <Toast
        toast={{ id: 't1', title: 'Error', type: 'danger', closable: true }}
      />
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('dismisses via close button', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <Toast
        toast={{ id: 't1', title: 'Saved', type: 'success', closable: true }}
        onDismiss={onDismiss}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Close notification' }));
    await waitFor(() => {
      expect(onDismiss).toHaveBeenCalledWith('t1');
    });
  });

  it('renders global toasts through Toaster', async () => {
    render(<Toaster />);
    act(() => {
      toast.success('All good');
    });

    await waitFor(() => {
      expect(screen.getByText('All good')).toBeInTheDocument();
    });
  });

  it('soft variant applies left accent bar', () => {
    render(
      <Toast
        toast={{ id: 't-soft', title: 'Soft', type: 'success', variant: 'soft', closable: true }}
      />
    );
    const el = screen.getByRole('status');
    expect(el.className).toContain('border-l-4');
    expect(el.className).toContain('border-l-success');
  });

  it('outline variant does not have left accent bar', () => {
    render(
      <Toast
        toast={{ id: 't-outline', title: 'Outline', type: 'success', variant: 'outline', closable: true }}
      />
    );
    const el = screen.getByRole('status');
    expect(el.className).not.toContain('border-l-4');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Toast toast={{ id: 't1', title: 'Info', type: 'info', closable: true }} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
