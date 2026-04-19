import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileUpload } from './file-upload';

describe('FileUpload', () => {
  it('accepts files and calls onFilesChange', async () => {
    const user = userEvent.setup();
    const onFilesChange = vi.fn();
    render(<FileUpload onFilesChange={onFilesChange} />);

    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
    await user.upload(input, file);

    await waitFor(() => {
      expect(onFilesChange).toHaveBeenCalled();
    });
  });

  it('rejects invalid type and calls onFilesRejected', () => {
    const onFilesRejected = vi.fn();
    render(<FileUpload accept="image/*" onFilesRejected={onFilesRejected} />);

    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(['x'], 'doc.pdf', { type: 'application/pdf' });
    // fireEvent.change is required here: userEvent.upload respects the accept
    // attribute and won't fire change for non-matching files, but the component
    // does its own validation in processFiles.
    fireEvent.change(input, { target: { files: [file] } });

    expect(onFilesRejected).toHaveBeenCalled();
  });

  it('applies dropzone accessibility attributes', () => {
    const { container } = render(<FileUpload label="Upload file" helperText="Max 5MB" disabled />);
    const input = container.querySelector('input[type="file"]');
    expect(input).toHaveAttribute('disabled');
  });

  it('passes axe accessibility audit', async () => {
    const { container } = render(<FileUpload label="Upload document" helperText="PDF only" />);
    await expect(container).toBeAccessible();
  });
});
