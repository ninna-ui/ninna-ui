import { Moon, Sun } from "lucide-react";
import { useTheme } from "~/context/ThemeContext";
import { Button } from "@ninna-ui/primitives";

export function ThemeToggle() {
  const { setTheme, isDarkMode } = useTheme();

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className="text-base-content/70"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
    >
      {isDarkMode ? (
        <Sun className="size-5" aria-hidden="true" suppressHydrationWarning />
      ) : (
        <Moon className="size-5" aria-hidden="true" suppressHydrationWarning />
      )}
    </Button>
  );
}
