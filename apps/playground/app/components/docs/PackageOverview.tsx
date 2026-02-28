import { Heading, Text, Badge } from "@ninna-ui/primitives";
import { Link } from "react-router";
import { Package, Terminal, ArrowRight, Copy, Check  } from "lucide-react";
import { useState } from "react";

interface ComponentInfo {
  name: string;
  description: string;
  href: string;
}

interface PackageOverviewProps {
  packageName: string;
  title: string;
  description: string;
  components: ComponentInfo[];
  peerDeps?: string[];
  features?: string[];
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-2 inline-flex items-center text-base-content/70 hover:text-base-content/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-sm"
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
    </button>
  );
}

export function PackageOverview({
  packageName,
  title,
  description,
  components,
  features,
}: PackageOverviewProps) {
  const installCmd = `pnpm add ${packageName}`;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Heading as="h1" size="4xl" weight="bold">
            {title}
          </Heading>
          <Badge variant="soft" color="primary" size="sm">
            {components.length} components
          </Badge>
        </div>
        <Text size="lg" className="text-base-content/70 max-w-3xl">
          {description}
        </Text>

        {/* Install command */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 bg-base-200 border border-base-300 rounded-md px-3 py-1.5">
            <Terminal className="size-3.5 text-base-content/70" aria-hidden="true" />
            <code className="text-xs font-mono text-base-content/70">{installCmd}</code>
            <CopyButton text={installCmd} />
          </div>
          <div className="flex items-center gap-2 bg-base-200 border border-base-300 rounded-md px-3 py-1.5">
            <Package className="size-3.5 text-base-content/70" aria-hidden="true" />
            <code className="text-xs font-mono text-base-content/70">{packageName}</code>
          </div>
        </div>
        <Text size="xs" className="text-base-content/70">
          Requires <code className="font-mono text-primary/70">@ninna-ui/core</code> (auto-installed) +{" "}
          <Link to="/getting-started/installation" className="text-primary hover:underline">CSS setup</Link>.
        </Text>
      </div>

      {/* Features */}
      {features && features.length > 0 && (
        <div>
          <Heading as="h2" size="xl" weight="semibold" className="mb-4">
            Features
          </Heading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-base-content/70">
                <span className="text-success mt-0.5">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Component Grid */}
      <div>
        <Heading as="h2" size="xl" weight="semibold" className="mb-4">
          Components
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {components.map((comp) => (
            <Link
              key={comp.name}
              to={comp.href}
              className="group flex flex-col gap-1.5 rounded-lg border border-base-200 bg-base-100 p-4 hover:border-primary/30 hover:bg-primary/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex items-center justify-between">
                <Text size="sm" weight="semibold" className="text-base-content group-hover:text-primary transition-colors">
                  {comp.name}
                </Text>
                <ArrowRight className="size-3.5 text-base-content/30 group-hover:text-primary/60 transition-colors" aria-hidden="true" />
              </div>
              <Text size="xs" className="text-base-content/70 line-clamp-2">
                {comp.description}
              </Text>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Usage */}
      <div>
        <Heading as="h2" size="xl" weight="semibold" className="mb-4">
          Quick Start
        </Heading>
        <div className="bg-base-200 border border-base-300 rounded-lg p-4">
          <code className="text-sm font-mono text-base-content/80">
            import {"{"} {components.slice(0, 3).map(c => c.name).join(", ")} {"}"} from &quot;{packageName}&quot;;
          </code>
        </div>
      </div>
    </div>
  );
}
