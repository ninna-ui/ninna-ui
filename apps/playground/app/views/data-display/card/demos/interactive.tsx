import { Card } from "@ninna-ui/data-display";

export default function CardInteractive() {
  return (
    <div className="flex gap-4">
      <Card interactive className="w-64 cursor-pointer">
        <Card.Header>
          <Card.Title>Clickable</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-base-content/70">Hover to see the effect.</p>
        </Card.Body>
      </Card>
      <Card className="w-64">
        <Card.Header>
          <Card.Title>Static</Card.Title>
        </Card.Header>
        <Card.Body>
          <p className="text-sm text-base-content/70">No hover effect.</p>
        </Card.Body>
      </Card>
    </div>
  );
}
