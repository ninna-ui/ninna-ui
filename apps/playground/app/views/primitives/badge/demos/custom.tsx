import { Badge } from "@ninna-ui/primitives";

export default function Custom() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-lg font-semibold mb-4">Custom Badges</h3>
        <p className="text-sm text-base-content/70 mb-4">
          Custom colored badges with dark mode support
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-secondary/10 text-secondary">
            Purple Badge
          </Badge>
          <Badge className="bg-warning/10 text-warning">
            Orange Badge
          </Badge>
          <Badge className="bg-success/10 text-success">
            Teal Badge
          </Badge>
          <Badge className="bg-linear-to-r from-purple-500 to-pink-500 text-white">
            Gradient Badge
          </Badge>
        </div>
      </section>
    </div>
  );
}
