import { Card } from "@ninna-ui/data-display";
import { Button } from "@ninna-ui/primitives";

export default function BasicCard() {
  return (
    <Card className="w-[350px]">
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>A brief description of the card content.</Card.Description>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-base-content/70">
          This is a basic card with header, body, and footer sections.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button size="sm">Action</Button>
      </Card.Footer>
    </Card>
  );
}
