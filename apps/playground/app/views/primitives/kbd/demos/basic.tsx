import { Kbd } from "@ninna-ui/primitives";

export default function Basic() {
  return (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  );
}
