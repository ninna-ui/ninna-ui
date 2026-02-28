import { FormGroup, Field, Input } from "@ninna-ui/forms";

export default function Basic() {
  return (
    <div className="w-full max-w-md space-y-8">
      <FormGroup legend="Personal Information">
        <Field label="First Name">
          <Input placeholder="John" />
        </Field>
        <Field label="Last Name">
          <Input placeholder="Doe" />
        </Field>
        <Field label="Email">
          <Input type="email" placeholder="john@example.com" />
        </Field>
      </FormGroup>

      <FormGroup
        legend="Contact Details"
        description="Please provide your contact information."
      >
        <Field label="Phone">
          <Input type="tel" placeholder="+1 (555) 123-4567" />
        </Field>
        <Field label="Website">
          <Input type="url" placeholder="https://example.com" />
        </Field>
      </FormGroup>
    </div>
  );
}
