import { useState } from "react";
import { Input } from "@ninna-ui/forms";
import { Popover } from "@ninna-ui/overlays";

const components = ["Button", "Checkbox", "Input", "Popover", "Tooltip"];

export default function FocusControl() {
  const [query, setQuery] = useState("");
  const results = components.filter((component) =>
    component.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Popover open={query.length > 0}>
      <Popover.Trigger asChild>
        <Input
          type="search"
          aria-label="Search components"
          placeholder="Search components..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-72"
        />
      </Popover.Trigger>
      <Popover.Content
        align="start"
        className="w-72"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <div className="flex flex-col gap-1">
          {results.length > 0 ? (
            results.map((component) => (
              <button
                key={component}
                type="button"
                className="rounded-md px-2 py-1.5 text-left text-sm hover:bg-base-200"
              >
                {component}
              </button>
            ))
          ) : (
            <p className="px-2 py-1.5 text-sm text-base-content/70">No results found.</p>
          )}
        </div>
      </Popover.Content>
    </Popover>
  );
}
