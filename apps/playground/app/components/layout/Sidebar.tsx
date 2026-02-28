import { Link, useLocation } from "react-router";
import { cn } from "@ninna-ui/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

interface NavCategory {
  name: string;
  items: NavItem[];
}

const navigation: NavCategory[] = [
  {
    name: "Getting Started",
    items: [
      { name: "Introduction", href: "/" },
      { name: "Installation", href: "/getting-started/installation" },
      { name: "Theming", href: "/getting-started/theming" },
      { name: "Styling", href: "/getting-started/styling" },
      { name: "Colors", href: "/getting-started/colors" },
    ],
  },
  {
    name: "Primitives",
    items: [
      { name: "Overview", href: "/primitives" },
      { name: "Avatar", href: "/primitives/avatar" },
      { name: "Badge", href: "/primitives/badge" },
      { name: "Blockquote", href: "/primitives/blockquote" },
      { name: "Button", href: "/primitives/button" },
      { name: "Code", href: "/primitives/code" },
      { name: "Divider", href: "/primitives/divider" },
      { name: "Heading", href: "/primitives/heading" },
      { name: "IconButton", href: "/primitives/icon-button" },
      { name: "Kbd", href: "/primitives/kbd" },
      { name: "Link", href: "/primitives/link" },
      { name: "LinkOverlay", href: "/primitives/link-overlay" },
      { name: "List", href: "/primitives/list" },
      { name: "Mark", href: "/primitives/mark" },
      { name: "Text", href: "/primitives/text" },
    ],
  },
  {
    name: "Feedback",
    items: [
      { name: "Overview", href: "/feedback" },
      { name: "Alert", href: "/feedback/alert" },
      { name: "Circular Progress", href: "/feedback/circular-progress" },
      { name: "EmptyState", href: "/feedback/empty-state" },
      { name: "Loading", href: "/feedback/loading" },
      { name: "Progress", href: "/feedback/progress" },
      { name: "Skeleton", href: "/feedback/skeleton" },
      { name: "Status", href: "/feedback/status" },
      { name: "Toast", href: "/feedback/toast" },
    ],
  },
  {
    name: "Forms",
    items: [
      { name: "Overview", href: "/forms" },
      { name: "Input", href: "/forms/input" },
      { name: "InputGroup", href: "/forms/input-group" },
      { name: "Textarea", href: "/forms/textarea" },
      { name: "Checkbox", href: "/forms/checkbox" },
      { name: "CheckboxGroup", href: "/forms/checkbox-group" },
      { name: "Switch", href: "/forms/switch" },
      { name: "RadioGroup", href: "/forms/radio-group" },
      { name: "Select", href: "/forms/select" },
      { name: "Slider", href: "/forms/slider" },
      { name: "NumberInput", href: "/forms/number-input" },
      { name: "PinInput", href: "/forms/pin-input" },
      { name: "FileUpload", href: "/forms/file-upload" },
      { name: "Field", href: "/forms/field" },
      { name: "FormControl", href: "/forms/form-control" },
      { name: "FormGroup", href: "/forms/form-group" },
    ],
  },
  {
    name: "Layout",
    items: [
      { name: "Overview", href: "/layout" },
      { name: "Box", href: "/layout/box" },
      { name: "Container", href: "/layout/container" },
      { name: "Stack", href: "/layout/stack" },
      { name: "Flex", href: "/layout/flex" },
      { name: "Grid", href: "/layout/grid" },
      { name: "Center", href: "/layout/center" },
      { name: "Wrap", href: "/layout/wrap" },
      { name: "SimpleGrid", href: "/layout/simple-grid" },
      { name: "AspectRatio", href: "/layout/aspect-ratio" },
      { name: "Separator", href: "/layout/separator" },
    ],
  },
  {
    name: "Overlays",
    items: [
      { name: "Overview", href: "/overlays" },
      { name: "Modal", href: "/overlays/modal" },
      { name: "Drawer", href: "/overlays/drawer" },
      { name: "Popover", href: "/overlays/popover" },
      { name: "Tooltip", href: "/overlays/tooltip" },
      { name: "DropdownMenu", href: "/overlays/dropdown-menu" },
    ],
  },
  {
    name: "Navigation",
    items: [
      { name: "Overview", href: "/navigation" },
      { name: "Tabs", href: "/navigation/tabs" },
      { name: "Accordion", href: "/navigation/accordion" },
      { name: "Breadcrumbs", href: "/navigation/breadcrumbs" },
      { name: "Pagination", href: "/navigation/pagination" },
      { name: "Stepper", href: "/navigation/stepper" },
    ],
  },
  {
    name: "Data Display",
    items: [
      { name: "Overview", href: "/data-display" },
      { name: "Card", href: "/data-display/card" },
      { name: "Stat", href: "/data-display/stat" },
      { name: "Table", href: "/data-display/table" },
      { name: "DataTable", href: "/data-display/data-table" },
      { name: "Timeline", href: "/data-display/timeline" },
      { name: "Tree", href: "/data-display/tree" },
      { name: "Calendar", href: "/data-display/calendar" },
    ],
  },
  {
    name: "Code Block",
    items: [
      { name: "Overview", href: "/code-block" },
      { name: "CodeBlock", href: "/code-block/code-block" },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    () => navigation.map((cat) => cat.name)
  );

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <nav className="flex flex-1 flex-col" aria-label="Main navigation">
      <ul className="flex flex-1 flex-col gap-y-7">
        <li>
          <div className="space-y-4">
            {navigation.map((category) => {
              const isExpanded = expandedCategories.includes(category.name);
              
              return (
                <div key={category.name}>
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="flex w-full items-center justify-between px-2 py-2 text-[11px] font-bold text-base-content/80 uppercase tracking-widest hover:text-base-content transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-sm"
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${category.name} section`}
                  >
                    {category.name}
                    {isExpanded ? (
                      <ChevronDown className="size-4" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="size-4" aria-hidden="true" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <ul className="mt-1 space-y-1">
                      {category.items.map((item) => {
                        const isActive = location.pathname === item.href;
                        
                        return (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className={cn(
                                "group flex items-center justify-between gap-x-3 rounded-md px-2 py-1.5 text-[13px] transition-colors",
                                isActive
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                              )}
                              aria-current={isActive ? "page" : undefined}
                            >
                              <span>{item.name}</span>
                              {item.badge && (
                                <span className="rounded-full bg-primary/8 px-1.5 py-0.5 text-[10px] font-medium text-primary/70">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </li>
      </ul>
    </nav>
  );
}
