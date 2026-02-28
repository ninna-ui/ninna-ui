import { Drawer } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DrawerPlacements() {
  const placements = ["left", "right", "top", "bottom"] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {placements.map((placement) => (
        <Drawer key={placement}>
          <Drawer.Trigger asChild>
            <Button variant="outline" size="sm">
              {placement}
            </Button>
          </Drawer.Trigger>
          <Drawer.Content placement={placement}>
            <Drawer.Close />
            <Drawer.Header>Placement: {placement}</Drawer.Header>
            <Drawer.Body>
              <p className="text-base-content/70">
                This drawer slides in from the <strong>{placement}</strong>.
              </p>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer>
      ))}
    </div>
  );
}
