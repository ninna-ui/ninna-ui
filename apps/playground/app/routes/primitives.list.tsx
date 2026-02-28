import ListView, { listSections } from "~/views/primitives/list";

export default function ListRoute() {
  return <ListView />;
}


export const handle = {
  sections: listSections,
};