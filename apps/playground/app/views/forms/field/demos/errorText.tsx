import { Field, Input } from '@ninna-ui/forms';

export default function ErrorTextDemo() {
  return (
    <Field label="Password" errorText="Password must be at least 8 characters" invalid>
      <Input type="password" placeholder="Enter password" />
    </Field>
  );
}
