import { Pagination } from "@ninna-ui/navigation";

export default function PaginationWithEllipsis() {
  return (
    <Pagination>
      <Pagination.Content>
        <Pagination.Item><Pagination.Previous /></Pagination.Item>
        <Pagination.Item><Pagination.Link>1</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
        <Pagination.Item><Pagination.Link>4</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link isActive>5</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link>6</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
        <Pagination.Item><Pagination.Link>20</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Next /></Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}
