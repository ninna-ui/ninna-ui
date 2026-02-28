import { DropdownMenu } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DropdownMenuGroups() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" size="sm">Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Group>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Label>Team</DropdownMenu.Label>
        <DropdownMenu.Group>
          <DropdownMenu.Item>Members</DropdownMenu.Item>
          <DropdownMenu.Item>Invitations</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item destructive>Delete Account</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
