import HeadingView, { headingSections } from "~/views/primitives/heading";

export default function HeadingRoute() {
  return <HeadingView />;
}


export const handle = {
  sections: headingSections,
};