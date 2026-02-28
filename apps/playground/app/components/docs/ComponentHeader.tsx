import { Badge, Code, Heading, Text, Link } from "@ninna-ui/primitives";
import { useState } from "react";
import { Copy, Check, Package, Terminal } from "lucide-react";
// import { Link } from "react-router";
import type { ComponentMeta } from "./types";

const CATEGORY_PACKAGES: Record<string, string> = {
  Primitives: "@ninna-ui/primitives",
  Feedback: "@ninna-ui/feedback",
  Forms: "@ninna-ui/forms",
  Layout: "@ninna-ui/layout",
  Overlays: "@ninna-ui/overlays",
  Navigation: "@ninna-ui/navigation",
  "Data Display": "@ninna-ui/data-display",
  "Code Block": "@ninna-ui/code-block",
};


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

interface ComponentHeaderProps {
  meta: ComponentMeta;
}

export function ComponentHeader({ meta }: ComponentHeaderProps) {
  const packageName = meta.source?.package || CATEGORY_PACKAGES[meta.category];
  const importName = meta.source?.importName || meta.title.replace(/\s+/g, "");
  const isComponentPage = !!packageName && meta.category !== "Getting Started";
  const installCmd = packageName ? `pnpm add ${packageName}` : "";

  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center gap-3">
        <Heading as="h1" size="4xl" weight="bold">
          {meta.title}
        </Heading>
        {meta.status && meta.status !== "stable" && (
          <Badge
            variant="soft"
            color={meta.status === "beta" ? "warning" : "info"}
            size="sm"
          >
            {meta.status}
          </Badge>
        )}
      </div>
      
      <Text size="lg" className="text-base-content/70 max-w-3xl">
        {meta.description}
      </Text>

      {isComponentPage && packageName && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 bg-base-200 border border-base-300 rounded-md px-3 py-1.5">
              <Terminal className="size-3.5 text-base-content/70" aria-hidden="true" />
              <Code className="bg-transparent">{installCmd}</Code>
              <CopyButton text={installCmd} />
            </div>
            <div className="flex items-center gap-2 bg-base-200 border border-base-300 rounded-md px-3 py-1.5">
              <Package className="size-3.5 text-base-content/70" aria-hidden="true" />
              <Code className="bg-transparent">
                import {"{"} {importName} {"}"} from &quot;{packageName}&quot;
              </Code>
              <CopyButton text={`import { ${importName} } from "${packageName}";`} />
            </div>
          </div>
          <Text size="sm" className="text-base-content/70">
            Requires <Code color="primary" size="xs">@ninna-ui/core</Code> (auto-installed) + <Link href="/getting-started/installation" color="primary">CSS setup</Link>.
          </Text>
        </div>
      )}

      {!isComponentPage && packageName && (
        <div className="flex flex-wrap items-center gap-3">
          <code className="text-xs font-mono bg-base-200 border border-base-300 rounded-md px-3 py-1.5 text-base-content/70">
            import {"{"} {importName} {"}"} from &quot;{packageName}&quot;
          </code>
        </div>
      )}
    </div>
  );
}
