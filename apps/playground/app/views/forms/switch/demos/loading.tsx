import { Switch } from "@ninna-ui/forms";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Switch loading label="Loading state" />
      <Switch loading defaultChecked label="Loading while checked" />
    </div>
  );
}
