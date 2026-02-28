import ProgressView, { progressSections } from "~/views/feedback/progress";

export default function ProgressRoute() {
  return <ProgressView />;
}


export const handle = {
  sections: progressSections,
};