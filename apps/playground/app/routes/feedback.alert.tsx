import AlertView, { alertSections } from "~/views/feedback/alert";

export default function AlertRoute() {
  return <AlertView />;
}


export const handle = {
  sections: alertSections,
};