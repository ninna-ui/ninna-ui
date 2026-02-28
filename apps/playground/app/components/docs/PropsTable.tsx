import { cn } from "@ninna-ui/utils";
import { Heading, Text } from "@ninna-ui/primitives";
import type { PropDefinition } from "./types";

interface PropsTableProps {
  title?: string;
  description?: string;
  data: PropDefinition[];
  className?: string;
}

export function PropsTable({
  title = "Props",
  description,
  data,
  className,
}: PropsTableProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <Heading as="h3" size="xl" weight="semibold" className="mb-2">
              {title}
            </Heading>
          )}
          {description && (
            <Text size="sm" className="text-base-content/70">
              {description}
            </Text>
          )}
        </div>
      )}
      
      <div className="overflow-x-auto border border-base-300 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-base-200/50 border-b border-base-300">
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-base-content/80 uppercase tracking-wider">
                Prop
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-base-content/80 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-base-content/80 uppercase tracking-wider">
                Default
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-base-content/80 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-base-100 divide-y divide-base-300">
            {data.map((prop) => (
              <tr
                key={prop.name}
                className="hover:bg-base-200/50 transition-colors"
              >
                <th scope="row" className="px-4 py-3 text-sm text-left font-normal">
                  <code className="font-mono font-medium text-primary">
                    {prop.name}
                    {prop.required && (
                      <span className="text-danger ml-1">*</span>
                    )}
                  </code>
                </th>
                <td className="px-4 py-3 text-sm">
                  <code className="font-mono text-xs bg-base-200 px-2 py-1 rounded text-base-content/70">
                    {prop.type}
                  </code>
                </td>
                <td className="px-4 py-3 text-sm text-base-content/70">
                  {prop.defaultValue ? (
                    <code className="font-mono text-xs bg-base-200 px-2 py-1 rounded">
                      {prop.defaultValue}
                    </code>
                  ) : (
                    <span className="text-base-content/70">-</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-base-content/70">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
