import { Button } from "@ninna-ui/primitives";

export default function Soft() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="soft" color="neutral">Neutral</Button>
      <Button variant="soft" color="primary">Primary</Button>
      <Button variant="soft" color="secondary">Secondary</Button>
      <Button variant="soft" color="accent">Accent</Button>
      <Button variant="soft" color="info">Info</Button>
      <Button variant="soft" color="success">Success</Button>
      <Button variant="soft" color="warning">Warning</Button>
      <Button variant="soft" color="danger">Danger</Button>
    </div>
  );
}
