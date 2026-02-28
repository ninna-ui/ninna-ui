import { Badge } from "@ninna-ui/primitives";

export default function Radius() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge radius="none" color="primary">None</Badge>
      <Badge radius="sm" color="primary">Small</Badge>
      <Badge radius="md" color="primary">Medium</Badge>
      <Badge radius="lg" color="primary">Large</Badge>
      <Badge radius="xl" color="primary">Extra Large</Badge>
      <Badge radius="full" color="primary">Full</Badge>
    </div>
  );
}
