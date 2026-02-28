import { Switch } from "@ninna-ui/forms";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  );
}
