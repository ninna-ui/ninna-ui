import { CheckboxGroup, CheckboxGroupItem } from "@ninna-ui/forms";

export default function Basic() {
  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-base-content/70">Select frameworks</span>
      <CheckboxGroup defaultValue={["react"]}>
        <CheckboxGroupItem value="react" label="React" />
        <CheckboxGroupItem value="vue" label="Vue" />
        <CheckboxGroupItem value="angular" label="Angular" />
        <CheckboxGroupItem value="svelte" label="Svelte" />
      </CheckboxGroup>
    </div>
  );
}
