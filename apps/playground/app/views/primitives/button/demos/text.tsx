import { Button } from "@ninna-ui/primitives";

export default function Text() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="text" color="neutral">Neutral</Button>
      <Button variant="text" color="primary">Primary</Button>
      <Button variant="text" color="secondary">Secondary</Button>
      <Button variant="text" color="accent">Accent</Button>
      <Button variant="text" color="info">Info</Button>
      <Button variant="text" color="success">Success</Button>
      <Button variant="text" color="warning">Warning</Button>
      <Button variant="text" color="danger">Danger</Button>
    </div>
  );
}
