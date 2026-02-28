import CenterView, { centerSections } from "~/views/layout/center";

export default function CenterRoute() {
  return <CenterView />;
}


export const handle = {
  sections: centerSections,
};