import { Drawer } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DrawerWithForm() {
  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">Edit Settings</Button>
      </Drawer.Trigger>
      <Drawer.Content placement="right" size="md">
        <Drawer.Close />
        <Drawer.Header>Edit Settings</Drawer.Header>
        <Drawer.Body>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-base-content mb-1 block">Name</label>
              <input id="name" className="w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-sm" placeholder="Enter name" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-base-content mb-1 block">Email</label>
              <input id="email" className="w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-sm" placeholder="Enter email" />
            </div>
            <div>
              <label htmlFor="bio" className="text-sm font-medium text-base-content mb-1 block">Bio</label>
              <textarea id="bio" className="w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-sm" rows={4} placeholder="Tell us about yourself" />
            </div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Drawer.Close>
          <Button>Save Changes</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
