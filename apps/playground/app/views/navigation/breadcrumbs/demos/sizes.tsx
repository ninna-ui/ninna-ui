import { Breadcrumbs } from "@ninna-ui/navigation";

export default function BreadcrumbsSizes() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <div key={size}>
          <p className="text-xs font-semibold uppercase tracking-wide text-base-content/70 mb-2">
            Size: {size}
          </p>
          <Breadcrumbs size={size}>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#">Library</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href="#" current>Data</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs>
        </div>
      ))}
    </div>
  );
}
