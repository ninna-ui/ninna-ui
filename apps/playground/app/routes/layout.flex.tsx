import FlexView, { flexSections } from "~/views/layout/flex";

export default function FlexRoute() {
  return <FlexView />;
}


export const handle = {
  sections: flexSections,
};