import BoxView, { boxSections } from "~/views/layout/box";

export default function BoxRoute() {
  return <BoxView />;
}


export const handle = {
  sections: boxSections,
};