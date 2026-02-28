import { List, ListItem } from "@ninna-ui/primitives";

export default function IconMarkers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p className="text-sm text-base-content/70 mb-2">Check markers</p>
        <List marker="check" markerColor="success">
          <ListItem>Completed task</ListItem>
          <ListItem>Another completed task</ListItem>
          <ListItem>Yet another done</ListItem>
        </List>
      </div>

      <div>
        <p className="text-sm text-base-content/70 mb-2">Arrow markers</p>
        <List marker="arrow" markerColor="primary">
          <ListItem>Navigate here</ListItem>
          <ListItem>Then go here</ListItem>
          <ListItem>Finally here</ListItem>
        </List>
      </div>
    </div>
  );
}
