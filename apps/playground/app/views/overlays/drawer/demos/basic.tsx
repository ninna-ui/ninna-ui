import { Drawer } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function BasicDrawer() {
  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>Drawer Title</Drawer.Header>
        <Drawer.Body>
          <p className="text-base-content/70">
            This is a basic right-side drawer with header, body, and footer.
          </p>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Drawer.Close>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
