import EmptyStateView, { emptyStateSections } from "~/views/feedback/empty-state";

export default function EmptyStateRoute() {
  return <EmptyStateView />;
}


export const handle = {
  sections: emptyStateSections,
};