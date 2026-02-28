import { Badge } from "@ninna-ui/primitives";

export default function Soft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="soft" color="neutral">Neutral</Badge>
      <Badge variant="soft" color="primary">Primary</Badge>
      <Badge variant="soft" color="secondary">Secondary</Badge>
      <Badge variant="soft" color="accent">Accent</Badge>
      <Badge variant="soft" color="info">Info</Badge>
      <Badge variant="soft" color="success">Success</Badge>
      <Badge variant="soft" color="warning">Warning</Badge>
      <Badge variant="soft" color="danger">Danger</Badge>
    </div>
  );
}
