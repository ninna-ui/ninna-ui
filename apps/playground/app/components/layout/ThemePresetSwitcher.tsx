import { useRef, useState, useCallback, useEffect, type ComponentType } from "react";
import {
  ChevronDown,
  Palette,
  Waves,
  Sunset,
  TreePine,
  Circle,
  Check,
  type LucideProps,
} from "lucide-react";
import { useTheme, THEME_PRESETS, type ThemePreset } from "~/context/ThemeContext";

const PRESET_ICONS: Record<ThemePreset, ComponentType<LucideProps>> = {
  default: Palette,
  ocean: Waves,
  sunset: Sunset,
  forest: TreePine,
  minimal: Circle,
};

export function ThemePresetSwitcher() {
  const { preset, setPreset } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback((returnFocus = true) => {
    setIsOpen(false);
    setFocusedIndex(-1);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  const open = useCallback(() => {
    const currentIndex = THEME_PRESETS.findIndex((p) => p.value === preset);
    setIsOpen(true);
    setFocusedIndex(currentIndex);
    // Focus the current option after render
    requestAnimationFrame(() => {
      optionRefs.current[currentIndex]?.focus();
    });
  }, [preset]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-preset-switcher]")) close(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, close]);

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      open();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIsOpen(true);
      const lastIndex = THEME_PRESETS.length - 1;
      setFocusedIndex(lastIndex);
      requestAnimationFrame(() => optionRefs.current[lastIndex]?.focus());
    }
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = THEME_PRESETS.length - 1;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = index < last ? index + 1 : 0;
      setFocusedIndex(next);
      optionRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = index > 0 ? index - 1 : last;
      setFocusedIndex(prev);
      optionRefs.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setFocusedIndex(0);
      optionRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setFocusedIndex(last);
      optionRefs.current[last]?.focus();
    } else if (e.key === "Escape" || e.key === "Tab") {
      e.preventDefault();
      close();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const option = THEME_PRESETS[index];
      if (option) handlePresetChange(option.value);
    }
  };

  const handlePresetChange = (newPreset: ThemePreset) => {
    setPreset(newPreset);
    close();
  };

  const listboxId = "theme-preset-listbox";

  const currentPreset = THEME_PRESETS.find((p) => p.value === preset) ?? THEME_PRESETS[0];
  const CurrentIcon = PRESET_ICONS[preset];

  return (
    <div className="relative" data-preset-switcher>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (isOpen ? close() : open())}
        onKeyDown={handleTriggerKeyDown}
        className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={`Change theme preset. Current: ${currentPreset?.label ?? preset}`}
        suppressHydrationWarning
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={isOpen ? listboxId : undefined}
      >
        <CurrentIcon className="size-4" aria-hidden="true" suppressHydrationWarning />
        <span className="hidden sm:inline" aria-hidden="true" suppressHydrationWarning>{currentPreset?.label}</span>
        <ChevronDown
          className={`size-3.5 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          ref={listboxRef}
          id={listboxId}
          role="listbox"
          tabIndex={0}
          aria-label="Theme presets"
          aria-activedescendant={focusedIndex >= 0 ? `preset-option-${THEME_PRESETS[focusedIndex]?.value}` : undefined}
          className="absolute right-0 top-full mt-1 w-44 rounded-lg border border-base-200 bg-base-100 py-1 shadow-lg ring-1 ring-base-content/5"
        >
          {THEME_PRESETS.map((presetOption, index) => {
            const Icon = PRESET_ICONS[presetOption.value];
            const isSelected = preset === presetOption.value;
            const isFocused = focusedIndex === index;

            return (
              <button
                key={presetOption.value}
                ref={(el) => { optionRefs.current[index] = el; }}
                id={`preset-option-${presetOption.value}`}
                type="button"
                role="option"
                aria-selected={isSelected}
                tabIndex={isFocused ? 0 : -1}
                onClick={() => handlePresetChange(presetOption.value)}
                onKeyDown={(e) => handleOptionKeyDown(e, index)}
                className={`flex w-full items-center gap-2.5 px-3 py-1.5 text-left text-sm transition-colors focus-visible:outline-none ${
                  isSelected
                    ? "text-base-content font-medium"
                    : "text-base-content/70"
                } ${
                  isFocused ? "bg-base-200" : "hover:bg-base-200"
                }`}
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="flex-1">{presetOption.label}</span>
                {isSelected && (
                  <Check className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
