import ColorsView, { colorsSections } from "~/views/getting-started/colors";

export default function Colors() {
  return <ColorsView />;
}


export const handle = {
  sections: colorsSections,
};