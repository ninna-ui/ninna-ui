import { Link } from "@ninna-ui/primitives";

export default function External() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-base-content/70">External link with icon</p>
        <Link href="https://github.com" external>
          GitHub
        </Link>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-base-content/70">External link without icon</p>
        <Link href="https://github.com" external showExternalIcon={false}>
          GitHub (no icon)
        </Link>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-base-content/70">Auto-detected external (target=&quot;_blank&quot;)</p>
        <Link href="https://example.com" target="_blank">
          Example.com
        </Link>
      </div>
    </div>
  );
}
