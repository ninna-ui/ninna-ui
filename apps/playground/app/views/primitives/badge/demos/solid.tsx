import { Badge } from "@ninna-ui/primitives";

export default function Solid() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="solid" color="neutral">Neutral</Badge>
      <Badge variant="solid" color="primary">Primary</Badge>
      <Badge variant="solid" color="secondary">Secondary</Badge>
      <Badge variant="solid" color="accent">Accent</Badge>
      <Badge variant="solid" color="info">Info</Badge>
      <Badge variant="solid" color="success">Success</Badge>
      <Badge variant="solid" color="warning">Warning</Badge>
      <Badge variant="solid" color="danger">Danger</Badge>
    </div>
  );
}
