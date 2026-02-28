import { Mark, Text, Heading } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Search Results */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Search Results</Heading>
        <div className="space-y-2">
          <Text>
            The <Mark>React</Mark> library is a JavaScript library for building user interfaces.
          </Text>
          <Text>
            <Mark>React</Mark> makes it painless to create interactive UIs.
          </Text>
        </div>
      </div>

      {/* Important Information */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Important Information</Heading>
        <Text>
          Please note: <Mark color="danger">This action cannot be undone</Mark>. Make sure to backup your data before proceeding.
        </Text>
      </div>

      {/* Status Indicators */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Status Indicators</Heading>
        <div className="space-y-2">
          <Text>
            Build status: <Mark color="success">Passed</Mark>
          </Text>
          <Text>
            Tests: <Mark color="warning">2 pending</Mark>
          </Text>
          <Text>
            Deployment: <Mark color="info">In progress</Mark>
          </Text>
        </div>
      </div>

      {/* Code Documentation */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Code Documentation</Heading>
        <Text>
          The <Mark color="primary">useState</Mark> hook returns a stateful value and a function to update it. 
          Use <Mark color="primary">useEffect</Mark> for side effects.
        </Text>
      </div>
    </div>
  );
}
