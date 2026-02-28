import { Pagination } from "@ninna-ui/navigation";

export default function PaginationSizes() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-6">
      {sizes.map((size) => (
        <div key={size}>
          <p className="text-xs font-semibold uppercase tracking-wide text-base-content/70 mb-2">
            Size: {size}
          </p>
          <Pagination size={size}>
            <Pagination.Content>
              <Pagination.Item><Pagination.Previous size={size} /></Pagination.Item>
              <Pagination.Item><Pagination.Link size={size}>1</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link size={size} isActive>2</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Link size={size}>3</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
              <Pagination.Item><Pagination.Link size={size}>10</Pagination.Link></Pagination.Item>
              <Pagination.Item><Pagination.Next size={size} /></Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </div>
      ))}
    </div>
  );
}
