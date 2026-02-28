import { TableOfContents } from "~/components/docs";
import type { ComponentSectionType } from "~/components/docs/types";

const EMPTY_SECTIONS: ComponentSectionType[] = [];

interface RightSidebarProps {
  sections?: ComponentSectionType[];
}

export function RightSidebar({ sections = EMPTY_SECTIONS }: RightSidebarProps) {
  if (sections.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block xl:w-56 xl:shrink-0" aria-label="Table of contents">
      <div className="sticky top-[4.5rem] py-6">
        <TableOfContents
          items={sections.map((section) => ({
            id: section.id,
            title: section.title,
            level: section.level || 2,
          }))}
        />
      </div>
    </aside>
  );
}
