import { List, ListItem } from "@ninna-ui/primitives";

export default function Colors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Neutral</p>
        <List markerColor="neutral">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Primary</p>
        <List markerColor="primary">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Secondary</p>
        <List markerColor="secondary">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Accent</p>
        <List markerColor="accent">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Info</p>
        <List markerColor="info">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Success</p>
        <List markerColor="success">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Warning</p>
        <List markerColor="warning">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Danger</p>
        <List markerColor="danger">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
        </List>
      </div>
    </div>
  );
}
