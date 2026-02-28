import BadgeView, { badgeSections } from "~/views/primitives/badge";

export default function Badge() {
  return <BadgeView />;
}


export const handle = {
  sections: badgeSections,
};