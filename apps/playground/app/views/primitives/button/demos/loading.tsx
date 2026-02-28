import { Button } from "@ninna-ui/primitives";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      {/* Loading across variants */}
      <div className="flex flex-wrap gap-2">
        <Button loading color="primary">Solid</Button>
        <Button loading variant="soft" color="primary">Soft</Button>
        <Button loading variant="outline" color="primary">Outline</Button>
        <Button loading variant="ghost" color="primary">Ghost</Button>
      </div>

      {/* Loading sizes */}
      <div className="flex flex-wrap items-center gap-2">
        <Button loading size="sm" color="primary">Small</Button>
        <Button loading size="md" color="primary">Medium</Button>
        <Button loading size="lg" color="primary">Large</Button>
      </div>
    </div>
  );
} 
