import { Pagination } from "@ninna-ui/navigation";

export default function BasicPagination() {
  return (
    <Pagination>
      <Pagination.Content>
        <Pagination.Item><Pagination.Previous /></Pagination.Item>
        <Pagination.Item><Pagination.Link isActive>1</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link>2</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Link>3</Pagination.Link></Pagination.Item>
        <Pagination.Item><Pagination.Next /></Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}
