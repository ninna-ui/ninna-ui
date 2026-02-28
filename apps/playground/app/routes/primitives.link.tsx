import LinkView, { linkSections } from "~/views/primitives/link";

export default function LinkRoute() {
  return <LinkView />;
}


export const handle = {
  sections: linkSections,
};