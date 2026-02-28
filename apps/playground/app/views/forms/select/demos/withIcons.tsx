
import { useState } from 'react';
import { Select, SelectItem } from '@ninna-ui/forms';

const FlagUS = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <rect fill="#B22234" width="24" height="24" rx="2" />
    <rect fill="#fff" y="2" width="24" height="2" />
    <rect fill="#fff" y="6" width="24" height="2" />
    <rect fill="#fff" y="10" width="24" height="2" />
    <rect fill="#3C3B6E" width="10" height="12" rx="1" />
  </svg>
);

const FlagUK = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <rect fill="#012169" width="24" height="24" rx="2" />
    <path fill="#fff" d="M0 0l24 24M24 0L0 24" strokeWidth="4" stroke="#fff" />
    <path fill="#C8102E" d="M0 0l24 24M24 0L0 24" strokeWidth="2" stroke="#C8102E" />
  </svg>
);

const FlagDE = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <rect fill="#000" width="24" height="8" rx="2" />
    <rect fill="#DD0000" y="8" width="24" height="8" />
    <rect fill="#FFCE00" y="16" width="24" height="8" rx="2" />
  </svg>
);

const countries = [
  { value: 'us', label: 'United States', icon: FlagUS },
  { value: 'uk', label: 'United Kingdom', icon: FlagUK },
  { value: 'de', label: 'Germany', icon: FlagDE },
];

export default function WithIcons() {
  const [value, setValue] = useState<string>();

  return (
    <div className="space-y-6 max-w-sm">
      <p className="text-sm text-base-content/70">
        Composition recipe: Use custom content inside SelectItem for icons.
      </p>

      <Select
        placeholder="Select a country"
        value={value}
        onValueChange={setValue}
      >
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            <span className="flex items-center gap-2">
              <country.icon />
              <span>{country.label}</span>
            </span>
          </SelectItem>
        ))}
      </Select>

      {value && (
        <div className="flex items-center gap-2 text-sm text-base-content/70">
          Selected: 
          {(() => {
            const country = countries.find(c => c.value === value);
            if (!country) return null;
            const Icon = country.icon;
            return (
              <span className="flex items-center gap-1 font-medium">
                <Icon />
                {country.label}
              </span>
            );
          })()}
        </div>
      )}
    </div>
  );
}
