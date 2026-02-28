import CodeBlockView, { codeBlockSections } from "~/views/code-block";

export default function CodeBlockPage() {
  return <CodeBlockView />;
}


export const handle = {
  sections: codeBlockSections,
};