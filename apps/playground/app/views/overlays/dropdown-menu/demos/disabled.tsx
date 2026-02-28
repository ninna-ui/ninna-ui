import { DropdownMenu } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DropdownMenuDisabled() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" size="sm">File</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>New</DropdownMenu.Item>
        <DropdownMenu.Item>Open</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Save (disabled)</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Save As (disabled)</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Close</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
