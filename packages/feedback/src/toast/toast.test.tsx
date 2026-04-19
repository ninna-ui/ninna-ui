import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toast } from './toast';
import { Toaster, toast } from './toaster';

describe('Toast', () => {
  afterEach(() => {
    toast.dismissAll();
  });

  it('renders danger toast as alert role', () => {
    render(
      <Toast
        toast={{ id: 't1', title: 'Error', color: 'danger', closable: true }}
      />
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('dismisses via close button', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <Toast
        toast={{ id: 't1', title: 'Saved', color: 'success', closable: true }}
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
      toast.create({ title: 'All good', color: 'success' });
    });

    await waitFor(() => {
      expect(screen.getByText('All good')).toBeInTheDocument();
    });
  });

  it('soft variant applies tinted background', () => {
    render(
      <Toast
        toast={{ id: 't-soft', title: 'Soft', color: 'success', variant: 'soft', closable: true }}
      />
    );
    const el = screen.getByRole('status');
    expect(el.className).toContain('bg-success/10');
    expect(el.className).toContain('text-success');
  });

  it('solid variant applies full background', () => {
    render(
      <Toast
        toast={{ id: 't-solid', title: 'Solid', color: 'success', variant: 'solid', closable: true }}
      />
    );
    const el = screen.getByRole('status');
    expect(el.className).toContain('bg-success');
    expect(el.className).toContain('text-success-content');
  });

  it('outline variant applies transparent background', () => {
    render(
      <Toast
        toast={{ id: 't-outline', title: 'Outline', color: 'success', variant: 'outline', closable: true }}
      />
    );
    const el = screen.getByRole('status');
    expect(el.className).toContain('bg-transparent');
  });

  it('loading toast shows isLoading flag', () => {
    render(
      <Toast
        toast={{ id: 't-loading', title: 'Loading...', color: 'neutral', isLoading: true, closable: false }}
      />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Toast toast={{ id: 't1', title: 'Info', color: 'info', closable: true }} />
    );
    await expect(container).toBeAccessible();
  });
});
