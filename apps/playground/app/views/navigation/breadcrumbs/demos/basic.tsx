import { Breadcrumbs } from "@ninna-ui/navigation";

export default function BasicBreadcrumbs() {
  return (
    <Breadcrumbs>
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
  );
}
