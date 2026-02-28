import { useState } from "react";
import { DropdownMenu } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

export default function DropdownMenuRadio() {
  const [sortBy, setSortBy] = useState("date");

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" size="sm">Sort By</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Sort Order</DropdownMenu.Label>
        <DropdownMenu.RadioGroup value={sortBy} onValueChange={setSortBy}>
          <DropdownMenu.RadioItem value="name">Name</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="date">Date Modified</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="size">Size</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="type">Type</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
