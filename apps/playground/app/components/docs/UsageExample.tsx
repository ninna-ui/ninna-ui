import { Text } from "@ninna-ui/primitives";
import { cn } from "@ninna-ui/utils";
import { CodeBlock } from "@ninna-ui/code-block";

interface UsageExampleProps {
  code: string;
  title?: string;
  description?: string;
  className?: string;
}

export function UsageExample({
  code,
  title,
  description,
  className,
}: UsageExampleProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {(title || description) && (
        <div>
          {title && (
            <Text size="sm" weight="semibold" className="mb-1">
              {title}
            </Text>
          )}
          {description && (
            <Text size="sm" className="text-base-content/70">
              {description}
            </Text>
          )}
        </div>
      )}

      <CodeBlock code={code} />
    </div>
  );
}
