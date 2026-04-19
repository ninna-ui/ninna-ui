import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FormControl, useFormControlProps } from './form-control';

function ControlInput() {
  const props = useFormControlProps({ 'data-testid': 'control-input' });
  return <input {...props} />;
}

describe('FormControl', () => {
  it('provides ARIA props to descendants', () => {
    render(
      <FormControl id="email" isRequired isInvalid>
        <ControlInput />
      </FormControl>
    );

    const input = screen.getByTestId('control-input');
    expect(input).toHaveAttribute('id', 'email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'email-message');
  });

  it('renders group role on root', () => {
    render(<FormControl data-testid="fc">{null}</FormControl>);
    expect(screen.getByTestId('fc')).toHaveAttribute('role', 'group');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FormControl id="name" isRequired>
        <label id="name-label" htmlFor="name">Name</label>
        <ControlInput />
        <p id="name-message">Required field</p>
      </FormControl>
    );
    await expect(container).toBeAccessible();
  });
});
