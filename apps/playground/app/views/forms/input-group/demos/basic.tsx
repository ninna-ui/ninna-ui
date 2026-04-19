import { useState } from "react";
import { Input, InputGroup } from "@ninna-ui/forms";
import { Search, Mail, Eye, EyeOff } from "lucide-react";

export default function Basic() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-64">
      <InputGroup startElement={<Search className="w-4 h-4" />}>
        <Input placeholder="Search..." />
      </InputGroup>
      <InputGroup startElement={<Mail className="w-4 h-4" />}>
        <Input placeholder="Email" type="email" />
      </InputGroup>
      {/*
        The eye icon lives inside a real <button>, so InputGroup's smart
        pointer-events default routes clicks to it automatically — no
        `endElementPointerEvents="auto"` prop required.
      */}
      <InputGroup
        endElement={
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((v) => !v)}
            className="flex items-center justify-center text-base-content/70 hover:text-base-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        }
      >
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />
      </InputGroup>
    </div>
  );
}
