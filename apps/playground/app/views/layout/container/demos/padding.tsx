import { Container } from "@ninna-ui/layout";

export default function Padding() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-base-content/70 mb-2">padding=true (default)</p>
        <div className="bg-base-200">
          <Container maxWidth="md" padding={true}>
            <div className="p-3 bg-primary/10 rounded text-center text-sm">
              With horizontal padding
            </div>
          </Container>
        </div>
      </div>
      <div>
        <p className="text-sm text-base-content/70 mb-2">padding=false</p>
        <div className="bg-base-200">
          <Container maxWidth="md" padding={false}>
            <div className="p-3 bg-primary/10 rounded text-center text-sm">
              No horizontal padding
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
