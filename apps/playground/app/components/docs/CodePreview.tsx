import { useState, useEffect, useRef } from "react";
import { Button, Heading } from "@ninna-ui/primitives";
import { Code } from "lucide-react";
import { cn } from "@ninna-ui/utils";
import { CodeBlock } from "@ninna-ui/code-block";
import { loadSource } from "~/utils/sourceRegistry";

interface CodePreviewProps {
  title?: string;
  description?: string;
  component: React.ReactNode;
  code?: string;
  filePath?: string;
  full?: boolean;
  className?: string;
  previewClassName?: string;
  /** Whether to show diagonal lines background pattern (default: true) */
  showPattern?: boolean;
}

export function CodePreview({
  title,
  description,
  component,
  code,
  filePath,
  full = false,
  className,
  previewClassName,
  showPattern = true,
}: CodePreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);
  const [codeHeight, setCodeHeight] = useState("0px");
  const [sourceCode, setSourceCode] = useState<string | null>(code ?? null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (showCode && !sourceCode && filePath) {
      setIsLoading(true);
      loadSource(filePath)
        .then((src) => {
          if (src !== null) {
            setSourceCode(src);
          } else {
            setLoadError(`Source not found: ${filePath}`);
          }
        })
        .catch(() => setLoadError("Failed to load source"))
        .finally(() => setIsLoading(false));
    }
  }, [showCode, sourceCode, filePath]);

  useEffect(() => {
    if (codeRef.current) {
      setCodeHeight(showCode ? `${codeRef.current.scrollHeight}px` : "0px");
    }
  }, [showCode, sourceCode]);

  const canShowCode = Boolean(code || filePath);

  return (
    <div
      className={cn(
        "relative bg-base-50 border border-base-200 rounded-lg overflow-hidden",
        full && "col-span-full",
        className
      )}
    >
      {(title || canShowCode) && (
        <div className="flex items-center justify-between border-b border-base-200 px-4 py-3">
          <div className="flex-1">
            {title && (
              <Heading as="h3" size="sm" weight="semibold">
                {title}
              </Heading>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {canShowCode && (
              <Button
                variant="ghost"
                size="xs"
                onClick={() => setShowCode(!showCode)}
                className="text-base-content/70"
                aria-label={showCode ? "Hide code example" : "Show code example"}
                aria-expanded={showCode}
              >
                <Code className="size-4 mr-1.5" aria-hidden="true" />
                {showCode ? "Hide" : "Code"}
              </Button>
            )}
          </div>
        </div>
      )}

      <div className="p-6 relative">
        {/* Dynamic diagonal lines - can be disabled for components with striped patterns */}
        {showPattern && (
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              zIndex: 0,
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 14px,
                var(--color-base-300) 14px,
                var(--color-base-300) 14.5px
              )`,
            }}
          />
        )}
        {description && (
          <p className="text-sm text-base-content/70 mb-4 relative z-10">
            {description}
          </p>
        )}
        
        <div
          className={cn(
            "w-full relative z-10 flex flex-col items-stretch gap-4 min-h-[80px]",
            previewClassName
          )}
        >
          {component}
        </div>
      </div>

      {showCode && (
        <div
          ref={codeRef}
          style={{ maxHeight: codeHeight }}
          className="overflow-hidden transition-all duration-300 ease-in-out border-t border-base-200"
        >
          <div style={{ maxWidth: '0', minWidth: '100%' }}>
            {isLoading ? (
              <div className="p-4 text-base-content/70 text-sm">Loading code...</div>
            ) : sourceCode ? (
              <CodeBlock code={sourceCode} showLineNumbers />
            ) : loadError ? (
              <div className="p-4 text-danger text-sm">Error: {loadError}</div>
            ) : (
              <div className="p-4 text-base-content/70 text-sm">No source code available</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
