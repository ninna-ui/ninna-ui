import { Drawer } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DrawerPreventClose() {
  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">Persistent Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content closeOnOverlayClick={false} closeOnEscape={false}>
        <Drawer.Header>Cannot Dismiss</Drawer.Header>
        <Drawer.Body>
          <p className="text-base-content/70">
            This drawer can only be closed via the button below.
          </p>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button>Got it</Button>
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
