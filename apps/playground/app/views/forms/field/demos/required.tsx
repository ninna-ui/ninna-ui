import { Field, Input } from '@ninna-ui/forms';

export default function RequiredDemo() {
  return (
    <Field label="Username" required>
      <Input placeholder="Enter username" />
    </Field>
  );
}
