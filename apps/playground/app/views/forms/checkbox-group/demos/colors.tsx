import { CheckboxGroup, CheckboxGroupItem } from "@ninna-ui/forms";

export default function Colors() {
  return (
    <div className="flex flex-wrap gap-6">
      <CheckboxGroup color="neutral" defaultValue={["neutral"]}>
        <CheckboxGroupItem value="neutral" label="Neutral" />
      </CheckboxGroup>
      <CheckboxGroup color="primary" defaultValue={["primary"]}>
        <CheckboxGroupItem value="primary" label="Primary" />
      </CheckboxGroup>
      <CheckboxGroup color="secondary" defaultValue={["secondary"]}>
        <CheckboxGroupItem value="secondary" label="Secondary" />
      </CheckboxGroup>
      <CheckboxGroup color="accent" defaultValue={["accent"]}>
        <CheckboxGroupItem value="accent" label="Accent" />
      </CheckboxGroup>
      <CheckboxGroup color="info" defaultValue={["info"]}>
        <CheckboxGroupItem value="info" label="Info" />
      </CheckboxGroup>
      <CheckboxGroup color="success" defaultValue={["success"]}>
        <CheckboxGroupItem value="success" label="Success" />
      </CheckboxGroup>
      <CheckboxGroup color="warning" defaultValue={["warning"]}>
        <CheckboxGroupItem value="warning" label="Warning" />
      </CheckboxGroup>
      <CheckboxGroup color="danger" defaultValue={["danger"]}>
        <CheckboxGroupItem value="danger" label="Danger" />
      </CheckboxGroup>
    </div>
  );
}
