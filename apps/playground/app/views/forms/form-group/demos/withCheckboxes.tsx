import { FormGroup, Checkbox, RadioGroup, RadioGroupItem } from "@ninna-ui/forms";

export default function WithCheckboxes() {
  return (
    <div className="w-full max-w-md space-y-8">
      <FormGroup
        legend="Notification Preferences"
        description="Choose how you want to be notified."
      >
        <Checkbox label="Email notifications" defaultChecked />
        <Checkbox label="SMS notifications" />
        <Checkbox label="Push notifications" defaultChecked />
      </FormGroup>

      <FormGroup
        legend="Shipping Method"
        description="Select your preferred shipping option."
      >
        <RadioGroup defaultValue="standard">
          <RadioGroupItem value="standard" label="Standard (5–7 days)" />
          <RadioGroupItem value="express" label="Express (2–3 days)" />
          <RadioGroupItem value="overnight" label="Overnight" />
        </RadioGroup>
      </FormGroup>
    </div>
  );
}
