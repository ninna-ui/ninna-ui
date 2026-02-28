import GridView, { gridSections } from "~/views/layout/grid";

export default function GridRoute() {
  return <GridView />;
}


export const handle = {
  sections: gridSections,
};