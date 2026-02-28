import { Field, Textarea } from '@ninna-ui/forms';

export default function OptionalDemo() {
  return (
    <Field label="Bio" optionalText="Optional">
      <Textarea placeholder="Tell us about yourself" />
    </Field>
  );
}
