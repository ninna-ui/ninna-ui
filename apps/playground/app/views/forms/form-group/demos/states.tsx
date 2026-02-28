import { FormGroup, Field, Input } from "@ninna-ui/forms";

export default function States() {
  return (
    <div className="w-full max-w-md space-y-8">
      <FormGroup legend="Required Group" required>
        <Field label="Username" required>
          <Input placeholder="username" />
        </Field>
        <Field label="Password" required>
          <Input type="password" placeholder="••••••••" />
        </Field>
      </FormGroup>

      <FormGroup legend="Disabled Group" disabled>
        <Field label="Field 1">
          <Input placeholder="Cannot edit" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Cannot edit" />
        </Field>
      </FormGroup>
    </div>
  );
}
