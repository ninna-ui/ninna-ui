import { Drawer } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DrawerWithDescription() {
  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button>Open Settings</Button>
      </Drawer.Trigger>
      <Drawer.Content description="Configure your account preferences and settings">
        <Drawer.Header>Settings</Drawer.Header>
        <Drawer.Body>
          <div className="space-y-4">
            <div>
              <label htmlFor="notifications" className="block text-sm font-medium text-base-content mb-2">
                Notifications
              </label>
              <input id="notifications" type="checkbox" defaultChecked /> Enable notifications
            </div>
            <div>
              <label htmlFor="theme" className="block text-sm font-medium text-base-content mb-2">
                Theme
              </label>
              <select id="theme" className="w-full px-3 py-2 border border-base-300 rounded">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Drawer.Close>
          <Button>Save Settings</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
