import { List, ListItem } from "@ninna-ui/primitives";

export default function Spacing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">None</p>
        <List spacing="none">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Small</p>
        <List spacing="sm">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Medium</p>
        <List spacing="md">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Large</p>
        <List spacing="lg">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>
    </div>
  );
}
