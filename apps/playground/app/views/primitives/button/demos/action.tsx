import { Button } from "@ninna-ui/primitives";

export default function Action() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* onClick example */}
      <Button
        color="primary"
        onClick={() => {
          alert("Button clicked!");
        }}
      >
        Click Me
      </Button>

      {/* With loading state */}
      <Button
        color="info"
        loading
        onClick={() => {
          alert("Won't trigger while loading");
        }}
      >
        Won&apos;t trigger while loading
      </Button>
    </div>
  );
}
