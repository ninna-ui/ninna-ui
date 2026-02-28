import { Container } from "@ninna-ui/layout";

export default function Basic() {
  return (
    <div className="bg-base-200 py-4">
      <Container maxWidth="lg" className="bg-base-100 p-4 rounded-lg shadow">
        <p className="text-base-content/70">
          This content is wrapped in a Container with max-width "lg".
        </p>
      </Container>
    </div>
  );
}
