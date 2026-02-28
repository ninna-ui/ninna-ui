import { FormGroup, Field, Input } from "@ninna-ui/forms";

export default function Direction() {
  return (
    <div className="w-full max-w-xl space-y-8">
      <FormGroup legend="Vertical (default)" direction="vertical">
        <Field label="First Name">
          <Input placeholder="John" />
        </Field>
        <Field label="Last Name">
          <Input placeholder="Doe" />
        </Field>
      </FormGroup>

      <FormGroup legend="Horizontal" direction="horizontal">
        <Field label="First Name">
          <Input placeholder="John" />
        </Field>
        <Field label="Last Name">
          <Input placeholder="Doe" />
        </Field>
        <Field label="Middle">
          <Input placeholder="M." />
        </Field>
      </FormGroup>
    </div>
  );
}
