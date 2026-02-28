import DividerView, { dividerSections } from "~/views/primitives/divider";

export default function Divider() {
  return <DividerView />;
}


export const handle = {
  sections: dividerSections,
};