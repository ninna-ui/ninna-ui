import WrapView, { wrapSections } from "~/views/layout/wrap";

export default function WrapRoute() {
  return <WrapView />;
}


export const handle = {
  sections: wrapSections,
};