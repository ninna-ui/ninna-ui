import SkeletonView, { skeletonSections } from "~/views/feedback/skeleton";

export default function SkeletonRoute() {
  return <SkeletonView />;
}


export const handle = {
  sections: skeletonSections,
};