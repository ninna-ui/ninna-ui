import SeparatorView, { separatorSections } from "~/views/layout/separator";

export default function SeparatorRoute() {
  return <SeparatorView />;
}


export const handle = {
  sections: separatorSections,
};