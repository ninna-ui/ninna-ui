import StatusView, { statusSections } from "~/views/feedback/status";

export default function StatusRoute() {
  return <StatusView />;
}


export const handle = {
  sections: statusSections,
};