import LoadingView, { loadingSections } from "~/views/feedback/loading";

export default function LoadingRoute() {
  return <LoadingView />;
}


export const handle = {
  sections: loadingSections,
};