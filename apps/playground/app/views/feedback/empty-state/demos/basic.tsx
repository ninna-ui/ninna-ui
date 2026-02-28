import { EmptyState } from "@ninna-ui/feedback";

export default function Basic() {
  return (
    <EmptyState
      title="No results found"
      description="Try adjusting your search or filters to find what you're looking for."
    />
  );
}
