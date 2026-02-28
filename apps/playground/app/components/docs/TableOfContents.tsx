import { useEffect, useState } from "react";
import { cn } from "@ninna-ui/utils";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={cn("space-y-1", className)}>
      <p className="text-[11px] font-semibold text-base-content/70 uppercase tracking-[0.08em] mb-3 select-none">
        On this page
      </p>
      <ul className="space-y-0.5 border-l border-base-200">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <button
              onClick={() => handleClick(item.id)}
              className={cn(
                "text-[13px] text-left w-full pl-3 py-1 -ml-px border-l-2 transition-colors hover:text-base-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                activeId === item.id
                  ? "text-primary border-primary font-medium"
                  : "text-base-content/70 border-transparent"
              )}
              aria-current={activeId === item.id ? "location" : undefined}
              aria-label={`Navigate to ${item.title} section`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
