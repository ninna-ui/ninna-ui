import { Card } from "@ninna-ui/data-display";

export default function Colors() {
  const colors = ["neutral", "primary", "secondary", "accent", "success", "danger", "warning", "info"] as const;
  const variants = ["outline", "soft", "solid", "elevated"] as const;

  return (
    <div className="flex flex-col gap-10">
      {variants.map((variant) => (
        <div key={variant} className="space-y-4">
          <h4 className="text-sm font-semibold text-base-content/50 uppercase tracking-wider">{variant.toUpperCase()} Variant</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((color) => (
              <Card key={`${variant}-${color}`} variant={variant} color={color}>
                <Card.Header>
                  <Card.Title className="text-base">{color.charAt(0).toUpperCase() + color.slice(1)}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p className="text-sm opacity-80 italic italic">{variant} color={color}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
