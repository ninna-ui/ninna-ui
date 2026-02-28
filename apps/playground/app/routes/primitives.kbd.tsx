import KbdView, { kbdSections } from "~/views/primitives/kbd";

export default function KbdRoute() {
  return <KbdView />;
}


export const handle = {
  sections: kbdSections,
};