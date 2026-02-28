import { FormGroup, Field, Input } from "@ninna-ui/forms";

export default function Spacing() {
  return (
    <div className="w-full max-w-md space-y-10">
      <FormGroup legend="Small Spacing" spacing="sm">
        <Field label="Field 1">
          <Input placeholder="Input 1" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Input 2" />
        </Field>
      </FormGroup>

      <FormGroup legend="Medium Spacing (default)" spacing="md">
        <Field label="Field 1">
          <Input placeholder="Input 1" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Input 2" />
        </Field>
      </FormGroup>

      <FormGroup legend="Large Spacing" spacing="lg">
        <Field label="Field 1">
          <Input placeholder="Input 1" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Input 2" />
        </Field>
      </FormGroup>
    </div>
  );
}
