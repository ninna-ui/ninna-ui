import { Field, Input } from "@ninna-ui/forms";

export default function AllProps() {
  return (
    <div className="flex flex-col gap-6 w-80">
      <Field label="With optional text" optionalText="Optional">
        <Input placeholder="Optional field" />
      </Field>
      <Field label="Disabled field" disabled>
        <Input placeholder="Disabled" />
      </Field>
      <Field label="Small size" size="sm">
        <Input placeholder="Small input" />
      </Field>
      <Field label="Large size" size="lg">
        <Input placeholder="Large input" />
      </Field>
    </div>
  );
}
