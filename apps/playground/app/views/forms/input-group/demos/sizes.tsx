import { Input, InputGroup } from "@ninna-ui/forms";
import { Search } from "lucide-react";

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <InputGroup size="xs" startElement={<Search className="w-3 h-3" />}>
        <Input placeholder="Extra small" />
      </InputGroup>
      <InputGroup size="sm" startElement={<Search className="w-3.5 h-3.5" />}>
        <Input placeholder="Small" />
      </InputGroup>
      <InputGroup size="md" startElement={<Search className="w-4 h-4" />}>
        <Input placeholder="Medium" />
      </InputGroup>
      <InputGroup size="lg" startElement={<Search className="w-5 h-5" />}>
        <Input placeholder="Large" />
      </InputGroup>
      <InputGroup size="xl" startElement={<Search className="w-5 h-5" />}>
        <Input placeholder="Extra large" />
      </InputGroup>
    </div>
  );
}
