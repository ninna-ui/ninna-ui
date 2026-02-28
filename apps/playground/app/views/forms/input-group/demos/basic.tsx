import { Input, InputGroup } from "@ninna-ui/forms";
import { Search, Mail, Eye } from "lucide-react";

export default function Basic() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <InputGroup startElement={<Search className="w-4 h-4" />}>
        <Input placeholder="Search..." />
      </InputGroup>
      <InputGroup startElement={<Mail className="w-4 h-4" />}>
        <Input placeholder="Email" type="email" />
      </InputGroup>
      <InputGroup endElement={<Eye className="w-4 h-4" />}>
        <Input placeholder="Password" type="password" />
      </InputGroup>
    </div>
  );
}
