import { Input, InputGroup } from "@ninna-ui/forms";
import { Button } from "@ninna-ui/primitives";
import { Send } from "lucide-react";

export default function WithButton() {
  return (
    <div className="flex flex-col gap-4 w-80">
      {/*
        InputGroup auto-detects interactive descendants (button, a, input,
        [role="button"]) and routes pointer events to them, so no
        `endElementPointerEvents="auto"` prop is required for these cases.
      */}
      <InputGroup endElement={<Button size="sm">Send</Button>}>
        <Input placeholder="Enter message..." />
      </InputGroup>
      <InputGroup
        endElement={
          <Button size="sm" variant="ghost">
            <Send className="w-4 h-4" />
          </Button>
        }
      >
        <Input placeholder="Type a message..." />
      </InputGroup>
    </div>
  );
}
