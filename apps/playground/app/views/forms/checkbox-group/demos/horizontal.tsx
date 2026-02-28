import { CheckboxGroup, CheckboxGroupItem } from "@ninna-ui/forms";

export default function Horizontal() {
  return (
    <CheckboxGroup orientation="horizontal" defaultValue={["email"]}>
      <CheckboxGroupItem value="email" label="Email" />
      <CheckboxGroupItem value="sms" label="SMS" />
      <CheckboxGroupItem value="push" label="Push" />
    </CheckboxGroup>
  );
}
