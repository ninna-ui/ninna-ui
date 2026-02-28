import { Container, VStack } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Page Layout */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Page Layout</p>
        <div className="bg-base-200 py-4">
          <Container maxWidth="lg">
            <VStack gap="4">
              <header className="p-4 bg-base-100 rounded-lg shadow">
                <h1 className="text-xl font-bold text-base-content">Header</h1>
              </header>
              <main className="p-4 bg-base-100 rounded-lg shadow min-h-[100px]">
                <p className="text-base-content/70">Main content area</p>
              </main>
              <footer className="p-4 bg-base-100 rounded-lg shadow">
                <p className="text-sm text-base-content/70">Footer</p>
              </footer>
            </VStack>
          </Container>
        </div>
      </div>

      {/* Article Layout */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Article Layout (narrow)</p>
        <div className="bg-base-200 py-4">
          <Container maxWidth="md">
            <article className="p-6 bg-base-100 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-base-content mb-4">Article Title</h2>
              <p className="text-base-content/70 leading-relaxed">
                This is an article with a narrower container for better readability. 
                Long-form content benefits from constrained widths.
              </p>
            </article>
          </Container>
        </div>
      </div>
    </div>
  );
}
