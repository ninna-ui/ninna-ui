import { DropdownMenu } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" size="sm">More Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>New File</DropdownMenu.Item>
        <DropdownMenu.Item>Open</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Email</DropdownMenu.Item>
            <DropdownMenu.Item>Slack</DropdownMenu.Item>
            <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Export As</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>PDF</DropdownMenu.Item>
            <DropdownMenu.Item>CSV</DropdownMenu.Item>
            <DropdownMenu.Item>JSON</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item destructive>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
