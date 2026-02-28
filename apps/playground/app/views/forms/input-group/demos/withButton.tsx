import { Input, InputGroup } from "@ninna-ui/forms";
import { Button } from "@ninna-ui/primitives";
import { Send } from "lucide-react";

export default function WithButton() {
  return (
    <div className="flex flex-col gap-4 w-80">
      <InputGroup 
        endElement={<Button size="sm">Send</Button>}
        endElementPointerEvents="auto"
      >
        <Input placeholder="Enter message..." />
      </InputGroup>
      <InputGroup 
        endElement={
          <Button size="sm" variant="ghost">
            <Send className="w-4 h-4" />
          </Button>
        }
        endElementPointerEvents="auto"
      >
        <Input placeholder="Type a message..." />
      </InputGroup>
    </div>
  );
}
