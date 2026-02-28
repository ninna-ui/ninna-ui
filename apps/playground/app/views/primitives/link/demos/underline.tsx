import { Link } from "@ninna-ui/primitives";

export default function Underline() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="space-y-2">
        <p className="text-sm text-base-content/70">Always underlined</p>
        <Link href="#" underline="always">Always Underline</Link>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-base-content/70">Underline on hover</p>
        <Link href="#" underline="hover">Hover Underline</Link>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-base-content/70">No underline</p>
        <Link href="#" underline="none">No Underline</Link>
      </div>
    </div>
  );
}
