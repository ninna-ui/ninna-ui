import { Badge } from "@ninna-ui/primitives";

export default function Size() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="xs" color="primary">XSmall</Badge>
      <Badge size="sm" color="primary">Small</Badge>
      <Badge size="md" color="primary">Medium</Badge>
      <Badge size="lg" color="primary">Large</Badge>
      <Badge size="xl" color="primary">XLarge</Badge>
    </div>
  );
}
