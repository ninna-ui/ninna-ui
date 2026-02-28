import { Drawer } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DrawerSizes() {
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <Drawer key={size}>
          <Drawer.Trigger asChild>
            <Button variant="outline" size="sm">
              {size}
            </Button>
          </Drawer.Trigger>
          <Drawer.Content size={size}>
            <Drawer.Close />
            <Drawer.Header>Size: {size}</Drawer.Header>
            <Drawer.Body>
              <p className="text-base-content/70">
                Drawer with <code className="text-primary font-mono">size=&quot;{size}&quot;</code>.
              </p>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer>
      ))}
    </div>
  );
}
