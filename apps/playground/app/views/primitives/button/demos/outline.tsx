import { Button } from "@ninna-ui/primitives";

export default function Outline() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" color="neutral">Neutral</Button>
      <Button variant="outline" color="primary">Primary</Button>
      <Button variant="outline" color="secondary">Secondary</Button>
      <Button variant="outline" color="accent">Accent</Button>
      <Button variant="outline" color="info">Info</Button>
      <Button variant="outline" color="success">Success</Button>
      <Button variant="outline" color="warning">Warning</Button>
      <Button variant="outline" color="danger">Danger</Button>
    </div>
  );
}
