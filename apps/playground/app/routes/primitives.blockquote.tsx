import BlockquoteView, { blockquoteSections } from "~/views/primitives/blockquote";

export default function BlockquoteRoute() {
  return <BlockquoteView />;
}


export const handle = {
  sections: blockquoteSections,
};