import { Field, Input } from '@ninna-ui/forms';

export default function HelperTextDemo() {
  return (
    <Field label="Email" helperText="We'll never share your email with anyone.">
      <Input type="email" placeholder="john@example.com" />
    </Field>
  );
}
