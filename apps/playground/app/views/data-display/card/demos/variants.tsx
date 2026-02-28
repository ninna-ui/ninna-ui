import { Card } from "@ninna-ui/data-display";

export default function CardVariants() {
  const variants = ["outline", "elevated", "filled", "ghost"] as const;

  return (
    <div className="grid grid-cols-2 gap-4">
      {variants.map((variant) => (
        <Card key={variant} variant={variant}>
          <Card.Header>
            <Card.Title>{variant}</Card.Title>
            <Card.Description>Card variant</Card.Description>
          </Card.Header>
          <Card.Body>
            <p className="text-sm text-base-content/70">
              Content for {variant} variant.
            </p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
