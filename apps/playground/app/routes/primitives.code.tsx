import CodeView, { codeSections } from "~/views/primitives/code";

export default function CodeRoute() {
  return <CodeView />;
}


export const handle = {
  sections: codeSections,
};