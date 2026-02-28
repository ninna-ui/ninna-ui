import { Breadcrumbs } from "@ninna-ui/navigation";

export default function BreadcrumbsSeparators() {
  const separators = ["›", "→", "|"];

  return (
    <div className="flex flex-col gap-4">
      {separators.map((sep) => (
        <Breadcrumbs key={sep} separator={sep}>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Category</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#" current>Page</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs>
      ))}
    </div>
  );
}
