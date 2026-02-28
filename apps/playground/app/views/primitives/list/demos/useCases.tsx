import { List, ListItem, Heading, Text } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Feature List */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Feature List</Heading>
        <List marker="check" markerColor="success" spacing="md">
          <ListItem>Unlimited projects</ListItem>
          <ListItem>Priority support</ListItem>
          <ListItem>Advanced analytics</ListItem>
          <ListItem>Custom integrations</ListItem>
          <ListItem>Team collaboration</ListItem>
        </List>
      </div>

      {/* Steps/Instructions */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Getting Started</Heading>
        <List type="ordered" spacing="md">
          <ListItem>Create an account on our platform</ListItem>
          <ListItem>Verify your email address</ListItem>
          <ListItem>Complete your profile setup</ListItem>
          <ListItem>Start your first project</ListItem>
        </List>
      </div>

      {/* Navigation Links */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Quick Links</Heading>
        <List marker="arrow" markerColor="primary" spacing="sm">
          <ListItem>Documentation</ListItem>
          <ListItem>API Reference</ListItem>
          <ListItem>Examples</ListItem>
          <ListItem>Community Forum</ListItem>
        </List>
      </div>

      {/* Nested Lists */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">Project Structure</Heading>
        <List spacing="sm" marker="none">
          <ListItem>
            <div>
              <Text weight="medium">src/</Text>
              <List className="mt-1" marker="circle" spacing="none">
                <ListItem>components/</ListItem>
                <ListItem>hooks/</ListItem>
                <ListItem>utils/</ListItem>
              </List>
            </div>
          </ListItem>
          <ListItem>
            <div>
              <Text weight="medium">public/</Text>
              <List className="mt-1" marker="circle" spacing="none">
                <ListItem>images/</ListItem>
                <ListItem>fonts/</ListItem>
              </List>
            </div>
          </ListItem>
          <ListItem>
            <Text weight="medium">package.json</Text>
          </ListItem>
          <ListItem>
            <Text weight="medium">README.md</Text>
          </ListItem>
        </List>
      </div>

      {/* Requirements */}
      <div className="p-4 border border-base-300 rounded-lg">
        <Heading as="h4" className="mb-4">System Requirements</Heading>
        <List marker="square" markerColor="info" spacing="sm">
          <ListItem>Node.js 18.0 or higher</ListItem>
          <ListItem>npm 9.0 or pnpm 8.0</ListItem>
          <ListItem>Modern browser (Chrome, Firefox, Safari, Edge)</ListItem>
          <ListItem>4GB RAM minimum</ListItem>
        </List>
      </div>
    </div>
  );
}
