import { Container } from "@ninna-ui/layout";

export default function Center() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-base-content/70 mb-2">center=true (default)</p>
        <div className="bg-base-200">
          <Container maxWidth="sm" center={true}>
            <div className="p-3 bg-primary/10 rounded text-center text-sm">
              Centered container
            </div>
          </Container>
        </div>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">center=false</p>
        <div className="bg-base-200">
          <Container maxWidth="sm" center={false}>
            <div className="p-3 bg-primary/10 rounded text-center text-sm">
              Left-aligned container
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
