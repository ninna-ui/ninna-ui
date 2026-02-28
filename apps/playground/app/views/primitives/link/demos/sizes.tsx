import { Link } from "@ninna-ui/primitives";

export default function SizesDemo() {
  return (
    <div className="flex flex-wrap items-baseline gap-6">
      <Link href="#" size="xs">Extra Small</Link>
      <Link href="#" size="sm">Small</Link>
      <Link href="#" size="md">Medium</Link>
      <Link href="#" size="lg">Large</Link>
      <Link href="#" size="xl">Extra Large</Link>
    </div>
  );
}
