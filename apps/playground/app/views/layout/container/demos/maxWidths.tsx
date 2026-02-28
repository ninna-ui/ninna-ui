import { Container } from "@ninna-ui/layout";

export default function MaxWidths() {
  const widths = ["sm", "md", "lg", "xl", "2xl", "full"] as const;

  return (
    <div className="space-y-4">
      {widths.map((width) => (
        <div key={width} className="bg-base-200">
          <Container maxWidth={width} className="py-2">
            <div className="p-3 bg-primary/10 rounded text-center text-sm">
              maxWidth="{width}"
            </div>
          </Container>
        </div>
      ))}
    </div>
  );
}
