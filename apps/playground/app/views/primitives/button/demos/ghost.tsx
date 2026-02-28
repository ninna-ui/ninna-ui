import { Button } from "@ninna-ui/primitives";

export default function Ghost() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="ghost" color="neutral">Neutral</Button>
      <Button variant="ghost" color="primary">Primary</Button>
      <Button variant="ghost" color="secondary">Secondary</Button>
      <Button variant="ghost" color="accent">Accent</Button>
      <Button variant="ghost" color="info">Info</Button>
      <Button variant="ghost" color="success">Success</Button>
      <Button variant="ghost" color="warning">Warning</Button>
      <Button variant="ghost" color="danger">Danger</Button>
    </div>
  );
} 
