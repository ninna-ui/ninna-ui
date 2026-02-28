import { cn } from "@ninna-ui/utils";
import { Heading, Text } from "@ninna-ui/primitives";
import type { ReactNode } from "react";

interface ComponentSectionProps {
  id: string;
  title: string;
  description?: string;
  level?: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

export function ComponentSection({
  id,
  title,
  description,
  level = 2,
  children,
  className,
}: ComponentSectionProps) {
  const sizeMap = { 2: '2xl', 3: 'xl', 4: 'lg' } as const;
  const headingAs = `h${level}` as 'h2' | 'h3' | 'h4';

  return (
    <section id={id} className={cn("mb-12", className)}>
      <Heading
        as={headingAs}
        size={sizeMap[level]}
        weight="semibold"
        className="scroll-mt-18 mb-3"
      >
        {title}
      </Heading>
      
      {description && (
        <Text className="text-base-content/70 mb-6">
          {description}
        </Text>
      )}
      
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
