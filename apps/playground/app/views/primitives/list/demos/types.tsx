import { List, ListItem } from "@ninna-ui/primitives";

export default function Types() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Unordered (default)</p>
        <List type="unordered">
          <ListItem>Apple</ListItem>
          <ListItem>Banana</ListItem>
          <ListItem>Cherry</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Ordered</p>
        <List type="ordered">
          <ListItem>First step</ListItem>
          <ListItem>Second step</ListItem>
          <ListItem>Third step</ListItem>
        </List>
      </div>
    </div>
  );
}
