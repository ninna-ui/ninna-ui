import { Button } from "@ninna-ui/primitives";

export default function Size() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="xs" color="primary">
          XS
        </Button>
        <Button size="sm" color="primary">
          SM
        </Button>
        <Button size="md" color="primary">
          MD
        </Button>
        <Button size="lg" color="primary">
          LG
        </Button>
        <Button size="xl" color="primary">
          XL
        </Button>
      </div>
    </div>
  );
}
