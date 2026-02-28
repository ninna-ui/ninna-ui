import { Badge } from "@ninna-ui/primitives";

export default function Outline() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" color="neutral">Neutral</Badge>
      <Badge variant="outline" color="primary">Primary</Badge>
      <Badge variant="outline" color="secondary">Secondary</Badge>
      <Badge variant="outline" color="accent">Accent</Badge>
      <Badge variant="outline" color="info">Info</Badge>
      <Badge variant="outline" color="success">Success</Badge>
      <Badge variant="outline" color="warning">Warning</Badge>
      <Badge variant="outline" color="danger">Danger</Badge>
    </div>
  );
}
