import SimpleGridView, { simpleGridSections } from "~/views/layout/simple-grid";

export default function SimpleGridRoute() {
  return <SimpleGridView />;
}


export const handle = {
  sections: simpleGridSections,
};