import MarkView, { markSections } from "~/views/primitives/mark";

export default function MarkRoute() {
  return <MarkView />;
}


export const handle = {
  sections: markSections,
};