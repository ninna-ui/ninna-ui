import { List, ListItem } from "@ninna-ui/primitives";

export default function Markers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Disc (default)</p>
        <List marker="disc">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Circle</p>
        <List marker="circle">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Square</p>
        <List marker="square">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Decimal</p>
        <List type="ordered" marker="decimal">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Alpha</p>
        <List type="ordered" marker="alpha">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Roman</p>
        <List type="ordered" marker="roman">
          <ListItem>Item one</ListItem>
          <ListItem>Item two</ListItem>
          <ListItem>Item three</ListItem>
        </List>
      </div>
    </div>
  );
}
